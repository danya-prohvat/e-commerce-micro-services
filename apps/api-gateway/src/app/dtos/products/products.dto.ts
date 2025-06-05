import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({ example: 'iPhone 14', description: 'Title' })
  title: string;

  @ApiProperty({ example: 'Apple iPhone 14', description: 'Description' })
  description: string;

  @ApiProperty({ example: '1000', description: 'Cost' })
  cost: string;
}
