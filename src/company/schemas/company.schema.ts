import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  conatactPerson?: string;

  @Prop({ required: true })
  conatactPhone?: string;

  @Prop()
  description?: string;

  @Prop()
  address?: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  updatedAt?: Date;

  @Prop()
  deletedAt?: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
