import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/models/role.model';
import { User } from 'src/users/models/user.model';

@Table({ tableName: `role2user`, createdAt: false, updatedAt: false })
export class role2user extends Model {
  // @Column({
  //   type: DataType.INTEGER,
  //   unique: true,
  //   autoIncrement: true,
  //   primaryKey: true,
  // })
  // id: number;

  @PrimaryKey
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @PrimaryKey
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  roleId: number;
}
