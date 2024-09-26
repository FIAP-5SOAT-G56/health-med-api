import { ApiProperty } from '@nestjs/swagger'

import AgendaCreateDto from '@/core/domain/dto/input/agenda-medico-create.dto'

export default class CreateAgendaRequest implements AgendaCreateDto {
    @ApiProperty({ description: 'Crm do Médico', required: true, example: 123 })
    readonly crm: string

    @ApiProperty({ description: 'Inicio Data/Hora da Consulta', example: '12-08-2024/08:00:00' })
    readonly startAt: Date

    @ApiProperty({ description: 'Término Data/Hora da Consulta', example: '12-08-2024/10:00:00' })
    readonly endAt: Date
}
