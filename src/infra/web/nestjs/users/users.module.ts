import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { IUserRepository } from '@/core/domain/repositories/iusuario.repository'
import { User } from '@/infra/persistence/typeorm/entities/user'
import ConsumidorTypeormRepository from '@/infra/persistence/typeorm/repository/user-typeorm.repository'
import {UsersController} from '@/infra/web/nestjs/users/users.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    { provide: IUserRepository, useClass: ConsumidorTypeormRepository },
  ],
  controllers: [
    UsersController
  ],
  exports: [
    IUserRepository,
  ]
})
export class UsersModule {}
