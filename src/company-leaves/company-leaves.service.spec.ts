import { Test, TestingModule } from '@nestjs/testing';
import { CompanyLeavesService } from './company-leaves.service';

describe('CompanyLeavesService', () => {
  let service: CompanyLeavesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyLeavesService],
    }).compile();

    service = module.get<CompanyLeavesService>(CompanyLeavesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
