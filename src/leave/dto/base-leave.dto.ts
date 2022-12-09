import { IsNotEmpty } from 'class-validator';

export class BaseLeaveDto {
    @IsNotEmpty()
    noOfLeave: number;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    year: number;
 }