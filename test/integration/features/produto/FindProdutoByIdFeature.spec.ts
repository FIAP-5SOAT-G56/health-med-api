
import { Produto } from '@/infra/persistence/typeorm/entities/produto'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Find Produto By Id Feature', () => {
  describe('GET /v1/produtos/:id', () => {
    let setup: ITestSetup
    let produto: Produto

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
    })

    beforeEach(async () => {
      produto = await setup.factory.produto()
    })

    describe('when everything is valid', () => {
      it('returns the Produto with given ID', async () => {
        // Arrange
        const expectedResponse = {
          id: produto.id,
          nome: produto.nome,
          imagemUrl: produto.imagemUrl,
          descricao: produto.descricao,
          preco: produto.preco,
          categoria: produto.categoria,
          ingredientes: produto.ingredientes.sort((a, b) => a.id.localeCompare(b.id))
        }

        // Act
        const { status, body } = await setup.server
          .request(`/v1/produtos/${produto.id}`)
          .get()

        // Assert
        expect(status).toBe(200)
        expect(body.data).toMatchObject(expectedResponse)
      })
    })
  })
})
