import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sample } from './models/sample.model';
import { SamplesController } from './samples.controller';
import { SamplesService } from './samples.service';

@Module({
  imports: [SequelizeModule.forFeature([Sample])],
  providers: [SamplesService],
  controllers: [SamplesController],
})
export class SamplesModule {}
