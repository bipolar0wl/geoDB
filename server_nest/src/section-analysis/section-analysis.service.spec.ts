import { Test, TestingModule } from '@nestjs/testing';
import { SectionAnalysisService } from './section-analysis.service';

describe('SectionAnalysisService', () => {
  let service: SectionAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionAnalysisService],
    }).compile();

    service = module.get<SectionAnalysisService>(SectionAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
