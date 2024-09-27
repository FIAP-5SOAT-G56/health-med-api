import { ApiProperty } from '@nestjs/swagger'

export class AgendaListElem {
  constructor (
    readonly id: number,
    readonly liberada: boolean,
    readonly startAt: Date,
    readonly endAt: Date,
  ) {
    }
}

export class AgendaListResponse {
  @ApiProperty({ description: 'ID do Médico' })
  readonly doctorId: number

  @ApiProperty({ description: 'Agenda Médico' })
  readonly agenda: AgendaListElem[]
}
