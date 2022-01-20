import { CreateBookDto } from './dto/create-book.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { TextType } from 'src/text-types/models/text-type.model';
import { Author } from 'src/authors/models/author.model';
import { Op } from 'sequelize';
import sequelize from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private readonly bookModel: typeof Book,
  ) {}

  create(dto: CreateBookDto): Promise<Book> {
    return this.bookModel.create(dto);
  }

  // async findAll(query) {
  //   const [results, metadata] = await this.bookModel.sequelize.query(
  //     'SELECT id, name FROM books',
  //   );
  //   return results;
  // }

  async findAll(query) {
    // for (const i in query) {
    //   console.log(query)
    // }
    // console.log(query);
    const { count, rows } = await this.bookModel.findAndCountAll({
      where: {
        // name: { [Op.iLike]: `%${query.name}%` || `` },
        // // author: {},
        // // year: { [Op.substring]: `` },
        // // TextType: {},
        // publisher: { [Op.iLike]: `%${query.publisher}%` || `` },
        // // DOI: { [Op.iLike]: `%${query.DOI}%` || `` },
        // // DOI: (query.publisher ? 1 : 0),
        // DOI: { [Op.iLike]: `%${query.DOI}%` || ``},
      },
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
    return { data: rows, allCount: count };
  }

  findOne(id: string): Promise<Book> {
    return this.bookModel.findByPk(id);
  }
}
