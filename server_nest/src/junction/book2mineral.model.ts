import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { Mineral } from 'src/minerals/models/mineral.model';

@Table({ tableName: `book2mineral`, createdAt: false, updatedAt: false })
export class book2mineral extends Model {
  @PrimaryKey
  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  bookId: number;

  @PrimaryKey
  @ForeignKey(() => Mineral)
  @Column({ type: DataType.INTEGER })
  mineralId: number;

  @Column({ type: DataType.TEXT })
  notice: string;
}
