'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'E-COMMERCE PLATFORM',
    subtitle: 'Full-Stack Next.js',
    aspectRatio: 'aspect-[4/3]',
    marginTop: 'md:mt-[100px]',
  },
  {
    id: '02',
    title: 'BRAND IDENTITY',
    subtitle: 'Creative Direction',
    aspectRatio: 'aspect-[3/4]',
    marginTop: 'md:mt-0',
  },
  {
    id: '03',
    title: 'FINTECH APP',
    subtitle: 'React Native & Node',
    aspectRatio: 'aspect-square',
    marginTop: 'md:mt-[200px]',
  },
];

export default function SelectedWork() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const transforms = [y1, y2, y3];

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#141414] text-white py-32 px-4 md:px-12 overflow-hidden flex min-h-screen"
    >
      {/* Vertical Label */}
      <div className="absolute left-4 top-32 hidden md:block select-none z-10">
        <p className="text-[#E84A27] font-mono text-sm tracking-[0.2em] transform -rotate-90 origin-top-left whitespace-nowrap">
          SELECTED WORK | SELECTED WORK
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full md:pl-16 relative z-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group flex flex-col ${project.marginTop}`}
              style={{ y: transforms[index] }}
            >
              {/* Card Label */}
              <div className="mb-4">
                <span className="text-[#E84A27] font-mono text-lg">{project.id}/</span>
              </div>

              {/* Image Container */}
              <div className={`relative w-full ${project.aspectRatio} bg-[#1a1a1a] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[0.97] group-hover:border-[1px] group-hover:border-[#E84A27]`}>
                {/* Subtle Noise Texture */}
                <div 
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
                />
              </div>

              {/* Text Info */}
              <div className="mt-6">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">{project.title}</h3>
                <p className="text-gray-400 font-mono text-sm mt-2">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
