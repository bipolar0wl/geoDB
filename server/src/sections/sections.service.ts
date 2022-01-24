import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Mineral } from 'src/minerals/models/mineral.model';
import { SectionAnalysis } from 'src/section-analysis/models/section-analysis.model';
import { SectionPhoto } from 'src/section-photo/models/section-photo.model';
import { Structure } from 'src/structures/models/structure.model';
import { Texture } from 'src/textures/models/texture.model';
import { CreateSectionDto } from './dto/create-section.dto';
import { Section } from './models/section.model';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(Section)
    private readonly sectionModel: typeof Section,
  ) {}

  async create(dto: CreateSectionDto): Promise<Section> {
    console.log(dto);
    return await this.sectionModel.create(dto);
  }
  async findAll(): Promise<Section[]> {
    return await this.sectionModel.findAll({
      order: [[`id`, `desc`]],
      paranoid: false,
    });
  }

  async findOne(id: string): Promise<Section> {
    return await this.sectionModel.findByPk(id, {
      include: [
        { model: Mineral },
        { model: Structure },
        { model: Texture },
        { model: SectionPhoto },
        { model: SectionAnalysis },
      ],
    });
  }
}
