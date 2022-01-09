import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatelangTypeDto } from './dto/create-lang-type.dto';
import { LangType } from './models/lang-type.model';

@Injectable()
export class LangTypesService {
  constructor(
    @InjectModel(LangType)
    private readonly langTypeModel: typeof LangType,
  ) {}

  create(dto: CreatelangTypeDto): Promise<LangType> {
    return this.langTypeModel.create(dto);
  }

  async findAll(): Promise<LangType[]> {
    return this.langTypeModel.findAll();
  }

  findOne(id: string): Promise<LangType> {
    return this.langTypeModel.findByPk(id);
  }
}
