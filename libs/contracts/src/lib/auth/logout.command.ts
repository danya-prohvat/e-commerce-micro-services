export const AuthLogoutContractName = 'auth.logout.command';

export class AuthLogoutRequestContract {
  token: string;
}

export class AuthLogoutResponseContract {
  success: boolean;
}
