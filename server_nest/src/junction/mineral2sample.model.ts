import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Mineral } from 'src/minerals/models/mineral.model';
import { Sample } from 'src/samples/models/sample.model';

@Table({ tableName: `mineral2sample`, createdAt: false, updatedAt: false })
export class mineral2sample extends Model {
  @PrimaryKey
  @ForeignKey(() => Mineral)
  @Column({ type: DataType.INTEGER })
  mineralId: number;

  @PrimaryKey
  @ForeignKey(() => Sample)
  @Column({ type: DataType.INTEGER })
  sampleId: number;
}
