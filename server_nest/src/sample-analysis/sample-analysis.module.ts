import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SampleAnalysis } from './models/sample-analysis.model';
import { SampleAnalysisController } from './sample-analysis.controller';
import { SampleAnalysisService } from './sample-analysis.service';

@Module({
  imports: [SequelizeModule.forFeature([SampleAnalysis])],
  providers: [SampleAnalysisService],
  controllers: [SampleAnalysisController],
})
export class SampleAnalysisModule {}
