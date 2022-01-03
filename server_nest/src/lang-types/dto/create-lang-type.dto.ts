import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Оригинал или перевод`)
export class CreatelangTypeDto {
  @ApiProperty({
    example: `Оригинал/Перевод`,
    description: `Оригинал или перевод`,
  })
  name: string;
}
