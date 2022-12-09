import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  conatactPerson: string;

  @IsOptional()
  conatactPhone: string;

  @IsOptional()
  description: string;

  @IsOptional()
  address: string;

  @IsOptional()
  status: boolean;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  deletedAt: Date;
}
