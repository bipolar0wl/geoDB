import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateSampleDto } from './dto/create-sample.dto';
import { Sample } from './models/sample.model';
import { SamplesService } from './samples.service';

@ApiTags(`Образцы`)
@Controller('samples')
export class SamplesController {
  constructor(private readonly samplesService: SamplesService) {}

  @ApiOperation({ summary: `Добавление образца` })
  @ApiResponse({ status: 200, type: Sample })
  @Post()
  create(@Body() dto: CreateSampleDto): Promise<Sample> {
    console.log(dto);
    return this.samplesService.create(dto);
  }

  @ApiOperation({ summary: `Получить все образцы` })
  @ApiResponse({ status: 200, type: Sample })
  @Get()
  findAll() {
    return this.samplesService.findAll();
  }

  @ApiOperation({ summary: `Получить конкретный образец` })
  @ApiResponse({ status: 200, type: Sample })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sample> {
    return this.samplesService.findOne(id);
  }
}
