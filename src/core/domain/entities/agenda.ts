export default class Agenda {
  public constructor (
      public readonly id: number | undefined,
      public doctorId: number,
      public pacienteId: number | undefined,
      public liberado: boolean,
      public startAt: string,
      public endAt: string,
    ) {}

  static create (
        doctorId: number,
        liberado: boolean,
        startAt: string,
        endAt: string,
        id?: number,
        pacienteId?: number,
    ): Agenda {
    return new Agenda(id, doctorId, pacienteId, liberado, startAt, endAt)
  }
}
