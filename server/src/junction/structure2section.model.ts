import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Structure } from 'src/structures/models/structure.model';
import { Section } from 'src/sections/models/section.model';

@Table({ tableName: `structure2section`, createdAt: false, updatedAt: false })
export class structure2section extends Model {
  @PrimaryKey
  @ForeignKey(() => Structure)
  @Column({ type: DataType.INTEGER })
  structureId: number;

  @PrimaryKey
  @ForeignKey(() => Section)
  @Column({ type: DataType.INTEGER })
  sectionId: number;
}
