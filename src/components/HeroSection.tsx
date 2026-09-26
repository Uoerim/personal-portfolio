'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const characterY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  const slideUp = {
    hidden: { y: '100%', opacity: 0 },
    show: { y: '0%', opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-[#F4F0EB] overflow-visible pb-32"
    >


      {/* Main Typography */}
      <div className="pt-[20vh] px-4 md:px-12 w-full h-full flex flex-col justify-center">
        <motion.div 
          style={{ y: textY }}
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="font-sans font-black text-[7rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] leading-[0.75] tracking-tighter uppercase relative z-10"
        >
          <div className="overflow-hidden">
            <motion.div variants={slideUp} className="text-grungy-dark">BUILD</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={slideUp} className="text-grungy-dark">WITH</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={slideUp} className="text-grungy-accent">CODE<span className="text-[#0a0a0a]">.</span></motion.div>
          </div>
        </motion.div>
      </div>

      {/* The Character Image */}
      <motion.div 
        style={{ y: characterY }}
        className="absolute top-[10%] right-0 md:right-[5%] z-20 pointer-events-none w-[80vw] md:w-[45vw] h-[120vh]"
      >
        <div className="w-full h-full bg-gradient-to-b from-gray-400 to-gray-600 rotate-[-2deg] rounded-xl shadow-2xl flex items-center justify-center relative">
          <div className="absolute bottom-10 right-[-20px] bg-[#E84A27] text-[#F4F0EB] font-mono text-xs p-4 rounded-full w-24 h-24 flex items-center justify-center text-center rotate-12 shadow-lg">
            PORTFOLIO <br/> 2026
          </div>
          <span className="text-white/50 font-mono">Image Placeholder</span>
        </div>
      </motion.div>
    </section>
  );
}
