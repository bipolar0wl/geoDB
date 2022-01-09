import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAnalysisTypeDto } from './dto/create-analysis-type.dto';
import { AnalysisType } from './models/analysis-type.model';

@Injectable()
export class AnalysisTypeService {
  constructor(
    @InjectModel(AnalysisType)
    private readonly analysisTypeModel: typeof AnalysisType,
  ) {}

  // async create(dto: CreateAnalysisTypeDto): Promise<AnalysisType> {
  //   return await this.analysisTypeModel.create(dto);
  // }

  async findAll(query): Promise<AnalysisType[]> {
    return await this.analysisTypeModel.findAll<AnalysisType>({
      attributes: ['id', 'name'],
    });
  }

  async findOne(id: string): Promise<AnalysisType> {
    return await this.analysisTypeModel.findByPk(id);
  }

  async findByName(name: string): Promise<AnalysisType | undefined> {
    return await this.analysisTypeModel.findOne({
      where: { name: name },
    });
  }
}
