import Agenda from '@/core/domain/entities/agenda'
import { Agendas } from '@/core/domain/entities/agendas'
import Repository from '@/core/domain/repositories/iagenda.repository'

export class AgendaGateway {
  constructor (private repository: Repository) { }

  create (input: Agenda): Promise<Agenda> {
    return this.repository.create(input)
  }

  update (input: Agenda): Promise<Agenda> {
    return this.repository.save(input)
  }

  findByDoctor (doctorId: number): Promise<Agenda | undefined> {
    return this.repository.findByDoctor(doctorId)
  }

  findById (agendaId: number): Promise<Agenda | undefined> {
    return this.repository.findById(agendaId)
  }

  creates(agendas: Agendas): Promise<void> {
    return this.repository.creates(agendas)
  }
}
