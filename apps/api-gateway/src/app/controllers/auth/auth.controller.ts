import { Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {

  @ApiOperation({ summary: 'login' })
  @HttpCode(200)
  @Post('/login')
  async login() {
    return null
  }

  @ApiOperation({ summary: 'logout' })
  @HttpCode(200)
  @Post('/logout')
  async logout() {
    return null
  }

  @ApiOperation({ summary: 'refresh token' })
  @HttpCode(200)
  @Post('/refresh_token')
  async refreshToken() {
    return null
  }

  @ApiOperation({ summary: 'signup' })
  @HttpCode(200)
  @Post('/signup')
  async signup() {
    return null
  }
}
