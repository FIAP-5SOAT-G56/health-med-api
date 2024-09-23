
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { IMedicoRepository } from '@/core/domain/repositories/imedico.repository'
import { Doctor } from '@/infra/persistence/typeorm/entities/doctor'
import DoctorTypeormRepository from '@/infra/persistence/typeorm/repository/doctor-typeorm.repository'
import {DoctorsController } from '@/infra/web/nestjs/doctors/doctors.controller'
import { IUserRepository } from '@/core/domain/repositories/iusuario.repository'
import UserTypeormRepository from '@/infra/persistence/typeorm/repository/user-typeorm.repository'
import { User } from '@/infra/persistence/typeorm/entities/user'


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Doctor,
      User,
        ]),
  ],
  providers: [
    { provide: IMedicoRepository, useClass: DoctorTypeormRepository },
    { provide: IUserRepository, useClass: UserTypeormRepository },

  ],
  controllers: [
    DoctorsController
  ],
  exports: [
    IMedicoRepository
  ]
})
export class DoctorsModule {}
