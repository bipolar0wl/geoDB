import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { Texture } from 'src/textures/models/texture.model';

@Table({ tableName: `book2texture`, createdAt: false, updatedAt: false })
export class book2texture extends Model {

  @PrimaryKey
  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  bookId: number;

  @PrimaryKey
  @ForeignKey(() => Texture)
  @Column({ type: DataType.INTEGER })
  textureId: number;

  @Column({ type: DataType.TEXT })
  notice: string;
}
