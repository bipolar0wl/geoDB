import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { role2user } from 'src/junction/role2user.model';
import { User } from 'src/users/models/user.model';

interface roleCreationAttributes {
  value: string;
  descriotion: string;
}

@Table({ tableName: `roles`})
export class Role extends Model {
  @ApiProperty({example: `1`, description: `Уникальный идентификатор`})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: `Администратор`, description: `Роль пользователя`})
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  role: string;

  @ApiProperty({example: `Администратор системы`, description: `Описание роли`})
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsToMany(() => User, () => role2user)
  users: User[]
}
