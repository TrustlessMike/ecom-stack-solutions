'use client';

import { motion } from 'framer-motion';

interface GlowOrbProps {
  color?: 'lime' | 'coral';
  size?: number;
  className?: string;
}

export default function GlowOrb({ color = 'lime', size = 400, className = '' }: GlowOrbProps) {
  const colors = {
    lime: 'rgba(200, 255, 0, 0.07)',
    coral: 'rgba(255, 107, 74, 0.06)',
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color]}, transparent 70%)`,
      }}
      animate={{
        x: [0, 80, -40, 60, 0],
        y: [0, -60, 40, -30, 0],
        scale: [1, 1.15, 0.9, 1.1, 1],
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
