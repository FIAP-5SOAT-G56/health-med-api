
import { Consumidor } from '@/infra/persistence/typeorm/entities/user'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Find Consumidor By Id Feature', () => {
  describe('GET /v1/consumidores/:id', () => {
    let setup: ITestSetup
    let consumidor: Consumidor

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
    })

    beforeEach(async () => {
      consumidor = await setup.factory.consumidor()
    })

    describe('when everything is valid', () => {
      it('returns the Consumidor with given ID', async () => {
        // Arrange
        const expectedResponse = {
          id: consumidor.id,
          nome: consumidor.nome,
          cpf: consumidor.cpf,
          email: consumidor.email,
        }

        // Act
        const { status, body } = await setup.server
          .request(`/v1/consumidores/${consumidor.id}`)
          .get()

        // Assert
        expect(status).toBe(200)
        expect(body.data).toMatchObject(expectedResponse)
      })
    })
  })
})
