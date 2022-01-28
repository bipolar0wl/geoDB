import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSampleDto } from './dto/create-sample.dto';
import { Sample } from './models/sample.model';
import { Section } from 'src/sections/models/section.model';
import { SampleAnalysis } from 'src/sample-analysis/models/sample-analysis.model';
import { SamplePhoto } from 'src/sample-photo/models/sample-photo.model';
import { Texture } from 'src/textures/models/texture.model';
import { Structure } from 'src/structures/models/structure.model';
import { Mineral } from 'src/minerals/models/mineral.model';
import { Book } from 'src/books/models/book.model';

@Injectable()
export class SamplesService {
  constructor(
    @InjectModel(Sample)
    private readonly sampleModel: typeof Sample,
  ) {}

  async create(dto: CreateSampleDto): Promise<Sample> {
    console.log(dto);
    return await this.sampleModel.create(dto);
  }

  async findAll() {
    const { count, rows } = await this.sampleModel.findAndCountAll({
      order: [[`id`, `desc`]],
      include: [
        { model: Mineral, attributes: ['id', 'name'] },
        { model: Texture, attributes: ['id', 'name'] },
        { model: Structure, attributes: ['id', 'name'] },
        { model: Section, attributes: ['id', 'name'] },
        { model: SampleAnalysis, attributes: ['id', 'name'] },
      ],
      paranoid: false,
    });
    return { data: rows, allCount: count };
  }

  async findOne(id: string): Promise<Sample> {
    return await this.sampleModel.findByPk(id, {
      include: [
        { model: Section, attributes: ['id', 'name'] },
        { model: Mineral, attributes: ['id', 'name'] },
        { model: Structure, attributes: ['id', 'name'] },
        { model: Texture, attributes: ['id', 'name'] },
        { model: SamplePhoto },
        { model: SampleAnalysis },
        { model: Book, attributes: ['id', 'name'] },
      ],
      attributes: ['id', 'name', 'description', 'notice'],
    });
  }
}
