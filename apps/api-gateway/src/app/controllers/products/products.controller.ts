import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RMQService } from 'nestjs-rmq';
import { SuccessResponseDto } from '../../dtos/common/common.dto';
import { ProductDto } from '../../dtos/products/products.dto';

@ApiTags('Products')
@Controller('/products')
export class ProductsController {
  constructor(
		private readonly rmqService: RMQService
	) {}

  @ApiOperation({ summary: 'get all products' })
  @ApiOkResponse({ description: 'products', type: [ProductDto] })
  @HttpCode(200)
  @Get('/all')
  async getProducts() {     
    return null
  }

  @ApiOperation({ summary: 'get all products by user id' })
  @ApiOkResponse({ description: 'products', type: ProductDto })
  @HttpCode(200)
  @Get('all/by-user')
  async getProductsByUserId() {
    return null
  }

  @ApiOperation({ summary: 'get all products by category id' })
  @ApiOkResponse({ description: 'products', type: ProductDto })
  @HttpCode(200)
  @Get('all/by-category')
  async getProductsByCategoryId() {
    return null
  }

  @ApiOperation({ summary: 'get product by id' })
  @ApiOkResponse({ description: 'product', type: ProductDto })
  @HttpCode(200)
  @Get()
  async getProductById() {
    return null
  }

  @ApiOperation({ summary: 'create product' })
  @ApiOkResponse({ description: 'product', type: ProductDto })
  @HttpCode(201)
  @Post()
  async createProduct() {
    return null
  }

  @ApiOperation({ summary: 'update product' })
  @ApiOkResponse({ description: 'product', type: ProductDto })
  @HttpCode(200)
  @Patch()
  async updateProduct() {
    return null
  }

  @ApiOperation({ summary: 'delete product' })
  @ApiOkResponse({ description: 'boolean', type: [SuccessResponseDto] })
  @HttpCode(200)
  @Delete()
  async deleteProduct() {
    return null
  }
}
