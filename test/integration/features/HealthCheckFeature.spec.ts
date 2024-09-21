import IntegrationTestSetup, { ITestSetup } from '@/test/integration/setup/IntegrationTestSetup'

describe('Health Check Feature', () => {
  describe('GET /health-check', () => {
    let setup: ITestSetup

    beforeAll(async () => {
      setup = await IntegrationTestSetup.getInstance()
    })

    it('returns 200 with status ok', async () => {
      const { status, body } = await setup.server
        .request('/health-check')
        .get()

      expect(status).toBe(200)
      expect(body.data).toEqual({ status: 'ok' })
    })
  })
})
