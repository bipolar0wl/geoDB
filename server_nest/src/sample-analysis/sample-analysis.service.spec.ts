import { Test, TestingModule } from '@nestjs/testing';
import { SampleAnalysisService } from './sample-analysis.service';

describe('SampleAnalysisService', () => {
  let service: SampleAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleAnalysisService],
    }).compile();

    service = module.get<SampleAnalysisService>(SampleAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
