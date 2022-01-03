import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Mineral } from 'src/minerals/models/mineral.model';
import { Section } from 'src/sections/models/section.model';

@Table({ tableName: `mineral2section`, createdAt: false, updatedAt: false })
export class mineral2section extends Model {
  @PrimaryKey
  @ForeignKey(() => Mineral)
  @Column({ type: DataType.INTEGER })
  mineralId: number;

  @PrimaryKey
  @ForeignKey(() => Section)
  @Column({ type: DataType.INTEGER })
  sectionId: number;
}
