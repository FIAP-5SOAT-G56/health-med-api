import { ApiProperty } from '@nestjs/swagger'

import UserCreateDto from '@/core/domain/dto/input/user-create.dto'

export class CreateUserRequest implements UserCreateDto {
  @ApiProperty({ description: 'Name', example: 'Maine Coon' })
  readonly name: string

  @ApiProperty({ description: 'CPF (apenas números)', example: '12345678900' })
  readonly cpf: string

  @ApiProperty({ description: 'Email', example: 'consumidor@irango.com' })
  readonly email: string

  @ApiProperty({ description: 'Email', example: 'consumidor@irango.com' })
  readonly password: string
}
