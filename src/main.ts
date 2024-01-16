import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cors());

  // app.enableCors({
  //   origin: '*',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  //   optionsSuccessStatus: 204,
  //   allowedHeaders: 'Content-Type, Authorization',
  // });

  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3333);
}

bootstrap();
