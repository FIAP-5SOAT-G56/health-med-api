import { ApiProperty } from '@nestjs/swagger'

export default class AgendaResponse  {
  @ApiProperty({ description: 'ID no formato',})
  readonly id: number | undefined

  @ApiProperty({ description: 'ID do Médico',})
  readonly doctorId: number

  @ApiProperty({ description: 'ID do Paciente',})
  readonly patientId: number | undefined

  @ApiProperty({ description: 'Consulta Liberada',})
  readonly liberada: boolean

  @ApiProperty({ description: 'Inicio Data/Hora da Consulta',})
  readonly startAt: string

  @ApiProperty({ description: 'Término Data/Hora da Consulta',})
  readonly endAt: string
}