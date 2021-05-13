import { build, fake } from 'test-data-bot';
import { CreateUserDto } from '@user/dto/user.create.dto';

const userBuilder: () => CreateUserDto = build('User').fields({
  account_name: fake((f) => f.finance.accountName()),
  password: fake((f) => f.internet.password()),
  email: fake((f) => f.internet.email()),
  real_name: fake((f) => f.internet.userName()),
  password_salt: fake((f) => f.finance.mask()),
  mobile: fake((f) => f.phone.phoneNumber()),
});

export { userBuilder };
