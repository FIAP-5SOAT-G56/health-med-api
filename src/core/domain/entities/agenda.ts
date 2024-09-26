export default class Agenda {
    public constructor (
      public readonly id: number | undefined,
      public doctorId: number,
      public pacienteId: number | undefined,
      public liberado: boolean,
      public start_datetime: string,
      public end_datetime: string,
    ) {}
  
    static create (
        doctorId: number,
        liberado: boolean,
        start_datetime: string,
        end_datetime: string,
        id?: number,
        pacienteId?: number,
    ): Agenda {
      return new Agenda(id, doctorId, pacienteId, liberado, start_datetime, end_datetime)
    }
  
}
  