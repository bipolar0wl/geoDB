import { Module } from '@nestjs/common';
import { TextTypesService } from './text-types.service';
import { TextTypesController } from './text-types.controller';

@Module({
  providers: [TextTypesService],
  controllers: [TextTypesController]
})
export class TextTypesModule {}
