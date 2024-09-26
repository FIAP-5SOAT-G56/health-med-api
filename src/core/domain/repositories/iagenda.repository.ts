import Agenda from '@/core/domain/entities/agenda'

export default interface IAgendaRepository {
  create(input: Agenda): Promise<Agenda>;
  save(input: Agenda): Promise<Agenda>;
  findByDoctor(doctorId: number): Promise<Agenda | undefined>;
  findById(agendaId: number): Promise<Agenda | undefined>;
}

export const IAgendaRepository = Symbol('IAgendaRepository')