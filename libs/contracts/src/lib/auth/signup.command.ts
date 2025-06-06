export const AuthSignupContractName = 'auth.signup.command';

export class AuthSignupRequestContract {
  name: string;
  last_name: string;
  password: string;
  email: string;
  birth_date: string;
  phone: string;
}

export class AuthSignupResponseContract {
  success: boolean;
}
