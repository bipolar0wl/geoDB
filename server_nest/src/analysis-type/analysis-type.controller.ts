import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AnalysisTypeService } from './analysis-type.service';
import { AnalysisType } from './models/analysis-type.model';

@ApiTags(`Типы анализов`)
@Controller('analysis-type')
export class AnalysisTypeController {
  constructor(private readonly analysisTypeService: AnalysisTypeService) {}

  @ApiOperation({ summary: `Получить все типы анализов` })
  @ApiResponse({ status: 200, type: AnalysisType })
  @Get()
  findAll(@Query() query): Promise<AnalysisType[]> {
    return this.analysisTypeService.findAll(query);
  }

  @ApiOperation({ summary: `Получить конкретный тип анализа` })
  @ApiResponse({ status: 200, type: AnalysisType })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<AnalysisType> {
    return this.analysisTypeService.findOne(id);
  }
}
