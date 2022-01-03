import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LangTypesController } from './lang-types.controller';
import { LangTypesService } from './lang-types.service';
import { LangType } from './models/lang-type.model';

@Module({
  imports: [SequelizeModule.forFeature([LangType])],
  providers: [LangTypesService],
  controllers: [LangTypesController],
})
export class LangTypesModule {}
