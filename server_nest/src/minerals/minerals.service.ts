import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMineralDto } from './dto/create-mineral.dto';
import { Mineral } from './models/mineral.model';

@Injectable()
export class MineralsService {
  constructor(
    @InjectModel(Mineral)
    private readonly mineralModel: typeof Mineral,
  ) {}

  create(dto: CreateMineralDto): Promise<Mineral> {
    return this.mineralModel.create(dto);
  }

  async findAll(): Promise<Mineral[]> {
    return this.mineralModel.findAll();
  }

  findOne(id: string): Promise<Mineral> {
    return this.mineralModel.findByPk(id);
  }
}
