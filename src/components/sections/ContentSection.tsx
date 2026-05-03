'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeIn, fluidTransition } from '@/config/framer-motion';

interface ContentSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export function ContentSection({ title, description, image, reverse = false }: ContentSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section 
      ref={containerRef}
      style={{ 
        padding: 'var(--section-padding) 0',
        overflow: 'hidden'
      }}
    >
      <div 
        className="container"
        style={{ 
          display: 'flex', 
          flexDirection: reverse ? 'row-reverse' : 'row',
          alignItems: 'center',
          gap: '4rem',
          flexWrap: 'wrap'
        }}
      >
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          style={{ flex: '1 1 400px' }}
        >
          <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '1.5rem' }}>{title}</h2>
          <p style={{ 
            fontSize: 'var(--text-base)', 
            color: 'var(--fg-secondary)', 
            lineHeight: 1.8,
            maxWidth: '45ch' 
          }}>
            {description}
          </p>
          <motion.div style={{ marginTop: '2.5rem' }}>
            <a href="#" className="interactive" style={{ 
              fontSize: 'var(--text-sm)', 
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              borderBottom: '1px solid var(--fg-primary)',
              paddingBottom: '0.5rem'
            }}>
              Learn More
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            flex: '1.2 1 500px',
            position: 'relative',
            aspectRatio: '4/5',
            overflow: 'hidden'
          }}
        >
          <motion.div style={{ y, height: '120%', position: 'absolute', top: '-10%', left: 0, right: 0 }}>
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
