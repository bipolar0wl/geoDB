import { Substance } from 'src/substance/models/substance.model';
import { Section } from 'src/sections/models/section.model';
import { substance2section } from 'src/junction/substance2section.model';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
  BelongsToMany,
  ForeignKey,
} from 'sequelize-typescript';
import { AnalysisType } from 'src/analysis-type/models/analysis-type.model';

@ApiTags(`Анализы шлифа`)
@Table({ tableName: `sectionAnalysis` })
export class SectionAnalysis extends Model {
  @ApiProperty({ example: `1`, description: `ID шлифа` })
  @ForeignKey(() => Section)
  @Column({ type: DataType.INTEGER })
  sectionID: number;

  @ApiProperty({ example: `1`, description: `ID типа` })
  @ForeignKey(() => AnalysisType)
  @Column({ type: DataType.INTEGER })
  typeId: number;

  @ApiProperty({ example: `а`, description: `Название анализа` })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsTo(() => Section)
  section: Section;

  @BelongsTo(() => AnalysisType)
  analysisType: AnalysisType;

  @BelongsToMany(() => Substance, () => substance2section)
  Substance: Substance[];
}
