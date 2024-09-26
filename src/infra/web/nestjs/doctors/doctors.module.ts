
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { IMedicoRepository } from '@/core/domain/repositories/imedico.repository'
import { IUserRepository } from '@/core/domain/repositories/iusuario.repository'
import { Doctor } from '@/infra/persistence/typeorm/entities/doctor'
import { User } from '@/infra/persistence/typeorm/entities/user'
import DoctorTypeormRepository from '@/infra/persistence/typeorm/repository/doctor-typeorm.repository'
import UserTypeormRepository from '@/infra/persistence/typeorm/repository/user-typeorm.repository'
import { DoctorsController } from '@/infra/web/nestjs/doctors/doctors.controller'
import { DoctorPaginateService } from './doctors.service'

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
    DoctorPaginateService,
  ],
  controllers: [
    DoctorsController
  ],
  exports: [
    IMedicoRepository
  ]
})
export class DoctorsModule {}
