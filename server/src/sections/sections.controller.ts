import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSectionDto } from './dto/create-section.dto';
import { Section } from './models/section.model';
import { SectionsService } from './sections.service';

@ApiTags('Шлифы')
@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @ApiOperation({ summary: `Добавление шлифа` })
  @ApiResponse({ status: 200, type: Section })
  @Post()
  create(@Body() dto: CreateSectionDto): Promise<Section> {
    console.log(dto);
    return this.sectionsService.create(dto);
  }

  @ApiOperation({ summary: `Получить шлифы` })
  @ApiResponse({ status: 200, type: Section })
  @Get()
  findAll() {
    return this.sectionsService.findAll();
  }

  @ApiOperation({ summary: `Получить конкретный шлиф` })
  @ApiResponse({ status: 200, type: Section })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Section> {
    return this.sectionsService.findOne(id);
  }
}
