import { MineralsController } from './minerals.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MineralsService } from './minerals.service';
import { Mineral } from './models/mineral.model';
import { Sample } from 'src/samples/models/sample.model';
import { mineral2sample } from 'src/junction/mineral2sample.model';
import { Section } from 'src/sections/models/section.model';
import { mineral2section } from 'src/junction/mineral2section.model';

@Module({
  imports: [SequelizeModule.forFeature([Mineral, Sample, mineral2sample, Section, mineral2section])],
  providers: [MineralsService],
  controllers: [MineralsController],
})
export class MineralsModule {}
