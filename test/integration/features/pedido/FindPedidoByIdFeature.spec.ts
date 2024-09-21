
import { Pedido } from '@/infra/persistence/typeorm/entities/pedido'
import ItemPedidoResponse from '@/infra/web/nestjs/pedidos/dto/item-pedido.response'

import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Find Pedido By Id Feature', () => {
  describe('GET /v1/pedidos/:id', () => {
    let setup: ITestSetup
    let pedido: Pedido

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
    })

    beforeEach(async () => {
      pedido = await setup.factory.pedido()
    })

    describe('when everything is valid', () => {
      it('returns the Pedido with given ID', async () => {
        // Arrange
        const expectedResponse = {
          id: pedido.id,
          consumidorId: pedido.consumidorId,
          total: pedido.total,
          itens: pedido.itens
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((item) => ({
              id: item.id,
              preco: item.preco,
              produto: {
                id: item.produto.id,
                nome: item.produto.nome,
                categoria: item.produto.categoria,
              },
            })),
          status: pedido.status,
          createdAt: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z/),
          updatedAt: expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z/),
        }

        // Act
        const { status, body } = await setup.server
          .request(`/v1/pedidos/${pedido.id}`)
          .get()

        // Assert
        expect(status).toBe(200)

        const itens = (body.data.itens as ItemPedidoResponse[]).sort((a, b) => a.id!.localeCompare(b.id!))
        expect({ ...body.data, itens }).toMatchObject(expectedResponse)
      })
    })
  })
})
