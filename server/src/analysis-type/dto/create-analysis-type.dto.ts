import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Виды анализов`)
export class CreateAnalysisTypeDto {
  @ApiProperty({
    example: `ISP/РФА/TESCAN/микрозонд/Лазерная абляция`,
    description: `Название анализа`,
  })
  name: string;
}
