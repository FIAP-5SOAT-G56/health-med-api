import { UsuarioGateway } from './usuario.gateway'
import { MedicoGateway } from './medico.gateway'

export class Gateway {
  constructor (
    public readonly usuario: UsuarioGateway,
    public readonly medico: MedicoGateway
    ) {
  }
}
