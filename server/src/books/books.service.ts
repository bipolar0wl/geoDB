import { CreateBookDto } from './dto/create-book.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { TextType } from 'src/text-types/models/text-type.model';
import { Author } from 'src/authors/models/author.model';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private readonly bookModel: typeof Book,
  ) {}

  create(dto: CreateBookDto): Promise<Book> {
    return this.bookModel.create(dto);
  }

  // async findAll() {
  //   const [results, metadata] = await this.bookModel.sequelize.query(
  //     'SELECT id, name,  FROM books',
  //   );
  //   return results;
  // }

  async findAll(): Promise<Book[]> {
    return this.bookModel.findAll({
      include: [
        {
          model: TextType,
          attributes: ['name'],
          required: false,
        },
        {
          model: Author,
          attributes: ['name'],
          order: ['order', 'DESC'],
          // limit: 1, // limit не работает в many-to-many
          required: false,
        },
      ],
      offset: 0,
      limit: 10,
      attributes: ['id', 'name', 'year', 'publisher', 'DOI'],
    });
  }

  findOne(id: string): Promise<Book> {
    return this.bookModel.findByPk(id);
  }
}
