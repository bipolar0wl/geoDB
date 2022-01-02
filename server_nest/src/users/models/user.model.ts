import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { role2user } from 'src/junction/role2user.model';
import { Role } from 'src/roles/models/role.model';

interface userCreationAttributes {
  email: string;
  password: string;
}

@ApiTags(`Пользователи`)
@Table({ tableName: `users`, paranoid: true })
export class User extends Model {
  @ApiProperty({ example: `1`, description: `Уникальный идентификатор` })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: `admin`, description: `Логин пользователя` })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  login: string;

  @ApiProperty({ example: `Зубенко`, description: `Фамилия пользователя` })
  @Column({ type: DataType.STRING })
  lastName: string;

  @ApiProperty({ example: `Михаил`, description: `Имя пользователя` })
  @Column({ type: DataType.STRING })
  firstName: string;

  @ApiProperty({ example: `Петрович`, description: `Отчество пользователя` })
  @Column({ type: DataType.STRING })
  patronymic: string;

  @ApiProperty({
    example: `+7(999) 999-99-99`,
    description: `Телефон пользователя`,
  })
  @Column({ type: DataType.STRING })
  phone: string;

  @ApiProperty({ example: `user@mail.com`, description: `Email пользователя` })
  @Column({ type: DataType.STRING })
  email: string;

  @ApiProperty({ example: `qwerty`, description: `Пароль пользователя` })
  @Column({ type: DataType.STRING })
  password: string;

  @ApiProperty({ example: `(╭ರ_•́)`, description: `Заметка о пользователе` })
  @Column({ type: DataType.TEXT })
  notice: string;

  @BelongsToMany(() => Role, () => role2user)
  roles: Role[];
}
