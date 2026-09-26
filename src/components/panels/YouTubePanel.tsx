'use client';

import { motion, useTransform } from 'framer-motion';
import { useScrollProgress } from '@/components/HorizontalScroll';

export default function YouTubePanel() {
  const progress = useScrollProgress();

  // Parallax effects
  const titleX = useTransform(progress, [0.6, 0.9], ['20%', '0%']);
  const charX = useTransform(progress, [0.6, 0.9], ['-15%', '10%']);
  const doodleY = useTransform(progress, [0.6, 0.9], ['30%', '-30%']);

  return (
    <section id="youtube-panel" className="min-w-[100vw] w-screen h-screen flex-shrink-0 relative overflow-hidden bg-white text-[#1a1a1a] flex items-center z-10">
      
      {/* Halftone Comic Background for the WHOLE section (Optimized to SVG for extreme scroll performance) */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\' fill=\'black\'/%3E%3C/svg%3E")',
          backgroundSize: '24px 24px',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      />

      {/* --- DOODLES --- */}
      <motion.div style={{ y: doodleY, rotate: 12, z: 0, willChange: 'transform' }} className="absolute top-24 left-16 md:left-32 text-amber-400 z-0">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>

      <motion.div style={{ y: doodleY, rotate: -25, z: 0, willChange: 'transform' }} className="absolute bottom-32 left-[35%] text-sky-400 z-0">
        <svg width="70" height="90" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      </motion.div>

      {/* --- END DOODLES --- */}

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between h-full pt-16 relative z-10">
        
        {/* Left Side Cartoonish Text */}
        <motion.div 
          style={{ x: titleX, willChange: 'transform' }}
          className="flex flex-col w-full md:w-1/2 relative z-10"
        >
          {/* Comic Box Label */}
          <div className="bg-black text-white font-black uppercase text-sm md:text-base px-5 py-2 inline-block w-fit mb-6 rotate-[-3deg] shadow-[4px_4px_0_#FBBF24]">
            KNOWLEDGE SHARING
          </div>
          
          <h2 className="font-sans font-black text-7xl md:text-[7rem] tracking-tighter leading-[0.9] mb-8 relative z-10">
            <span 
              className="block text-white"
              style={{ textShadow: '-2px -2px 0 #000, 0 -2px 0 #000, 2px -2px 0 #000, 2px 0 0 #000, 2px 2px 0 #000, 0 2px 0 #000, -2px 2px 0 #000, -2px 0 0 #000, 8px 8px 0 #000' }}
            >
              DIGITAL
            </span>
            <span 
              className="block text-amber-400"
              style={{ textShadow: '-2px -2px 0 #000, 0 -2px 0 #000, 2px -2px 0 #000, 2px 0 0 #000, 2px 2px 0 #000, 0 2px 0 #000, -2px 2px 0 #000, -2px 0 0 #000, 8px 8px 0 #000' }}
            >
              EDUCATOR.
            </span>
          </h2>

          <div className="bg-white border-[4px] border-black p-6 shadow-[8px_8px_0_black] rounded-xl max-w-lg relative rotate-1 mb-10">
            <p className="font-sans font-bold text-xl md:text-2xl text-black leading-snug">
              Breaking down complex software architecture and engineering concepts into digestible, highly-animated deep dives.
            </p>
            {/* Decorative pins in corners */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-black rounded-full" />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-black rounded-full" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-black rounded-full" />
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-black rounded-full" />
          </div>

          <div>
            <a 
              href="#" 
              className="group relative inline-flex items-center gap-3 bg-sky-400 border-[4px] border-black px-8 py-4 font-black text-xl uppercase text-black hover:bg-sky-300 transition-colors shadow-[6px_6px_0_black] hover:shadow-[3px_3px_0_black] hover:translate-y-[3px] hover:translate-x-[3px] active:shadow-none active:translate-y-[6px] active:translate-x-[6px]"
            >
              <span>Watch on YouTube</span>
              <svg className="w-8 h-8 transform group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right Side Character */}
        <motion.div 
          style={{ x: charX, willChange: 'transform' }}
          className="w-full md:w-1/2 flex justify-center items-center mt-20 md:mt-0 relative z-50"
        >
          <div className="relative w-full max-w-lg lg:max-w-2xl mx-auto pl-8">
            
            {/* Speech Bubble */}
            <div className="absolute -top-6 md:-top-4 right-4 md:right-8 z-30 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                transition={{ delay: 0.4, type: 'spring', bounce: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border-[5px] border-black rounded-3xl p-4 md:px-8 md:py-6 shadow-[8px_8px_0_#1a1a1a] relative pointer-events-auto"
              >
                <p className="font-sans font-black text-2xl md:text-5xl uppercase tracking-tighter text-black leading-tight">
                  MEHHH
                </p>
                {/* Triangle Tail pointing down-left */}
                <div className="absolute -bottom-[20px] left-8 w-0 h-0 border-l-[15px] border-l-transparent border-t-[20px] border-t-black border-r-[15px] border-r-transparent" />
                <div className="absolute -bottom-[12px] left-9 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white border-r-[10px] border-r-transparent" />
              </motion.div>
            </div>

            {/* Free-floating Character (Removed Box) */}
            <motion.div
              style={{ willChange: 'transform', transform: 'translateZ(0)' }}
              animate={{ y: [-15, 15, -15], rotate: [2, -1, 2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full flex justify-center items-center"
            >
              {/* The Character */}
              <img 
                src="/mycharacter.png" 
                alt="Animated Character" 
                className="relative z-10 w-full h-auto object-contain"
              />
            </motion.div>

          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
