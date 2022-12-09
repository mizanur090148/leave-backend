import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { LeaveService } from './leave.service';

@Controller('leaves')
export class LeaveController {
  constructor(private readonly service: LeaveService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createLeaveDto: CreateLeaveDto) {
    console.log({ createLeaveDto });
    return await this.service.create(createLeaveDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLeaveDto: UpdateLeaveDto) {
    return await this.service.update(id, updateLeaveDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}