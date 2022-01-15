import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSamplePhotoDto } from './dto/create-sample-photo.dto';
import { SamplePhoto } from './models/sample-photo.model';
import { SamplePhotoService } from './sample-photo.service';

@ApiTags(`Фотографии образца`)
@Controller('sample-photo')
export class SamplePhotoController {
  constructor(private readonly samplePhotoService: SamplePhotoService) {}

  @ApiOperation({ summary: `Добавление фотографии` })
  @ApiResponse({ status: 200, type: SamplePhoto })
  @Post()
  create(@Body() dto: CreateSamplePhotoDto): Promise<SamplePhoto> {
    return this.samplePhotoService.create(dto);
  }

  @ApiOperation({ summary: `Просмотр всех фотографий` })
  @ApiResponse({ status: 200, type: SamplePhoto })
  @Get()
  findAll(): Promise<SamplePhoto[]> {
    return this.samplePhotoService.findAll();
  }

  @ApiOperation({ summary: `Просмотр конкретной фотографии` })
  @ApiResponse({ status: 200, type: SamplePhoto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<SamplePhoto> {
    return this.samplePhotoService.findOne(id);
  }
}
