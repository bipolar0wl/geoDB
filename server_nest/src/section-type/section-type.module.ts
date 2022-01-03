import { SectionType } from './models/section-type.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SectionTypeService } from './section-type.service';
import { SectionTypeController } from './section-type.controller';

@Module({
  imports: [SequelizeModule.forFeature([SectionType])],
  providers: [SectionTypeService],
  controllers: [SectionTypeController],
})
export class SectionTypeModule {}
