import { fakerPT_BR as faker } from '@faker-js/faker'

import { PedidoStatusEnum } from '@/core/domain/enums/pedido-status.enum'
import { Pedido } from '@/infra/persistence/typeorm/entities/pedido'
import UpdatePedidoRequest from '@/infra/web/nestjs/pedidos/dto/update-pedido.request'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Update Pedido Feature', () => {
  describe('PUT /v1/pedidos/:id', () => {
    let setup: ITestSetup
    let currentStatus: PedidoStatusEnum
    let newStatus: PedidoStatusEnum
    let pedido: Pedido

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
    })

    beforeEach(async () => {
      currentStatus = faker.helpers.arrayElement(Object.values(PedidoStatusEnum))
      newStatus = faker.helpers.arrayElement(Object.values(PedidoStatusEnum).filter(status => status !== currentStatus))
      pedido = await setup.factory.pedido({ status: currentStatus })
    })

    describe('when everything is valid', () => {
      it('updates the Pedido with new status', async () => {
        const requestBody: UpdatePedidoRequest = {
          status: newStatus
        }

        const expectedResponse = {
          id: pedido.id,
          status: newStatus,
        }

        // Act
        const { status, body } = await setup.server
          .request(`/v1/pedidos/${pedido.id}`)
          .put(requestBody)

        // Assert
        expect(status).toBe(200)
        expect(body.data).toMatchObject(expectedResponse)
      })
    })
  })
})
