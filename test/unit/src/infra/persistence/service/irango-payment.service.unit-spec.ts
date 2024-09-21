import axios from 'axios'

import IRangoPaymentService from '@/infra/persistence/service/irango-payment.service'

describe('IRangoPaymentService Class Tests', () => {
  let service:IRangoPaymentService
  let mockPost:jest.Mock<any>

  beforeEach(() => {
    jest.mock('axios')
    mockPost = jest.fn()
    axios.post = mockPost
    service = new IRangoPaymentService()
  })

  it('constructor class test', () => {
    expect(service).toBeInstanceOf(IRangoPaymentService)
  })
})
