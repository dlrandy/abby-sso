import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot());
  app.use(cookieParser());
  await app.listen(3000);
  console.log('监听3000');
}
bootstrap();
