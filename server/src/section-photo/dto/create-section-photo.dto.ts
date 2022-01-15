import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Фотографии шлифов`)
export class CreateSectionPhotoDto {
  @ApiProperty({ example: `Снимок 1`, description: `Название фотографии` })
  name: string;

  @ApiProperty({ example: `1`, description: `ID шлифа` })
  sectionId: number;

  @ApiProperty({
    example: `Снимок, вид сбоку`,
    description: `Описание фотографии`,
  })
  description: string;

  @ApiProperty({ example: `1.png`, description: `Файл` })
  file: string;
}
