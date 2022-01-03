import { substance2sample } from '../../junction/substance2sample.model';
import { SampleAnalysis } from 'src/sample-analysis/models/sample-analysis.model';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { book2substance } from 'src/junction/book2substance.model';
import { SectionAnalysis } from 'src/section-analysis/models/section-analysis.model';
import { substance2section } from 'src/junction/substance2section.model';

@ApiTags(`Химический элемент`)
@Table({ tableName: `substances` })
export class Substance extends Model {
  @ApiProperty({ example: `Na2O`, description: `Формула элемента` })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  formula: string;

  @ApiProperty({ example: `Оксид натрия`, description: `Название элемента` })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: `61,9789`, description: `Масса` })
  @Column({ type: DataType.DECIMAL })
  mass: number;

  @BelongsToMany(() => SampleAnalysis, () => substance2sample)
  sampleAnalysis: SampleAnalysis[];

  @BelongsToMany(() => SectionAnalysis, () => substance2section)
  sectionAnalysis: SectionAnalysis[];

  @BelongsToMany(() => Book, () => book2substance)
  book: Book[];
}
