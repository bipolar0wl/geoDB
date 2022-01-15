import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Texture } from 'src/textures/models/texture.model';
import { Section } from 'src/sections/models/section.model';

@Table({ tableName: `texture2section`, createdAt: false, updatedAt: false })
export class texture2section extends Model {
  @PrimaryKey
  @ForeignKey(() => Texture)
  @Column({ type: DataType.INTEGER })
  textureId: number;

  @PrimaryKey
  @ForeignKey(() => Section)
  @Column({ type: DataType.INTEGER })
  sectionId: number;
}
