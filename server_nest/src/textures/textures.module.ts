import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Texture } from './models/texture.model';
import { TexturesController } from './textures.controller';
import { TexturesService } from './textures.service';

@Module({
  imports: [SequelizeModule.forFeature([Texture])],
  providers: [TexturesService],
  controllers: [TexturesController],
})
export class TexturesModule {}
