import { AuthorsService } from './authors.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Author } from './models/author.model';
import { CreateAuthorDto } from './dto/create-author.dto';

@ApiTags(`Авторы`)
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @ApiOperation({ summary: `Добавление автора` })
  @ApiResponse({ status: 200, type: Author })
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorsService.create(CreateAuthorDto);
  }

  @ApiOperation({ summary: `Просмотр всех авторов` })
  @ApiResponse({ status: 200, type: Author })
  @Get()
  findAll(): Promise<Author[]> {
    return this.authorsService.findAll()
  }

  @ApiOperation({ summary: `Получить конкретного автора` })
  @ApiResponse({ status: 200, type: Author })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Author> {
    return this.authorsService.findOne(id);
  }
}
