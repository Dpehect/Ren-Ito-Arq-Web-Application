'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/config/framer-motion';
import { Project } from '@/types/project';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section style={{ padding: 'var(--section-padding) 0' }}>
      <div className="container">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={fadeIn}
              className="interactive"
              style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.8s var(--ease-out-expo)',
                }}
                className="project-image"
              />
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                color: 'white',
                zIndex: 1
              }}>
                <p style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', opacity: 0.8 }}>{project.category}</p>
                <h3 style={{ fontSize: 'var(--text-lg)' }}>{project.title}</h3>
              </div>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
                opacity: 1
              }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        .project-image:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
