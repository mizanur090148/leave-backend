import { PartialType } from '@nestjs/mapped-types';
import { CreateUnitLeafDto } from './create-unit-leaf.dto';

export class UpdateUnitLeafDto extends PartialType(CreateUnitLeafDto) {}
