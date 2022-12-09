import { Injectable } from '@nestjs/common';
import { CreateUnitLeafDto } from './dto/create-unit-leaf.dto';
import { UpdateUnitLeafDto } from './dto/update-unit-leaf.dto';

@Injectable()
export class UnitLeavesService {
  create(createUnitLeafDto: CreateUnitLeafDto) {
    return 'This action adds a new unitLeaf';
  }

  findAll() {
    return `This action returns all unitLeaves`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unitLeaf`;
  }

  update(id: number, updateUnitLeafDto: UpdateUnitLeafDto) {
    return `This action updates a #${id} unitLeaf`;
  }

  remove(id: number) {
    return `This action removes a #${id} unitLeaf`;
  }
}
