import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyLeaveDto } from './dto/create-company-leave.dto';
import { UpdateCompanyLeaveDto } from './dto/update-company-leave.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CompanyLeave,
  CompanyLeaveDocument,
} from './schemas/company-leaves.schema';

@Injectable()
export class CompanyLeavesService {
  constructor(
    @InjectModel(CompanyLeave.name)
    private readonly model: Model<CompanyLeaveDocument>,
  ) {}

  async findAll() {
    return await this.model.find().exec();
  }

  async create(
    createCompanyLeaveDto: CreateCompanyLeaveDto,
  ): Promise<CompanyLeave> {
    return await new this.model({
      ...createCompanyLeaveDto,
      createdAt: new Date(),
    }).save();
  }

  findOne(id: number) {
    return `This action returns a #${id} companyLeaf`;
  }

  update(id: number, updateCompanyLeaveDto: UpdateCompanyLeaveDto) {
    return `This action updates a #${id} companyLeaf`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyLeaf`;
  }
}
