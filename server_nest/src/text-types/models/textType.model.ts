import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@ApiTags(`Типы литературы`)
@Table({ tableName: `textTypes` })
export class TextType extends Model {
  @ApiProperty({ example: `1`, description: `Уникальный идентификатор` })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: `Статья`, description: `Тип литературы` })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
}
