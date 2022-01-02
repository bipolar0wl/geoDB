import { AuthorsService } from './authors.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Get()
  findAll(): Promise<Author[]> {
    return this.authorsService.findAll()
  }
}
