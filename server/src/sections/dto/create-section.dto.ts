import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Шлифы`)
export class CreateSectionDto {
  @ApiProperty({ example: `1`, description: `ID образца` })
  sampleID: number;

  @ApiProperty({ example: `1`, description: `ID типа` })
  typeId: number;

  @ApiProperty({ example: `а`, description: `Название шлифа` })
  name: string;
}
