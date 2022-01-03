import { StructuresService } from './structures.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Structure } from './models/structure.model';
import { StructuresController } from './structures.controller';

@Module({
  imports: [SequelizeModule.forFeature([Structure])],
  providers: [StructuresService],
  controllers: [StructuresController],
})
export class StructuresModule {}
