import { NestFactory } from '@nestjs/core';
import { getDbConnectionOptions, runDbMigrations } from '@shared/utils';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.forRoot(await getDbConnectionOptions(process.env.NODE_ENV)),
    {},
  );
  // await runDbMigrations();
  await app.listen(3000);
}
bootstrap();
