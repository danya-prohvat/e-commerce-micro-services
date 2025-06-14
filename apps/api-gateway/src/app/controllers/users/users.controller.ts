import { Body, Controller, Get, HttpCode, Patch, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RMQService } from 'nestjs-rmq';
import { ResponseUserDto } from '../../dtos/users/users.response.dto';
import { RequestUserDto } from '../../dtos/users/users.request.dto';
import { GetUserByIdRequestContract, GetUserByIdResponseContract, GetUserByIdContractName, UpdateUserRequestContract, CreateUserRequestContract, UpdateUserResponseContract, CreateUserResponseContract, UpdateUserContractName, CreateUserContractName } from '@contracts/users';

@ApiTags('Users')
@Controller('/users')
export class UsersController {
  constructor(
		private readonly rmqService: RMQService
	) {}

  @ApiOperation({ summary: 'get user by id' })
  @ApiOkResponse({ description: 'user', type: ResponseUserDto })
  @HttpCode(200)
  @Get()
  async getUserById(@Query('id') id: string) {
    return await this.rmqService.send<GetUserByIdRequestContract, GetUserByIdResponseContract>(GetUserByIdContractName, { id });
    
  }

  @ApiOperation({ summary: 'create user' })
  @ApiOkResponse({ description: 'user', type: ResponseUserDto })
  @HttpCode(201)
  @Post()
  async createUser(@Body() dto: RequestUserDto) {
    return await this.rmqService.send<CreateUserRequestContract, CreateUserResponseContract>(CreateUserContractName, dto);
  }

  @ApiOperation({ summary: 'update user' })
  @ApiOkResponse({ description: 'user', type: ResponseUserDto })
  @HttpCode(200)
  @Patch()
  async updateUser(@Query('id') id: string, @Body() dto: RequestUserDto) {
    return await this.rmqService.send<UpdateUserRequestContract, UpdateUserResponseContract>(UpdateUserContractName, dto);
  }
}
