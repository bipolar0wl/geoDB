import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from 'src/books/models/book.model';
import { tag2book } from 'src/junction/tag2book.model';
import { Tag } from './models/tag.model';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

@Module({
  imports: [SequelizeModule.forFeature([Tag, Book, tag2book])],
  providers: [TagsService],
  controllers: [TagsController],
})
export class TagsModule {}
