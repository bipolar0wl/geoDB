import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SampleAnalysis } from 'src/sample-analysis/models/sample-analysis.model';
import { SectionAnalysis } from 'src/section-analysis/models/section-analysis.model';
import { AnalysisTypeController } from './analysis-type.controller';
import { AnalysisTypeService } from './analysis-type.service';
import { AnalysisType } from './models/analysis-type.model';

@Module({
  imports: [
    SequelizeModule.forFeature([AnalysisType, SampleAnalysis, SectionAnalysis]),
  ],
  providers: [AnalysisTypeService],
  controllers: [AnalysisTypeController],
})
export class AnalysisTypeModule {}
