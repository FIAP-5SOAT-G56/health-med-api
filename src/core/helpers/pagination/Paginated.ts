import { ApiProperty } from '@nestjs/swagger'

import { IsDefined } from 'class-validator'

export default class Paginated<T> {
  @IsDefined()
  @ApiProperty({ description: 'Resultados paginados', type: [Object], isArray: true, required: false })
  results: T[]

  @IsDefined()
  @ApiProperty({ description: 'Total de resultados', example: 42, required: false })
  total: number

  @IsDefined()
  @ApiProperty({ description: 'Página atual', example: 1, required: false })
  page: number

  @IsDefined()
  @ApiProperty({ description: 'Quantidade de resultados por página', example: 10, required: false })
  pageSize: number
}
