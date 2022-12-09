import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company, CompanyDocument } from './schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private readonly model: Model<CompanyDocument>,
  ) {}

  async findAll(): Promise<any> {
    return await this.model.find().exec();
  }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    let { name } = createCompanyDto;
    const isExist = await this.model.findOne({ name });
    if (isExist) {
      throw new HttpException('This already exist', HttpStatus.BAD_REQUEST);
    }
    return await this.model.create({
      ...createCompanyDto,
      createdAt: new Date(),
    });
  }

  async findOne(id: string) {
    return await this.model.findOne({
      _id: id,
    });
  }

  async update(
    criteria: any,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<any> {
    let { _id } = criteria;
    let { name } = updateCompanyDto;
    const isExist = await this.model.findOne({
      _id: { $ne: _id },
      name: name,
    });
    if (isExist) {
      throw new HttpException('This already exist', HttpStatus.BAD_REQUEST);
    }
    const updateResult = await this.model.findByIdAndUpdate(
      criteria,
      updateCompanyDto,
      { returnOriginal: false },
    );
    if (updateResult) {
      return updateResult;
    } else {
      throw new HttpException('Company did not found!', HttpStatus.NOT_FOUND);
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
