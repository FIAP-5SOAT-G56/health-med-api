import Paciente from '@/core/domain/entities/paciente'

export default interface IPacienteRepository {
  create(input: Paciente): Promise<Paciente>;
}

export const IPacienteRepository = Symbol('IPacienteRepository')