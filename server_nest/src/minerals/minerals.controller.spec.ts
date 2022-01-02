import { Test, TestingModule } from '@nestjs/testing';
import { MineralsController } from './minerals.controller';

describe('MineralsController', () => {
  let controller: MineralsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MineralsController],
    }).compile();

    controller = module.get<MineralsController>(MineralsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
