import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findByPk(id);
  }

  async findByLogin(login: string): Promise<User | undefined> {
    return await this.userModel.findOne({
      where: {
        login,
      },
    });
  }

  // async login()

  async update(updateUserDto: UpdateUserDto, id: string) {
    return await this.userModel.update(updateUserDto, { where: { id } });
  }

  async remove(id: string): Promise<void> {
    const user = await this.userModel.findByPk(id);
    await user.destroy();
  }
}
