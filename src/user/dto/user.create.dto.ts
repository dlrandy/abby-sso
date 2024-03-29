import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  account_name: string;

  @IsNotEmpty()
  real_name: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  password_salt: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  mobile: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
