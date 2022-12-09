import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeaveTypeDocument = LeaveType & Document;

@Schema()
export class LeaveType {
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

export const LeaveTypeSchema = SchemaFactory.createForClass(LeaveType);
