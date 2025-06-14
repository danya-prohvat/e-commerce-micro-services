export const GetCategoryByIdContractName = 'products.get-category-by-id.query';

export class GetCategoryByIdRequestContract {
  id: string;
}

export class GetCategoryByIdResponseContract {
  name: string;
  parentId?: string;
}
