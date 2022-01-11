import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSampleDto } from './dto/create-sample.dto';
import { Sample } from './models/sample.model';

@Injectable()
export class SamplesService {
  constructor(
    @InjectModel(Sample)
    private readonly sampleModel: typeof Sample,
  ) {}

  async create(dto: CreateSampleDto): Promise<Sample> {
    console.log(dto)
    return await this.sampleModel.create(dto);
  }

  async findAll(): Promise<Sample[]> {
    return await this.sampleModel.findAll({
      order: [[`id`, `desc`]],
      paranoid: false,
    });
  }

  async findOne(id: string): Promise<Sample> {
    return await this.sampleModel.findByPk(id);
  }
}
