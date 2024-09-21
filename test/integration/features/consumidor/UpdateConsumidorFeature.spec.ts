import { fakerPT_BR as faker } from '@faker-js/faker'

import { Consumidor } from '@/infra/persistence/typeorm/entities/user'
import UpdateConsumidorRequest from '@/infra/web/nestjs/consumidores/dto/update-consumidor.request'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Update Consumidor Feature', () => {
  describe('PUT /v1/consumidores/:id', () => {
    let setup: ITestSetup
    let consumidor: Consumidor

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
    })

    beforeEach(async () => {
      consumidor = await setup.factory.consumidor()
    })

    describe('when everything is valid', () => {
      it('updates the Consumidor with new data', async () => {
        // Arrange
        const requestBody: UpdateConsumidorRequest = {
          id: consumidor.id,
          nome: faker.person.firstName(),
          email: faker.internet.email(),
          cpf: '42553451040',
        }

        const expectedResponse = { ...requestBody }

        // Act
        const { status, body } = await setup.server
          .request(`/v1/consumidores/${consumidor.id}`)
          .put(requestBody)

        // Assert
        expect(status).toBe(200)
        expect(body.data).toMatchObject(expectedResponse)
      })
    })
  })
})
