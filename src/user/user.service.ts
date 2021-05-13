import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from '@user/entity/user.entity';
import { toUserDto } from '@shared/mapper';
import { CreateUserDto } from './dto/user.create.dto';
import { LoginUserDto } from './dto/user.login.dto';
import { comparePasswords } from '@shared/utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async findOne(options?: Record<string, unknown>): Promise<UserDto> {
    const user = await this.userRepo.findOne(options);
    return toUserDto(user);
  }

  async findAll() {
    const users = (await this.userRepo.find()) || [];
    return users.map((it) => toUserDto(it));
  }

  async findByLogin({
    account_name,
    password,
  }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({ where: { account_name } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await comparePasswords(user.password, password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async findByPayload({ account_name }: any): Promise<UserDto> {
    return await this.findOne({ where: { account_name } });
  }

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { account_name, password, email, real_name, password_salt } = userDto;

    // check if the user exists in the db
    const userInDb = await this.userRepo.findOne({ where: { account_name } });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: UserEntity = await this.userRepo.create({
      account_name,
      password,
      email,
      real_name,
      password_salt,
    });

    await this.userRepo.save(user);

    return toUserDto(user);
  }

  private _sanitizeUser(user: UserEntity) {
    delete user.password;
    return user;
  }
}
