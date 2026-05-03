import { Project } from '@/types/project';

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Harmony in Structure',
    description: 'Our philosophy revolves around the seamless integration of natural elements and modern structural engineering.',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1518005020470-58b737615071',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Sustainable Innovation',
    description: 'Utilizing reclaimed materials and energy-efficient designs, we redefine what it means to build for the future.',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    title: 'Urban Sanctuary',
    description: 'Creating pockets of peace within the bustling city. Our projects focus on acoustic privacy and visual openness.',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

export async function getProjects(): Promise<Project[]> {
  return mockProjects;
}
