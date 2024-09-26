import Agenda from '@/core/domain/entities/agenda'
import { Agendas } from '../entities/agendas';

export default interface IAgendaRepository {
  creates(agendas: Agendas): Promise<void>;
  create(input: Agenda): Promise<Agenda>;
  save(input: Agenda): Promise<Agenda>;
  findByDoctor(doctorId: number): Promise<Agenda | undefined>;
  findById(agendaId: number): Promise<Agenda | undefined>;
}

export const IAgendaRepository = Symbol('IAgendaRepository')
