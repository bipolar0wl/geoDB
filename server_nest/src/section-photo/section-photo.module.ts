import { SectionPhoto } from './models/section-photo.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SectionPhotoService } from './section-photo.service';
import { SectionPhotoController } from './section-photo.controller';

@Module({
  imports: [SequelizeModule.forFeature([SectionPhoto])],
  providers: [SectionPhotoService],
  controllers: [SectionPhotoController],
})
export class SectionPhotoModule {}
