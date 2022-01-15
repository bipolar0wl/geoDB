import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSubstanceDto } from './dto/create-substance.dto';
import { Substance } from './models/substance.model';
import { SubstanceService } from './substance.service';

@ApiTags(`Элементы`)
@Controller('substance')
export class SubstanceController {
  constructor(private readonly substanceService: SubstanceService) {}

  @ApiOperation({ summary: `Добавление элемента` })
  @ApiResponse({ status: 200, type: Substance })
  @Post()
  create(@Body() dto: CreateSubstanceDto): Promise<Substance> {
    return this.substanceService.create(dto);
  }

  @ApiOperation({ summary: `Получить все элементы` })
  @ApiResponse({ status: 200, type: Substance })
  @Get()
  findAll(): Promise<Substance[]> {
    return this.substanceService.findAll();
  }

  @ApiOperation({ summary: `Получить конкретный элемент` })
  @ApiResponse({ status: 200, type: Substance })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Substance> {
    return this.substanceService.findOne(id);
  }
}
