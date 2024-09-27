import AgendaMedicoListDto from '@/core/domain/dto/input/agenda-medico-list.dto'
import Agenda from '@/core/domain/entities/agenda'
import BusinessException from '@/core/domain/errors/business-exception'
import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'

export default class ListMedicoAgendaUseCase {
  constructor (
    private readonly gateway: AgendaGateway,
  ) {}

  async handle (input: AgendaMedicoListDto): Promise<Agenda[]> {
    const agendas: Agenda[] | undefined = await this.gateway.findByDoctor(input.doctorId)

    if (!agendas) {
      throw new BusinessException('Nenhuma Agenda Registrada.')
    }

    return agendas
  }
}
