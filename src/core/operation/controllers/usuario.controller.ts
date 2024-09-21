import Create from '@/core/application/usecase/user/create-usuario.use-case'
import { Gateway } from '../gateway/gateway'
import UserCreateDto from '@/core/domain/dto/input/user-create.dto'
import Usuario from '@/core/domain/entities/usuario'

export class UsuarioController {
  constructor (
    private readonly gateway: Gateway
  ) {}

  async create (
    input: UserCreateDto
  ): Promise<Usuario> {
    const useCase = new Create(
      this.gateway,
    )
    const usuario = await useCase.handle(input)

    return usuario;
  }
}
