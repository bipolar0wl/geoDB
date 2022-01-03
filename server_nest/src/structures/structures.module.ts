import { StructuresService } from './structures.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Structure } from './models/structure.model';
import { StructuresController } from './structures.controller';
import { Sample } from 'src/samples/models/sample.model';
import { structure2sample } from 'src/junction/structure2sample.model';
import { Section } from 'src/sections/models/section.model';
import { structure2section } from 'src/junction/structure2section.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Structure,
      Sample,
      structure2sample,
      Section,
      structure2section,
    ]),
  ],
  providers: [StructuresService],
  controllers: [StructuresController],
})
export class StructuresModule {}
