import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'

import Agenda from '@/core/domain/entities/agenda'
import IAgendaRepository from '@/core/domain/repositories/iagenda.repository'
import { Agenda as Entity } from '@/infra/persistence/typeorm/entities/agenda'
import { Agendas } from '@/core/domain/entities/agendas'

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

    return Agenda.create(data.doctorId, data.liberada, data.startAt, data.endAt, data.id, data.patient_id)
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

    return Agenda.create(data.doctorId, data.liberada, data.startAt, data.endAt, data.id, data.patientId)
  }

  async findByDoctor (doctorId: number): Promise<Agenda[] | undefined> {
    const agendas = await this.repository.findBy({
      doctorId
    })

    return agendas.map(agenda => Agenda.create(agenda.doctorId, agenda.liberada, agenda.startAt, agenda.endAt, agenda.id, agenda.patientId));
  }

  async findById (agendaId: number): Promise<Agenda | undefined> {
    const agenda = await this.repository.findOneBy({
      id: agendaId
    })

    return agenda ? Agenda.create(agenda.doctorId, agenda.liberada, agenda.startAt, agenda.endAt, agenda.id, agenda.patientId) : undefined
  }

  async creates(agendas: Agendas): Promise<void> {
   await this.repository.save(agendas.get())
  }

  async agendaConflict(doctorId: number, startAt: Date, endAt: Date): Promise<boolean> {
    
    let startDateAt = new Date(startAt);
    let endDateAt = new Date(endAt);

    const conflictAgenda = await this.repository
      .createQueryBuilder('agenda')
      .where('agenda.doctorId = :doctorId', { doctorId })
      .andWhere('agenda.startAt < :endDateAt AND agenda.endAt > :startDateAt', { startDateAt, endDateAt })
      .getMany();

    return conflictAgenda.length > 0;
  }

  async agendaUpdateConflict(agendaId: number, doctorId: number, startAt: Date, endAt: Date): Promise<boolean> {

    let startDateAt = new Date(startAt);
    let endDateAt = new Date(endAt);

    const conflictAgenda = await this.repository
      .createQueryBuilder('agenda')
      .where('agenda.doctorId = :doctorId', { doctorId })
      .andWhere('agenda.id != :agendaId', {agendaId})
      .andWhere('agenda.startAt < :endDateAt AND agenda.endAt > :startDateAt', { startDateAt, endDateAt })
      .getMany();

    return conflictAgenda.length > 0;
  }
}
