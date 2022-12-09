import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';
const { ObjectId } = schema.Types;

export type LeaveDocument = Leave & Document;

@Schema()
export class Leave {
  @Prop({ required: true })
  noOfLeave: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  year: number;

  // @Prop({
  //   type: ObjectId,
  //   ref: 'Organization',
  // })
  
  // factoryId?: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const LeaveSchema = SchemaFactory.createForClass(Leave);