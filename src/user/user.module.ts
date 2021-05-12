import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    // TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([UserEntity]),
  ],
})
export class UserModule {}
