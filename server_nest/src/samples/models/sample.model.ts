import { structure2sample } from 'src/junction/structure2sample.model';
import { mineral2sample } from 'src/junction/mineral2sample.model';
import { Mineral } from 'src/minerals/models/mineral.model';
import { SamplePhoto } from 'src/sample-photo/models/sample-photo.model';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/books/models/book.model';
import { book2sample } from 'src/junction/book2sample.model';
import { Section } from 'src/sections/models/section.model';
import { User } from 'src/users/models/user.model';
import { Texture } from 'src/textures/models/texture.model';
import { Structure } from 'src/structures/models/structure.model';
import { texture2sample } from 'src/junction/texture2sample.model';
import { SampleAnalysis } from 'src/sample-analysis/models/sample-analysis.model';

@ApiTags(`Образцы`)
@Table({ tableName: `samples`, paranoid: true })
export class Sample extends Model {
  @ApiProperty({ example: `1`, description: `ID пользователя` })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: `NV-20-02`, description: `Название образца` })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @ApiProperty({ example: `Кварц`, description: `Описание` })
  @Column({ type: DataType.STRING })
  description: string;

  @ApiProperty({ example: `Кварц`, description: `Заметка` })
  @Column({ type: DataType.STRING })
  notice: string;

  @HasMany(() => SamplePhoto)
  samplePhoto: SamplePhoto[];

  @HasMany(() => SampleAnalysis)
  sampleAnalysis: SampleAnalysis[];

  @HasMany(() => Section)
  section: Section[];

  @BelongsToMany(() => Mineral, () => mineral2sample)
  mineral: Mineral[];

  @BelongsToMany(() => Texture, () => texture2sample)
  texture: Texture[];

  @BelongsToMany(() => Structure, () => structure2sample)
  structure: Structure[];

  @BelongsToMany(() => Book, () => book2sample)
  book: Book[];

  @BelongsTo(() => User)
  user: User;
}
