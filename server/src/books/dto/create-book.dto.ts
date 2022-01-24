import { ApiProperty, ApiTags } from '@nestjs/swagger';
export class CreateBookDto {
  @ApiProperty({
    example: `Капитал`,
    description: `Название книги или статьи`,
  })
  name: string;

  @ApiProperty({ example: `1`, description: `ID типа` })
  langTypeId: number;

  @ApiProperty({ example: `1`, description: `ID типа` })
  textTypeId: number;

  @ApiProperty({ example: `1867`, description: `Год публикации` })
  year: number;

  @ApiProperty({ example: `Карл Иога́нн Ка́утский`, description: `Издательство` })
  publisher: string;

  @ApiProperty({
    example: `https://www.marxists.org/russkij/marx/1867/capital_vol1/index.htm`,
    description: `Источник`,
  })
  source: string;

  @ApiProperty({
    example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
    description: `Адрес файла на сервере`,
  })
  ref: string;

  @ApiProperty({
    example: `10.7868/S0016752517110048`,
    description: `Индекс DOI`,
  })
  doi: string;

  @ApiProperty({
    example: `Чугаев А. В., Чернышев И. В. Pb-Pb изотопная систематика орогенных месторождений золота Байкало-Патомского складчатого пояса (Северное Забайкалье, Россия) и оценка роли неопротерозойской коры в их формировании //Геохимия. – 2017. – №. 11. – С. 1027-1040.`,
    description: `ГОСТ`,
  })
  gost: string;

  @ApiProperty({
    example: `Чугаев, А. В., and И. В. Чернышев. "Pb-Pb изотопная систематика орогенных месторождений золота Байкало-Патомского складчатого пояса (Северное Забайкалье, Россия) и оценка роли неопротерозойской коры в их формировании." Геохимия 11 (2017): 1027-1040.`,
    description: `MLA`,
  })
  mla: string;

  @ApiProperty({
    example: `Чугаев, А. В., & Чернышев, И. В. (2017). Pb-Pb изотопная систематика орогенных месторождений золота Байкало-Патомского складчатого пояса (Северное Забайкалье, Россия) и оценка роли неопротерозойской коры в их формировании. Геохимия, (11), 1027-1040.`,
    description: `APA`,
  })
  apa: string;

  @ApiProperty({ example: `(╭ರ_•́)`, description: `Описание` })
  description: string;

  @ApiProperty({ example: `(╭ರ_•́)`, description: `Заметка` })
  notice: string;
}
