import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { LeaveModule } from './leave/leave.module';

import { SharedModule } from './shared/shared.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { LeaveTypesModule } from './leave-types/leave-types.module';
import { UnitLeavesModule } from './unit-leaves/unit-leaves.module';
import { CompanyLeavesModule } from './company-leaves/company-leaves.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/leave_db'),
    TodoModule,
    LeaveModule,
    SharedModule,
    AuthModule,
    LeaveTypesModule,
    UnitLeavesModule,
    CompanyLeavesModule,
    CompanyModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
