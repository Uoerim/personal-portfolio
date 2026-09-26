'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExperiencePanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      year: '2026',
      period: '2026 - PRESENT',
      role: 'FOUNDER & ENGINEER',
      company: 'RAQAMEEN',
      desc: 'Building a leading software development agency. Crafting scalable platforms, mobile apps, and enterprise architecture for forward-thinking clients.'
    },
    {
      year: '2023',
      period: '2023 - 2026',
      role: 'SENIOR FULL-STACK',
      company: 'FREELANCE',
      desc: 'Delivered high-performance web applications and embedded systems for global clients. Specialized in React, Python, AWS, and complex state management.'
    },
    {
      year: '2021',
      period: '2021 - 2023',
      role: 'HARDWARE ENGINEER',
      company: 'TECH INNOVATORS',
      desc: 'Designed and programmed FPGA solutions and IoT devices. Bridged the gap between hardware precision and software logic.'
    },
    {
      year: '2017',
      period: '2017 - 2021',
      role: 'COMPUTER ENGINEERING',
      company: 'UNIVERSITY',
      desc: 'Graduated with honors. Specialized in system architecture, microprocessors, and software engineering. Laid the foundation for deep technical work.'
    }
  ];

  const handleNext = () => {
    if (activeIndex < experiences.length - 1) setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const ANGLE_STEP = 30; // Degrees between each major tick

  return (
    <section className="min-w-[100vw] w-screen h-screen flex-shrink-0 relative overflow-hidden bg-white text-[#1a1a1a]">
      
      {/* Top Left Title */}
      <div className="absolute top-12 left-12 z-30 font-mono text-xs tracking-widest text-gray-400 uppercase">
        02 — The Timeline
      </div>

      {/* MASSIVE ROTARY DIAL */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[140vh] h-[140vh] z-0 pointer-events-none">
        {/* Outer Static Ring */}
        <div className="absolute inset-0 rounded-full border-[1px] border-gray-100" />
        
        {/* Inner Rotating Ring */}
        <motion.div 
          animate={{ rotate: -(activeIndex * ANGLE_STEP) }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          style={{ willChange: 'transform', transformOrigin: 'center center' }}
          className="absolute inset-[4vh] md:inset-[8vh] rounded-full border-[1px] border-gray-200"
        >
          {/* Ticks */}
          {Array.from({ length: 24 }).map((_, i) => {
            const isMajor = i % 2 === 0;
            const expIndex = i / 2;
            const hasExp = isMajor && expIndex < experiences.length;
            
            return (
              <div 
                key={i}
                className="absolute top-1/2 left-0 w-full h-0 -translate-y-1/2 flex items-center justify-end"
                style={{ transform: `rotate(${i * (ANGLE_STEP / 2)}deg)` }}
              >
                <div className="flex items-center gap-4 pr-[2%]">
                  {hasExp && (
                    <span 
                      className="font-mono text-sm tracking-widest text-gray-400 -translate-x-4"
                      style={{ transform: 'rotate(90deg)' }}
                    >
                      {experiences[expIndex].year}
                    </span>
                  )}
                  <div className={`h-[1px] bg-gray-300 ${isMajor ? 'w-16' : 'w-6'}`} />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* MINIMAL PLAYHEAD / SELECTOR on the right edge of the wheel */}
      <div className="absolute top-1/2 left-[70vh] -translate-y-1/2 flex items-center z-20 pointer-events-none">
        {/* Delicate connector line */}
        <div className="w-12 h-[1px] bg-gray-400 -translate-x-6" />
        {/* Minimal hollow ring */}
        <div className="w-10 h-10 rounded-full bg-white border border-[#1a1a1a] flex items-center justify-center -translate-x-11 shadow-sm">
           {/* Subtle center dot */}
           <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full animate-pulse" />
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="absolute top-0 bottom-0 right-0 left-[max(70vh,40vw)] flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-auto"
          >
            <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-sans font-black tracking-tighter text-[#1a1a1a] leading-none mb-2 md:mb-6 select-none drop-shadow-sm">
              {experiences[activeIndex].year}
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-800 mb-4 tracking-tight">
              {experiences[activeIndex].role}
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-sm md:text-base uppercase tracking-widest text-gray-500 font-semibold">
                {experiences[activeIndex].company}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <span className="font-mono text-sm md:text-base uppercase tracking-widest text-gray-400">
                {experiences[activeIndex].period}
              </span>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl">
              {experiences[activeIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* PROMINENT NAVIGATION CONTROLS */}
      <div className="absolute bottom-12 right-12 md:bottom-16 md:right-24 flex gap-4 z-50 pointer-events-auto">
        <button 
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-full bg-[#1a1a1a] text-white hover:bg-gray-800 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
          <span className="font-mono text-sm tracking-widest font-bold">PREV</span>
        </button>
        <button 
          onClick={handleNext}
          disabled={activeIndex === experiences.length - 1}
          className="flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 rounded-full bg-[#1a1a1a] text-white hover:bg-gray-800 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
        >
          <span className="font-mono text-sm tracking-widest font-bold">NEXT</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </button>
      </div>

    </section>
  );
}
