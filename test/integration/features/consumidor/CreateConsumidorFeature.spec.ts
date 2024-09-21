import { fakerPT_BR as faker } from '@faker-js/faker'

import IConsumidorRepository, {
  IConsumidorRepository as IConsumidorRepositorySymbol,
} from '@/core/domain/repositories/iconsumidor.repository'
import CreateConsumidorRequest from '@/infra/web/nestjs/consumidores/dto/create-consumidor.request'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Create Consumidor Feature', () => {
  describe('POST /v1/consumidores', () => {
    let setup: ITestSetup
    let consumidorRepository: IConsumidorRepository

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
      consumidorRepository = setup.app.get<IConsumidorRepository>(IConsumidorRepositorySymbol)
    })

    describe('when everything is valid', () => {
      it('creates a new Consumidor', async () => {
        // Arrange
        const requestBody: CreateConsumidorRequest = {
          nome: faker.person.firstName(),
          email: faker.internet.email(),
          cpf: '42553451040',
        }

        const expectedResponse = {
          ...requestBody,
          id: expect.stringMatching(/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/),
        }

        // Act
        const { status, body } = await setup.server
          .request('/v1/consumidores')
          .post(requestBody)

        // Assert
        expect(status).toBe(201)
        expect(body.data).toMatchObject(expectedResponse)

        const createdConsumidor = await consumidorRepository.findById(body.data.id)
        expect(createdConsumidor).toBeDefined()
      })
    })
  })
})
