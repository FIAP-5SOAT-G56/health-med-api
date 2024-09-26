import CreateMedicoAgendaUseCase from '@/core/application/usecase/agenda/create-medico-agenda.use-case'
import UpdateMedicoAgendaUseCase from '@/core/application/usecase/agenda/update-medico-agenda.use-case'
import CreateConsultaPacienteUseCase from '@/core/application/usecase/agenda/create-consulta-paciente.use-case'
import { AgendaGateway } from '../gateway/agenda.gateway'
import { MedicoGateway } from '../gateway/medico.gateway'
import AgendaMedicoCreateDto from '@/core/domain/dto/input/agenda-medico-create.dto'
import AgendaMedicoUpdateDto from '@/core/domain/dto/input/agenda-medico-update.dto'
import AgendaConsultaPacienteDto from '@/core/domain/dto/input/agenda-consulta-paciente.dto'
import Agenda from '@/core/domain/entities/agenda'

export class AgendaController {
  constructor (
    private readonly gateway: AgendaGateway,
    private readonly doctorGateway: MedicoGateway
  ) {}

  async create (
    input: AgendaMedicoCreateDto
  ): Promise<Agenda> {
    const useCase = new CreateMedicoAgendaUseCase(this.gateway, this.doctorGateway);
    const agenda = await useCase.handle(input)
    return agenda;
  }

  async update (
    input: AgendaMedicoUpdateDto
  ): Promise<Agenda> {
    const useCase = new UpdateMedicoAgendaUseCase(
     this.gateway
    )

    const agenda = await useCase.handle(input)

    return agenda;
  }

  async schedule (
    input: AgendaConsultaPacienteDto
  ): Promise<Agenda> {
    const useCase = new CreateConsultaPacienteUseCase(
     this.gateway
    )

    const agenda = await useCase.handle(input)

    return agenda;
  }
}
