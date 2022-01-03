import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Sample } from 'src/samples/models/sample.model';

@ApiTags(`Фотографии образцов`)
@Table({ tableName: `samplePhoto` })
export class SamplePhoto extends Model {
  @ApiProperty({
    example: `Снимок 1`,
    description: `Название фотографии`,
  })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: `1`, description: `ID образца` })
  @ForeignKey(() => Sample)
  @Column({ type: DataType.INTEGER })
  sampleId: number;

  @ApiProperty({
    example: `Снимок, вид сбоку`,
    description: `Описание фотографии`,
  })
  description: string;

  @ApiProperty({
    example: `1.png`,
    description: `Файл`,
  })
  root: string;

  @BelongsTo(() => Sample)
  sample: Sample;
}
