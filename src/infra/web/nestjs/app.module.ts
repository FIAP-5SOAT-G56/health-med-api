import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager'
import { Global, Inject, Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Cache } from 'cache-manager'
import * as redisStore from 'cache-manager-redis-store'

import RedisConfig from '@/config/RedisConfig'
import TypeOrmConfig from '@/config/typeorm/TypeOrmConfig'
import AppCache from '@/core/helpers/AppCache'
import { Transaction } from '@/infra/persistence/typeorm/service/transaction'
import { AgendaModule } from '@/infra/web/nestjs/agenda/agenda.module'
import AppController from '@/infra/web/nestjs/app.controller'
import { DoctorsModule } from '@/infra/web/nestjs/doctors/doctors.module'
import { PatientsModule } from '@/infra/web/nestjs/patient/patient.module'
import { UsersModule } from '@/infra/web/nestjs/users/users.module'

import { AuthGuard } from './decorators/auth.guard'
import { RolesGuard } from './decorators/roles.guard'
import { TransactionInterceptor } from './interceptor/transaction-interceptor'

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
    ...appModules
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppCache,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    TransactionInterceptor,
    Transaction
  ],
  exports: [
    AppCache,
    Transaction
  ]
})
export default class AppModule {
  constructor (@Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }

  async onApplicationShutdown () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (this.cacheManager as any).store.getClient().quit()
  }
}
