import {
  Injectable,
  OnModuleDestroy
} from '@nestjs/common'

import { Redis } from 'ioredis'

import { Environment as envs } from '@/infra/web/nestjs/environment'

@Injectable()
export default class Mutex implements OnModuleDestroy {
  private memory: Record<string, number | undefined> = {}
  private redis: Redis

  constructor (
  ) {
    this.redis = new Redis(
      envs.REDIS_PORT,
      envs.REDIS_HOSTNAME,
      {
        db: envs.REDIS_DB
      }
    )

    this.redis.on('error', e => {
      throw new Error(`Redis connection failed: ${e}`)
    })
  }

  onModuleDestroy (): void {
    this.redis.disconnect()
  }

  async acquire (key: string, ttlInSeconds: number = 60): Promise<boolean> {
    if (!envs.REDIS_ENABLED || !envs.CACHE_ENABLED) {
      if (this.memory[key]) {
        return false
      }
      this.memory[key] = 1
      return true
    }

    const result = await this.redis.set(key, '1', 'EX', ttlInSeconds, 'NX')

    return result === 'OK'
  }

  async release (key: string): Promise<void> {
    if (!envs.REDIS_ENABLED || !envs.CACHE_ENABLED) {
      this.memory[key] = undefined
      return
    }

    await this.redis.del(key)
  }
}
