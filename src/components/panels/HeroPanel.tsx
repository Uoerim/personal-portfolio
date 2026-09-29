'use client';

import { motion, useTransform } from 'framer-motion';
import { useScrollProgress, useIsMobile } from '@/components/HorizontalScroll';

export default function HeroPanel() {
  const progress = useScrollProgress();
  const isMobile = useIsMobile();
  const bgX = useTransform(progress, [0, 0.25], ['0%', '50%']);
  const elementsX = useTransform(progress, [0, 0.25], ['0%', '100%']);
  
  // Photo parallax effect
  const photoY = useTransform(progress, [0, 0.25], ['0%', '20%']);
  const photoScale = useTransform(progress, [0, 0.25], [1, 1.05]);

  return (
    <section className="min-w-[100vw] w-screen min-h-[100svh] md:h-screen py-24 md:py-0 flex-shrink-0 relative overflow-hidden bg-white text-[#1a1a1a] flex flex-col justify-center items-center">
      
      {/* Background Soft Circle (Optimized: Replaced heavy blur filter with radial gradient) */}
      <motion.div 
        style={{ x: bgX, willChange: 'transform', transform: 'translateZ(0)' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,#E5E7EB_0%,transparent_70%)] rounded-full -z-10"
      />

      {/* Floating Labels */}
      <motion.div style={{ x: elementsX, willChange: 'transform' }} className="absolute top-32 left-12 md:left-24 font-mono text-xs tracking-widest text-gray-500">
        EST. 2026
      </motion.div>
      <motion.div style={{ x: elementsX, willChange: 'transform' }} className="absolute bottom-32 right-12 md:right-24 font-mono text-xs tracking-widest text-gray-500">
        CAIRO, EG
      </motion.div>

      {/* Photo Container with Parallax */}
      <motion.div 
        style={{ y: photoY, scale: photoScale, x: elementsX, willChange: 'transform' }}
        className="absolute w-[300px] md:w-[450px] lg:w-[550px] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
      >
        <img 
          src="/myphoto.png" 
          alt="Yosif"
          style={{ transform: 'translateZ(0)' }}
          className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
        />
      </motion.div>

      {/* Main Text */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none mt-16 md:mt-0">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-sans font-black text-[3.5rem] xs:text-[4rem] sm:text-[7rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tighter text-[#1a1a1a] m-0 drop-shadow-sm"
        >
          SOFTWARE
        </motion.h1>
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-sans font-black text-[3.5rem] xs:text-[4rem] sm:text-[7rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tighter text-[#1a1a1a] m-0 drop-shadow-sm"
        >
          CRAFTSMAN.
        </motion.h1>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-12 left-12 right-12 flex items-center gap-6 z-20">
        <span className="font-mono text-xs tracking-widest whitespace-nowrap text-gray-500">
          SCROLL TO EXPLORE
        </span>
        <div className="flex-grow h-[1px] bg-gray-200" />
      </div>

    </section>
  );
}

