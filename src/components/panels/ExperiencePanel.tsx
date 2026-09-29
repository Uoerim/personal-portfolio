'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExperiencePanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      year: '2026',
      period: 'OCT 2025 - PRESENT',
      role: 'FOUNDER & FULL-STACK DEV',
      company: 'RAQAMEEN',
      desc: 'Running a technical agency programming custom full-stack software and Next.js web applications for clients. Managing database design and API development.'
    },
    {
      year: '2025',
      period: 'JUL 2025 - OCT 2025',
      role: 'REACT NATIVE DEVELOPER',
      company: 'THE DEVHOUSE',
      desc: 'Programmed mobile UI features, interactive maps, and custom animations, working closely with designers to deploy responsive screens.'
    },
    {
      year: '2022',
      period: '2022 - EXPECTED MAY 2027',
      role: 'B.SC. COMPUTER ENGINEERING',
      company: 'AIN SHAMS UNIVERSITY',
      desc: 'Specializing in Computer Engineering and Software Systems (CESS). Active in hardware prototyping and microcontroller programming.'
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
    <section className="min-w-[100vw] w-screen min-h-[100svh] md:h-screen py-24 md:py-0 flex-shrink-0 relative overflow-hidden bg-white text-[#1a1a1a]">
      
      {/* Top Left Title */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-30 font-mono text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
        02 // The Timeline
      </div>

      {/* ----------------- MOBILE LAYOUT ----------------- */}
      <div className="md:hidden relative w-full h-full flex flex-col justify-start px-6 pt-16 pb-12 overflow-y-auto">
        <h1 className="font-sans font-black text-4xl md:text-6xl tracking-tighter mb-12">EXPERIENCE.</h1>
        <div className="flex flex-col gap-12 border-l-2 border-gray-200 ml-2">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-6">
              {/* Dot */}
              <div className="absolute top-1 -left-[9px] w-4 h-4 rounded-full bg-[#1a1a1a] border-4 border-white" />
              <div className="font-mono text-xs tracking-widest text-gray-500 mb-1">{exp.year} | {exp.period}</div>
              <h3 className="font-sans font-black text-2xl uppercase leading-tight">{exp.role}</h3>
              <h4 className="font-sans text-lg font-bold text-gray-400 mt-1">{exp.company}</h4>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------- DESKTOP LAYOUT ----------------- */}
      <div className="hidden md:block w-full h-full">
        {/* MASSIVE ROTARY DIAL */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[140vh] h-[140vh] z-0 pointer-events-none">
          {/* Outer Static Ring */}
          <div className="absolute inset-0 rounded-full border-[1px] border-gray-100" />
          
          {/* Inner Rotating Ring */}
          <motion.div 
            animate={{ rotate: -(activeIndex * ANGLE_STEP) }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
            style={{ willChange: 'transform', transformOrigin: 'center center' }}
            className="absolute inset-[8vh] rounded-full border-[1px] border-gray-200"
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
              {experiences[activeIndex] && (
                <>
                  <h1 className="text-[10rem] lg:text-[14rem] font-sans font-black tracking-tighter text-[#1a1a1a] leading-none mb-6 select-none drop-shadow-sm">
                    {experiences[activeIndex].year}
                  </h1>
                  <h2 className="text-4xl lg:text-5xl font-sans font-bold text-gray-800 mb-4 tracking-tight">
                    {experiences[activeIndex].role}
                  </h2>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono text-base uppercase tracking-widest text-gray-500 font-semibold">
                      {experiences[activeIndex].company}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <span className="font-mono text-base uppercase tracking-widest text-gray-400">
                      {experiences[activeIndex].period}
                    </span>
                  </div>
                  <p className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl">
                    {experiences[activeIndex].desc}
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PROMINENT NAVIGATION CONTROLS */}
        <div className="absolute bottom-16 right-24 flex gap-4 z-50 pointer-events-auto">
          <button 
            onClick={handleNext}
            disabled={activeIndex === experiences.length - 1}
            className="flex items-center gap-3 px-8 py-5 rounded-full bg-[#1a1a1a] text-white hover:bg-gray-800 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
            <span className="font-mono text-sm tracking-widest font-bold">PREV YEAR</span>
          </button>
          <button 
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="flex items-center gap-3 px-8 py-5 rounded-full bg-[#1a1a1a] text-white hover:bg-gray-800 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
          >
            <span className="font-mono text-sm tracking-widest font-bold">NEXT YEAR</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

