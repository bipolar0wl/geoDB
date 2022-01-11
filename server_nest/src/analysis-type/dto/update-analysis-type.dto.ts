import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Виды анализов`)
export class UpdateAnalysisTypeDto {
  @ApiProperty({
    example: `ISP/РФА/TESCAN/микрозонд/Лазерная абляция`,
    description: `Название анализа`,
  })
  name: string;
}
