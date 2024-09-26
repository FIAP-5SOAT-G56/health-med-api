import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { IUserRepository } from '@/core/domain/repositories/iusuario.repository'
import { User } from '@/infra/persistence/typeorm/entities/user'
import UserTypeormRepository from '@/infra/persistence/typeorm/repository/user-typeorm.repository'
import {UsersController} from '@/infra/web/nestjs/users/users.controller'
import { IMedicoRepository } from '@/core/domain/repositories/imedico.repository'
import { Doctor } from '@/infra/persistence/typeorm/entities/doctor'
import DoctorTypeormRepository from '@/infra/persistence/typeorm/repository/doctor-typeorm.repository'
import { JwtNestService } from '@/infra/service/jwt.nest.service'
import { JwtModule } from '@nestjs/jwt'
import { Environment } from '../environment'
import { IPacienteRepository } from '@/core/domain/repositories/ipaciente.repository'
import PatientTypeormRepository from '@/infra/persistence/typeorm/repository/patient-typeorm.repository'
import { Patient } from '@/infra/persistence/typeorm/entities/patient'

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Doctor,Patient]),
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
