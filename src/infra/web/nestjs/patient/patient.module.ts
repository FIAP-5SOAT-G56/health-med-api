
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { IPacienteRepository } from '@/core/domain/repositories/ipaciente.repository'
import { Patient } from '@/infra/persistence/typeorm/entities/patient'
import PatientTypeormRepository from '@/infra/persistence/typeorm/repository/patient-typeorm.repository'
import { PatientsController } from '@/infra/web/nestjs/patient/patient.controller'
import { IUserRepository } from '@/core/domain/repositories/iusuario.repository'
import UserTypeormRepository from '@/infra/persistence/typeorm/repository/user-typeorm.repository'
import { User } from '@/infra/persistence/typeorm/entities/user'


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Patient,
      User,
        ]),
  ],
  providers: [
    { provide: IPacienteRepository, useClass: PatientTypeormRepository },
    { provide: IUserRepository, useClass: UserTypeormRepository },

  ],
  controllers: [
    PatientsController
  ],
  exports: [
    IPacienteRepository
  ]
})
export class PatientsModule {}
