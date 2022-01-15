import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSectionAnalysisDto } from './dto/section-analysis.dto';
import { SectionAnalysis } from './models/section-analysis.model';

@Injectable()
export class SectionAnalysisService {
  constructor(
    @InjectModel(SectionAnalysis)
    private readonly sectionAnalysisModel: typeof SectionAnalysis,
  ) {}

  create(dto: CreateSectionAnalysisDto): Promise<SectionAnalysis> {
    return this.sectionAnalysisModel.create(dto);
  }

  async findAll(): Promise<SectionAnalysis[]> {
    return this.sectionAnalysisModel.findAll();
  }

  findOne(id: string): Promise<SectionAnalysis> {
    return this.sectionAnalysisModel.findByPk(id);
  }
}
