import { ApiProperty } from '@nestjs/swagger'

import { IsEnum, IsNumber, IsOptional } from 'class-validator'

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class GenericFilter {
  @IsNumber({}, { message: ' "page" atrribute should be a number' })
  @ApiProperty({ description: '"page" atrribute should be a number', example: 1 })
  public page: number

  @IsNumber({}, { message: ' "pageSize" attribute should be a number ' })
  @ApiProperty({ description: '""pageSize" attribute should be a number ', example: 1 })
  public pageSize: number

  @IsOptional()
  @ApiProperty({ description: 'order', example: '', required: false })
  public orderBy?: string

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({ enum: SortOrder, required: false })
  public sortOrder?: SortOrder = SortOrder.DESC
}
