import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Author } from 'src/authors/models/author.model';
import { author2book } from 'src/junction/author2book.model';
import { tag2book } from 'src/junction/tag2book.model';
import { Tag } from 'src/tags/models/tag.model';

interface bookCreationAttributes {
  name: string;
  year: string;
}

@ApiTags(`Книги`)
@Table({ tableName: `books`, paranoid: true })
export class Book extends Model {

  @ApiProperty({
    example: `Название книги или статьи`,
    description: `Название книги или статьи`,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @ApiProperty({ example: `01.01.2022`, description: `Дата публикации` })
  @Column({ type: DataType.DATEONLY })
  year: Date;

  @ApiProperty({ example: `Hobby World`, description: `Издательство` })
  @Column({ type: DataType.STRING })
  publisher: string;

  @ApiProperty({
    example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
    description: `Источник`,
  })
  @Column({ type: DataType.STRING })
  source: string;

  @ApiProperty({
    example: `sorry/for.what`,
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

  @ApiProperty({ example: `(╭ರ_•́)`, description: `Описание` })
  @Column({ type: DataType.TEXT })
  description: string;

  @ApiProperty({ example: `(╭ರ_•́)`, description: `Заметка` })
  @Column({ type: DataType.TEXT })
  notice: string;

  @BelongsToMany(() => Author, () => author2book)
  author: Author[];

  @BelongsToMany(() => Tag, () => tag2book)
  tags: Tag[];
}
