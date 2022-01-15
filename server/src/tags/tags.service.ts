import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './models/tag.model';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag)
    private readonly tagModel: typeof Tag,
  ) {}

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    return await this.tagModel.create(createTagDto);
  }

  async findAll(): Promise<Tag[]> {
    return this.tagModel.findAll();
  }

  findByName(name: string): Promise<Tag> {
    return this.tagModel.findOne({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
  }
}
