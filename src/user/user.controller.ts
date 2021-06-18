import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userBuilder } from '@shared/generate';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  findOne(@Body() body: any) {
    return this.userService.findOne(body.username);
  }

  @Get('all')
  findAll() {
    return this.userService.findAll();
  }

  @Post('')
  createOne() {
    return this.userService.create(userBuilder());
  }
}
