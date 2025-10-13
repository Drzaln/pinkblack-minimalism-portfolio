export interface Project {
  _id?: string;
  name: string;
  role: string;
  stack: string[];
  description: string;
  demo: string;
  order?: number;
  isActive: boolean
}