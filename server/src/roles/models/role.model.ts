import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { role2user } from 'src/junction/role2user.model';
import { User } from 'src/users/models/user.model';

@ApiTags(`Роли`)
@Table({ tableName: `roles`, updatedAt: false, createdAt: false })
export class Role extends Model {
  @ApiProperty({ example: `Администратор`, description: `Роль пользователя` })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @ApiProperty({ example: `Администратор`, description: `Описание роли` })
  @Column({ type: DataType.TEXT })
  description: string;

  @BelongsToMany(() => User, () => role2user)
  users: User[];
}
