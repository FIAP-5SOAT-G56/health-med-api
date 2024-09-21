/* import * as leakedHandles from 'leaked-handles'
leakedHandles.set({
  debugSockets: true // pretty print tcp thrown exceptions.
}) */

import IntegrationTestSetup from '@/test/integration/setup/IntegrationTestSetup'

jest.setTimeout(20000) // increases the jest timeout

beforeAll(async () => {
  const setup = await IntegrationTestSetup.getInstance()
  await setup.db.truncateAll()
  await setup.app.init()
})

afterAll(async () => {
  const setup = await IntegrationTestSetup.getInstance()
  await setup.db.truncateAll()
  await setup.module.close()
  await setup.app.close()
})

afterEach(async () => {
  const setup = await IntegrationTestSetup.getInstance()
  await setup.db.truncateAll()
})
