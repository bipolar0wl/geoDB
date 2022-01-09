import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSampleAnalysisDto } from './dto/create-sample-analysis.dto';
import { SampleAnalysis } from './models/sample-analysis.model';

@Injectable()
export class SampleAnalysisService {
  constructor(
    @InjectModel(SampleAnalysis)
    private readonly sampleAnalysisModel: typeof SampleAnalysis,
  ) {}

  create(dto: CreateSampleAnalysisDto): Promise<SampleAnalysis> {
    return this.sampleAnalysisModel.create(dto);
  }

  async findAll(): Promise<SampleAnalysis[]> {
    return this.sampleAnalysisModel.findAll();
  }

  findOne(id: string): Promise<SampleAnalysis> {
    return this.sampleAnalysisModel.findByPk(id);
  }
}
