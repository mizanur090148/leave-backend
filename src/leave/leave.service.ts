import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { Leave, LeaveDocument } from './schemas/leave.schema';

@Injectable()
export class LeaveService {
  constructor(
    @InjectModel(Leave.name) private readonly model: Model<LeaveDocument>,
  ) {}

  async findAll(): Promise<Leave[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Leave> {
    return await this.model.findById(id).exec();
  }

  async create(createLeaveDto: CreateLeaveDto): Promise<Leave> {
    return await new this.model({
      ...createLeaveDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateLeaveDto: UpdateLeaveDto): Promise<Leave> {
    return await this.model.findByIdAndUpdate(id, updateLeaveDto).exec();
  }

  async delete(id: string): Promise<Leave> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}