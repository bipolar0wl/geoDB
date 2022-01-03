import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tag } from './models/tag.model';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

@Module({
  imports: [SequelizeModule.forFeature([Tag])],
  providers: [TagsService],
  controllers: [TagsController],
})
export class TagsModule {}
