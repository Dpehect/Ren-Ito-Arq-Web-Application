import { Hero } from '@/components/sections/Hero';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { ContentSection } from '@/components/sections/ContentSection';
import { getProjects } from '@/lib/projects';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <Hero 
        title="Ren Ito Architectural Studio" 
        subtitle="Architecture is not just about buildings. It is about creating spaces that resonate with the human spirit, blending minimalist aesthetics with functional precision."
      />
      
      <ProjectGrid projects={projects} />

      {projects.map((project, index) => (
        <ContentSection 
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.imageUrl}
          reverse={index % 2 !== 0}
        />
      ))}

      <div style={{ height: '20vh' }} />
    </main>
  );
}
