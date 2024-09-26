import { ApiProperty } from '@nestjs/swagger'

export default class DoctorResponse {
  @ApiProperty({ description: 'ID no formato' })
  readonly id: number | undefined

  @ApiProperty({ description: 'CRM', example: 'H12121' })
  readonly crm: string
}
