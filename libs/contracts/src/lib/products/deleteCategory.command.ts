export const DeleteProductContractName = 'products.delete-product.command';

export class DeleteProductRequestContract {
  id: string;
}

export class DeleteProductResponseContract {
  success: boolean;
}
