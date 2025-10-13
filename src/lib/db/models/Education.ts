import { Education } from '@/lib/types/education.types';
import mongoose, { Schema, model, models } from 'mongoose';

const EducationSchema = new Schema<Education>(
  {
    period: { type: String, required: true },
    title: { type: String, required: true },
    org: { type: String, required: true },
    order: { type: Number, required: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.Education || model<Education>('Education', EducationSchema);