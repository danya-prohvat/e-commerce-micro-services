import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RequestCategoryDto {
  @ApiProperty({ example: 'Electronics', description: 'Category name' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Name must be set' })
  name: string;

  @ApiProperty({ example: '34', description: 'Parent category id' })
  @IsOptional()
  @IsInt({ message: 'Must be integer' })
  parentId?: string;
}
