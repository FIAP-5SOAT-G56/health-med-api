import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import User from '@/core/domain/entities/usuario'
import IUserRepository from '@/core/domain/repositories/iusuario.repository'
import Cpf from '@/core/domain/value-object/Cpf'
import Email from '@/core/domain/value-object/email'
import { User as Entity } from '@/infra/persistence/typeorm/entities/user'

@Injectable()
export default class UserTypeormRepository implements IUserRepository {
  constructor (
    @InjectRepository(Entity) private readonly repository: Repository<Entity>
  ) {}

  async create (input: User): Promise<User> {
    const user = await this.repository.save({
      cpf: input.cpf.toString(),
      email: input.email.toString(),
      name: input.name.toString(),
      password: input.password.value,
      salt: input.password.salt,
    })
    return User.buildExistingUsuario(user.id, user.name, user.email, user.cpf, user.password, user.salt)
  }

  async findByEmail (email: Email): Promise<User | undefined> {
    const user = await this.repository.findOneBy({
      email: email.toString()
    })

    return user ? User.buildExistingUsuario(user.id, user.name, user.email, user.cpf, user.password, user.salt) : undefined
  }

  async findById (id: number): Promise<User | undefined> {
    const user = await this.repository.findOneBy({
      id,
    })

    return user ? User.buildExistingUsuario(user.id, user.name, user.email, user.cpf, user.password, user.salt) : undefined
  }

  async findByCpf (cpf: Cpf): Promise<User | undefined> {
    const user = await this.repository.findOneBy({
      cpf: cpf.toString()
    })

    return user ? User.buildExistingUsuario(user.id, user.name, user.email, user.cpf, user.password, user.salt) : undefined
  }

  async save (input: User): Promise<void> {
    await this.repository.update(
      { id: input.id }, {
        cpf: input.cpf.toString(),
        email: input.email.toString(),
        name: input.name.toString(),
        password: input.password.value,
        salt: input.password.salt,
      })
  }
}
