import { Controller, Get, HttpCode, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('/users')
export class UsersController {

  @ApiOperation({ summary: 'get user by id' })
  @HttpCode(200)
  @Get()
  async getUserById() {
    return null
  }

  @ApiOperation({ summary: 'create user' })
  @HttpCode(201)
  @Post()
  async createUser() {
    return null
  }

  @ApiOperation({ summary: 'update user' })
  @HttpCode(200)
  @Patch()
  async updateUser() {
    return null
  }
}
