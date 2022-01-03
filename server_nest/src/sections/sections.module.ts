import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Section } from './models/section.model';
import { SectionsController } from './sections.controller';
import { SectionsService } from './sections.service';

@Module({
  imports: [SequelizeModule.forFeature([Section])],
  providers: [SectionsService],
  controllers: [SectionsController],
})
export class SectionsModule {}
