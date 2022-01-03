import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Author } from './models/author.model';
import { Book } from 'src/books/models/book.model';
import { author2book } from 'src/junction/author2book.model';

@Module({
  imports: [SequelizeModule.forFeature([Author, Book, author2book])],
  providers: [AuthorsService],
  controllers: [AuthorsController],
})
export class AuthorsModule {}
