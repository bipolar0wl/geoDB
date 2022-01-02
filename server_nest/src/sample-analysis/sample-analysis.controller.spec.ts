import { Test, TestingModule } from '@nestjs/testing';
import { SampleAnalysisController } from './sample-analysis.controller';

describe('SampleAnalysisController', () => {
  let controller: SampleAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleAnalysisController],
    }).compile();

    controller = module.get<SampleAnalysisController>(SampleAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
