import AgendaConsultaPacienteDto from '@/core/domain/dto/input/agenda-consulta-paciente.dto'
import Agenda from '@/core/domain/entities/agenda'
import BusinessException from '@/core/domain/errors/business-exception'
import { ScheduleService } from '@/core/domain/service/schedule-service'
import { AgendaGateway } from '@/core/operation/gateway/agenda.gateway'
import { Gateway } from '@/core/operation/gateway/gateway'
import { PacienteGateway } from '@/core/operation/gateway/paciente.gateway'

export default class CreateConsultaPacienteUseCase {
  constructor (
    private readonly gateway: AgendaGateway,
    private readonly scheduleService: ScheduleService,
    private readonly gateways: Gateway,
    private readonly pacienteGateway: PacienteGateway
  ) {}

  async handle (input: AgendaConsultaPacienteDto): Promise<Agenda> {
    const agenda = await this.gateway.findById(input.agendaId)

    if (!agenda) {
      throw new BusinessException('Agenda não disponivel.')
    }

    if (!agenda.liberada) {
      throw new BusinessException('Horário Indisponível.')
    }

    const conflict = await this.gateway.agendaPatientConflict(input.pacienteId, agenda.startAt, agenda.endAt)

    if (conflict) {
      throw new BusinessException('Conflito de Horário.')
    }

    const updateAgenda = Agenda.create(agenda.doctorId, false, agenda.startAt, agenda.endAt, agenda.id, input.pacienteId)

    const agendaSave = await this.gateway.update(updateAgenda)
    const doctor = await this.gateways.medico.findById(agenda.doctorId)

    if (!doctor) {
      throw new BusinessException('Doctor não disponivel.')
    }

    const userDoctor = await this.gateways.usuario.findById(doctor.userId)
    const paciente = await this.pacienteGateway.findById(input.pacienteId)

    if (!paciente) {
      throw new BusinessException('Patient não disponivel.')
    }

    const userPatient = await this.gateways.usuario.findById(paciente.userId)
    await this.scheduleService.publishSchedule({
      doctor: userDoctor?.name.toString() ?? '',
      pacient: userPatient?.name.toString() ?? '',
      date: agenda.getDate(),
      start: agenda.getHoursStart(),
      end: agenda.getHoursFinish()
    })

    return agendaSave
  }
}
