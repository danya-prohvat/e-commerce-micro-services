export const UpdateCategoryContractName = 'products.update-category.command';

export class UpdateCategoryRequestContract {
  id: string;
  name: string;
  parentId?: string;
}

export class UpdateCategoryResponseContract {
  name: string;
  parentId?: string;
}
