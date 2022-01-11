import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';

@ApiTags(`Типы литературы`)
@Table({ tableName: `textTypes`, updatedAt: false, createdAt: false })
export class TextType extends Model {
  @ApiProperty({ example: `Статья`, description: `Тип литературы` })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(() => Book)
  book: Book[];
}
