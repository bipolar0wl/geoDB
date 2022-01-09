import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatelangTypeDto } from './dto/create-lang-type.dto';
import { LangTypesService } from './lang-types.service';
import { LangType } from './models/lang-type.model';

@ApiTags(`Оригинал или перевод`)
@Controller('lang-types')
export class LangTypesController {
  constructor(private readonly langTypesService: LangTypesService) {}

  @ApiOperation({ summary: `Добавление типа языка` })
  @ApiResponse({ status: 200, type: LangType })
  @Post()
  create(@Body() dto: CreatelangTypeDto): Promise<LangType> {
    return this.langTypesService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех типов` })
  @ApiResponse({ status: 200, type: LangType })
  @Get()
  findAll(): Promise<LangType[]> {
    return this.langTypesService.findAll()
  }

  @ApiOperation({ summary: `Получить конкретный тип` })
  @ApiResponse({ status: 200, type: LangType })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<LangType> {
    return this.langTypesService.findOne(id);
  }
}
