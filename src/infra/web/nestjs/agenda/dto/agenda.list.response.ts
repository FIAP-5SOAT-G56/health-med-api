import { ApiProperty } from '@nestjs/swagger'

export class AgendaListElem {
  constructor (liberada: boolean, startAt: Date, endAt: Date) {
    this.liberada = liberada
    this.startAt = startAt
    this.endAt = endAt
  }

    readonly liberada: boolean
    readonly startAt: Date
    readonly endAt: Date
}

export class AgendaListResponse {
  @ApiProperty({ description: 'ID do Médico' })
  readonly doctorId: number

  @ApiProperty({ description: 'Agenda Médico' })
  readonly agenda: AgendaListElem[]
}
