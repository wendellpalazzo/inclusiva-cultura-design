export interface BlogContent {
  slug?: string;
  title?: string;
  description?: string;
  image?: string;
  fullDescription?: string;
  date?: string;
  location?: string;
  website?: string;
  gallery?: string[];
  objectives?: string[];
  impact?: string;
  videos?: [[string, number]];
  category: "eventos";
}