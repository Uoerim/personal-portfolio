'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useScrollProgress, useIsMobile } from '@/components/HorizontalScroll';

export default function WorkPanel() {
  const scrollProgress = useScrollProgress();
  const isMobile = useIsMobile();

  // Range roughly [0.25, 0.75] where this panel is mostly in view
  const card1X = useTransform(scrollProgress, [0.2, 0.8], [200, -300]);
  const card2X = useTransform(scrollProgress, [0.2, 0.8], [400, -500]);
  const card3X = useTransform(scrollProgress, [0.2, 0.8], [600, -700]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 25, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + 24);
      mouseY.set(e.clientY + 24);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const projectDetails = [
    {
      title: "Shams",
      category: "STUDENT HUB",
      description: "A comprehensive university student hub. Features course management, automated academic schedule generation, and PDF transcript compilation."
    },
    {
      title: "Raqameen",
      category: "AGENCY PLATFORM",
      description: "Custom software agency platform. High-performance, scalable full-stack architecture built to deliver custom digital products."
    },
    {
      title: "RFID-Wallet",
      category: "HARDWARE",
      description: "A smart hardware emulator for digital access. Stores and mimics multiple low-frequency RFID cards in one sleek universal device."
    }
  ];

  return (
    <section className="min-w-[100vw] w-screen min-h-[100svh] md:h-screen py-16 md:py-0 flex-shrink-0 relative overflow-hidden bg-white text-[#1a1a1a]">
      
      {/* Floating Cursor Tooltip */}
      {mounted && typeof document !== 'undefined' ? createPortal(
        <AnimatePresence>
          {!isMobile && hoveredProject !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              style={{ x: smoothX, y: smoothY }}
              className="fixed top-0 left-0 z-[9999] pointer-events-none w-[320px] bg-white border-[2px] border-black p-5 shadow-[8px_8px_0_rgba(0,0,0,1)] flex flex-col"
            >
              <div className="font-mono text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest">
                {projectDetails[hoveredProject].category}
              </div>
              <h4 className="font-sans font-black text-xl uppercase tracking-tight text-black mb-2">
                {projectDetails[hoveredProject].title}
              </h4>
              <p className="font-sans text-sm text-gray-800 leading-relaxed font-medium">
                {projectDetails[hoveredProject].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      ) : null}
      
      {/* Backgrounds */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      />
      <div className="hidden md:block absolute top-[30%] left-0 w-full h-[1px] bg-gray-300 pointer-events-none" />
      <div className="hidden md:block absolute top-[70%] left-0 w-full h-[1px] bg-gray-300 pointer-events-none" />
      <div className="hidden md:block absolute top-0 left-[20%] w-[1px] h-full bg-gray-300 pointer-events-none" />

      {/* Title */}
      <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 md:left-12 z-40 px-6 md:px-0 mb-8 md:mb-0 pt-8 md:pt-0">
        <h2 className="font-sans font-black text-4xl md:text-6xl tracking-tighter uppercase text-[#1a1a1a] md:text-gray-900 pr-0 md:pr-12 bg-transparent md:bg-white inline-block border-transparent md:border-[2px] md:border-gray-900 p-0 md:p-4 shadow-none md:shadow-[8px_8px_0_rgba(0,0,0,1)]">
          SELECTED WORK
        </h2>
        <div className="hidden md:block absolute -right-[16px] top-[10%] bottom-[10%] w-[1px] bg-gray-300">
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white py-4 text-gray-400 font-mono text-[10px] -rotate-90 whitespace-nowrap tracking-widest border border-gray-200">
            SEC. 03 // PORTFOLIO
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="relative w-full max-w-7xl mx-auto md:absolute md:inset-0 md:flex md:items-center md:justify-center md:pt-20 md:pl-20 pointer-events-auto z-10 px-6 md:px-0">
        <div className="relative w-full h-auto md:h-[80vh] flex flex-col md:block items-center gap-12 pointer-events-auto">
          
          {/* Card 1 */}
          <motion.div
            onMouseEnter={() => setHoveredProject(0)}
            onMouseLeave={() => setHoveredProject(null)}
            style={isMobile ? { transform: 'none' } : { x: card1X, y: '-10%', willChange: 'transform', transform: 'translateZ(0)' }}
            className="relative md:absolute md:top-[10%] md:left-[10%] w-full md:w-[400px] flex flex-col group cursor-pointer z-10 bg-white border border-gray-300 p-4 shadow-md md:hover:border-gray-900 md:transition-colors md:duration-500 md:shadow-sm md:hover:shadow-xl"
          >
            <div className="w-full h-[250px] md:h-[450px] relative overflow-hidden border border-gray-200 mb-4 bg-gray-50 flex items-center justify-center">
              <img src="/projects/shams.jpg" alt="Shams UI" className="absolute inset-0 w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl uppercase tracking-widest text-[#1a1a1a]">Shams</h3>
              <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Next.js / Moodle API</p>
              {isMobile && <p className="mt-3 text-sm text-gray-600">{projectDetails[0].description}</p>}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onMouseEnter={() => setHoveredProject(1)}
            onMouseLeave={() => setHoveredProject(null)}
            style={isMobile ? { transform: 'none' } : { x: card2X, y: '0%', willChange: 'transform', transform: 'translateZ(0)' }}
            className="relative md:absolute md:top-[15%] md:left-[45%] w-full md:w-[350px] flex flex-col group cursor-pointer z-20 bg-white border border-gray-300 p-4 shadow-md md:hover:border-gray-900 md:transition-colors md:duration-500 md:shadow-sm md:hover:shadow-xl"
          >
            <div className="w-full h-[250px] md:h-[350px] relative overflow-hidden border border-gray-200 mb-4 bg-gray-50 flex items-center justify-center">
              <img src="/projects/raqameen.jpg" alt="Raqameen" className="absolute inset-0 w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl uppercase tracking-widest text-[#1a1a1a]">Raqameen</h3>
              <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Next.js / Full-Stack</p>
              {isMobile && <p className="mt-3 text-sm text-gray-600">{projectDetails[1].description}</p>}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            onMouseEnter={() => setHoveredProject(2)}
            onMouseLeave={() => setHoveredProject(null)}
            style={isMobile ? { transform: 'none' } : { x: card3X, y: '5%', willChange: 'transform', transform: 'translateZ(0)' }}
            className="relative md:absolute md:bottom-[20%] md:right-[5%] w-full md:w-[300px] flex flex-col group cursor-pointer z-30 bg-white border border-gray-300 p-4 shadow-md md:hover:border-gray-900 md:transition-colors md:duration-500 md:shadow-sm md:hover:shadow-xl"
          >
            <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden border border-gray-200 mb-4 bg-gray-50 flex items-center justify-center">
              <img src="/projects/rfid.jpg" alt="RFID Wallet" className="absolute inset-0 w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl uppercase tracking-widest text-[#1a1a1a]">RFID-Wallet</h3>
              <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-widest">ESP32 / C/C++</p>
              {isMobile && <p className="mt-3 text-sm text-gray-600">{projectDetails[2].description}</p>}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative md:absolute mt-8 md:mt-0 md:top-40 md:right-24 z-50 flex justify-center w-full md:w-auto">
        <a 
          href="https://github.com/Uoerim" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-[#1a1a1a] hover:text-gray-500 transition-colors bg-white p-2 md:p-0 border border-gray-200 md:border-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none"
        >
          <span className="font-mono text-xs font-semibold tracking-widest uppercase md:bg-white md:px-2 md:border md:border-transparent group-hover:border-gray-200 transition-colors">View more on GitHub</span>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[2px] border-[#1a1a1a] group-hover:border-gray-500 flex items-center justify-center transition-all duration-300 md:group-hover:scale-110 bg-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
          </div>
        </a>
      </div>
    </section>
  );
}


