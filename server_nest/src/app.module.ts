import { structure2section } from './junction/structure2section.mode';
import { structure2sample } from './junction/structure2sample.model';
import { texture2section } from './junction/texture2section.model';
import { texture2sample } from './junction/texture2sample.model';
import { mineral2section } from './junction/mineral2section.model';
import { mineral2sample } from './junction/mineral2sample.model';
import { substance2section } from './junction/substance2section.mode';
import { substance2sample } from './junction/substance2sample.mode';
import { AnalysisType } from 'src/analysis-type/models/analysis-type.model';
import { SectionAnalysis } from 'src/section-analysis/models/section-analysis.model';
import { SampleAnalysis } from 'src/sample-analysis/models/sample-analysis.model';
import { SectionType } from './section-type/models/section-type.model';
import { SectionPhoto } from './section-photo/models/section-photo.model';
import { SamplePhoto } from './sample-photo/models/sample-photo.model';
import { book2substance } from './junction/book2substance.model';
import { book2structure } from './junction/book2structure.model';
import { book2texture } from './junction/book2texture.model';
import { book2sample } from './junction/book2sample.model';
import { book2section } from './junction/book2section.model';
import { LangType } from './lang-types/models/lang-type.model';
import { author2book } from 'src/junction/author2book.model';
import { Author } from 'src/authors/models/author.model';
import { TagsModule } from './tags/tags.module';
import { User } from './users/models/user.model';
import { Role } from './roles/models/role.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { role2user } from './junction/role2user.model';
import { TextTypesModule } from './text-types/text-types.module';
import { LangTypesModule } from './lang-types/lang-types.module';
import { SamplesModule } from './samples/samples.module';
import { SectionsModule } from './sections/sections.module';
import { SamplePhotoModule } from './sample-photo/sample-photo.module';
import { SectionPhotoModule } from './section-photo/section-photo.module';
import { SectionTypeModule } from './section-type/section-type.module';
import { MineralsModule } from './minerals/minerals.module';
import { TexturesModule } from './textures/textures.module';
import { StructuresModule } from './structures/structures.module';
import { ElementsModule } from './elements/elements.module';
import { SampleAnalysisModule } from './sample-analysis/sample-analysis.module';
import { SectionAnalysisModule } from './section-analysis/section-analysis.module';
import { AnalysisTypeModule } from './analysis-type/analysis-type.module';
import { RolesModule } from './roles/roles.module';
import { BooksModule } from './books/books.module';
import { Book } from './books/models/book.model';
import { SubstanceModule } from './substance/substance.module';
import { Tag } from './tags/models/tag.model';
import { tag2book } from './junction/tag2book.model';
import { TextType } from './text-types/models/text-type.model';
import { book2mineral } from './junction/book2mineral.model';
import { Sample } from './samples/models/sample.model';
import { Section } from './sections/models/section.model';
import { Substance } from './substance/models/substance.model';
import { Mineral } from './minerals/models/mineral.model';
import { Texture } from './textures/models/texture.model';
import { Structure } from './structures/models/structure.model';

@Module({
  imports: [
    TagsModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5433,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'geologDB',
      autoLoadModels: true,
      synchronize: true,
      models: [
        Book,
        Author,
        author2book,
        Tag,
        tag2book,
        LangType,
        TextType,
        book2section,
        book2sample,
        book2mineral,
        book2texture,
        book2structure,
        book2substance,
        Sample,
        SamplePhoto,
        SampleAnalysis,
        Section,
        SectionType,
        SectionPhoto,
        SectionAnalysis,
        AnalysisType,
        Substance,
        substance2sample,
        substance2section,
        Mineral,
        mineral2sample,
        mineral2section,
        Texture,
        texture2sample,
        texture2section,
        Structure,
        structure2sample,
        structure2section,
        User,
        Role,
        role2user,
      ],
    }),
    UsersModule,
    TextTypesModule,
    LangTypesModule,
    SamplesModule,
    SectionsModule,
    SamplePhotoModule,
    SectionPhotoModule,
    SectionTypeModule,
    MineralsModule,
    TexturesModule,
    StructuresModule,
    // ElementsModule,
    SampleAnalysisModule,
    SectionAnalysisModule,
    AnalysisTypeModule,
    RolesModule,
    BooksModule,
    SubstanceModule,
  ],
})
export class AppModule {}
