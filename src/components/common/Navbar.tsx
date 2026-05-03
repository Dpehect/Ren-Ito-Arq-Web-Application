'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { fluidTransition } from '@/config/framer-motion';

const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={fluidTransition}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? '1rem 0' : '2rem 0',
        transition: 'padding 0.4s var(--ease-out-expo)',
        backgroundColor: isScrolled ? 'rgba(242, 242, 242, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: 'var(--text-lg)', fontWeight: 600, letterSpacing: '-0.02em' }}>
          REN ITO ARQ.
        </Link>

        <ul style={{ display: 'flex', gap: '3rem' }}>
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fluidTransition, delay: 0.1 * index }}
            >
              <Link 
                href={link.href}
                className="nav-link"
                style={{ 
                  fontSize: 'var(--text-sm)', 
                  fontWeight: 500, 
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
