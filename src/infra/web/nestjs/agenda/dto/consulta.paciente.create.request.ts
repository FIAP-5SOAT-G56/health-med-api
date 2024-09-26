import { ApiProperty } from '@nestjs/swagger'

export default class ConsultaPacienteRequest {
    @ApiProperty({ description: 'Id do Registro da Agenda', required: true, example: 123 })
    readonly agendaId: number
}
