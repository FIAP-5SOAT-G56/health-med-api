import Pedido from '@/core/domain/entities/pedido'
import ICookService from '@/core/domain/services/icook.service'
import { CookGateway } from '@/core/operation/gateway/cook.gateway'

describe('Test CookGateway class', () => {
  let gateway: CookGateway
  let mockedCookService: jest.Mocked<ICookService>

  beforeEach(() => {
    mockedCookService = {
      registerOrder: jest.fn()
    }

    gateway = new CookGateway(mockedCookService)
  })

  it('Testing class constructor', () => {
    expect(gateway).toBeInstanceOf(CookGateway)
  })

  it('Test registerOrder method', async () => {
    const pedido = new Pedido()

    mockedCookService.registerOrder.mockResolvedValue()

    await gateway.registerOrder(pedido)

    expect(mockedCookService.registerOrder).toHaveBeenCalledWith(pedido)
    expect(mockedCookService.registerOrder).toHaveBeenCalledTimes(1)
  })
})
