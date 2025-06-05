import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('/products')
export class ProductsController {

  @ApiOperation({ summary: 'get all products' })
  @HttpCode(200)
  @Get('/all')
  async getProducts() {     
    return null
  }

  @ApiOperation({ summary: 'get all products by user id' })
  @HttpCode(200)
  @Get('all/by-user')
  async getProductsByUserId() {
    return null
  }

  @ApiOperation({ summary: 'get all products by category id' })
  @HttpCode(200)
  @Get('all/by-category')
  async getProductsByCategoryId() {
    return null
  }

  @ApiOperation({ summary: 'get product by id' })
  @HttpCode(200)
  @Get()
  async getProductById() {
    return null
  }

  @ApiOperation({ summary: 'create product' })
  @HttpCode(201)
  @Post()
  async createProduct() {
    return null
  }

  @ApiOperation({ summary: 'update product' })
  @HttpCode(200)
  @Patch()
  async updateProduct() {
    return null

  }

  @ApiOperation({ summary: 'delete product' })
  @HttpCode(200)
  @Delete()
  async deleteProduct() {
    return null
  }
}
