import BusinessException from "../errors/business-exception"

export default class Agenda {
  public constructor (
      public readonly id: number | undefined,
      public doctorId: number,
      public pacienteId: number | undefined,
      public liberado: boolean,
      public startAt: Date,
      public endAt: Date,
    ) {

      if (endAt <= startAt) {
        throw new BusinessException('Data do agendamento invalido')
      }
    }

  static create (
        doctorId: number,
        liberado: boolean,
        startAt: Date,
        endAt: Date,
        id?: number,
        pacienteId?: number,
    ): Agenda {
    return new Agenda(id, doctorId, pacienteId, liberado, startAt, endAt)
  }
}
