import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './app/api-gateway.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  const swaggerConfig = new DocumentBuilder()
  .setTitle('E-commerce')
  .setDescription('REST API docs')
  .setVersion('1.0.0')
  .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`api/docs`, app, swaggerDocument);

  const port = process.env.PORT || 3001;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/api`
  );
}

bootstrap();
