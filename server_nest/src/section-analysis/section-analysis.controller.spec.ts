import { Test, TestingModule } from '@nestjs/testing';
import { SectionAnalysisController } from './section-analysis.controller';

describe('SectionAnalysisController', () => {
  let controller: SectionAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectionAnalysisController],
    }).compile();

    controller = module.get<SectionAnalysisController>(SectionAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
