import { Test, TestingModule } from '@nestjs/testing';
import { SectionTypeService } from './section-type.service';

describe('SectionTypeService', () => {
  let service: SectionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionTypeService],
    }).compile();

    service = module.get<SectionTypeService>(SectionTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
