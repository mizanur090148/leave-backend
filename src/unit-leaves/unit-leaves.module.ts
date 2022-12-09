import { Module } from '@nestjs/common';
import { UnitLeavesService } from './unit-leaves.service';
import { UnitLeavesController } from './unit-leaves.controller';

@Module({
  controllers: [UnitLeavesController],
  providers: [UnitLeavesService]
})
export class UnitLeavesModule {}
