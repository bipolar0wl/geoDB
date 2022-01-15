import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './models/book.model';

@ApiTags(`Книги и статьи`)
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOperation({ summary: `Создание книги или статьи` })
  @ApiResponse({ status: 200, type: Book })
  @Post()
  create(@Body() dto: CreateBookDto): Promise<Book> {
    return this.booksService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех книг` })
  @ApiResponse({ status: 200, type: Book })
  @Get()
  findAll(): Promise<Book[]> {
    return this.booksService.findAll()
  }

  @ApiOperation({ summary: `Получить конкретной книги` })
  @ApiResponse({ status: 200, type: Book })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(id);
  }
}
