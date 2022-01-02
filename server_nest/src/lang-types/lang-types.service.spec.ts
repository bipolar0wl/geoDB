import { Test, TestingModule } from '@nestjs/testing';
import { LangTypesService } from './lang-types.service';

describe('LangTypesService', () => {
  let service: LangTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LangTypesService],
    }).compile();

    service = module.get<LangTypesService>(LangTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
