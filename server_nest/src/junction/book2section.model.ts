import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { Section } from 'src/sections/models/section.model';

@Table({ tableName: `book2section`, createdAt: false, updatedAt: false })
export class book2section extends Model {
  @PrimaryKey
  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  bookId: number;

  @PrimaryKey
  @ForeignKey(() => Section)
  @Column({ type: DataType.INTEGER })
  sectionId: number;

  @Column({ type: DataType.TEXT })
  notice: string;
}
