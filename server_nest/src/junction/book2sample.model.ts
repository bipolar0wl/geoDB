import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { Sample } from 'src/samples/models/sample.model';

@Table({ tableName: `book2sample`, createdAt: false, updatedAt: false })
export class book2sample extends Model {
  @PrimaryKey
  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  bookId: number;

  @PrimaryKey
  @ForeignKey(() => Sample)
  @Column({ type: DataType.INTEGER })
  sampleId: number;

  @Column({ type: DataType.TEXT })
  notice: string;
}
