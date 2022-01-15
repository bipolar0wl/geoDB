import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Теги`)
export class CreateTagDto {
  @ApiProperty({ example: `horny`, description: `Название тега` })
  name: string;
}
