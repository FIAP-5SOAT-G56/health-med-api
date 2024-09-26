import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager'
import { Global, Inject, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Cache } from 'cache-manager'
import * as redisStore from 'cache-manager-redis-store'

import RedisConfig from '@/config/RedisConfig'
import TypeOrmConfig from '@/config/typeorm/TypeOrmConfig'
import QueueConfig from '@/config/QueueConfig'
import AppCache from '@/core/helpers/AppCache'
import AppController from '@/infra/web/nestjs/app.controller'
import {UsersModule} from '@/infra/web/nestjs/users/users.module'
import {DoctorsModule} from '@/infra/web/nestjs/doctors/doctors.module'
import {PatientsModule} from '@/infra/web/nestjs/patient/patient.module'
import {AgendaModule} from '@/infra/web/nestjs/agenda/agenda.module'
import { SqsModule } from '@ssut/nestjs-sqs'

export const appModules = [
  UsersModule,
  DoctorsModule,
  PatientsModule,
  AgendaModule
]

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    CacheModule.register({
      store: redisStore,
      ...RedisConfig
    }),
    SqsModule.register(QueueConfig),
    ...appModules
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppCache
  ],
  exports: [
    AppCache
  ]
})
export default class AppModule {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }

  async onApplicationShutdown() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (this.cacheManager as any).store.getClient().quit()
  }
}
