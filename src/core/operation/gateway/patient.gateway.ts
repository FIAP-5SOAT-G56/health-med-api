import { UsuarioGateway } from './usuario.gateway'
import { PacienteGateway } from './paciente.gateway'
import Usuario from '@/core/domain/entities/usuario'
import Cpf from '@/core/domain/value-object/Cpf'

export class PatientGateway {
  constructor (
      public readonly usuario: UsuarioGateway,
      public readonly paciente: PacienteGateway
  ) {}

  findByCpf (cpf: Cpf): Promise<Usuario | undefined> {
    return this.usuario.findByCpf(cpf)
  }

}
