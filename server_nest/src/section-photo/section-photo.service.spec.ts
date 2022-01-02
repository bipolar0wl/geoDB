import { Test, TestingModule } from '@nestjs/testing';
import { SectionPhotoService } from './section-photo.service';

describe('SectionPhotoService', () => {
  let service: SectionPhotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionPhotoService],
    }).compile();

    service = module.get<SectionPhotoService>(SectionPhotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
