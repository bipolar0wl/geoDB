import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Substance } from 'src/substance/models/substance.model';
import { SampleAnalysis } from 'src/sample-analysis/models/sample-analysis.model';

@Table({ tableName: `substance2sample`, createdAt: false, updatedAt: false })
export class substance2sample extends Model {
  @PrimaryKey
  @ForeignKey(() => Substance)
  @Column({ type: DataType.INTEGER })
  substanceId: number;

  @PrimaryKey
  @ForeignKey(() => SampleAnalysis)
  @Column({ type: DataType.INTEGER })
  analysisId: number;

  @Column({ type: DataType.DECIMAL })
  percent: number;
}
