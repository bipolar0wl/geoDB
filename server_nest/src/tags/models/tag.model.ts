import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { tag2book } from 'src/junction/tag2book.model';

@ApiTags(`Теги`)
@Table({ tableName: `tags` })
export class Tag extends Model {
  @ApiProperty({ example: `horny`, description: `Тег` })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @BelongsToMany(() => Book, () => tag2book)
  book: Book[];
}
