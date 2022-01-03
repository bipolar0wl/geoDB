import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnalysisTypeController } from './analysis-type.controller';
import { AnalysisTypeService } from './analysis-type.service';
import { AnalysisType } from './models/analysis-type.model';

@Module({
  imports: [SequelizeModule.forFeature([AnalysisType])],
  providers: [AnalysisTypeService],
  controllers: [AnalysisTypeController],
})
export class AnalysisTypeModule {}
