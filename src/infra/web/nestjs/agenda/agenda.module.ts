
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { IMedicoRepository } from '@/core/domain/repositories/imedico.repository'
import { Doctor } from '@/infra/persistence/typeorm/entities/doctor'
import DoctorTypeormRepository from '@/infra/persistence/typeorm/repository/doctor-typeorm.repository'
import { IAgendaRepository } from '@/core/domain/repositories/iagenda.repository'
import { Agenda } from '@/infra/persistence/typeorm/entities/agenda'
import AgendaTypeormRepository from '@/infra/persistence/typeorm/repository/agenda-typeorm.repository'
import { AgendController } from '@/infra/web/nestjs/agenda/agenda.controller'


@Module({
  imports: [
    TypeOrmModule.forFeature([
        Doctor,
        Agenda
    ]),
  ],
  providers: [
    { provide: IMedicoRepository, useClass: DoctorTypeormRepository },
    { provide: IAgendaRepository, useClass: AgendaTypeormRepository }
  ],
  controllers: [
    AgendController
  ],
  exports: [
    IAgendaRepository
  ]
})
export class AgendaModule {}
