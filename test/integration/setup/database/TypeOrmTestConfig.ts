/* eslint-disable import/first */
/* eslint-disable import-helpers/order-imports */
import dotenv from 'dotenv'
dotenv.config()

import { DataSourceOptions } from 'typeorm'

import TypeOrmConfig from '@/config/typeorm/TypeOrmConfig'
import { Environment as envs } from '@/infra/web/nestjs/environment'

export default {
  ...TypeOrmConfig,
  database: envs.DB_DATABASE + '_test',
} as DataSourceOptions
