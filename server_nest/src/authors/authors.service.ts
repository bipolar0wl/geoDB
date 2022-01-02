import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Author)
    private readonly authorModel: typeof Author,
  ) {}

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorModel.create(createAuthorDto);
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.findAll();
  }

  findOne(id: string): Promise<Author> {
    return this.authorModel.findByPk(id);
  }

  findByName(name: string): Promise<Author> {
    return this.authorModel.findOne({
      where: {
        name,
      },
    });
  }

  async update(updateUserDto: UpdateAuthorDto, id: string) {
    return this.authorModel.update(updateUserDto, { where: { id } });
  }

  async remove(id: string): Promise<void> {
    const user = await this.authorModel.findByPk(id);
    await user.destroy();
  }
}
