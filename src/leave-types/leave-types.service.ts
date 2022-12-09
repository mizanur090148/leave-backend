import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLeaveTypeDto } from './dto/create-leave-type.dto';
import { UpdateLeaveTypeDto } from './dto/update-leave-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LeaveType, LeaveTypeDocument } from './schemas/leave-types.schema';

@Injectable()
export class LeaveTypesService {
  constructor(
    @InjectModel(LeaveType.name)
    private readonly model: Model<LeaveTypeDocument>,
  ) {}

  async create(createLeaveTypeDto: CreateLeaveTypeDto) {
    const isExist = await this.model.findOne(createLeaveTypeDto);
    if (isExist) {
      throw new HttpException('This already exist', HttpStatus.BAD_REQUEST);
    }
    return await this.model.create({
      ...createLeaveTypeDto,
      createdAt: new Date(),
    });
  }

  async findAll() {
    return await this.model.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} leaveType`;
  }

  // async update(id: number, updateLeaveTypeDto: UpdateLeaveTypeDto) {
  //   return await this.model.findByIdAndUpdate(id, updateLeaveTypeDto).exec();
  // }

  async update(
    criteria: any,
    updateLeaveTypeDto: UpdateLeaveTypeDto,
  ): Promise<any> {
    const updateResult = await this.model.findByIdAndUpdate(
      criteria,
      updateLeaveTypeDto,
      { returnOriginal: false },
    );

    if (updateResult) {
      return updateResult;
    } else {
      throw new HttpException(
        'Chief Complain did not found!',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: string) {
    const updateResult = await this.model.findByIdAndDelete(id).exec();
    if (updateResult) {
      return { message: 'Data removed successfully' };
    } else {
      throw new HttpException('Data not found!', HttpStatus.NOT_FOUND);
    }
  }
}
