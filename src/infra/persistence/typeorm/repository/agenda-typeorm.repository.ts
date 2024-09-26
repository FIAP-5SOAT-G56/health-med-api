import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import Agenda from '@/core/domain/entities/agenda'
import IAgendaRepository from '@/core/domain/repositories/iagenda.repository'
import { Agenda as Entity } from '@/infra/persistence/typeorm/entities/agenda'

@Injectable()
export default class AgendaTypeormRepository implements IAgendaRepository {
  constructor (
    @InjectRepository(Entity) private readonly repository: Repository<Entity>
  ) {}

  async create (input: Agenda): Promise<Agenda> {
    const data = await this.repository.save({
      doctorId: input.doctorId,
      patient_id: input.pacienteId,
      liberada: input.liberado,
      startAt: new Date(input.startAt),
      endAt: new Date(input.endAt)
    })

    return Agenda.create(data.doctorId, data.liberada, data.startAt.toDateString(), data.endAt.toDateString(), data.id, data.patient_id)
  }

  async save (input: Agenda): Promise<Agenda> {
    const data = await this.repository.save({
      id: input.id,
      doctorId: input.doctorId,
      patientId: input.pacienteId,
      liberada: input.liberado,
      startAt: new Date(input.startAt),
      endAt: new Date(input.endAt)
    })

    return Agenda.create(data.doctorId, data.liberada, data.startAt.toDateString(), data.endAt.toDateString(), data.id, data.patientId)
  }

  async findByDoctor (doctorId: number): Promise<Agenda | undefined> {
    const agenda = await this.repository.findOneBy({
      doctorId
    })

    return agenda ? Agenda.create(agenda.doctorId, agenda.liberada, agenda.startAt.toDateString(), agenda.endAt.toDateString(), agenda.id, agenda.patientId) : undefined
  }

  async findById (agendaId: number): Promise<Agenda | undefined> {
    const agenda = await this.repository.findOneBy({
      id: agendaId
    })

    return agenda ? Agenda.create(agenda.doctorId, agenda.liberada, agenda.startAt.toDateString(), agenda.endAt.toDateString(), agenda.id, agenda.patientId) : undefined
  }
}
