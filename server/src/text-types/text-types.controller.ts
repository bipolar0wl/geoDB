import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTextTypeDto } from './dto/create-text-type.dto';
import { TextType } from './models/text-type.model';
import { TextTypesService } from './text-types.service';

@ApiTags(`Типы`)
@Controller('text-types')
export class TextTypesController {
  constructor(private readonly textTypesService: TextTypesService) {}

  @ApiOperation({ summary: `Добавление типа текста` })
  @ApiResponse({ status: 200, type: TextType })
  @Post()
  create(@Body() dto: CreateTextTypeDto): Promise<TextType> {
    return this.textTypesService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех типов текста` })
  @ApiResponse({ status: 200, type: TextType })
  @Get()
  findAll(): Promise<TextType[]> {
    return this.textTypesService.findAll();
  }

  @ApiOperation({ summary: `Просмотр конкретного типа текста` })
  @ApiResponse({ status: 200, type: TextType })
  @Get(':name')
  findOne(@Param('id') id: string): Promise<TextType> {
    return this.textTypesService.findOne(id);
  }
}
