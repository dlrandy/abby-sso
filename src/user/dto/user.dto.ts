import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  account_name: string;

  @IsNotEmpty()
  real_name: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  mobile: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  createdAt?: Date;
}
