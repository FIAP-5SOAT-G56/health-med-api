import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common'
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

import IPacienteRepository, { IPacienteRepository as IPacienteRepositorySymbol } from '@/core/domain/repositories/ipaciente.repository'
import IUserRepository, { IUserRepository as IUserRepositorySymbol } from '@/core/domain/repositories/iusuario.repository'
import { PacienteController } from '@/core/operation/controllers/paciente.controller'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'
import { PatientGateway } from '@/core/operation/gateway/patient.gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'

import { Public } from '../decorators/auth.guard'
import { TransactionInterceptor } from '../interceptor/transaction-interceptor'
import PatientRequest from './dto/create-patient.request'
import PatientResponse from './dto/patient.response'

@Controller('v1/patients')
@ApiTags('v1/patients')
export class PatientsController {
  constructor (
      @Inject(IPacienteRepositorySymbol) private readonly repository: IPacienteRepository,
      @Inject(IUserRepositorySymbol) private readonly userRepository: IUserRepository,
    ) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar Paciente' })
  @ApiBody({ type: PatientRequest })
  @ApiCreatedResponse({ description: 'Registro criado', type: PatientResponse })
  @UseInterceptors(TransactionInterceptor)
  async create (
      @Body() input: PatientRequest
    ): Promise<PatientResponse> {
    const gateway = new PatientGateway(new UsuarioGateway(this.userRepository), new PacienteGateway(this.repository))
    const controller = new PacienteController(gateway)

    const output = await controller.create(input)

    return output
  }
}
