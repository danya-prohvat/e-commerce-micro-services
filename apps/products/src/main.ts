import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './app/products.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);

  await app.init();

  Logger.log(
		`🚀 Products is running`
	);
}

bootstrap();
