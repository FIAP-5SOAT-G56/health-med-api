import { ApiProperty } from '@nestjs/swagger'

import { Transform } from 'class-transformer'
import { isISO8601 } from 'class-validator'

class DateDto {
    @ApiProperty({ description: 'Inicio Data/Hora da Consulta', example: '12-08-2024/08:00:00' })
    @Transform(({ value }) => {
      const isValidDate = isISO8601(value, { strict: true, strictSeparator: true })
      if (!isValidDate) {
        throw new Error('Property "from_date" should be a valid ISO8601 date string')
      }
      return new Date(value)
    })
    readonly startAt: Date

    @Transform(({ value }) => {
      const isValidDate = isISO8601(value, { strict: true, strictSeparator: true })
      if (!isValidDate) {
        throw new Error('Property "from_date" should be a valid ISO8601 date string')
      }
      return new Date(value)
    })
    @ApiProperty({ description: 'Término Data/Hora da Consulta', example: '12-08-2024/10:00:00' })
    readonly endAt: Date
}

export default class CreateAgendasRequest {
  @ApiProperty()
  readonly dates: DateDto[]
}
