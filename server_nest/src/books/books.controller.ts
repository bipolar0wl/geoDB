import { Body, Controller, Post } from '@nestjs/common';
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
  create(@Body() createUserDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createUserDto);
  }
}
