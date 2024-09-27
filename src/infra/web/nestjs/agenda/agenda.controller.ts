import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Patch,
  Get,
  Param,
  UseGuards
} from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'
import IAgendaRepository, { IAgendaRepository as IAgendaRepositorySymbol } from '@/core/domain/repositories/iagenda.repository'
import IMedicoRepository, { IMedicoRepository as IMedicoRepositorySymbol } from '@/core/domain/repositories/imedico.repository'
import { AgendaController } from '@/core/operation/controllers/agenda.controller'
import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'

import { AuthGuard } from '../decorators/auth.guard'
import { Roles } from '../decorators/roles.decorator'
import { RolesGuard } from '../decorators/roles.guard'
import { User } from '../decorators/user.decorator'
import { UserEntity } from '../entities/user.entities'
import CreateAgendaRequest from './dto/agenda.create.request'
import AgendaResponse from './dto/agenda.response'
import { AgendaListResponse, AgendaListElem } from './dto/agenda.list.response'
import AgendaMedicoUpdateDto from './dto/agenda.update.request'
import ConsultaPacienteRequest from './dto/consulta.paciente.create.request'
import { IScheduleServiceSymbol, ScheduleService } from '@/core/domain/service/schedule-service'
import IPacienteRepository, { IPacienteRepository as IPacienteRepositorySymbol } from '@/core/domain/repositories/ipaciente.repository'
import IUserRepository, { IUserRepository as IUserRepositorySymbol } from '@/core/domain/repositories/iusuario.repository'
import { Gateway } from '@/core/operation/gateway/gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'
@UseGuards(AuthGuard)
@Controller('v1/agenda')
@ApiTags('v1/agenda')
export class AgendController {
  constructor (
      @Inject(IAgendaRepositorySymbol) private readonly repository: IAgendaRepository,
      @Inject(IMedicoRepositorySymbol) private readonly doctorRepository: IMedicoRepository,
      @Inject(IScheduleServiceSymbol) private readonly scheduleService: ScheduleService,
      @Inject(IPacienteRepositorySymbol) private readonly patientRepository: IPacienteRepository,
      @Inject(IUserRepositorySymbol) private readonly userRepository: IUserRepository,
    ) {}

  @Post()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @Roles(ProfileTypeEnum.MEDICO)
  @ApiOperation({ summary: 'Criar Agenda' })
  @ApiBody({ type: CreateAgendaRequest })
  @ApiCreatedResponse({ description: 'Registro criado', type: AgendaResponse })
  async create (
      @Body() input: CreateAgendaRequest
    ): Promise<AgendaResponse> {
    const gateway = new AgendaGateway(this.repository)
    const doctorGateway = new MedicoGateway(this.doctorRepository)
    const controller = new AgendaController(gateway, doctorGateway)
    const output = await controller.create(input)

    return {
      id: output.id,
      doctorId: output.doctorId,
      patientId: output.pacienteId,
      liberada: output.liberado,
      startAt: output.startAt,
      endAt: output.endAt
    }
  }

  @Patch()
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Roles(ProfileTypeEnum.MEDICO)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Atualizar Agenda' })
  @ApiBody({ type: AgendaMedicoUpdateDto })
  @ApiCreatedResponse({ description: 'Registro criado', type: AgendaResponse })
  async update (
      @Body() input: AgendaMedicoUpdateDto
    ): Promise<AgendaResponse> {
    const gateway = new AgendaGateway(this.repository)
    const doctorGateway = new MedicoGateway(this.doctorRepository)
    const controller = new AgendaController(gateway, doctorGateway)
    const output = await controller.update(input)

    if (!output.id) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Agenda não registrada'
        },
        HttpStatus.NOT_FOUND
      )
    }

    return {
      id: output.id,
      doctorId: output.doctorId,
      patientId: output.pacienteId,
      liberada: output.liberado,
      startAt: output.startAt,
      endAt: output.endAt
    }
  }

  @Patch('consulta')
  @ApiBearerAuth('authorization')
  @ApiHeader({
    name: 'authorization'
  })
  @HttpCode(HttpStatus.FOUND)
  @ApiOperation({ summary: 'Agendar Consulta' })
  @Roles(ProfileTypeEnum.PACIENTE)
  @ApiBody({ type: ConsultaPacienteRequest })
  @ApiCreatedResponse({ description: 'Registro criado', type: AgendaResponse })
  async schedule (
      @Body() input: ConsultaPacienteRequest,
      @User() user: UserEntity
    ): Promise<AgendaResponse> {
    const gateway = new AgendaGateway(this.repository)
    const doctorGateway = new MedicoGateway(this.doctorRepository)
    const controller = new AgendaController(gateway, doctorGateway)
    const gateways = new Gateway(new UsuarioGateway(this.userRepository), new MedicoGateway(this.doctorRepository))
    const patientGateway =  new PacienteGateway(this.patientRepository)
    const output = await controller.schedule(
      { ...input, pacienteId: user.getKeyPatient() },  
      this.scheduleService,
      gateways,
      patientGateway
    )

    if (!output.id) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Agenda não registrada'
        },
        HttpStatus.NOT_FOUND
      )
    }

    return {
      id: output.id,
      doctorId: output.doctorId,
      patientId: output.pacienteId,
      liberada: output.liberado,
      startAt: output.startAt,
      endAt: output.endAt
    }
  }

  @Get(':id')
  @ApiHeader({
    name: 'authorization'
  })
  @HttpCode(HttpStatus.FOUND)
  @ApiOperation({ summary: 'Listar Agenda Médico' })
  @ApiCreatedResponse({ description: 'Agenda encontradas', type: AgendaListResponse })
  async list (@Param('id') id: number): Promise<AgendaListResponse> {
    const gateway = new AgendaGateway(this.repository)
    const doctorGateway = new MedicoGateway(this.doctorRepository)
    const controller = new AgendaController(gateway, doctorGateway)

    const output = await controller.list({
      doctorId: id
    });

    console.log(output)

    if (output.length == 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Agenda não registrada'
        },
        HttpStatus.NOT_FOUND
      )
    }

    return {
      doctorId: output[0].doctorId,
      agenda: output.map(agenda => new AgendaListElem(agenda.liberado, agenda.startAt, agenda.endAt))
    }
  }

}
