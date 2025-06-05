import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AuthModule } from './app/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  await app.init();

  Logger.log(
		`🚀 Auth is running`
	);
}

bootstrap();
