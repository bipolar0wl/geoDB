import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMineralDto } from './dto/create-mineral.dto';
import { MineralsService } from './minerals.service';
import { Mineral } from './models/mineral.model';

@ApiTags(`Минералы`)
@Controller('minerals')
export class MineralsController {
  constructor(private readonly mineralsService: MineralsService) {}

  @ApiOperation({ summary: `Добавление минерала` })
  @ApiResponse({ status: 200, type: Mineral })
  @Post()
  create(@Body() dto: CreateMineralDto): Promise<Mineral> {
    return this.mineralsService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех минералов` })
  @ApiResponse({ status: 200, type: Mineral })
  @Get()
  findAll(): Promise<Mineral[]> {
    return this.mineralsService.findAll();
  }

  @ApiOperation({ summary: `Просмотр конкретного минерала` })
  @ApiResponse({ status: 200, type: Mineral })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Mineral> {
    return this.mineralsService.findOne(id);
  }
}
