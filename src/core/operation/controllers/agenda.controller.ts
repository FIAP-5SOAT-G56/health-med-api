import CreateConsultaPacienteUseCase from '@/core/application/usecase/agenda/create-consulta-paciente.use-case'
import CreateMedicoAgendaUseCase from '@/core/application/usecase/agenda/create-medico-agenda.use-case'
import CreateMedicoAgendasUseCase from '@/core/application/usecase/agenda/create-medico-agendas.use-case'
import ListMedicoAgendaUseCase from '@/core/application/usecase/agenda/list-medico-agenda.use-case'
import UpdateMedicoAgendaUseCase from '@/core/application/usecase/agenda/update-medico-agenda.use-case'
import AgendaConsultaPacienteDto from '@/core/domain/dto/input/agenda-consulta-paciente.dto'
import AgendaMedicoCreateDto from '@/core/domain/dto/input/agenda-medico-create.dto'
import AgendaMedicoListDto from '@/core/domain/dto/input/agenda-medico-list.dto'
import AgendaMedicoUpdateDto from '@/core/domain/dto/input/agenda-medico-update.dto'
import AgendasMedicoCreateDto from '@/core/domain/dto/input/agendas-medico-create.dto'
import Agenda from '@/core/domain/entities/agenda'
import { ScheduleService } from '@/core/domain/service/schedule-service'

import { AgendaGateway } from '../gateway/agenda.gateway'
import { Gateway } from '../gateway/gateway'
import { MedicoGateway } from '../gateway/medico.gateway'
import { PacienteGateway } from '../gateway/paciente.gateway'

export class AgendaController {
  constructor (
    private readonly gateway: AgendaGateway,
    private readonly doctorGateway: MedicoGateway,
  ) {}

  async create (
    input: AgendaMedicoCreateDto
  ): Promise<Agenda> {
    const useCase = new CreateMedicoAgendaUseCase(this.gateway, this.doctorGateway)
    const agenda = await useCase.handle(input)
    return agenda
  }

  async createAgendas (
    input: AgendasMedicoCreateDto
  ): Promise<void> {
    const useCase = new CreateMedicoAgendasUseCase(this.gateway, this.doctorGateway)
    const agenda = await useCase.handle(input)
    return agenda
  }

  async update (
    input: AgendaMedicoUpdateDto
  ): Promise<Agenda> {
    const useCase = new UpdateMedicoAgendaUseCase(
      this.gateway
    )

    const agenda = await useCase.handle(input)

    return agenda
  }

  async schedule (
    input: AgendaConsultaPacienteDto,
    scheduleService: ScheduleService,
    gateways: Gateway,
    pacienteGateway: PacienteGateway
  ): Promise<Agenda> {
    const useCase = new CreateConsultaPacienteUseCase(
      this.gateway,
      scheduleService,
      gateways,
      pacienteGateway
    )

    const agenda = await useCase.handle(input)

    return agenda
  }

  async list (
    input: AgendaMedicoListDto
  ): Promise<Agenda[]> {
    const useCase = new ListMedicoAgendaUseCase(
      this.gateway
    )

    const agenda = await useCase.handle(input)

    return agenda
  }
}
