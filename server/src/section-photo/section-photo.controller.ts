import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(`Фото шлифа`)
@Controller('section-photo')
export class SectionPhotoController {}
