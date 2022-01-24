import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AnalysisType } from 'src/analysis-type/models/analysis-type.model';
import { Sample } from 'src/samples/models/sample.model';
import { Substance } from 'src/substance/models/substance.model';
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
    return this.sampleAnalysisModel.findByPk(id, {
      include: [
        { model: Sample, attributes: ['id', 'name'] },
        {
          model: Substance,
          attributes: ['id', 'formula', 'name'],
          through: { attributes: ['percent'] },
        },
        { model: AnalysisType },
      ],
      attributes: ['id', 'name'],
    });
  }
}
