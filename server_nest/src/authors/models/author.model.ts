import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface authorCreationAttributes {
  name: string;
}

@Table({ tableName: `authors`})
export class Author extends Model {
  @ApiProperty({example: `1`, description: `Уникальный идентификатор`})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: `Путин В.В.`, description: `ФИО автора`})
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  Author: string;
}
