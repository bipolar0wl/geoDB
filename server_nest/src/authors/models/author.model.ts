import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { author2book } from 'src/junction/author2book.model';

@ApiTags(`Авторы`)
@Table({ tableName: `authors` })
export class Author extends Model {
  @ApiProperty({ example: `Путин В.В.`, description: `ФИО автора` })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  Author: string;

  @BelongsToMany(() => Book, () => author2book)
  books: Book[];
}
