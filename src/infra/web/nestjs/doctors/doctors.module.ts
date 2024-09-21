
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { IMedicoRepository } from '@/core/domain/repositories/imedico.repository'
import { Doctor } from '@/infra/persistence/typeorm/entities/doctor'
import DoctorTypeormRepository from '@/infra/persistence/typeorm/repository/doctor-typeorm.repository'
import {DoctorsController } from '@/infra/web/nestjs/doctors/doctors.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Doctor
        ]),
  ],
  providers: [
    { provide: IMedicoRepository, useClass: DoctorTypeormRepository },
  ],
  controllers: [
    DoctorsController
  ],
  exports: [
    IMedicoRepository
  ]
})
export class DoctorsModule {}
