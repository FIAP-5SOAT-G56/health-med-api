import Create from '@/core/application/usecase/user/create-usuario.use-case'
import SignInUseCase from '@/core/application/usecase/user/sign-in.use-case'
import UserCreateDto from '@/core/domain/dto/input/user-create.dto'
import { JwtDto } from '@/core/domain/dto/output/jwt.dto'
import Usuario from '@/core/domain/entities/usuario'
import { JwtService } from '@/core/domain/service/jtw-service'
import SignUpRequest from '@/infra/web/nestjs/users/dto/signup.request'

import { Gateway } from '../gateway/gateway'
import { PacienteGateway } from '../gateway/paciente.gateway'

export class UsuarioController {
  constructor (
    private readonly gateway: Gateway,
  ) {}

  async create (
    input: UserCreateDto
  ): Promise<Usuario> {
    const useCase = new Create(
      this.gateway,
    )
    const usuario = await useCase.handle(input)

    return usuario
  }

  async signIn (input: SignUpRequest, jwtService: JwtService, patientGateway: PacienteGateway): Promise<JwtDto> {
    const useCase = new SignInUseCase(
      this.gateway,
      patientGateway,
      jwtService,
    )

    const jtw = await useCase.handle(input)

    return jtw
  }
}
