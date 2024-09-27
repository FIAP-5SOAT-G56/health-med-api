import BusinessException from '../errors/business-exception'
import Agenda from './agenda'

export class Agendas {
  public constructor (
    private agendas: Agenda[] = []
  ) {}

  public push (
    doctorId: number,
    liberado: boolean,
    startAt: Date,
    endAt: Date,
  ) {
    const agendaNew = new Agenda(undefined, doctorId, undefined, liberado, startAt, endAt)

    const exists = this.agendas.filter(agenda => {
      return !(agendaNew.startAt > agenda.startAt && agendaNew.startAt >= agenda.endAt ||
      agendaNew.startAt <= agenda.startAt && agendaNew.endAt < agenda.endAt ||
      agendaNew.startAt == agenda.startAt && agendaNew.endAt == agenda.endAt
      )
    })

    if (exists.length > 0) {
      throw new BusinessException('Horario repetido')
    }
    this.agendas.push(agendaNew)
  }

  public length () {
    return this.agendas.length
  }

  public get () {
    return this.agendas
  }
}
