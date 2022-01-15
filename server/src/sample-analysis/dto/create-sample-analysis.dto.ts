import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Анализы образца`)
export class CreateSampleAnalysisDto {
  @ApiProperty({ example: `1`, description: `ID образца` })
  sampleID: number;

  @ApiProperty({ example: `1`, description: `ID типа` })
  typeId: number;

  @ApiProperty({ example: `а`, description: `Название анализа` })
  name: string;
}
