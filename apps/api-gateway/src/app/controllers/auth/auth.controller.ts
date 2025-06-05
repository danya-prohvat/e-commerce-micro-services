import { Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RMQService } from 'nestjs-rmq';
 
// import { AuthLoginRequestContract, AuthLoginResponseContract, AuthLoginContractName } from '../../../../../../libs/contracts/dtos/auth/auth.login';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(
		private readonly rmqService: RMQService
	) {}

  @ApiOperation({ summary: 'login' })
  @ApiOkResponse({ description: 'tokens', type: [] })
  @HttpCode(200)
  @Post('/login')
  async login() {
    // return await this.rmqService.send<AuthLoginRequestContract, AuthLoginResponseContract>(AuthLoginContractName, {
    //   email: 'test@test.com',
    //   password: '123456'
    // });

    return null
  }

  @ApiOperation({ summary: 'logout' })
  @ApiOkResponse({ description: 'boolean', type: [] })
  @HttpCode(200)
  @Post('/logout')
  async logout() {
    // return await this.rmqService.send<AccountRegister.Request, AccountRegister.Response>(AccountRegister.topic, dto, { headers: { requestId: 'adad' } });
    return null
  }

  @ApiOperation({ summary: 'refresh token' })
  @ApiOkResponse({ description: 'tokens', type: [] })
  @HttpCode(200)
  @Post('/refresh_token')
  async refreshToken() {
    // return await this.rmqService.send<AccountRegister.Request, AccountRegister.Response>(AccountRegister.topic, dto, { headers: { requestId: 'adad' } });
    return null
  }

  @ApiOperation({ summary: 'signup' })
  @ApiOkResponse({ description: 'boolean', type: [] })
  @HttpCode(200)
  @Post('/signup')
  async signup() {
    // return await this.rmqService.send<AccountRegister.Request, AccountRegister.Response>(AccountRegister.topic, dto, { headers: { requestId: 'adad' } });
    return null
  }
}
