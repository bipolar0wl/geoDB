import { Substance } from 'src/substance/models/substance.model';
import { Structure } from 'src/structures/models/structure.model';
import { Texture } from 'src/textures/models/texture.model';
import { Mineral } from 'src/minerals/models/mineral.model';
import { substance2section } from './../../junction/substance2section.mode';
import { structure2section } from './../../junction/structure2section.mode';
import { texture2section } from './../../junction/texture2section.model';
import { mineral2section } from './../../junction/mineral2section.model';
import { SectionPhoto } from './../../section-photo/models/section-photo.model';
import { SectionType } from './../../section-type/models/section-type.model';
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
import { book2section } from 'src/junction/book2section.model';
import { Sample } from 'src/samples/models/sample.model';

@ApiTags(`Шлифы`)
@Table({ tableName: `sections` })
export class Section extends Model {
  @ApiProperty({ example: `1`, description: `ID образца` })
  @ForeignKey(() => Sample)
  @Column({ type: DataType.NUMBER })
  sampleID: number;

  @ApiProperty({ example: `1`, description: `ID типа` })
  @ForeignKey(() => SectionType)
  @Column({ type: DataType.NUMBER })
  typeId: number;

  @ApiProperty({ example: `а`, description: `Название шлифа` })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: ``, description: `Описание` })
  @Column({ type: DataType.TEXT })
  description: string;

  @ApiProperty({ example: ``, description: `Заметка` })
  @Column({ type: DataType.STRING })
  notice: string;

  @BelongsTo(() => Sample)
  sample: Sample;

  @BelongsTo(() => SectionType)
  sectionType: SectionType;

  @HasMany(() => SectionPhoto)
  sectionPhoto: SectionPhoto;

  @BelongsToMany(() => Mineral, () => mineral2section)
  mineral: Mineral[];

  @BelongsToMany(() => Texture, () => texture2section)
  texture: Texture[];

  @BelongsToMany(() => Structure, () => structure2section)
  structure: Structure[];

  @BelongsToMany(() => Substance, () => substance2section)
  substance: Substance[];

  @BelongsToMany(() => Book, () => book2section)
  book: Book[];
}
