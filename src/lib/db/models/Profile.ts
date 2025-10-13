import { Schema, model, models } from 'mongoose';
import { Profile } from "@/lib/types/profile.types";

const ProfileSchema = new Schema<Profile>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    photo: { type: String, required: true },
    summary: { type: String, required: true },
    location: { type: String, required: true },
    isRelocatable: { type: Boolean, default: false },
    links: {
      email: { type: String, required: true },
      resume: { type: String, required: true },
      github: { type: String, required: true },
      linkedin: { type: String, required: true },
    },
    skills: [{ type: String }],
  },
  { timestamps: true }
);

export default models.Profile || model<Profile>('Profile', ProfileSchema);