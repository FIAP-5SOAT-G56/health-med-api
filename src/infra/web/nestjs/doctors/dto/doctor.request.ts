import { ApiProperty } from '@nestjs/swagger'


export default class DoctorRequest  {
  @ApiProperty({ description: 'Crm', example: 'picanha' })
  readonly crm: string

  @ApiProperty({ description: 'URL da Imagem do Ingrediente', required: false, example: 'https://imagem/imagem.png' })
  readonly userId: number
}
