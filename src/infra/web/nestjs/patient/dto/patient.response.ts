import { ApiProperty } from '@nestjs/swagger'


export default class PatientResponse  {
  @ApiProperty({ description: 'ID no formato',})
  readonly id: number | undefined
}