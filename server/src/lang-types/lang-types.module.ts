import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from 'src/books/models/book.model';
import { LangTypesController } from './lang-types.controller';
import { LangTypesService } from './lang-types.service';
import { LangType } from './models/lang-type.model';

@Module({
  imports: [SequelizeModule.forFeature([LangType, Book])],
  providers: [LangTypesService],
  controllers: [LangTypesController],
})
export class LangTypesModule {}
