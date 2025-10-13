import { Education } from "./education.types";
import { Experience } from "./experience.types";
import { Post } from "./post.types";
import { Profile } from "./profile.types";
import { Project } from "./project.types";

export interface PortfolioData {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  educations: Education[];
  posts: Post[];
  skills: string[];
}