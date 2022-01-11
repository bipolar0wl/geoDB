import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  HasMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Section } from 'src/sections/models/section.model';

@ApiTags(`Виды шлифов`)
@Table({ tableName: `sectionTypes`, updatedAt: false, createdAt: false })
export class SectionType extends Model {
  @ApiProperty({
    example: `Со стеклом/Без стекла/Аншлиф`,
    description: `Вид шлифа`,
  })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @HasMany(() => Section)
  section: Section[];
}
