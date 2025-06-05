import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UsersModule } from './app/users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  await app.init();

  Logger.log(
		`🚀 Users is running`
	);
}

bootstrap();
