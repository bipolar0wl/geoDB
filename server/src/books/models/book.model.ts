import { Texture } from '../../textures/models/texture.model';
import { Substance } from '../../substance/models/substance.model';
import { Structure } from '../../structures/models/structure.model';
import { Section } from '../../sections/models/section.model';
import { Sample } from '../../samples/models/sample.model';
import { book2texture } from '../../junction/book2texture.model';
import { book2substance } from '../../junction/book2substance.model';
import { book2structure } from '../../junction/book2structure.model';
import { book2section } from '../../junction/book2section.model';
import { book2sample } from '../../junction/book2sample.model';
import { book2mineral } from '../../junction/book2mineral.model';
import { LangType } from '../../lang-types/models/lang-type.model';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Author } from 'src/authors/models/author.model';
import { author2book } from 'src/junction/author2book.model';
import { tag2book } from 'src/junction/tag2book.model';
import { Tag } from 'src/tags/models/tag.model';
import { TextType } from 'src/text-types/models/text-type.model';
import { Mineral } from 'src/minerals/models/mineral.model';

@ApiTags(`Книги`)
@Table({ tableName: `books`, paranoid: true })
export class Book extends Model {
  @ApiProperty({
    example: `Капитал`,
    description: `Название книги или статьи`,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    // unique: true,
  })
  name: string;

  @ApiProperty({ example: `1`, description: `ID типа` })
  @ForeignKey(() => LangType)
  @Column({ type: DataType.INTEGER })
  langTypeId: number;

  @ApiProperty({ example: `1`, description: `ID типа` })
  @ForeignKey(() => TextType)
  @Column({ type: DataType.INTEGER })
  textTypeId: number;

  @ApiProperty({ example: `1867`, description: `Дата публикации` })
  @Column({ type: DataType.INTEGER })
  year: number;

  @ApiProperty({ example: `Карл Иога́нн Ка́утский`, description: `Издательство` })
  @Column({ type: DataType.STRING })
  publisher: string;

  @ApiProperty({
    example: `https://www.marxists.org/russkij/marx/1867/capital_vol1/index.htm`,
    description: `Источник`,
  })
  @Column({ type: DataType.STRING })
  source: string;

  @ApiProperty({
    example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
    description: `Адрес файла на сервере`,
  })
  @Column({ type: DataType.STRING })
  ref: string;

  @ApiProperty({
    example: `10.7868/S0016752517110048`,
    description: `Индекс DOI`,
  })
  @Column({ type: DataType.TEXT })
  DOI: string;

  @ApiProperty({
    example: `Чугаев А. В., Чернышев И. В. Pb-Pb изотопная систематика орогенных месторождений золота Байкало-Патомского складчатого пояса (Северное Забайкалье, Россия) и оценка роли неопротерозойской коры в их формировании //Геохимия. – 2017. – №. 11. – С. 1027-1040.`,
    description: `ГОСТ`,
  })
  @Column({ type: DataType.TEXT })
  GOST: string;

  @ApiProperty({
    example: `Чугаев, А. В., and И. В. Чернышев. "Pb-Pb изотопная систематика орогенных месторождений золота Байкало-Патомского складчатого пояса (Северное Забайкалье, Россия) и оценка роли неопротерозойской коры в их формировании." Геохимия 11 (2017): 1027-1040.`,
    description: `MLA`,
  })
  @Column({ type: DataType.TEXT })
  MLA: string;

  @ApiProperty({
    example: `Чугаев, А. В., & Чернышев, И. В. (2017). Pb-Pb изотопная систематика орогенных месторождений золота Байкало-Патомского складчатого пояса (Северное Забайкалье, Россия) и оценка роли неопротерозойской коры в их формировании. Геохимия, (11), 1027-1040.`,
    description: `APA`,
  })
  @Column({ type: DataType.TEXT })
  APA: string;

  @ApiProperty({
    example: `«Капита́л» — главный труд немецкого экономиста Карла Маркса по политической экономии, содержащий критический анализ капитализма.`,
    description: `Описание`,
  })
  @Column({ type: DataType.TEXT })
  description: string;

  @ApiProperty({
    example: `5 ф. ячменя, 5 ф. кукурузы, на 3 пенса селедок, на 1 пенс соли, на 1 пенс уксуса, на 2 пенса перцу и зелени, итого на сумму 20 3/4 пенса, получается суп на 64 человека, при этом при средних ценах хлеба стоимость этого может быть ещё понижена до 1/4 пенса на душу.`,
    description: `Заметка`,
  })
  @Column({ type: DataType.TEXT })
  notice: string;

  @BelongsToMany(() => Author, () => author2book)
  author: Author[];

  @BelongsToMany(() => Tag, () => tag2book)
  tags: Tag[];

  @BelongsTo(() => LangType)
  langType: LangType;

  @BelongsTo(() => TextType)
  textType: TextType;

  @BelongsToMany(() => Mineral, () => book2mineral)
  mineral: Mineral[];

  @BelongsToMany(() => Sample, () => book2sample)
  sample: Sample[];

  @BelongsToMany(() => Section, () => book2section)
  section: Section[];

  @BelongsToMany(() => Structure, () => book2structure)
  structure: Structure[];

  @BelongsToMany(() => Substance, () => book2substance)
  substance: Substance[];

  @BelongsToMany(() => Texture, () => book2texture)
  texture: Texture[];
}
