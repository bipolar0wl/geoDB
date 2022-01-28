import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { SectionPhotoModule } from './section-photo/section-photo.module';
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
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      // port: Number(process.env.DB_PORT) || 5433,
      // username: process.env.DB_USERNAME || 'postgres',
      // password: process.env.DB_PASSWORD || '',
      port: 5432,
      username: 'habrpguser',
      password: 'pgpwd4habr',
      database: process.env.DB_NAME || 'geologDB',
      autoLoadModels: true,
      synchronize: true,
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
    AuthModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
