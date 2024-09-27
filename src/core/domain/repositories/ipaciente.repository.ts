import Paciente from '@/core/domain/entities/paciente'

export default interface IPacienteRepository {
  findById(id: number): Promise<Paciente | undefined>;
  findByUserId(userId: number): Promise<Paciente | undefined>;
  create(input: Paciente): Promise<Paciente>;
}

export const IPacienteRepository = Symbol('IPacienteRepository')
