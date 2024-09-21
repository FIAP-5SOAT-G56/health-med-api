import { fakerPT_BR as faker } from '@faker-js/faker'

import { ProdutoCategoriaEnum } from '@/core/domain/enums/produto-categoria.enum'
import { Produto } from '@/infra/persistence/typeorm/entities/produto'
import UpdateProdutoRequest from '@/infra/web/nestjs/doctors/dto/update-produto.request'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Update Produto Feature', () => {
  describe('PUT /v1/produtos/:id', () => {
    let setup: ITestSetup
    let produto: Produto

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
    })

    beforeEach(async () => {
      produto = await setup.factory.produto()
    })

    describe('when everything is valid', () => {
      it('updates the Produto with new data', async () => {
        // Arrange
        const ingredienteFactory = () => {
          return {
            id: faker.string.uuid(),
            nome: faker.commerce.productName(),
            imagemUrl: faker.image.url(),
            preco: faker.number.float({ min: 0.01, max: 50, precision: 2 })
          }
        }
        const ingredientesCount = faker.number.int({ min: 0, max: 5 })

        const requestBody: UpdateProdutoRequest = {
          id: produto.id,
          nome: faker.person.firstName(),
          imagemUrl: faker.image.url(),
          descricao: faker.lorem.paragraph(),
          preco: faker.number.float({ min: 0.01, max: 100, precision: 2 }),
          categoria: faker.helpers.enumValue(ProdutoCategoriaEnum),
          ingredientes: Array(ingredientesCount).fill(1).map(ingredienteFactory),
        }

        const expectedResponse = {
          ...requestBody,
          ingredientes: requestBody.ingredientes.sort((a, b) => a.id!.localeCompare(b.id!))
        }

        // Act
        const { status, body } = await setup.server
          .request(`/v1/produtos/${produto.id}`)
          .put(requestBody)

        // Assert
        expect(status).toBe(200)
        expect(body.data).toMatchObject(expectedResponse)
      })
    })
  })
})
