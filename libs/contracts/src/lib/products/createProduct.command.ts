export const CreateProductContractName = 'products.create-product.command';

export class CreateProductRequestContract {
  title: string;
  description: string;
  cost: string;
}

export class CreateProductResponseContract {
  title: string;
  description: string;
  cost: string;
}
