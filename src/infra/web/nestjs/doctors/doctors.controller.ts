import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Query,
} from '@nestjs/common'
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger'

import IMedicoRepository, { IMedicoRepository as IMedicoRepositorySymbol } from '@/core/domain/repositories/imedico.repository'
import IUserRepository, { IUserRepository as IUserRepositorySymbol } from '@/core/domain/repositories/iusuario.repository'
import { MedicoController } from '@/core/operation/controllers/medico.controller'
import { Gateway } from '@/core/operation/gateway/gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'

import { Public } from '../decorators/auth.guard'
import DoctorRequest from './dto/doctor.request'
import DoctorResponse from './dto/produto.response'
import { DoctorWithUserRequest } from './dto/doctor-with-user.request'
import { DoctorPaginateService } from './doctors.service'
import { GenericFilter } from '@/infra/persistence/typeorm/service/gereric.filter'
import { Generic } from '@/infra/persistence/typeorm/service/generic'
import { DoctorWhereRequest } from './dto/doctor-where.request'

@Controller('v1/doctors')
@ApiTags('v1/doctors')
export class DoctorsController {
  constructor (
    @Inject(IMedicoRepositorySymbol) private readonly repository: IMedicoRepository,
    @Inject(IUserRepositorySymbol) private readonly userRepository: IUserRepository,
    private readonly servicePaginate: DoctorPaginateService,
  ) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar Médico' })
  @ApiBody({ type: DoctorRequest })
  @ApiCreatedResponse({ description: 'Registro criado', type: DoctorResponse })
  async create (
    @Body() input: DoctorRequest
  ): Promise<DoctorResponse> {
    const gateway = new Gateway(new UsuarioGateway(this.userRepository), new MedicoGateway(this.repository))
    const controller = new MedicoController(gateway)

    const output = await controller.create(input)

    return output
  }

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar Médico e usuario' })
  @ApiBody({ type: DoctorRequest })
  @ApiCreatedResponse({ description: 'Registro criado', type: DoctorResponse })
  async createDoctorWithUser (
    @Body() input: DoctorWithUserRequest
  ): Promise<DoctorResponse> {
    const gateway = new Gateway(new UsuarioGateway(this.userRepository), new MedicoGateway(this.repository))
    const controller = new MedicoController(gateway)

    const output = await controller.createDoctorWithUser(input)

    return output
  }

  @Get('')
  @Public()
  @ApiOperation({ summary: 'Buscar Médicos' })
  @ApiQuery({ type: DoctorWhereRequest})
  @ApiCreatedResponse({ description: 'Registro criado', type: DoctorResponse })
  async find (
    @Query() filter: GenericFilter & Generic  ) {
    return this.servicePaginate.findAllPaginated(filter)
  }
}
