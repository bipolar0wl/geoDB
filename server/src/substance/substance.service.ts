import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSubstanceDto } from './dto/create-substance.dto';
import { Substance } from './models/substance.model';

@Injectable()
export class SubstanceService {
  constructor(
    @InjectModel(Substance)
    private readonly substanceModel: typeof Substance,
  ) {}

  async create(dto: CreateSubstanceDto): Promise<Substance> {
    return await this.substanceModel.create(dto);
  }

  async findAll(): Promise<Substance[]> {
    return await this.substanceModel.findAll({
      attributes: [`id`, `formula`, `name`],
      order: [
        [`formula`, `asc`],
        [`name`, `asc`],
      ],
      paranoid: false,
    });
  }

  async findOne(id: string): Promise<Substance> {
    return await this.substanceModel.findByPk(id);
  }
}
