export const GetProductByCategoryIdContractName = 'products.get-product-by-category-id.query';

export class GetProductByCategoryIdRequestContract {
  categoryId: string;
}

export class GetProductByCategoryIdResponseContract {
  title: string;
  description: string;
  cost: string;
}
