import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSampleAnalysisDto } from './dto/create-sample-analysis.dto';
import { SampleAnalysis } from './models/sample-analysis.model';
import { SampleAnalysisService } from './sample-analysis.service';

@ApiTags(`Анализы образца`)
@Controller('sample-analysis')
export class SampleAnalysisController {
  constructor(private readonly sampleAnalysisService: SampleAnalysisService) {}

  @ApiOperation({ summary: `Добавление анализа` })
  @ApiResponse({ status: 200, type: SampleAnalysis })
  @Post()
  create(@Body() dto: CreateSampleAnalysisDto): Promise<SampleAnalysis> {
    return this.sampleAnalysisService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех анализов` })
  @ApiResponse({ status: 200, type: SampleAnalysis })
  @Get()
  findAll(): Promise<SampleAnalysis[]> {
    return this.sampleAnalysisService.findAll();
  }

  @ApiOperation({ summary: `Просмотр конкретного анализа` })
  @ApiResponse({ status: 200, type: SampleAnalysis })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<SampleAnalysis> {
    return this.sampleAnalysisService.findOne(id);
  }
}
