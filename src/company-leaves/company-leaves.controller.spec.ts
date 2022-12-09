import { Test, TestingModule } from '@nestjs/testing';
import { CompanyLeavesController } from './company-leaves.controller';
import { CompanyLeavesService } from './company-leaves.service';

describe('CompanyLeavesController', () => {
  let controller: CompanyLeavesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyLeavesController],
      providers: [CompanyLeavesService],
    }).compile();

    controller = module.get<CompanyLeavesController>(CompanyLeavesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
