/* eslint-disable import/first */
/* eslint-disable import-helpers/order-imports */
import dotenv from 'dotenv'
dotenv.config()

import { join } from 'path'
import { DataSource, DataSourceOptions } from 'typeorm'

import TypeOrmConfig from '@/config/typeorm/TypeOrmConfig'
import { Environment as envs } from '@/infra/web/nestjs/environment'

export default new DataSource({
  ...({
    ...TypeOrmConfig,
    database: envs.DB_DATABASE + '_test'
  } as DataSourceOptions),
  migrationsTableName: 'Migration',
  migrations: [
    join(__dirname, '..', '..', '..', '..', 'src', 'infra', 'persistence', 'typeorm', 'migrations', '*{.ts,.js}')
  ],
})
