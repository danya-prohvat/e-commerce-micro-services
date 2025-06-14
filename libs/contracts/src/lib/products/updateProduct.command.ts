export const UpdateProductContractName = 'products.update-product.command';

export class UpdateProductRequestContract {
  id: string;
  title: string;
  description: string;
  cost: string;
}

export class UpdateProductResponseContract {
  title: string;
  description: string;
  cost: string;
}
