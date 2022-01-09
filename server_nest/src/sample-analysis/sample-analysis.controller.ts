import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateSampleAnalysisDto } from './dto/create-sample-analysis.dto';
import { SampleAnalysis } from './models/sample-analysis.model';
import { SampleAnalysisService } from './sample-analysis.service';

@Controller('sample-analysis')
export class SampleAnalysisController {
  constructor(private readonly sampleAnalysisService: SampleAnalysisService) {}

  @ApiOperation({ summary: `Добавление минерала` })
  @ApiResponse({ status: 200, type: SampleAnalysis })
  @Post()
  create(@Body() dto: CreateSampleAnalysisDto): Promise<SampleAnalysis> {
    return this.sampleAnalysisService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех минералов` })
  @ApiResponse({ status: 200, type: SampleAnalysis })
  @Get()
  findAll(): Promise<SampleAnalysis[]> {
    return this.sampleAnalysisService.findAll();
  }

  @ApiOperation({ summary: `Получить конкретного минерала` })
  @ApiResponse({ status: 200, type: SampleAnalysis })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAnalysis> {
    return this.sampleAnalysisService.findOne(id);
  }
}
