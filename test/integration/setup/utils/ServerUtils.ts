/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, SuperTest, Test } from 'supertest'

export class ServerUtils {
  constructor (private readonly _server: SuperTest<Test>) {}

  public request (url: string, auth?: string) {
    const authPlugin = (req: Request) => {
      if (auth) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        req.set('Authorization', auth)
      }
    }

    return {
      get: () => this._server.get(url).use(authPlugin),
      post: (payload?: any) => {
        if (payload) {
          return this._server.post(url).use(authPlugin).send(payload)
        }
        return this._server.post(url).use(authPlugin)
      },
      put: (payload?: any) => {
        if (payload) {
          return this._server.put(url).use(authPlugin).send(payload)
        }
        return this._server.put(url).use(authPlugin)
      },
      patch: () => this._server.patch(url).use(authPlugin),
      delete: () => this._server.delete(url).use(authPlugin)
    }
  }
}
