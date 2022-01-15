import { SamplePhoto } from '../sample-photo/models/sample-photo.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sample } from './models/sample.model';
import { SamplesController } from './samples.controller';
import { SamplesService } from './samples.service';
import { SampleAnalysis } from 'src/sample-analysis/models/sample-analysis.model';
import { Section } from 'src/sections/models/section.model';
import { User } from 'src/users/models/user.model';
import { Book } from 'src/books/models/book.model';
import { book2sample } from 'src/junction/book2sample.model';
import { Mineral } from 'src/minerals/models/mineral.model';
import { mineral2sample } from 'src/junction/mineral2sample.model';
import { Texture } from 'src/textures/models/texture.model';
import { texture2sample } from 'src/junction/texture2sample.model';
import { Structure } from 'src/structures/models/structure.model';
import { structure2sample } from 'src/junction/structure2sample.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Sample,
      SamplePhoto,
      SampleAnalysis,
      Section,
      Mineral,
      mineral2sample,
      Texture,
      texture2sample,
      Structure,
      structure2sample,
      User,
      Book,
      book2sample,
    ]),
  ],
  providers: [SamplesService],
  controllers: [SamplesController],
})
export class SamplesModule {}
