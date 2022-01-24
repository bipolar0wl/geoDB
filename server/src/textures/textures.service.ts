import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTextureDto } from './dto/create-texture.dto';
import { Texture } from './models/texture.model';

@Injectable()
export class TexturesService {
  constructor(
    @InjectModel(Texture)
    private readonly textureModel: typeof Texture,
  ) {}

  create(dto: CreateTextureDto): Promise<Texture> {
    return this.textureModel.create(dto);
  }

  async findAll(): Promise<Texture[]> {
    return this.textureModel.findAll();
  }

  findOne(id: string): Promise<Texture> {
    return this.textureModel.findByPk(id);
  }
}
