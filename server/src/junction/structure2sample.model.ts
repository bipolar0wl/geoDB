import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Structure } from 'src/structures/models/structure.model';
import { Sample } from 'src/samples/models/sample.model';

@Table({ tableName: `structure2sample`, createdAt: false, updatedAt: false })
export class structure2sample extends Model {
  @PrimaryKey
  @ForeignKey(() => Structure)
  @Column({ type: DataType.INTEGER })
  structureId: number;

  @PrimaryKey
  @ForeignKey(() => Sample)
  @Column({ type: DataType.INTEGER })
  sampleId: number;
}
