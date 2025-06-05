import { Controller, Get, HttpCode, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('/users')
export class UsersController {

  @ApiOperation({ summary: 'get user by id' })
  @ApiOkResponse({ description: 'user', type: [] })
  @HttpCode(200)
  @Get()
  async getUserById() {
    return null
  }

  @ApiOperation({ summary: 'create user' })
  @ApiOkResponse({ description: 'user', type: [] })
  @HttpCode(201)
  @Post()
  async createUser() {
    return null
  }

  @ApiOperation({ summary: 'update user' })
  @ApiOkResponse({ description: 'user', type: [] })
  @HttpCode(200)
  @Patch()
  async updateUser() {
    return null
  }
}
