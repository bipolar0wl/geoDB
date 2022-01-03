import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from 'src/books/models/book.model';
import { book2section } from 'src/junction/book2section.model';
import { mineral2section } from 'src/junction/mineral2section.model';
import { structure2section } from 'src/junction/structure2section.model';
import { texture2section } from 'src/junction/texture2section.model';
import { Mineral } from 'src/minerals/models/mineral.model';
import { SectionAnalysis } from 'src/section-analysis/models/section-analysis.model';
import { SectionPhoto } from 'src/section-photo/models/section-photo.model';
import { SectionType } from 'src/section-type/models/section-type.model';
import { Structure } from 'src/structures/models/structure.model';
import { Texture } from 'src/textures/models/texture.model';
import { Section } from './models/section.model';
import { SectionsController } from './sections.controller';
import { SectionsService } from './sections.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Section,
      SectionType,
      SectionPhoto,
      Mineral,
      mineral2section,
      Texture,
      texture2section,
      Structure,
      structure2section,
      SectionAnalysis,
      Book,
      book2section,
    ]),
  ],
  providers: [SectionsService],
  controllers: [SectionsController],
})
export class SectionsModule {}
