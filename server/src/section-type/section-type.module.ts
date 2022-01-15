import { SectionType } from './models/section-type.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SectionTypeService } from './section-type.service';
import { SectionTypeController } from './section-type.controller';
import { Section } from 'src/sections/models/section.model';

@Module({
  imports: [SequelizeModule.forFeature([SectionType, Section])],
  providers: [SectionTypeService],
  controllers: [SectionTypeController],
})
export class SectionTypeModule {}
