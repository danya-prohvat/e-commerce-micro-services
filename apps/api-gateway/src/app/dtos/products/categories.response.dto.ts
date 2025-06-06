import { ApiProperty } from '@nestjs/swagger';

export class ResponseCategoryDto {
  @ApiProperty({ example: 'Electronics', description: 'Category name' })
  name: string;

  @ApiProperty({ example: '34', description: 'Parent category id' })
  parentId?: string;
}
