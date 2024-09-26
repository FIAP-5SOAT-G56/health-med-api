import { ApiProperty } from '@nestjs/swagger'

export default class SignUpRequest {
  @ApiProperty({ description: 'Email', example: 'consumidor@irango.com' })
  readonly email: string

  @ApiProperty({ description: 'CPF (apenas números)', example: '12345678900' })
  readonly password: string
}
