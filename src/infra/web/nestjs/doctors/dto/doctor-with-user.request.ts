import { ApiProperty } from '@nestjs/swagger'
import { CreateUserRequest } from '../../users/dto/create-user.request'

export class DoctorWithUserRequest extends CreateUserRequest {
  @ApiProperty({ description: 'Crm', example: '1132156465' })
  readonly crm: string
}
