export const DeleteCategoryContractName = 'products.delete-category.command';

export class DeleteCategoryRequestContract {
  id: string;
}

export class DeleteCategoryResponseContract {
  success: boolean;
}
