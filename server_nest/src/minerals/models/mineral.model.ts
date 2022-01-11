import { Section } from 'src/sections/models/section.model';
import { mineral2sample } from './../../junction/mineral2sample.model';
import { book2mineral } from './../../junction/book2mineral.model';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { Sample } from 'src/samples/models/sample.model';
import { mineral2section } from 'src/junction/mineral2section.model';

@ApiTags(`Минералы`)
@Table({ tableName: `minerals`, updatedAt: false, createdAt: false })
export class Mineral extends Model {
  @ApiProperty({ example: `Кварц`, description: `Минерал` })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @BelongsToMany(() => Sample, () => mineral2sample)
  sample: Sample[];

  @BelongsToMany(() => Section, () => mineral2section)
  section: Section[];

  @BelongsToMany(() => Book, () => book2mineral)
  book: Book[];
}
