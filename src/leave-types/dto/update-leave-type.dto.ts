import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateLeaveTypeDto } from './create-leave-type.dto';

export class UpdateLeaveTypeDto extends PartialType(CreateLeaveTypeDto) {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  deletedAt?: Date;
}
