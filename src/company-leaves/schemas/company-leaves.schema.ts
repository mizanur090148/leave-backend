import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyLeaveDocument = CompanyLeave & Document;

@Schema()
export class CompanyLeave {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop()
  status?: boolean;

  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const CompanyLeaveSchema = SchemaFactory.createForClass(CompanyLeave);
