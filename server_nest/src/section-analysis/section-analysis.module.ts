import { SectionAnalysisService } from './section-analysis.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SectionAnalysis } from './models/section-analysis.model';
import { SectionAnalysisController } from './section-analysis.controller';
import { Section } from 'src/sections/models/section.model';
import { AnalysisType } from 'src/analysis-type/models/analysis-type.model';
import { Substance } from 'src/substance/models/substance.model';
import { substance2section } from 'src/junction/substance2section.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      SectionAnalysis,
      Section,
      AnalysisType,
      Substance,
      substance2section,
    ]),
  ],
  providers: [SectionAnalysisService],
  controllers: [SectionAnalysisController],
})
export class SectionAnalysisModule {}
