
import { Produto } from '@/infra/persistence/typeorm/entities/produto'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Delete Produto Feature', () => {
  describe('DELETE /v1/produtos/:id', () => {
    let setup: ITestSetup
    let produto: Produto

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
    })

    beforeEach(async () => {
      produto = await setup.factory.produto()
    })

    describe('when everything is valid', () => {
      it('deletes the Produto with given ID', async () => {
        // Act
        const { status, body } = await setup.server
          .request(`/v1/produtos/${produto.id}`)
          .delete()

        // Assert
        expect(status).toBe(200)
        expect(body.data).toBeDefined()
        expect(body.data.deletedAt).toBeDefined()
      })
    })
  })
})
