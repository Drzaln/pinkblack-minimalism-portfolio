export interface Experience {
  _id?: string;
  period: string;
  title: string;
  org: string;
  bullets: string[];
  order?: number;
  isActive: boolean
}