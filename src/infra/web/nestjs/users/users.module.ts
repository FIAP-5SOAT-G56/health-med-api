import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { IMedicoRepository } from '@/core/domain/repositories/imedico.repository'
import { IPacienteRepository } from '@/core/domain/repositories/ipaciente.repository'
import { IUserRepository } from '@/core/domain/repositories/iusuario.repository'
import { Doctor } from '@/infra/persistence/typeorm/entities/doctor'
import { Patient } from '@/infra/persistence/typeorm/entities/patient'
import { User } from '@/infra/persistence/typeorm/entities/user'
import DoctorTypeormRepository from '@/infra/persistence/typeorm/repository/doctor-typeorm.repository'
import PatientTypeormRepository from '@/infra/persistence/typeorm/repository/patient-typeorm.repository'
import UserTypeormRepository from '@/infra/persistence/typeorm/repository/user-typeorm.repository'
import { JwtNestService } from '@/infra/service/jwt.nest.service'
import { UsersController } from '@/infra/web/nestjs/users/users.controller'

import { Environment } from '../environment'

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Doctor, Patient]),
    JwtModule.register({
      global: true,
      secret: Environment.SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    { provide: IUserRepository, useClass: UserTypeormRepository },
    { provide: IMedicoRepository, useClass: DoctorTypeormRepository },
    { provide: IPacienteRepository, useClass: PatientTypeormRepository },
    JwtNestService,
  ],
  controllers: [
    UsersController
  ],
  exports: [
    IUserRepository,
  ]
})
export class UsersModule {}
