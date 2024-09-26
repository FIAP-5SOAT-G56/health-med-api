import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common'
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import ConsumidorResponse from './dto/user.response'
import {CreateUserRequest} from './dto/create-user.request'
import { UsuarioController } from '@/core/operation/controllers/usuario.controller'
import UserResponse from './dto/user.response'
import SignUpRequest from './dto/signup.request'

import IMedicoRepository, { IMedicoRepository as IMedicoRepositorySymbol } from '@/core/domain/repositories/imedico.repository'
import IUserRepository, { IUserRepository as IUserRepositorySymbol }  from '@/core/domain/repositories/iusuario.repository'
import { Gateway } from '@/core/operation/gateway/gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'
import { JwtNestService } from '@/infra/service/jwt.nest.service'
import IPacienteRepository, { IPacienteRepository as IPacienteRepositorySymbol } from '@/core/domain/repositories/ipaciente.repository'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'
import { Public } from '../decorators/auth.guard'

@Controller('v1/users')
@ApiTags('v1/users')
export class UsersController {
  constructor (
    @Inject(IMedicoRepositorySymbol) private readonly repository: IMedicoRepository,
    @Inject(IUserRepositorySymbol) private readonly userRepository: IUserRepository,
    @Inject(IPacienteRepositorySymbol) private readonly patientRepository: IPacienteRepository,
    private readonly jwtService: JwtNestService,
  ) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar um novo Usuario' })
  @ApiBody({ type: CreateUserRequest })
  @ApiCreatedResponse({ description: 'usuario criado', type: ConsumidorResponse })
  async signUp (
    @Body() input: CreateUserRequest
  ): Promise<UserResponse> {
    const gateway = new Gateway(new UsuarioGateway(this.userRepository), new MedicoGateway(this.repository))
    const controller = new UsuarioController(gateway)
    const user = await controller.create(input);
    return {
        id: user.id ?? 0,
        name: user.name.toString(),
        email: user.email.toString(),
        cpf: user.cpf.toString()
    }
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post("login")
  @ApiOperation({ summary: "User Login" })
  @ApiResponse({
    status: 200,
    description: "The record found",
    type: [UserResponse],
  })
  @ApiBody({ type: SignUpRequest })
  signIn(@Body() input: SignUpRequest) {
    const gateway = new Gateway(new UsuarioGateway(this.userRepository), new MedicoGateway(this.repository))

    const controller = new UsuarioController(gateway)

    return controller.signIn(input, this.jwtService, new PacienteGateway(this.patientRepository))
  }
}

