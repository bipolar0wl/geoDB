import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Section } from 'src/sections/models/section.model';

@ApiTags(`Фотографии шлифов`)
@Table({ tableName: `sectionPhoto` })
export class SectionPhoto extends Model {
  @ApiProperty({ example: `Снимок 1`, description: `Название фотографии` })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: `1`, description: `ID шлифа` })
  @ForeignKey(() => Section)
  @Column({ type: DataType.NUMBER })
  sectionId: number;

  @ApiProperty({
    example: `Снимок, вид сбоку`,
    description: `Описание фотографии`,
  })
  @Column({ type: DataType.TEXT })
  description: string;

  @ApiProperty({ example: `1.png`, description: `Файл` })
  @Column({ type: DataType.STRING, allowNull: false })
  root: string;

  @BelongsTo(() => Section)
  section: Section;
}
