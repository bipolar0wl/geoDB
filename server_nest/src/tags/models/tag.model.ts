import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@ApiTags(`Теги`)
@Table({ tableName: `tags` })
export class Tag extends Model<Tag> {
  @ApiProperty({ example: `horny`, description: `Тег` })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
}