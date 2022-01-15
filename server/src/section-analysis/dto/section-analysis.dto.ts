import { ApiProperty } from '@nestjs/swagger';

export class CreateSectionAnalysisDto {
  @ApiProperty({ example: `а`, description: `Название анализа` })
  name: string;
}
