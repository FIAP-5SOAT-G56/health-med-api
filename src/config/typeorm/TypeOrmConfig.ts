import { TypeOrmModuleOptions } from '@nestjs/typeorm'

import { join } from 'path'

import { Environment as envs } from '@/infra/web/nestjs/environment'

export default {
  type: 'mysql',
  synchronize: false,
  migrationsRun: false,
  host: envs.DB_HOSTNAME,
  port: envs.DB_PORT,
  username: envs.DB_USERNAME,
  password: envs.DB_PASSWORD,
  database: envs.DB_DATABASE,
  extra: {
    connectionLimit: envs.DB_CONNECTION_LIMIT,
  },
  logging: false,
  entities: [
    join(__dirname, '..', '..', 'infra', 'persistence', 'typeorm', 'entities', '*{.ts,.js}'),
  ],
  bigNumberStrings: false,
  timezone: '+00:00',
} as TypeOrmModuleOptions
