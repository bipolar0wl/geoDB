import { Test, TestingModule } from '@nestjs/testing';
import { SectionPhotoController } from './section-photo.controller';

describe('SectionPhotoController', () => {
  let controller: SectionPhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectionPhotoController],
    }).compile();

    controller = module.get<SectionPhotoController>(SectionPhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
