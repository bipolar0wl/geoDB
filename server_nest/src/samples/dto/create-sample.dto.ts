import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Образцы`)
export class CreateSampleDto {
  @ApiProperty({ example: `1`, description: `ID пользователя` })
  userId: number;

  @ApiProperty({ example: `NV-20-02`, description: `Название образца` })
  name: string;

  @ApiProperty({ example: `Кварц`, description: `Описание` })
  description: string;

  @ApiProperty({ example: `Кварц`, description: `Заметка` })
  notice: string;
}
