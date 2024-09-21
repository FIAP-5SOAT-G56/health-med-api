import { fakerPT_BR as faker } from '@faker-js/faker'

import { ProdutoCategoriaEnum } from '@/core/domain/enums/produto-categoria.enum'
import { Produto } from '@/infra/persistence/typeorm/entities/produto'
import ProdutoResponse from '@/infra/web/nestjs/doctors/dto/produto.response'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'
import { Factory } from '@/test/integration/setup/utils/FactoryUtils'

describe('Search Produtos Feature', () => {
  describe('GET /v1/produtos/search?categoria=', () => {
    let setup: ITestSetup
    let produtoFactory: Factory<Produto>
    let produtos: Produto[]
    let categoria: ProdutoCategoriaEnum

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
      produtoFactory = setup.factory.produtoFactory()
    })

    beforeEach(async () => {
      produtos = await produtoFactory.createMany(faker.number.int({ min: 1, max: 20 }))
      categoria = faker.helpers.enumValue(ProdutoCategoriaEnum)
    })

    describe('when everything is valid', () => {
      it('returns a list with all Produtos with given categoria', async () => {
        // Arrange
        const expectedResponse = produtos
          .filter(produto => produto.categoria === categoria)
          .map((produto) => ({
            id: produto.id,
            nome: produto.nome,
            imagemUrl: produto.imagemUrl,
            descricao: produto.descricao,
            preco: produto.preco,
            categoria: produto.categoria,
            ingredientes: produto.ingredientes.sort((a, b) => a.id.localeCompare(b.id)),
          }))
          .sort((a, b) => a.id.localeCompare(b.id))

        // Act
        const { status, body } = await setup.server
          .request(`/v1/produtos/search?categoria=${categoria}`)
          .get()

        // Assert
        expect(status).toBe(200)

        const response = (body.data as ProdutoResponse[]).sort((a, b) => a.id.localeCompare(b.id))
        expect(response).toMatchObject(expectedResponse)
      })
    })
  })
})
