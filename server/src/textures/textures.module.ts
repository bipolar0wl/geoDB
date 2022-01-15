import { Sample } from 'src/samples/models/sample.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Texture } from './models/texture.model';
import { TexturesController } from './textures.controller';
import { TexturesService } from './textures.service';
import { texture2sample } from 'src/junction/texture2sample.model';
import { Section } from 'src/sections/models/section.model';
import { texture2section } from 'src/junction/texture2section.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Texture,
      Sample,
      texture2sample,
      Section,
      texture2section,
    ]),
  ],
  providers: [TexturesService],
  controllers: [TexturesController],
})
export class TexturesModule {}
