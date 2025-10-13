export interface Profile {
  _id?: string;
  name: string;
  role: string;
  photo: string;
  summary: string;
  location: string;
  isRelocatable: boolean;
  links: {
    email: string;
    resume: string;
    github: string;
    linkedin: string;
  };
  skills: string[];
  createdAt?: Date;
  updatedAt?: Date;
}