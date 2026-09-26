'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-[#0a0a0a] text-[#F4F0EB] pt-[40vh] pb-32 px-4 md:px-12 flex items-center z-10"
    >
      <motion.div 
        style={{ y: textY }}
        className="w-full md:w-[55%] flex flex-col gap-8 relative z-30"
      >
        <div className="text-[#E84A27] font-mono text-sm tracking-widest uppercase">
          ABOUT ME —
        </div>
        
        <h2 className="text-2xl md:text-4xl leading-tight font-medium text-[#F4F0EB]">
          I craft bold, user-centered digital experiences that merge hardware strategy, aesthetics, and software performance.
        </h2>
        
        <div className="font-mono text-[#F4F0EB]/70 flex flex-col gap-2 mt-4">
          <p>Minimal noise.</p>
          <p>Maximum impact.</p>
        </div>

        <div className="mt-12 flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#F4F0EB]/50 border-t border-[#F4F0EB]/10 pt-8">
          <svg className="w-8 h-8 text-[#E84A27]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span className="max-w-[200px] leading-relaxed">AVAILABLE WORLDWIDE FOR FREELANCE & REMOTE COLLABS</span>
        </div>
      </motion.div>
    </section>
  );
}
