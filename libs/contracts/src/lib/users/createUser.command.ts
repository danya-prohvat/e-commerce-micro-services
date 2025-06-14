export const CreateUserContractName = 'users.create.command';

export class CreateUserRequestContract {
  name: string;
  last_name: string;
  password: string;
  email: string;
  birth_date: string;
  phone: string;}

export class CreateUserResponseContract {
  name: string;
  last_name: string;
  password: string;
  email: string;
  birth_date: string;
  phone: string;
}
