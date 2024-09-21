import { fakerPT_BR as faker } from '@faker-js/faker'

import { Produto } from '@/infra/persistence/typeorm/entities/produto'
import ProdutoResponse from '@/infra/web/nestjs/doctors/dto/produto.response'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'
import { Factory } from '@/test/integration/setup/utils/FactoryUtils'

describe('List Produto Feature', () => {
  describe('GET /v1/produtos', () => {
    let setup: ITestSetup
    let produtoFactory: Factory<Produto>
    let produtos: Produto[]

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
      produtoFactory = setup.factory.produtoFactory()
    })

    beforeEach(async () => {
      produtos = await produtoFactory.createMany(faker.number.int({ min: 1, max: 10 }))
    })

    describe('when everything is valid', () => {
      it('returns a list with all Produtos', async () => {
        // Arrange
        const expectedResponse = produtos
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
          .request('/v1/produtos')
          .get()

        // Assert
        expect(status).toBe(200)

        const response = (body.data as ProdutoResponse[]).sort((a, b) => a.id.localeCompare(b.id))
        expect(response).toMatchObject(expectedResponse)
      })
    })
  })
})
