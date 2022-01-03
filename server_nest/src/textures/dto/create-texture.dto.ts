import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Текстуры`)
export class CreateTextureDto {
  @ApiProperty({ example: `Пористая/Мелкопористая/Густопористая`, description: `Текстура` })
  name: string;
}
