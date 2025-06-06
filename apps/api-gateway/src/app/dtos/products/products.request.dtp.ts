import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RequestProductDto {
  @ApiProperty({ example: 'iPhone 14', description: 'Title' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Title must be set' })
  title: string;

  @ApiProperty({ example: 'Apple iPhone 14', description: 'Description' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Description must be set' })
  description: string;

  @ApiProperty({ example: '1000', description: 'Cost' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Cost must be set' })
  cost: string;
}
