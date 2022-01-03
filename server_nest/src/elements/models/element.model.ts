import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@ApiTags(`Элементы`)
@Table({ tableName: `elements` })
export class Element extends Model<Element> {
  @ApiProperty({
    example: `H`,
    description: `Водород`,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
}
