import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { SectionPhotoModule } from './section-photo/section-photo.module';
import { book2section } from './junction/book2section.model';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { author2book } from 'src/junction/author2book.model';
import { tag2book } from './junction/tag2book.model';
import { book2sample } from './junction/book2sample.model';
import { book2mineral } from './junction/book2mineral.model';
import { book2texture } from './junction/book2texture.model';
import { book2structure } from './junction/book2structure.model';
import { book2substance } from './junction/book2substance.model';
import { mineral2sample } from './junction/mineral2sample.model';
import { mineral2section } from './junction/mineral2section.model';
import { texture2sample } from './junction/texture2sample.model';
import { texture2section } from './junction/texture2section.model';
import { structure2sample } from './junction/structure2sample.model';
import { structure2section } from './junction/structure2section.model';
import { substance2sample } from './junction/substance2sample.model';
import { substance2section } from './junction/substance2section.model';
import { role2user } from './junction/role2user.model';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { TagsModule } from './tags/tags.module';
import { LangTypesModule } from './lang-types/lang-types.module';
import { TextTypesModule } from './text-types/text-types.module';
import { SamplesModule } from './samples/samples.module';
import { SamplePhotoModule } from './sample-photo/sample-photo.module';
import { SampleAnalysisModule } from './sample-analysis/sample-analysis.module';
import { SectionsModule } from './sections/sections.module';
import { SectionTypeModule } from './section-type/section-type.module';
import { SectionAnalysisModule } from './section-analysis/section-analysis.module';
import { AnalysisTypeModule } from './analysis-type/analysis-type.module';
import { MineralsModule } from './minerals/minerals.module';
import { TexturesModule } from './textures/textures.module';
import { StructuresModule } from './structures/structures.module';
import { SubstanceModule } from './substance/substance.module';

@Module({
  imports: [
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
        // author2book,
        // tag2book,
        // book2section,
        // book2sample,
        // book2mineral,
        // book2texture,
        // book2structure,
        // book2substance,
        // mineral2sample,
        // mineral2section,
        // texture2sample,
        // texture2section,
        // structure2sample,
        // structure2section,
        // substance2sample,
        // substance2section,
        // role2user,
      ],
    }),
    BooksModule,
    AuthorsModule,
    TagsModule,
    LangTypesModule,
    TextTypesModule,
    SamplesModule,
    SamplePhotoModule,
    SampleAnalysisModule,
    SectionsModule,
    SectionTypeModule,
    SectionPhotoModule,
    SectionAnalysisModule,
    AnalysisTypeModule,
    MineralsModule,
    TexturesModule,
    StructuresModule,
    SubstanceModule,
    UsersModule,
    RolesModule,
  ],
})
export class AppModule {}
