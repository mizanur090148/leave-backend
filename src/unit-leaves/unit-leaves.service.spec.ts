import { Test, TestingModule } from '@nestjs/testing';
import { UnitLeavesService } from './unit-leaves.service';

describe('UnitLeavesService', () => {
  let service: UnitLeavesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitLeavesService],
    }).compile();

    service = module.get<UnitLeavesService>(UnitLeavesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
