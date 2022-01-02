import { Test, TestingModule } from '@nestjs/testing';
import { TexturesController } from './textures.controller';

describe('TexturesController', () => {
  let controller: TexturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TexturesController],
    }).compile();

    controller = module.get<TexturesController>(TexturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
