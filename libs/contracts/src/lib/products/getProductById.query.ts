export const GetProductByIdContractName = 'products.get-product-by-id.query';

export class GetProductByIdRequestContract {
  id: string;
}

export class GetProductByIdResponseContract {
  title: string;
  description: string;
  cost: string;
}
