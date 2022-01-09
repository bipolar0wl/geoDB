import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSamplePhotoDto } from './dto/create-sample-photo.dto';
import { SamplePhoto } from './models/sample-photo.model';

@Injectable()
export class SamplePhotoService {
  constructor(
    @InjectModel(SamplePhoto)
    private readonly samplePhotoModel: typeof SamplePhoto,
  ) {}

  create(dto: CreateSamplePhotoDto): Promise<SamplePhoto> {
    return this.samplePhotoModel.create(dto);
  }

  async findAll(): Promise<SamplePhoto[]> {
    return this.samplePhotoModel.findAll();
  }

  findOne(id: string): Promise<SamplePhoto> {
    return this.samplePhotoModel.findByPk(id);
  }
}
