import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common'
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import IMedicoRepository, { IMedicoRepository as IMedicoRepositorySymbol } from '@/core/domain/repositories/imedico.repository'
import IUserRepository, { IUserRepository as IUserRepositorySymbol } from '@/core/domain/repositories/iusuario.repository'
import { MedicoController } from '@/core/operation/controllers/medico.controller'
import { Gateway } from '@/core/operation/gateway/gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'

import { Public } from '../decorators/auth.guard'
import DoctorRequest from './dto/doctor.request'
import ProdutoResponse from './dto/produto.response'

@Controller('v1/doctors')
@ApiTags('v1/doctors')
export class DoctorsController {
  constructor (
    @Inject(IMedicoRepositorySymbol) private readonly repository: IMedicoRepository,
    @Inject(IUserRepositorySymbol) private readonly userRepository: IUserRepository,

  ) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar Médico' })
  @ApiBody({ type: DoctorRequest })
  @ApiCreatedResponse({ description: 'Registro criado', type: ProdutoResponse })
  async create (
    @Body() input: DoctorRequest
  ): Promise<ProdutoResponse> {
    const gateway = new Gateway(new UsuarioGateway(this.userRepository), new MedicoGateway(this.repository))
    const controller = new MedicoController(gateway)

    const output = await controller.create(input)

    return output
  }
}
