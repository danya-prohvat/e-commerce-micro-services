export const AuthLoginContractName = 'auth.login.command';

export class AuthLoginRequestContract {
  email: string;
  password: string;
}

export class AuthLoginResponseContract {
  accessToken: string;
  refreshToken: string;
}
