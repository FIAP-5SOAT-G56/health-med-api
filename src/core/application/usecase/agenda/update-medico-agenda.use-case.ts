import AgendaMedicoUpdateDto from '@/core/domain/dto/input/agenda-medico-update.dto'
import Agenda from '@/core/domain/entities/agenda'
import BusinessException from '@/core/domain/errors/business-exception'
import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'

export default class UpdateMedicoAgendaUseCase {
  constructor (
    private readonly gateway: AgendaGateway,
  ) {}

  async handle (input: AgendaMedicoUpdateDto): Promise<Agenda> {

    const agenda = await this.gateway.findById(input.agendaId)
    
    if (!agenda) {
      throw new BusinessException('Agenda não registrada.')
    }

    let update_agenda = Agenda.create(agenda.doctorId, agenda.liberado, input.new_start_datetime, input.new_end_datetime, agenda.id, agenda.pacienteId);
    
    return await this.gateway.update(update_agenda)
  }
}
