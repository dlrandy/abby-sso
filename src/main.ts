import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot());
  await app.listen(3000);
  console.log('监听3000');
}
bootstrap();
