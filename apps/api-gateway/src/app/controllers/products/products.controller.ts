import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
  Query,
  Body,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RMQService } from 'nestjs-rmq';
import { ResponseProductDto } from '../../dtos/products/products.response.dto';
import { ResponseSuccessDto } from '../../dtos/common/common.response.dto';
import { RequestPaginationQueryDto } from '../../dtos/common/common.request.dto';
import { RequestProductDto } from '../../dtos/products/products.request.dtp';

@ApiTags('Products')
@Controller('/products')
export class ProductsController {
  constructor(
		private readonly rmqService: RMQService
	) {}

  @ApiOperation({ summary: 'get all products' })
  @ApiOkResponse({ description: 'products', type: [ResponseProductDto] })
  @HttpCode(200)
  @Get('/all')
  async getProducts(@Query() paginationQuery: RequestPaginationQueryDto) {     
    return null
  }

  @ApiOperation({ summary: 'get all products by user id' })
  @ApiOkResponse({ description: 'products', type: ResponseProductDto })
  @HttpCode(200)
  @Get('all/by-user')
  async getProductsByUserId( @Query('id') userId: string, @Query() paginationQuery: RequestPaginationQueryDto) {
    return null
  }

  @ApiOperation({ summary: 'get all products by category id' })
  @ApiOkResponse({ description: 'products', type: ResponseProductDto })
  @HttpCode(200)
  @Get('all/by-category')
  async getProductsByCategoryId( @Query('id') categoryId: string, @Query() paginationQuery: RequestPaginationQueryDto) {
    return null
  }

  @ApiOperation({ summary: 'get product by id' })
  @ApiOkResponse({ description: 'product', type: ResponseProductDto })
  @HttpCode(200)
  @Get()
  async getProductById(@Query('id') id: string) {
    return null
  }

  @ApiOperation({ summary: 'create product' })
  @ApiOkResponse({ description: 'product', type: ResponseProductDto })
  @HttpCode(201)
  @Post()
  async createProduct(@Body() dto: RequestProductDto) {
    return null
  }

  @ApiOperation({ summary: 'update product' })
  @ApiOkResponse({ description: 'product', type: ResponseProductDto })
  @HttpCode(200)
  @Patch()
  async updateProduct(@Query('id') id: string, @Body() dto: RequestProductDto) {
    return null
  }

  @ApiOperation({ summary: 'delete product' })
  @ApiOkResponse({ description: 'boolean', type: ResponseSuccessDto })
  @HttpCode(200)
  @Delete()
  async deleteProduct(@Query('id') id: string) {
    return null
  }
}
