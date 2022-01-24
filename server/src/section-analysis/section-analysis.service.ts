import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSectionAnalysisDto } from './dto/section-analysis.dto';

import { SectionAnalysis } from './models/section-analysis.model';
import { Section } from 'src/sections/models/section.model';
import { Substance } from 'src/substance/models/substance.model';
import { AnalysisType } from 'src/analysis-type/models/analysis-type.model';

@Injectable()
export class SectionAnalysisService {
  constructor(
    @InjectModel(SectionAnalysis)
    private readonly sectionAnalysisModel: typeof SectionAnalysis,
  ) {}

  // create(dto: CreateSectionAnalysisDto): Promise<SectionAnalysis> {
  create(dto: CreateSectionAnalysisDto) {
    console.log(dto);
    return dto;
    // return this.sectionAnalysisModel.create(dto);
  }

  async findAll(): Promise<SectionAnalysis[]> {
    return this.sectionAnalysisModel.findAll({
      include: [],
    });
  }

  findOne(id: string): Promise<SectionAnalysis> {
    return this.sectionAnalysisModel.findByPk(id, {
      include: [
        { model: Section, attributes: ['id', 'name'] },
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
