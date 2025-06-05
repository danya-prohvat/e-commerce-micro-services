import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/products/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [],
  controllers: [CategoriesController,
    ProductsController,
    UsersController,
    AuthController,],
  providers: [
  ],
})
export class AppModule {}
