import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

  //Global pipelines
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );

  //Init global middlewares
  app.use(helmet());
  //Rate limits
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000000, // limit each IP to 100 requests per windowMs
    }),
  );

  let origin = null;
  if (process.env.CORS_ORIGIN) {
  
    const arr = process.env.CORS_ORIGIN.split(',');

    while ((arr.length > 0) && (arr[0].trim() === '')) {
      arr.splice(0, 1);
    }

    while ((arr.length > 0) && (arr[arr.length - 1].trim() === '')) {
      arr.splice(arr.length - 1, 1);
    }

    origin = arr;
  } else {
    origin = [
      'http://localhost:4200',
      'http://localhost:4201',
      'http://localhost:4202'
    ];
  }

  app.enableCors({
    origin
  });

  const port = parseInt(process.env.PORT) || 3000;
  await app.listen(port);
}
bootstrap();
