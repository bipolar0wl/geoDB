import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Substance } from './models/substance.model';
import { SubstanceController } from './substance.controller';
import { SubstanceService } from './substance.service';

@Module({
  imports: [SequelizeModule.forFeature([Substance])],
  providers: [SubstanceService],
  controllers: [SubstanceController],
})
export class SubstanceModule {}
