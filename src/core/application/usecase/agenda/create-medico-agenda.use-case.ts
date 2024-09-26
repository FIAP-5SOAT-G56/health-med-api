import AgendaMedicoCreateDto from '@/core/domain/dto/input/agenda-medico-create.dto'
import Agenda from '@/core/domain/entities/agenda'
import BusinessException from '@/core/domain/errors/business-exception'
import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'
import { MedicoGateway } from '@/core/operation/gateway/medico.gateway'

export default class CreateMedicoAgendaUseCase {
  constructor (
    private readonly gateway: AgendaGateway,
    private readonly doctorGateway: MedicoGateway,
  ) {}

  async handle (input: AgendaMedicoCreateDto): Promise<Agenda> {
    const doctor = await this.doctorGateway.findByCrm(input.crm)

    if (!doctor || doctor.id == undefined) {
      throw new BusinessException('Médico não Registrado.')
    }

    const agenda = Agenda.create(doctor.id, true, input.startAt, input.endAt)

    return await this.gateway.create(agenda)
  }
}
