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
      models: [User, Role, role2user, Book],
    }),
    UsersModule,
    // TextTypesModule,
    LangTypesModule,
    SamplesModule,
    SectionsModule,
    SamplePhotoModule,
    SectionPhotoModule,
    SectionTypeModule,
    MineralsModule,
    TexturesModule,
    StructuresModule,
    ElementsModule,
    SampleAnalysisModule,
    SectionAnalysisModule,
    AnalysisTypeModule,
    RolesModule,
    BooksModule,
  ],
})
export class AppModule {}
