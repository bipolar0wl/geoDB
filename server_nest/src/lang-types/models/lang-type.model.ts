import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';

@ApiTags(`Оригинал или перевод`)
@Table({ tableName: `langTypes`, updatedAt: false, createdAt: false })
export class LangType extends Model {
  @ApiProperty({
    example: `Оригинал/Перевод`,
    description: `Оригинал или перевод`,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(() => Book)
  book: Book[];
}
