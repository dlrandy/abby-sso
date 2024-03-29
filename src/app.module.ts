import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@database/database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import * as Joi from 'joi';

@Module({
  imports: [DatabaseModule, AuthenticationModule],
})
export class AppModule {
  static forRoot(): DynamicModule {
    return {
      module: AppModule,
      controllers: [AppController],
      imports: [
        UserModule,
        ConfigModule.forRoot({
          validationSchema: Joi.object({
            POSTGRES_HOST: Joi.string().required(),
            POSTGRES_PORT: Joi.number().required(),
            POSTGRES_USER: Joi.string().required(),
            POSTGRES_PASSWORD: Joi.string().required(),
            POSTGRES_DB: Joi.string().required(),
            PORT: Joi.number(),
            JWT_SECRET: Joi.string().required(),
            JWT_EXPIRATION_TIME: Joi.string().required(),
          }),
        }),
      ],
      providers: [AppService],
    };
  }
}
