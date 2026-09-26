'use client';

import { motion, useTransform } from 'framer-motion';
import { useScrollProgress } from '@/components/HorizontalScroll';

export default function AboutPanel() {
  const progress = useScrollProgress();
  const bgNumberX = useTransform(progress, [0, 0.5], ['-20%', '20%']);
  const textX = useTransform(progress, [0.1, 0.4], ['10%', '0%']);
  const textOpacity = useTransform(progress, [0.1, 0.3], [0, 1]);

  return (
    <section className="min-w-[100vw] w-screen h-screen flex-shrink-0 relative overflow-hidden bg-white text-[#1a1a1a]">
      
      {/* Background Number */}
      <motion.div 
        style={{ x: bgNumberX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-center items-center pointer-events-none select-none z-0"
      >
        <span 
          className="text-transparent font-sans font-bold text-[30rem] leading-none"
          style={{ WebkitTextStroke: '2px #f3f4f6' }}
        >
          01
        </span>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[90vw] mx-auto flex items-center">
        
        {/* Left Side Label */}
        <div className="absolute top-12 left-0 md:top-1/2 md:-translate-y-1/2">
          <span className="font-mono text-xs tracking-widest text-gray-400">
            ABOUT —
          </span>
        </div>

        {/* Middle/Right Content */}
        <motion.div 
          style={{ x: textX, opacity: textOpacity }}
          className="ml-auto md:ml-64 lg:ml-80 flex flex-col justify-center h-full pt-24 md:pt-0"
        >
          <p className="max-w-3xl font-sans text-3xl md:text-5xl leading-tight text-gray-800 tracking-tight mb-16">
            I believe in writing code that breathes. Clean architecture, seamless performance, and interfaces that feel like magic.
          </p>

          <div className="flex flex-col gap-4 font-mono text-sm tracking-wider text-gray-500 w-fit">
            <div className="py-3 border-b border-gray-200">React / TypeScript / Python / AWS / Embedded</div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
