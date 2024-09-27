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

  getDate(): string {
    const year = this.startAt.getFullYear();
    const month = String(this.startAt.getMonth() + 1).padStart(2, '0');
    const day = String(this.startAt.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  getHoursStart(): string {
    const hours = String(this.startAt.getHours()).padStart(2, '0');
    const minutes = String(this.startAt.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  getHoursFinish(): string {
    const hours = String(this.endAt.getHours()).padStart(2, '0');
    const minutes = String(this.endAt.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
