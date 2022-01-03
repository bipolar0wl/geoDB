import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Author } from 'src/authors/models/author.model';
import { Book } from 'src/books/models/book.model';

@Table({ tableName: `author2book`, createdAt: false, updatedAt: false })
export class author2book extends Model {

  @PrimaryKey
  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  bookId: number;

  @PrimaryKey
  @ForeignKey(() => Author)
  @Column({ type: DataType.INTEGER })
  authorId: number;
}
