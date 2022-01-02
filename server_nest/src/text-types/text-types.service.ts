import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTextTypeDto } from './dto/create-textType.dto';
import { TextType } from './models/textType.model';

@Injectable()
export class TextTypesService {
  constructor(
    @InjectModel(TextType)
    private readonly textTypeModel: typeof TextType,
  ) {}

  async create(createTextTypeDto: CreateTextTypeDto): Promise<TextType> {
    return this.textTypeModel.create(createTextTypeDto)
  }

  async findAll(): Promise<TextType[]> {
    return this.textTypeModel.findAll();
  }

  findOne(id: string): Promise<TextType> {
    return this.textTypeModel.findByPk(id);
  }
}
