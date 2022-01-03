import { MineralsController } from './minerals.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MineralsService } from './minerals.service';
import { Mineral } from './models/mineral.model';

@Module({
  imports: [SequelizeModule.forFeature([Mineral])],
  providers: [MineralsService],
  controllers: [MineralsController],
})
export class MineralsModule {}
