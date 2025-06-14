export const CreateCategoryContractName = 'products.create-category.command';

export class CreateCategoryRequestContract {
  name: string;
  parentId?: string;}

export class CreateCategoryResponseContract {
  name: string;
  parentId?: string;
}
