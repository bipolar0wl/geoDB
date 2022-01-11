import { texture2sample } from './../../junction/texture2sample.model';
import { texture2section } from './../../junction/texture2section.model';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { book2texture } from 'src/junction/book2texture.model';
import { Sample } from 'src/samples/models/sample.model';
import { Section } from 'src/sections/models/section.model';

@ApiTags(`Текстуры`)
@Table({ tableName: `textures`, updatedAt: false, createdAt: false })
export class Texture extends Model {
  @ApiProperty({
    example: `Пористая/Мелкопористая/Густопористая`,
    description: `Текстура`,
  })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @BelongsToMany(() => Sample, () => texture2sample)
  sample: Sample[];

  @BelongsToMany(() => Section, () => texture2section)
  section: Section[];

  @BelongsToMany(() => Book, () => book2texture)
  book: Book[];
}
