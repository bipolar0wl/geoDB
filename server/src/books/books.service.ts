import { CreateBookDto } from './dto/create-book.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './models/book.model';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private readonly bookModel: typeof Book,
  ) {}

  create(dto: CreateBookDto): Promise<Book> {
    console.log(dto);
    return this.bookModel.create(dto);
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  findOne(id: string): Promise<Book> {
    return this.bookModel.findByPk(id);
  }
}
