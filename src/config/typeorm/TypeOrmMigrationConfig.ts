/* eslint-disable import/first */
/* eslint-disable import-helpers/order-imports */
import dotenv from 'dotenv'
dotenv.config()

import { join } from 'path'
import { DataSource, DataSourceOptions } from 'typeorm'

import TypeOrmConfig from '@/config/typeorm/TypeOrmConfig'

export default new DataSource({
  ...(TypeOrmConfig as DataSourceOptions),
  migrationsTableName: 'Migration',
  migrations: [
    join(__dirname, '..', '..', 'infra', 'persistence', 'typeorm', 'migrations', '*{.ts,.js}')
  ],
})
