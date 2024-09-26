import { ApiProperty } from '@nestjs/swagger'

import AgendaConsultaPacienteDto from '@/core/domain/dto/input/agenda-consulta-paciente.dto'

export default class ConsultaPacienteRequest implements AgendaConsultaPacienteDto {
    @ApiProperty({ description: 'Id do Registro da Agenda', required: true, example: 123 })
    readonly agendaId: number

    @ApiProperty({ description: 'Id do Paciente', required: true, example: 123 })
    readonly pacienteId: number
}
