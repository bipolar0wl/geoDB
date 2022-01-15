import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { substance2sample } from 'src/junction/substance2sample.model';
import { substance2section } from 'src/junction/substance2section.model';
import { SampleAnalysis } from 'src/sample-analysis/models/sample-analysis.model';
import { SectionAnalysis } from 'src/section-analysis/models/section-analysis.model';
import { Substance } from './models/substance.model';
import { SubstanceController } from './substance.controller';
import { SubstanceService } from './substance.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Substance,
      SampleAnalysis,
      substance2sample,
      SectionAnalysis,
      substance2section,
    ]),
  ],
  providers: [SubstanceService],
  controllers: [SubstanceController],
})
export class SubstanceModule {}
