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
import { ResponseCategoryDto } from '../../dtos/products/categories.response.dto';
import { ResponseSuccessDto } from '../../dtos/common/common.response.dto';
import { RequestPaginationQueryDto } from '../../dtos/common/common.request.dto';
import { RequestCategoryDto } from '../../dtos/products/categories.request.dto';
import { UpdateCategoryRequestContract, UpdateCategoryResponseContract, UpdateCategoryContractName, DeleteCategoryRequestContract, DeleteCategoryContractName, DeleteCategoryResponseContract, CreateCategoryContractName, CreateCategoryResponseContract, CreateCategoryRequestContract, GetCategoriesContractName, GetCategoriesResponseContract, GetCategoriesRequestContract, GetCategoryTreeContractName, GetCategoryTreeResponseContract, GetCategoryTreeRequestContract, GetCategoryByIdResponseContract, GetCategoryByIdContractName, GetCategoryByIdRequestContract } from '@contracts/products';

@ApiTags('Categories')
@Controller('/categories')
export class CategoriesController {
  constructor(
		private readonly rmqService: RMQService
	) {}

  @ApiOperation({ summary: 'get all categories' })
  @ApiOkResponse({ description: 'categories', type: [ResponseCategoryDto] })
  @HttpCode(200)
  @Get('/all')
  async getCategories(@Query() paginationQuery: RequestPaginationQueryDto) {
    return await this.rmqService.send<GetCategoriesRequestContract, GetCategoriesResponseContract>(GetCategoriesContractName, paginationQuery);
  }

  @ApiOperation({ summary: 'get all categories like tree' })
  // @ApiOkResponse({ description: 'categories tree', type: [] }) // TODO: add type
  @HttpCode(200)
  @Get('/tree')
  async getCategoriesTree() {
    return await this.rmqService.send<GetCategoryTreeRequestContract, GetCategoryTreeResponseContract>(GetCategoryTreeContractName, {});
  }

  @ApiOperation({ summary: 'get category by id' })
  @ApiOkResponse({ description: 'category', type: ResponseCategoryDto })
  @HttpCode(200)
  @Get()
  async getCategoryById(@Query('id') id: string) {
    return await this.rmqService.send<GetCategoryByIdRequestContract, GetCategoryByIdResponseContract>(GetCategoryByIdContractName, { id });
  }

  @ApiOperation({ summary: 'create category' })
  @ApiOkResponse({ description: 'category', type: ResponseCategoryDto })
  @HttpCode(201)
  @Post()
  async createCategory(@Body() dto: RequestCategoryDto) {
    return await this.rmqService.send<CreateCategoryRequestContract, CreateCategoryResponseContract>(CreateCategoryContractName, dto);
  }

  @ApiOperation({ summary: 'update category' })
  @ApiOkResponse({ description: 'category', type: ResponseCategoryDto })
  @HttpCode(200)
  @Patch()
  async updateCategory(@Query('id') id: string, @Body() dto: RequestCategoryDto) {
    return await this.rmqService.send<UpdateCategoryRequestContract, UpdateCategoryResponseContract>(UpdateCategoryContractName, { id, ...dto });
  }

  @ApiOperation({ summary: 'delete category' })
  @ApiOkResponse({ description: 'boolean', type: ResponseSuccessDto })
  @HttpCode(200)
  @Delete()
  async deleteCategory(@Query('id') id: string) {
    return await this.rmqService.send<DeleteCategoryRequestContract, DeleteCategoryResponseContract>(DeleteCategoryContractName, { id });
  }
}
