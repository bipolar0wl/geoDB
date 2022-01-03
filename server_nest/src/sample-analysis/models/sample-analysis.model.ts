import { Sample } from 'src/samples/models/sample.model';
import { Substance } from 'src/substance/models/substance.model';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { AnalysisType } from 'src/analysis-type/models/analysis-type.model';
import { substance2sample } from 'src/junction/substance2sample.model';

@ApiTags(`Анализы образца`)
@Table({ tableName: `sampleAnalysis` })
export class SampleAnalysis extends Model {
  @ApiProperty({ example: `1`, description: `ID образца` })
  @ForeignKey(() => Sample)
  @Column({ type: DataType.INTEGER })
  sampleID: number;

  @ApiProperty({ example: `1`, description: `ID типа` })
  @ForeignKey(() => AnalysisType)
  @Column({ type: DataType.INTEGER })
  typeId: number;

  @ApiProperty({ example: `а`, description: `Название анализа` })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsTo(() => Sample)
  sample: Sample;

  @BelongsTo(() => AnalysisType)
  analysisType: AnalysisType;

  @BelongsToMany(() => Substance, () => substance2sample)
  substance: Substance[];
}
