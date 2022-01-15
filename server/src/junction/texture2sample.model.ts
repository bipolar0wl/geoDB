import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Texture } from 'src/textures/models/texture.model';
import { Sample } from 'src/samples/models/sample.model';

@Table({ tableName: `texture2sample`, createdAt: false, updatedAt: false })
export class texture2sample extends Model {
  @PrimaryKey
  @ForeignKey(() => Texture)
  @Column({ type: DataType.INTEGER })
  textureId: number;

  @PrimaryKey
  @ForeignKey(() => Sample)
  @Column({ type: DataType.INTEGER })
  sampleId: number;
}
