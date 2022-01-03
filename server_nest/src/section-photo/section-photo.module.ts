import { SectionPhoto } from './models/section-photo.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SectionPhotoService } from './section-photo.service';
import { SectionPhotoController } from './section-photo.controller';
import { Section } from 'src/sections/models/section.model';

@Module({
  imports: [SequelizeModule.forFeature([SectionPhoto, Section])],
  providers: [SectionPhotoService],
  controllers: [SectionPhotoController],
})
export class SectionPhotoModule {}
