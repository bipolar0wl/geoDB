import { CreateSectionPhotoDto } from './dto/create-section-photo.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SectionPhoto } from './models/section-photo.model';

@Injectable()
export class SectionPhotoService {
  constructor(@InjectModel(SectionPhoto) private sectionPhoto: typeof SectionPhoto){}

  async create(dto: CreateSectionPhotoDto, image:any){
    const fileName = ``
    const sectionPhoto = this.sectionPhoto.create({...dto, image: fileName})
    return await sectionPhoto
  }
}
