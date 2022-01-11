import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { SampleAnalysis } from 'src/sample-analysis/models/sample-analysis.model';
import { SectionAnalysis } from 'src/section-analysis/models/section-analysis.model';

@ApiTags(`Виды анализов`)
@Table({ tableName: `analysisType`, updatedAt: false, createdAt: false })
export class AnalysisType extends Model<AnalysisType> {
  @ApiProperty({
    example: `ISP/РФА/TESCAN/Микрозонд/Лазерная абляция`,
    description: `Название анализа`,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(() => SampleAnalysis)
  SampleAnalysis: SampleAnalysis[];

  @HasMany(() => SectionAnalysis)
  SectionAnalysis: SectionAnalysis[];
}
