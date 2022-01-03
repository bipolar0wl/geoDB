import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@ApiTags(`Виды анализов`)
@Table({ tableName: `analysisType` })
export class Tag extends Model<Tag> {
  @ApiProperty({
    example: `ISP/РФА/TESCAN/Микрозонд/Лазерная абляция`,
    description: `Название анализа`,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;
}
