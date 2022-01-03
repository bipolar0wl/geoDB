import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Substance } from 'src/substance/models/substance.model';
import { SectionAnalysis } from 'src/section-analysis/models/section-analysis.model';

@Table({ tableName: `substance2section`, createdAt: false, updatedAt: false })
export class substance2section extends Model {
  @PrimaryKey
  @ForeignKey(() => Substance)
  @Column({ type: DataType.INTEGER })
  substanceId: number;

  @PrimaryKey
  @ForeignKey(() => SectionAnalysis)
  @Column({ type: DataType.INTEGER })
  analysisId: number;

  @Column({ type: DataType.DECIMAL })
  percent: number;
}
