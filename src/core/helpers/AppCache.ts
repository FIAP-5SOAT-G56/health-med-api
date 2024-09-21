import { CACHE_MANAGER } from '@nestjs/cache-manager'
import {
  Inject,
  Injectable
} from '@nestjs/common'

import { Cache, Milliseconds } from 'cache-manager'

import { Environment as envs } from '@/infra/web/nestjs/environment'

@Injectable()
export default class AppCache {
  constructor (
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async set (key: string, value: unknown, ttl?: Milliseconds): Promise<void> {
    if (!envs.REDIS_ENABLED || !envs.CACHE_ENABLED) {
      return
    }
    return this.cacheManager.set(key, value, ttl)
  }

  async get<T> (key: string): Promise<T | undefined> {
    if (!envs.REDIS_ENABLED || !envs.CACHE_ENABLED) {
      return
    }
    return this.cacheManager.get(key)
  }

  async del (key: string): Promise<void> {
    if (!envs.REDIS_ENABLED || !envs.CACHE_ENABLED) {
      return
    }
    return this.cacheManager.del(key)
  }

  async reset (): Promise<void> {
    if (!envs.REDIS_ENABLED || !envs.CACHE_ENABLED) {
      return
    }
    return this.cacheManager.reset()
  }
}
