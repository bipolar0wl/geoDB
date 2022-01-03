import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { Substance } from 'src/substance/models/substance.model';

@Table({ tableName: `book2substance`, createdAt: false, updatedAt: false })
export class book2substance extends Model {
  @PrimaryKey
  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  bookId: number;

  @PrimaryKey
  @ForeignKey(() => Substance)
  @Column({ type: DataType.INTEGER })
  substanceId: number;

  @Column({ type: DataType.TEXT })
  notice: string;
}
