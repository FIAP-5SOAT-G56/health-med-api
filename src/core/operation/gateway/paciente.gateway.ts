import Paciente from '@/core/domain/entities/paciente'
import Repository from '@/core/domain/repositories/ipaciente.repository'

export class PacienteGateway {
  constructor (private respository: Repository) {
  }

  create (input: Paciente): Promise<Paciente> {
    return this.respository.create(input)
  }

  findByUserId (userId: number): Promise<Paciente | undefined> {
    return this.respository.findByUserId(userId)
  }
}
