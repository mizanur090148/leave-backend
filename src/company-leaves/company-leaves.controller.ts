import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompanyLeavesService } from './company-leaves.service';
import { CreateCompanyLeaveDto } from './dto/create-company-leave.dto';
import { UpdateCompanyLeaveDto } from './dto/update-company-leave.dto';

@Controller('company-leaves')
export class CompanyLeavesController {
  constructor(private readonly companyLeavesService: CompanyLeavesService) {}

  @Post()
  create(@Body() createCompanyLeaveDto: CreateCompanyLeaveDto) {
    return this.companyLeavesService.create(createCompanyLeaveDto);
  }

  @Get()
  findAll() {
    return this.companyLeavesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyLeavesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyLeafDto: UpdateCompanyLeaveDto,
  ) {
    return this.companyLeavesService.update(+id, updateCompanyLeafDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyLeavesService.remove(+id);
  }
}
