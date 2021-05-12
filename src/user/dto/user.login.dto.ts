import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  readonly account_name: string;

  @IsNotEmpty()
  readonly password: string;
}
