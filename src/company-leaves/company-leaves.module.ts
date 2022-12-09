import { Module } from '@nestjs/common';
import { CompanyLeavesService } from './company-leaves.service';
import { CompanyLeavesController } from './company-leaves.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CompanyLeave,
  CompanyLeaveSchema,
} from './schemas/company-leaves.schema';

@Module({
  controllers: [CompanyLeavesController],
  providers: [CompanyLeavesService],
  imports: [
    MongooseModule.forFeature([
      { name: CompanyLeave.name, schema: CompanyLeaveSchema },
    ]),
  ],
})
export class CompanyLeavesModule {}
