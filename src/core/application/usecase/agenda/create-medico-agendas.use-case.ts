import AgendasMedicoCreateDto from '@/core/domain/dto/input/agendas-medico-create.dto'
import { Agendas } from '@/core/domain/entities/agendas'
import BusinessException from '@/core/domain/errors/business-exception'
import { hasTimeConflicts } from '@/core/helpers/conflictArrayAgendaHelper'
import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'

export default class CreateMedicoAgendasUseCase {
  constructor (
    private readonly gateway: AgendaGateway,
    private readonly doctorGateway: MedicoGateway,
  ) {}

  async handle (input: AgendasMedicoCreateDto): Promise<void> {
    const doctor = await this.doctorGateway.findByCrm(input.crm)

    if (!doctor || doctor.id == undefined) {
      throw new BusinessException('Médico não Registrado.')
    }
    const agendas = new Agendas()

    let conflict = hasTimeConflicts(input.dates)

    if (conflict) {
      throw new BusinessException('Conflito de Horário.')
    }

    for (const interval of input.dates) {
      conflict = await this.gateway.agendaConflict(doctor.id, interval.startAt, interval.endAt)

      if (conflict) {
        throw new BusinessException('Conflito de Horário.')
      }

      agendas.push(doctor.getId(), true, interval.startAt, interval.endAt)
    }

    return await this.gateway.creates(agendas)
  }
}
