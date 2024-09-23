import { ApiProperty } from '@nestjs/swagger'


export default class DoctorRequest  {
  @ApiProperty({ description: 'Crm', example: '1132156465' })
  readonly crm: string

  @ApiProperty({ description: 'Id do user', required: true, example: 123 })
  readonly userId: number
}
