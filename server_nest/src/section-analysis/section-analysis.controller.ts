import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSectionAnalysisDto } from './dto/section-analysis.dto';
import { SectionAnalysis } from './models/section-analysis.model';
import { SectionAnalysisService } from './section-analysis.service';

@ApiTags(`Анализы шлифа`)
@Controller('section-analysis')
export class SectionAnalysisController {
  constructor(
    private readonly sectionAnalysisService: SectionAnalysisService,
  ) {}

  @ApiOperation({ summary: `Добавление анализа шлифа` })
  @ApiResponse({ status: 200, type: SectionAnalysis })
  @Post()
  create(@Body() dto: CreateSectionAnalysisDto): Promise<SectionAnalysis> {
    return this.sectionAnalysisService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех анализов шлифов` })
  @ApiResponse({ status: 200, type: SectionAnalysis })
  @Get()
  findAll(): Promise<SectionAnalysis[]> {
    return this.sectionAnalysisService.findAll();
  }

  @ApiOperation({ summary: `Просмотр конкретного анализа шлифа` })
  @ApiResponse({ status: 200, type: SectionAnalysis })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<SectionAnalysis> {
    return this.sectionAnalysisService.findOne(id);
  }
}
