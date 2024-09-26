import AgendaConsultaPacienteDto from '@/core/domain/dto/input/agenda-consulta-paciente.dto'
import Agenda from '@/core/domain/entities/agenda'
import BusinessException from '@/core/domain/errors/business-exception'
import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'

export default class CreateConsultaPacienteUseCase {
  constructor (
    private readonly gateway: AgendaGateway,
  ) {}

  async handle (input: AgendaConsultaPacienteDto): Promise<Agenda> {
    const agenda = await this.gateway.findById(input.agendaId)

    if (!agenda) {
      throw new BusinessException('Agenda não disponivel.')
    }

    const updateAgenda = Agenda.create(agenda.doctorId, false, agenda.startAt, agenda.endAt, agenda.id, input.pacienteId)

    return await this.gateway.update(updateAgenda)
  }
}
