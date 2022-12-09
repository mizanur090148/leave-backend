import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnitLeavesService } from './unit-leaves.service';
import { CreateUnitLeafDto } from './dto/create-unit-leaf.dto';
import { UpdateUnitLeafDto } from './dto/update-unit-leaf.dto';

@Controller('unit-leaves')
export class UnitLeavesController {
  constructor(private readonly unitLeavesService: UnitLeavesService) {}

  @Post()
  create(@Body() createUnitLeafDto: CreateUnitLeafDto) {
    return this.unitLeavesService.create(createUnitLeafDto);
  }

  @Get()
  findAll() {
    return this.unitLeavesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitLeavesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnitLeafDto: UpdateUnitLeafDto) {
    return this.unitLeavesService.update(+id, updateUnitLeafDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitLeavesService.remove(+id);
  }
}
