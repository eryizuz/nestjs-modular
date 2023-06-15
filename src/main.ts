import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('Platzi API')
    .setDescription('Documentación Platzi API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // URL API
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
