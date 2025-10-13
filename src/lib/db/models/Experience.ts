import { Experience } from '@/lib/types/experience.types';
import mongoose, { Schema, model, models } from 'mongoose';

const ExperienceSchema = new Schema<Experience>(
  {
    period: { type: String, required: true },
    title: { type: String, required: true },
    org: { type: String, required: true },
    bullets: [{ type: String, required: true }],
    order: { type: Number, required: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.Experience || model<Experience>('Experience', ExperienceSchema);