export const UpdateUserContractName = 'users.update.command';

export class UpdateUserRequestContract {
  name: string;
  last_name: string;
  password: string;
  email: string;
  birth_date: string;
  phone: string;}

export class UpdateUserResponseContract {
  name: string;
  last_name: string;
  password: string;
  email: string;
  birth_date: string;
  phone: string;
}
