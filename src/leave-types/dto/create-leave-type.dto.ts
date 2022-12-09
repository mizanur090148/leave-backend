import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLeaveTypeDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  deletedAt?: Date;
}
