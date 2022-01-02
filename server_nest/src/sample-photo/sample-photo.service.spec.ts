import { Test, TestingModule } from '@nestjs/testing';
import { SamplePhotoService } from './sample-photo.service';

describe('SamplePhotoService', () => {
  let service: SamplePhotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamplePhotoService],
    }).compile();

    service = module.get<SamplePhotoService>(SamplePhotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
