import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('/categories')
export class CategoriesController {

  @ApiOperation({ summary: 'get all categories' })
  @ApiOkResponse({ description: 'categories', type: [] })
  @HttpCode(200)
  @Get('/all')
  async getCategories() {
    return null
  }

  @ApiOperation({ summary: 'get all categories like tree' })
  @ApiOkResponse({ description: 'categories tree', type: [] })
  @HttpCode(200)
  @Get('/tree')
  async getCategoriesTree() {
    return null
  }

  @ApiOperation({ summary: 'get category by id' })
  @ApiOkResponse({ description: 'category', type: [] })
  @HttpCode(200)
  @Get()
  async getCategoryById() {
    return null
  }

  @ApiOperation({ summary: 'create category' })
  @ApiOkResponse({ description: 'category', type: [] })
  @HttpCode(201)
  @Post()
  async createCategory() {
    return null
  }

  @ApiOperation({ summary: 'update category' })
  @ApiOkResponse({ description: 'category', type: [] })
  @HttpCode(200)
  @Patch()
  async updateCategory() {
    return null
  }

  @ApiOperation({ summary: 'delete category' })
  @ApiOkResponse({ description: 'boolean', type: [] })
  @HttpCode(200)
  @Delete()
  async deleteCategory() {
    return null
  }
}
