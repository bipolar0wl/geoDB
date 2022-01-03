import { ApiProperty } from '@nestjs/swagger';

export class CreateAnalysisTypeDto {
  @ApiProperty({
    example: `ISP/РФА/TESCAN/микрозонд/Лазерная абляция`,
    description: `Химический элемент`,
  })
  name: string;
}
