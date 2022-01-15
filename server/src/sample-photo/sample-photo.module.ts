import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sample } from 'src/samples/models/sample.model';
import { SamplePhoto } from './models/sample-photo.model';
import { SamplePhotoController } from './sample-photo.controller';
import { SamplePhotoService } from './sample-photo.service';

@Module({
  imports: [SequelizeModule.forFeature([SamplePhoto, Sample])],
  providers: [SamplePhotoService],
  controllers: [SamplePhotoController],
})
export class SamplePhotoModule {}
