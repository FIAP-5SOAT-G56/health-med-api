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
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger'

import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'
import IAgendaRepository, { IAgendaRepository as IAgendaRepositorySymbol } from '@/core/domain/repositories/iagenda.repository'
import IMedicoRepository, { IMedicoRepository as IMedicoRepositorySymbol } from '@/core/domain/repositories/imedico.repository'
import IPacienteRepository, { IPacienteRepository as IPacienteRepositorySymbol } from '@/core/domain/repositories/ipaciente.repository'
import IUserRepository, { IUserRepository as IUserRepositorySymbol } from '@/core/domain/repositories/iusuario.repository'
import { IScheduleServiceSymbol, ScheduleService } from '@/core/domain/service/schedule-service'
import AppCache from '@/core/helpers/AppCache'
import { AgendaController } from '@/core/operation/controllers/agenda.controller'
import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'
import { Gateway } from '@/core/operation/gateway/gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'
import { UsuarioGateway } from '@/core/operation/gateway/usuario.gateway'

import { AuthGuard } from '../decorators/auth.guard'
import { Roles } from '../decorators/roles.decorator'
import { RolesGuard } from '../decorators/roles.guard'
import { User } from '../decorators/user.decorator'
import { UserEntity } from '../entities/user.entities'
import { TransactionInterceptor } from '../interceptor/transaction-interceptor'
import CreateAgendaRequest from './dto/agenda.create.request'
import { AgendaListResponse, AgendaListElem } from './dto/agenda.list.response'
import AgendaResponse from './dto/agenda.response'
import AgendaMedicoUpdateDto from './dto/agenda.update.request'
import CreateAgendasRequest from './dto/agendas.create.request'
import ConsultaPacienteRequest from './dto/consulta.paciente.create.request'

const AGENDA_CACHE_KEY = (doctorId: number) => 'cache:agenda:doctorId=' + doctorId
const CONSULTA_GUARD_KEY = (agendaId: number) => 'cache:consulta:key=' + agendaId
const CONSULTA_CACHE_TTL = 1 * 60 * 1000 // 1 min
const AGENDA_CACHE_TTL = 1 * 60 * 60 * 1000 // 1 min

@UseGuards(AuthGuard)
@ApiBearerAuth('Authorization')
@Controller('v1/agenda')
@ApiTags('v1/agenda')
export class AgendController {
  constructor (
      @Inject(IAgendaRepositorySymbol) private readonly repository: IAgendaRepository,
      @Inject(IMedicoRepositorySymbol) private readonly doctorRepository: IMedicoRepository,
      @Inject(IScheduleServiceSymbol) private readonly scheduleService: ScheduleService,
      @Inject(IPacienteRepositorySymbol) private readonly patientRepository: IPacienteRepository,
      @Inject(IUserRepositorySymbol) private readonly userRepository: IUserRepository,
      private appCache: AppCache,
    ) {}

  @Post()
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

    await this.appCache.del(AGENDA_CACHE_KEY(output.doctorId))

    return {
      id: output.id,
      doctorId: output.doctorId,
      patientId: output.pacienteId,
      liberada: output.liberada,
      startAt: output.startAt,
      endAt: output.endAt
    }
  }

  @Post('list')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @Roles(ProfileTypeEnum.MEDICO)
  @ApiOperation({ summary: 'Criar Agendas' })
  @ApiBody({ type: CreateAgendasRequest })
  @ApiCreatedResponse({ description: 'Registro criado', type: [AgendaResponse] })
  async createAgendas (
      @Body() input: CreateAgendasRequest,
      @User() user: UserEntity

    ): Promise<void> {
    const gateway = new AgendaGateway(this.repository)
    const doctorGateway = new MedicoGateway(this.doctorRepository)
    const controller = new AgendaController(gateway, doctorGateway)

    const dates = input.dates.map(date => {
      return {
        startAt: new Date(date.startAt),
        endAt: new Date(date.endAt)

      }
    })
    await controller.createAgendas({ crm: user.getKeyDoctor(), dates })

    const doctor = await doctorGateway.findByCrm(user.getKeyDoctor())
    await this.appCache.del(AGENDA_CACHE_KEY(doctor?.id ?? 0))
  }

  @Patch()
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

    await this.appCache.del(AGENDA_CACHE_KEY(output.doctorId))

    return {
      id: output.id,
      doctorId: output.doctorId,
      patientId: output.pacienteId,
      liberada: output.liberada,
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
  @UseInterceptors(TransactionInterceptor)
  @ApiCreatedResponse({ description: 'Registro criado', type: AgendaResponse })
  async schedule (
      @Body() input: ConsultaPacienteRequest,
      @User() user: UserEntity
    ): Promise<AgendaResponse> {
    const gateway = new AgendaGateway(this.repository)
    const doctorGateway = new MedicoGateway(this.doctorRepository)
    const controller = new AgendaController(gateway, doctorGateway)
    const gateways = new Gateway(new UsuarioGateway(this.userRepository), new MedicoGateway(this.doctorRepository))
    const patientGateway = new PacienteGateway(this.patientRepository)

    const cached = await this.appCache.get<number>(CONSULTA_GUARD_KEY(input.agendaId))

    if (cached) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'Agenda não disponivel'
        },
        HttpStatus.NOT_FOUND
      )
    }

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

    await this.appCache.set(CONSULTA_GUARD_KEY(input.agendaId), input.agendaId, CONSULTA_CACHE_TTL)

    return {
      id: output.id,
      doctorId: output.doctorId,
      patientId: output.pacienteId,
      liberada: output.liberada,
      startAt: output.startAt,
      endAt: output.endAt
    }
  }

  @Get(':id')
  @ApiHeader({
    name: 'authorization'
  })
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Listar Agenda Médico' })
  @ApiCreatedResponse({ description: 'Agenda encontradas', type: AgendaListResponse })
  async list (@Param('id') id: number): Promise<AgendaListResponse> {
    const gateway = new AgendaGateway(this.repository)
    const doctorGateway = new MedicoGateway(this.doctorRepository)
    const controller = new AgendaController(gateway, doctorGateway)

    const cached = await this.appCache.get<AgendaListResponse>(AGENDA_CACHE_KEY(id))

    if (cached) {
      return cached
    }

    const output = await controller.list({
      doctorId: id
    })

    if (output.length === 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Agenda não registrada'
        },
        HttpStatus.NOT_FOUND
      )
    }

    const response = {
      doctorId: output[0].doctorId,
      agenda: output.map(agenda => new AgendaListElem(agenda.liberada, agenda.startAt, agenda.endAt))
    }

    await this.appCache.set(AGENDA_CACHE_KEY(id), response, AGENDA_CACHE_TTL)

    return response
  }
}
