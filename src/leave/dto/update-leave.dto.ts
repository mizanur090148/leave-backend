import { BaseLeaveDto } from './base-leave.dto';

export class UpdateLeaveDto extends BaseLeaveDto {
  completedAt: Date;
}