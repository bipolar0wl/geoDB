import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { book2structure } from 'src/junction/book2structure.model';
import { structure2sample } from 'src/junction/structure2sample.model';
import { structure2section } from 'src/junction/structure2section.model';
import { Sample } from 'src/samples/models/sample.model';
import { Section } from 'src/sections/models/section.model';

@ApiTags(`Струкртура`)
@Table({ tableName: `structures`, updatedAt: false, createdAt: false })
export class Structure extends Model {
  @ApiProperty({ example: `а`, description: `Название структуры` })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @BelongsToMany(() => Sample, () => structure2sample)
  sample: Sample[];

  @BelongsToMany(() => Section, () => structure2section)
  section: Section[];

  @BelongsToMany(() => Book, () => book2structure)
  book: Book[];
}
