import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Минералы`)
export class CreateMineralDto {
  @ApiProperty({
    example: `Кварц`,
    description: `Минерал`,
  })
  name: string;
}
