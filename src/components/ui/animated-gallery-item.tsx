"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedGalleryItemProps {
  children: ReactNode;
  direction: 'left' | 'right';
}

const AnimatedGalleryItem: React.FC<AnimatedGalleryItemProps> = ({ children, direction }) => {
  const x = direction === 'left' ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedGalleryItem;
