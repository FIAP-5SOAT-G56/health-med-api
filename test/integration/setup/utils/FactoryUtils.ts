/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable } from '@nestjs/common'

import { fakerPT_BR as faker } from '@faker-js/faker'
import { DataSource, ObjectLiteral, Repository } from 'typeorm'

import { PedidoStatusEnum } from '@/core/domain/enums/pedido-status.enum'
import { ProdutoCategoriaEnum } from '@/core/domain/enums/produto-categoria.enum'
import { Consumidor } from '@/infra/persistence/typeorm/entities/user'
import { Pedido } from '@/infra/persistence/typeorm/entities/pedido'
import { Produto } from '@/infra/persistence/typeorm/entities/produto'

type IConstructable<T> = new () => T

// Simplified version of https://www.npmjs.com/package/typeorm-factory
export class Factory<T extends ObjectLiteral> {
  private index = 0
  private sequences: Record<string, (index: number, obj: any) => any> = {} as any
  private Entity: IConstructable<T>
  private privateRepository: Repository<T> | undefined = undefined

  constructor (Entity: IConstructable<T>, private dataSource: DataSource) {
    this.Entity = Entity
  }

  private get repository () {
    this.privateRepository = this.privateRepository || this.dataSource.getRepository(this.Entity)
    return this.privateRepository
  }

  async create (data?: Partial<T>): Promise<T> {
    const obj: any = new this.Entity()

    for (const field in this.sequences) {
      obj[field] = await this.sequences[field](this.index++, obj)
    }

    return this.repository.save({ ...obj, ...(data || {}) } as T)
  }

  async createMany (count: number, data?: Partial<T>[]): Promise<T[]> {
    const objs: Promise<T>[] = []

    for (let i = 0; i < count; i++) {
      const d = data?.[i] || {}
      objs.push(this.create(d))
    }

    return Promise.all(objs)
  }

  sequence (field: keyof T, callback: (index: number, obj: any) => any) {
    this.sequences[field as string] = callback
    return this
  }
}

@Injectable()
export default class FactoryUtils {
  factories: Record<string, Factory<any>> = {}

  constructor (private dataSource: DataSource) {
    this.factories = {
      consumidor: this.consumidorFactory(),
      produto: this.produtoFactory(),
      pedido: this.pedidoFactory()
    }
  }

  consumidorFactory = (): Factory<Consumidor> => {
    return new Factory(Consumidor, this.dataSource)
      .sequence('id', () => faker.string.uuid())
      .sequence('email', () => faker.internet.email())
      .sequence('nome', () => faker.person.firstName())
      .sequence('cpf', () => faker.string.numeric(11))
  }

  produtoFactory = (): Factory<Produto> => {
    return new Factory(Produto, this.dataSource)
      .sequence('id', () => faker.string.uuid())
      .sequence('nome', () => faker.commerce.productName())
      .sequence('imagemUrl', () => faker.image.url())
      .sequence('descricao', () => faker.lorem.paragraph())
      .sequence('preco', () => faker.number.float({ min: 0.01, max: 100, precision: 2 }))
      .sequence('categoria', () => faker.helpers.enumValue(ProdutoCategoriaEnum))
      .sequence('ingredientes', async () => {
        const ingredienteFactory = () => {
          return {
            id: faker.string.uuid(),
            nome: faker.commerce.productName(),
            imagemUrl: faker.image.url(),
            preco: faker.number.float({ min: 0.01, max: 50, precision: 2 })
          }
        }
        const count = faker.number.int({ min: 0, max: 5 })
        return Array(count).fill(1).map(ingredienteFactory)
      })
  }

  pedidoFactory = (): Factory<Pedido> => {
    return new Factory(Pedido, this.dataSource)
      .sequence('id', () => faker.number.int({ min: 1, max: 999999 }))
      .sequence('status', () => faker.helpers.enumValue(PedidoStatusEnum))
      .sequence('total', () => faker.number.float({ min: 0.01, max: 100, precision: 2 }))
      .sequence('consumidor', async () => this.consumidor())
      .sequence('itens', async () => {
        const itensFactory = async () => {
          const produto = await this.produto()
          return {
            id: faker.string.uuid(),
            produto,
            produtoId: produto.id,
            preco: produto.preco,
            ingredientesRemovidos: faker.helpers.arrayElements(produto.ingredientes, faker.number.int({ min: 0, max: produto.ingredientes.length }))
          }
        }
        const count = faker.number.int({ min: 0, max: 5 })
        return Promise.all(Array(count).fill(1).map(itensFactory))
      })
  }

  consumidor = async (data?: Partial<Consumidor>) => {
    return this.factories.consumidor.create(data)
  }

  produto = async (data?: Partial<Produto>) => {
    return this.factories.produto.create(data)
  }

  pedido = async (data?: Partial<Pedido>) => {
    return this.factories.pedido.create(data)
  }
}
