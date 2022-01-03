import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Химический элемент`)
export class CreateSubstanceDto {
  @ApiProperty({ example: `Na2O`, description: `Формула элемента` })
  formula: string;

  @ApiProperty({ example: `Оксид натрия`, description: `Название элемента` })
  name: string;

  @ApiProperty({ example: `61,9789`, description: `Масса` })
  mass: number;
}
