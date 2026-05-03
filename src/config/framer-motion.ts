import { Variants, Transition } from 'framer-motion';

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const fluidTransition: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

export const slowTransition: Transition = {
  duration: 1.2,
  ease: [0.76, 0, 0.24, 1],
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: fluidTransition,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { ...fluidTransition, duration: 0.4 },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'linear',
    },
  },
};

export const slideUp: Variants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
    transition: fluidTransition,
  },
  exit: {
    y: '-100%',
    transition: fluidTransition,
  },
};
