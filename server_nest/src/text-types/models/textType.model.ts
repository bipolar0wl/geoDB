import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@ApiTags(`Типы литературы`)
@Table({ tableName: `textTypes` })
export class TextType extends Model {
  @ApiProperty({ example: `Статья`, description: `Тип литературы` })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
}