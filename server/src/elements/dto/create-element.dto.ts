import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Элементы`)
export class CreateElementDto {
  @ApiProperty({
    example: `H`,
    description: `Водород`,
  })
  name: string;
}
