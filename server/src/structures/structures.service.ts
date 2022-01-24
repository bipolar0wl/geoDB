import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStructureDto } from './dto/create-structure.dto';
import { Structure } from './models/structure.model';

@Injectable()
export class StructuresService {
  constructor(
    @InjectModel(Structure)
    private readonly structureModel: typeof Structure,
  ) {}

  create(dto: CreateStructureDto): Promise<Structure> {
    return this.structureModel.create(dto);
  }

  async findAll(): Promise<Structure[]> {
    return this.structureModel.findAll();
  }

  findOne(id: string): Promise<Structure> {
    return this.structureModel.findByPk(id);
  }
}
