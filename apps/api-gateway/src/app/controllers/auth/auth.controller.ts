import { Controller, Headers, HttpCode, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RMQService } from 'nestjs-rmq';
import { ResponseLoginDto, ResponseTokensDto } from '../../dtos/auth/auth.response.dto';
import { RequestLoginDto, RequestRefreshTokenDto, SignupDto } from '../../dtos/auth/auth.request.dto';
import { ResponseSuccessDto } from '../../dtos/common/common.response.dto';
import { AuthLoginRequestContract, AuthLoginResponseContract, AuthLoginContractName } from '@contracts/auth/login.command';
import { AuthSignupRequestContract, AuthSignupResponseContract, AuthSignupContractName } from '@contracts/auth/signup.command';
import { AuthRefreshTokenRequestContract, AuthRefreshTokenResponseContract, AuthRefreshTokenContractName } from '@contracts/auth/refresh-token.command';
import { AuthLogoutRequestContract, AuthLogoutResponseContract, AuthLogoutContractName } from '@contracts/auth/logout.command';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(
		private readonly rmqService: RMQService
	) {}

  @ApiOperation({ summary: 'login' })
  @ApiOkResponse({ description: 'tokens', type: ResponseLoginDto })
  @HttpCode(200)
  @Post('/login')
  async login(@Body() dto: RequestLoginDto) {
    return await this.rmqService.send<AuthLoginRequestContract, AuthLoginResponseContract>(AuthLoginContractName, dto);
  }

  @ApiOperation({ summary: 'logout' })
  @ApiOkResponse({ description: 'boolean', type: ResponseSuccessDto })
  @HttpCode(200)
  @Post('/logout')
  async logout(@Headers() token: string) {
    return await this.rmqService.send<AuthLogoutRequestContract, AuthLogoutResponseContract>(AuthLogoutContractName, { token });
  }

  @ApiOperation({ summary: 'refresh token' })
  @ApiOkResponse({ description: 'tokens', type: ResponseTokensDto })
  @HttpCode(200)
  @Post('/refresh_token')
  async refreshToken(@Body() dto: RequestRefreshTokenDto) {
    return await this.rmqService.send<AuthRefreshTokenRequestContract, AuthRefreshTokenResponseContract>(AuthRefreshTokenContractName, dto);
  }

  @ApiOperation({ summary: 'signup' })
  @ApiOkResponse({ description: 'boolean', type: ResponseSuccessDto })
  @HttpCode(200)
  @Post('/signup')
  async signup(@Body() dto: SignupDto) {
    return await this.rmqService.send<AuthSignupRequestContract, AuthSignupResponseContract>(AuthSignupContractName, dto);
  }
}
