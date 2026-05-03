export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  metadata?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SiteSectionContent {
  id: string;
  key: string;
  value: string;
  section: string;
}
