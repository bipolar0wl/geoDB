import { Test, TestingModule } from '@nestjs/testing';
import { LangTypesController } from './lang-types.controller';

describe('LangTypesController', () => {
  let controller: LangTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LangTypesController],
    }).compile();

    controller = module.get<LangTypesController>(LangTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
