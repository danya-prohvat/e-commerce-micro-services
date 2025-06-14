export const GetProductByUserIdContractName = 'products.get-product-by-user-id.query';

export class GetProductByUserIdRequestContract {
  userId: string;
}

export class GetProductByUserIdResponseContract {
  title: string;
  description: string;
  cost: string;
}
