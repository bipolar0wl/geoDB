import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './models/tag.model';
import { TagsService } from './tags.service';

@ApiTags(`Теги`)
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @ApiOperation({ summary: `Добавление тега` })
  @ApiResponse({ status: 200, type: Tag })
  @Post()
  create(@Body() dto: CreateTagDto): Promise<Tag> {
    return this.tagsService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех тегов` })
  @ApiResponse({ status: 200, type: Tag })
  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagsService.findAll();
  }

  @ApiOperation({ summary: `Просмотр конкретного тега` })
  @ApiResponse({ status: 200, type: Tag })
  @Get(':name')
  findOne(@Param('name') name: string): Promise<Tag> {
    return this.tagsService.findByName(name);
  }
}
