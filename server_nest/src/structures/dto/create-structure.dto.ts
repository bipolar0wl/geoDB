import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Структура`)
export class CreateStructureDto {
  @ApiProperty({ example: `а`, description: `Название структуры` })
  name: string;
}
