import { SectionAnalysisService } from './section-analysis.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SectionAnalysis } from './models/section-analysis.model';
import { SectionAnalysisController } from './section-analysis.controller';

@Module({
  imports: [SequelizeModule.forFeature([SectionAnalysis])],
  providers: [SectionAnalysisService],
  controllers: [SectionAnalysisController],
})
export class SectionAnalysisModule {}
