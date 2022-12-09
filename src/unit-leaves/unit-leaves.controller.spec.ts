import { Test, TestingModule } from '@nestjs/testing';
import { UnitLeavesController } from './unit-leaves.controller';
import { UnitLeavesService } from './unit-leaves.service';

describe('UnitLeavesController', () => {
  let controller: UnitLeavesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitLeavesController],
      providers: [UnitLeavesService],
    }).compile();

    controller = module.get<UnitLeavesController>(UnitLeavesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
