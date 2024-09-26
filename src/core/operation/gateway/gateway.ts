import { MedicoGateway } from './medico.gateway'
import { UsuarioGateway } from './usuario.gateway'

export class Gateway {
  constructor (
      public readonly usuario: UsuarioGateway,
      public readonly medico: MedicoGateway
    ) {
  }
}
