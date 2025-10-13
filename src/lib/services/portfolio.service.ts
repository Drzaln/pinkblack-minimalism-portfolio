// lib/services/portfolio.service.ts
import dbConnect from '@/lib/db/mongodb';
import Profile from '@/lib/db/models/Profile';
import Experience from '../db/models/Experience';
import Education from '../db/models/Education';
import Project from '../db/models/Project';

export class PortfolioService {
  static async getProfile() {
    await dbConnect();
    const profile = await Profile.findOne().lean();
    return profile;
  }

  static async getExperiences() {
    await dbConnect();
    const experiences = await Experience.find({ isActive: true })
      .sort({ order: 1 })
      .lean();
    return experiences;
  }

  static async getEducations() {
    await dbConnect();
    const educations = await Education.find({ isActive: true })
      .sort({ order: 1 })
      .lean();
    return educations;
  }

  static async getProjects() {
    await dbConnect();
    const projects = await Project.find({ isActive: true })
      .sort({ order: 1 })
      .lean();
    return projects;
  }

  static async getAllPortfolioData() {
    await dbConnect();
    
    const [profile, experiences, educations, projects] = await Promise.all([
      this.getProfile(),
      this.getExperiences(),
      this.getEducations(),
      this.getProjects(),
    ]);

    return {
      profile,
      experiences,
      educations,
      projects,
    };
  }
}