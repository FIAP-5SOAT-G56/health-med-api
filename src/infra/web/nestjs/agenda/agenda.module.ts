
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { IAgendaRepository } from '@/core/domain/repositories/iagenda.repository'
import { IMedicoRepository } from '@/core/domain/repositories/imedico.repository'
import { Agenda } from '@/infra/persistence/typeorm/entities/agenda'
import { Doctor } from '@/infra/persistence/typeorm/entities/doctor'
import AgendaTypeormRepository from '@/infra/persistence/typeorm/repository/agenda-typeorm.repository'
import DoctorTypeormRepository from '@/infra/persistence/typeorm/repository/doctor-typeorm.repository'
import { AgendController } from '@/infra/web/nestjs/agenda/agenda.controller'
import ScheduleSNSService from '@/infra/persistence/service/schedule-sns.service'
import { IScheduleServiceSymbol } from '@/core/domain/service/schedule-service'
import { User } from '@/infra/persistence/typeorm/entities/user'
import { Patient } from '@/infra/persistence/typeorm/entities/patient'
import PatientTypeormRepository from '@/infra/persistence/typeorm/repository/patient-typeorm.repository'
import { IPacienteRepository } from '@/core/domain/repositories/ipaciente.repository'
import UserTypeormRepository from '@/infra/persistence/typeorm/repository/user-typeorm.repository'
import { IUserRepository } from '@/core/domain/repositories/iusuario.repository'

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
  ],
  controllers: [
    AgendController
  ],
  exports: [
    IAgendaRepository
  ]
})
export class AgendaModule {}
