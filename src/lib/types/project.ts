export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  date: string;
  location: string;
  website?: string;
  gallery: string[];
  objectives: string[];
  impact: string;
  galleryColumn?: number;
  videos?: [[string, number]];
}