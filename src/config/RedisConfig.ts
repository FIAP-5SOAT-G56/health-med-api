import { RedisClientOptions } from 'redis'

import { Environment as envs } from '@/infra/web/nestjs/environment'

interface RedisConfig extends RedisClientOptions {
  enabled: boolean;
}

export default {
  host: envs.REDIS_HOSTNAME,
  port: envs.REDIS_PORT,
  db: envs.REDIS_DB,
  enabled: envs.REDIS_ENABLED,
} as RedisConfig
