import Paciente from '@/core/domain/entities/paciente'

export default interface IPacienteRepository {
  findByUserId(userId: number): Promise<Paciente | undefined>;
  create(input: Paciente): Promise<Paciente>;
}

export const IPacienteRepository = Symbol('IPacienteRepository')
