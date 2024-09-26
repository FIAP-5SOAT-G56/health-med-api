import { ApiProperty } from '@nestjs/swagger'

import AgendaMedicoUpdateDto from '@/core/domain/dto/input/agenda-medico-update.dto'

export default class UpdateAgendaRequest implements AgendaMedicoUpdateDto {
    @ApiProperty({ description: 'Id do Registro da Agenda', required: true, example: 123 })
    readonly agendaId: number

    @ApiProperty({ description: 'Inicio Data/Hora da Consulta Novo', example: '13-08-2024/08:00:00' })
    readonly new_startAt: string

    @ApiProperty({ description: 'Término Data/Hora da Consulta Novo', example: '13-08-2024/10:00:00' })
    readonly new_endAt: string
}
