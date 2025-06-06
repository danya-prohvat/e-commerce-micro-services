import { Body, Controller, Get, HttpCode, Patch, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RMQService } from 'nestjs-rmq';
import { ResponseUserDto } from '../../dtos/users/users.response.dto';
import { RequestUserDto } from '../../dtos/users/users.request.dto';

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
    return null
  }

  @ApiOperation({ summary: 'create user' })
  @ApiOkResponse({ description: 'user', type: ResponseUserDto })
  @HttpCode(201)
  @Post()
  async createUser(@Body() dto: RequestUserDto) {
    return null
  }

  @ApiOperation({ summary: 'update user' })
  @ApiOkResponse({ description: 'user', type: ResponseUserDto })
  @HttpCode(200)
  @Patch()
  async updateUser(@Query('id') id: string, @Body() dto: RequestUserDto) {
    return null
  }
}
