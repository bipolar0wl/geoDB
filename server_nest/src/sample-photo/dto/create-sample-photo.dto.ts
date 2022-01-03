import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Фотографии образцов`)
export class CreateSamplePhotoDto {
  @ApiProperty({ example: `Снимок 1`, description: `Название фотографии` })
  name: string;

  @ApiProperty({ example: `1`, description: `ID образца` })
  sampleId: number;

  @ApiProperty({
    example: `Снимок, вид сбоку`,
    description: `Описание фотографии`,
  })
  description: string;

  @ApiProperty({ example: `1.png`, description: `Файл` })
  file: string;
}
