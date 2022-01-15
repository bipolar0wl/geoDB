import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnalysisType } from 'src/analysis-type/models/analysis-type.model';
import { substance2sample } from 'src/junction/substance2sample.model';
import { Sample } from 'src/samples/models/sample.model';
import { Substance } from 'src/substance/models/substance.model';
import { SampleAnalysis } from './models/sample-analysis.model';
import { SampleAnalysisController } from './sample-analysis.controller';
import { SampleAnalysisService } from './sample-analysis.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      SampleAnalysis,
      Sample,
      AnalysisType,
      Substance,
      substance2sample,
    ]),
  ],
  providers: [SampleAnalysisService],
  controllers: [SampleAnalysisController],
})
export class SampleAnalysisModule {}
