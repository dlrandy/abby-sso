import { UserEntity } from '@user/entity/user.entity';
import { UserDto } from '@user/dto/user.dto';

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, account_name, email, real_name, mobile } = data;

  const userDto: UserDto = {
    id,
    account_name,
    email,
    real_name,
    mobile,
  };

  return userDto;
};
