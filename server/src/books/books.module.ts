import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from 'src/authors/models/author.model';
import { author2book } from 'src/junction/author2book.model';
import { book2mineral } from 'src/junction/book2mineral.model';
import { book2sample } from 'src/junction/book2sample.model';
import { book2section } from 'src/junction/book2section.model';
import { book2structure } from 'src/junction/book2structure.model';
import { book2substance } from 'src/junction/book2substance.model';
import { book2texture } from 'src/junction/book2texture.model';
import { tag2book } from 'src/junction/tag2book.model';
import { LangType } from 'src/lang-types/models/lang-type.model';
import { Tag } from 'src/tags/models/tag.model';
import { TextType } from 'src/text-types/models/text-type.model';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './models/book.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
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
    ]),
  ],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
