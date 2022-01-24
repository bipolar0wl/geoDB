import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTextureDto } from './dto/create-texture.dto';
import { Texture } from './models/texture.model';
import { TexturesService } from './textures.service';

@ApiTags(`Текстуры`)
@Controller('textures')
export class TexturesController {
  constructor(private readonly texturesService: TexturesService) {}

  @ApiOperation({ summary: `Добавление текстуры` })
  @ApiResponse({ status: 200, type: Texture })
  @Post()
  create(@Body() dto: CreateTextureDto): Promise<Texture> {
    return this.texturesService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех текстур` })
  @ApiResponse({ status: 200, type: Texture })
  @Get()
  findAll(): Promise<Texture[]> {
    return this.texturesService.findAll();
  }

  @ApiOperation({ summary: `Просмотр конкретной текстуры` })
  @ApiResponse({ status: 200, type: Texture })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Texture> {
    return this.texturesService.findOne(id);
  }
}
