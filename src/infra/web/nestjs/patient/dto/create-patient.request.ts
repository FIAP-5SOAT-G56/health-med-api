import { ApiProperty } from '@nestjs/swagger'


export default class PatientRequest  {
  @ApiProperty({ description: 'Id do user', required: true, example: 123 })
  readonly userId: number
}
