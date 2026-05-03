'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, fluidTransition } from '@/config/framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  const words = title.split(' ');

  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'var(--section-padding)'
      }}
    >
      <div className="container">
        <motion.h1 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          style={{ 
            fontSize: 'var(--text-hero)',
            maxWidth: '12ch',
            marginBottom: '2rem',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.3em'
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                initial: { y: '100%', opacity: 0 },
                animate: { 
                  y: 0, 
                  opacity: 1,
                  transition: { ...fluidTransition, delay: index * 0.1 }
                }
              }}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ ...fluidTransition, delay: 0.8 }}
          style={{ 
            fontSize: 'var(--text-lg)',
            color: 'var(--fg-secondary)',
            maxWidth: '60ch'
          }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...fluidTransition, delay: 1.2 }}
          style={{ marginTop: '4rem' }}
        >
          <a href="/projects" className="interactive" style={{ 
            fontSize: 'var(--text-base)', 
            fontWeight: 500,
            borderBottom: '1px solid var(--fg-primary)',
            paddingBottom: '0.5rem'
          }}>
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
