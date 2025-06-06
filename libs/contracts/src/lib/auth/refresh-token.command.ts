export const AuthRefreshTokenContractName = 'auth.refresh-token.command';

export class AuthRefreshTokenRequestContract {
  refreshToken: string;
}

export class AuthRefreshTokenResponseContract {
  token: string;
}
