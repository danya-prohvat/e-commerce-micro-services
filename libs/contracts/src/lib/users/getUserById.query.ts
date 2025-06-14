export const GetUserByIdContractName = 'users.get-by-id.query';

export class GetUserByIdRequestContract {
  id: string;
}

export class GetUserByIdResponseContract {
  name: string;
  last_name: string;
  password: string;
  email: string;
  birth_date: string;
  phone: string;
}
