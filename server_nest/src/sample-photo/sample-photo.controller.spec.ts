import { Test, TestingModule } from '@nestjs/testing';
import { SamplePhotoController } from './sample-photo.controller';

describe('SamplePhotoController', () => {
  let controller: SamplePhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamplePhotoController],
    }).compile();

    controller = module.get<SamplePhotoController>(SamplePhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
