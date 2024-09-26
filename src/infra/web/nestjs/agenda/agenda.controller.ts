import {
    Body,
    Controller,
    HttpCode,
    HttpException,
    HttpStatus,
    Inject,
    Post,
    Patch,
    UseGuards
  } from '@nestjs/common'
  import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger'
  
  import { AgendaController } from '@/core/operation/controllers/agenda.controller'
  import AgendaResponse from './dto/agenda.response'
  import CreateAgendaRequest from './dto/agenda.create.request'
  import AgendaMedicoUpdateDto from './dto/agenda.update.request'
  import ConsultaPacienteRequest from './dto/consulta.paciente.create.request'
  import IMedicoRepository, { IMedicoRepository as IMedicoRepositorySymbol } from '@/core/domain/repositories/imedico.repository'
  import IAgendaRepository, { IAgendaRepository as IAgendaRepositorySymbol } from '@/core/domain/repositories/iagenda.repository'
  import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'
  import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'
  import { AuthGuard } from '../decorators/auth.guard'
import { ProfileTypeEnum } from '@/core/domain/enums/profile-status.enum'
import { Roles } from '../decorators/roles.decorator'
import { RolesGuard } from '../decorators/roles.guard'
import { User } from '../decorators/user.decorator'
import { UserEntity } from '../entities/user.entities'
  
  @UseGuards(AuthGuard)
  @Controller('v1/agenda')
  @ApiTags('v1/agenda')
  export  class AgendController {
    constructor (
      @Inject(IAgendaRepositorySymbol) private readonly repository: IAgendaRepository,
      @Inject(IMedicoRepositorySymbol) private readonly doctorRepository: IMedicoRepository,
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
        startAt: output.start_datetime,
        endAt: output.end_datetime
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
      
      if(!output.id) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: "Agenda não registrada"
          },
          HttpStatus.NOT_FOUND
        );
      }

      return {
        id: output.id,
        doctorId: output.doctorId,
        patientId: output.pacienteId,
        liberada: output.liberado,
        startAt: output.start_datetime,
        endAt: output.end_datetime
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
      const output = await controller.schedule({...input, pacienteId: user.getKeyPatient()})
      
      if(!output.id) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: "Agenda não registrada"
          },
          HttpStatus.NOT_FOUND
        );
      }

      return {
        id: output.id,
        doctorId: output.doctorId,
        patientId: output.pacienteId,
        liberada: output.liberado,
        startAt: output.start_datetime,
        endAt: output.end_datetime
      }
    }

  }
  