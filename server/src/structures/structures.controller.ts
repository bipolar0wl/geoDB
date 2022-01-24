import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateStructureDto } from './dto/create-structure.dto';
import { Structure } from './models/structure.model';
import { StructuresService } from './structures.service';

@ApiTags(`Структуры`)
@Controller('structures')
export class StructuresController {
  constructor(private readonly structuresService: StructuresService) {}

  @ApiOperation({ summary: `Добавление структуры` })
  @ApiResponse({ status: 200, type: Structure })
  @Post()
  create(@Body() dto: CreateStructureDto): Promise<Structure> {
    return this.structuresService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех структур` })
  @ApiResponse({ status: 200, type: Structure })
  @Get()
  findAll(): Promise<Structure[]> {
    return this.structuresService.findAll();
  }

  @ApiOperation({ summary: `Просмотр конкретной структуры` })
  @ApiResponse({ status: 200, type: Structure })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Structure> {
    return this.structuresService.findOne(id);
  }
}
