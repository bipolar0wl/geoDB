import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Виды шлифов`)
export class CreateSectionTypeDto {
  @ApiProperty({
    example: `Со стеклом/Без стекла/Аншлиф`,
    description: `Вид шлифа`,
  })
  name: string;
}
