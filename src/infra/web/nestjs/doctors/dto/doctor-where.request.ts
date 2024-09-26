import { SortOrder } from '@/infra/persistence/typeorm/service/gereric.filter';
import { ApiProperty } from '@nestjs/swagger'

export class DoctorWhereRequest {
  @ApiProperty({ description: 'Crm', example: '1132156465', required: false })
  readonly crm: string

  @ApiProperty({ description: 'Nome do médido', example: 'Hélio', required: false })
  readonly name: string

  @ApiProperty({ description: 'Inicio Data/Hora da Consulta', example: '2024-09-26T00:00:00' , required: false })
  readonly startAt: Date

  @ApiProperty({ description: 'Término Data/Hora da Consulta', example: '2024-09-26T23:59:59', required: false  })
  readonly endAt: Date

  @ApiProperty({ description: '"page" atrribute should be a number', example: 1  , required: false})
  public page: number;

  @ApiProperty({ description: '""pageSize" attribute should be a number ', example: 10, required: false })
  public pageSize: number;

  @ApiProperty({ description: 'order', example: '', required: false })
  public orderBy?: string;

  @ApiProperty({ enum: SortOrder, required: false} )
  public sortOrder?: SortOrder = SortOrder.DESC;
}
