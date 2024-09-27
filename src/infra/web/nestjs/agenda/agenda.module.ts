
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { IAgendaRepository } from '@/core/domain/repositories/iagenda.repository'
import { IMedicoRepository } from '@/core/domain/repositories/imedico.repository'
import { IPacienteRepository } from '@/core/domain/repositories/ipaciente.repository'
import { IUserRepository } from '@/core/domain/repositories/iusuario.repository'
import { IScheduleServiceSymbol } from '@/core/domain/service/schedule-service'
import Mutex from '@/core/helpers/Mutex'
import ScheduleSNSService from '@/infra/persistence/service/schedule-sns.service'
import { Agenda } from '@/infra/persistence/typeorm/entities/agenda'
import { Doctor } from '@/infra/persistence/typeorm/entities/doctor'
import { Patient } from '@/infra/persistence/typeorm/entities/patient'
import { User } from '@/infra/persistence/typeorm/entities/user'
import AgendaTypeormRepository from '@/infra/persistence/typeorm/repository/agenda-typeorm.repository'
import DoctorTypeormRepository from '@/infra/persistence/typeorm/repository/doctor-typeorm.repository'
import PatientTypeormRepository from '@/infra/persistence/typeorm/repository/patient-typeorm.repository'
import UserTypeormRepository from '@/infra/persistence/typeorm/repository/user-typeorm.repository'
import { AgendController } from '@/infra/web/nestjs/agenda/agenda.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Doctor,
      Agenda,
      User,
      Patient
    ]),
  ],
  providers: [
    { provide: IPacienteRepository, useClass: PatientTypeormRepository },
    { provide: IMedicoRepository, useClass: DoctorTypeormRepository },
    { provide: IAgendaRepository, useClass: AgendaTypeormRepository },
    { provide: IScheduleServiceSymbol, useClass: ScheduleSNSService },
    { provide: IUserRepository, useClass: UserTypeormRepository },
    Mutex,
  ],
  controllers: [
    AgendController
  ],
  exports: [
    IAgendaRepository,
  ]
})
export class AgendaModule {}
