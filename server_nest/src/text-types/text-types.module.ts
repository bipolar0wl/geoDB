import { Module } from '@nestjs/common';
import { TextTypesService } from './text-types.service';
import { TextTypesController } from './text-types.controller';
import { TextType } from './models/text-type.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([TextType])],
  providers: [TextTypesService],
  controllers: [TextTypesController],
})
export class TextTypesModule {}
