import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { Tag } from 'src/tags/models/tag.model';

@Table({ tableName: `tag2book`, createdAt: false, updatedAt: false })
export class tag2book extends Model {
  @PrimaryKey
  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  bookId: number;

  @PrimaryKey
  @ForeignKey(() => Tag)
  @Column({ type: DataType.INTEGER })
  tagId: number;
}
