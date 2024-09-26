import Usuario from '@/core/domain/entities/usuario'
import Cpf from '@/core/domain/value-object/Cpf'

import { PacienteGateway } from './paciente.gateway'
import { UsuarioGateway } from './usuario.gateway'

export class PatientGateway {
  constructor (
      public readonly usuario: UsuarioGateway,
      public readonly paciente: PacienteGateway
  ) {}

  findByCpf (cpf: Cpf): Promise<Usuario | undefined> {
    return this.usuario.findByCpf(cpf)
  }
}
