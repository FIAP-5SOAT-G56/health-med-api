import { fakerPT_BR as faker } from '@faker-js/faker'

import { ProdutoCategoriaEnum } from '@/core/domain/enums/produto-categoria.enum'
import IProdutoRepository, {
  IProdutoRepository as IProdutoRepositorySymbol,
} from '@/core/domain/repositories/iproduto.repository'
import CreateProdutoRequest from '@/infra/web/nestjs/doctors/dto/create-produto.request'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Create Produto Feature', () => {
  describe('POST /v1/produtos', () => {
    let setup: ITestSetup
    let produtoRepository: IProdutoRepository

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
      produtoRepository = setup.app.get<IProdutoRepository>(IProdutoRepositorySymbol)
    })

    describe('when everything is valid', () => {
      it('creates a new Produto', async () => {
        // Arrange
        const ingredienteFactory = () => {
          return {
            nome: faker.commerce.productName(),
            imagemUrl: faker.image.url(),
            preco: faker.number.float({ min: 0.01, max: 50, precision: 2 })
          }
        }
        const ingredientesCount = faker.number.int({ min: 1, max: 5 })

        const requestBody: CreateProdutoRequest = {
          nome: faker.person.firstName(),
          imagemUrl: faker.image.url(),
          descricao: faker.lorem.paragraph(),
          preco: faker.number.float({ min: 0.01, max: 100, precision: 2 }),
          categoria: faker.helpers.enumValue(ProdutoCategoriaEnum),
          ingredientes: Array(ingredientesCount).fill(1).map(ingredienteFactory),
        }

        const expectedResponse = {
          ...requestBody,
          id: expect.stringMatching(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/),
          ingredientes: expect.any(Array)
        }
        if (!requestBody.imagemUrl) {
          delete expectedResponse.imagemUrl
        }

        // Act
        const { status, body } = await setup.server
          .request('/v1/produtos')
          .post(requestBody)

        // Assert
        expect(status).toBe(201)
        expect(body.data).toMatchObject(expectedResponse)
        expect(body.data.ingredientes[0].id).toBeDefined()

        const createdProduto = await produtoRepository.findById(body.data.id)
        expect(createdProduto).toBeDefined()
      })
    })
  })
})
