import { Project } from '@/lib/types/project.types';
import mongoose, { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema<Project>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    stack: [{ type: String, required: true }],
    description: { type: String, required: true },
    demo: { type: String, required: true },
    order: { type: Number, required: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.Project || model<Project>('Project', ProjectSchema);