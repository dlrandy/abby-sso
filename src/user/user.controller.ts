import { Body, Controller } from '@nestjs/common';
import { UserService } from './user.service';
// TODO 路径引用繁琐问题
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  findOne(@Body() body: any) {
    return this.userService.findOne(body.username);
  }
}
