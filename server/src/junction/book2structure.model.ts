import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { Structure } from 'src/structures/models/structure.model';

@Table({ tableName: `book2structure`, createdAt: false, updatedAt: false })
export class book2structure extends Model {
  @PrimaryKey
  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  bookId: number;

  @PrimaryKey
  @ForeignKey(() => Structure)
  @Column({ type: DataType.INTEGER })
  structureId: number;

  @Column({ type: DataType.TEXT })
  notice: string;
}
