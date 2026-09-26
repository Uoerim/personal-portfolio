'use client';

import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';
import { useScrollProgress } from '@/components/HorizontalScroll';

// Isolate the clock so its 1-second state updates don't force the giant Parallax panel to re-render
function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Cairo' }));
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Cairo' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-sans font-semibold text-2xl md:text-3xl tabular-nums tracking-tight">
      {time || '--:--:-- --'}
    </span>
  );
}

export default function ContactPanel() {
  const progress = useScrollProgress();
  
  const titleX = useTransform(progress, [0.75, 1], ['30%', '0%']);
  const titleOpacity = useTransform(progress, [0.75, 0.9, 1], [0, 1, 1]);
  
  const contentY = useTransform(progress, [0.8, 1], ['20%', '0%']);
  const contentOpacity = useTransform(progress, [0.8, 0.95], [0, 1]);

  return (
    <section className="min-w-[100vw] w-screen h-screen flex-shrink-0 relative overflow-hidden bg-white text-[#1a1a1a]">
      
      {/* Top Left: Status */}
      <div className="absolute top-32 left-8 md:top-32 md:left-12 flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" style={{ willChange: 'opacity' }} />
        <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">
          Currently accepting new clients
        </span>
      </div>

      {/* Center: Huge Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none">
        <motion.h1 
          style={{ x: titleX, opacity: titleOpacity, willChange: 'transform, opacity', transform: 'translateZ(0)' }}
          className="font-sans font-black text-[7rem] md:text-[11rem] lg:text-[15rem] leading-[0.8] tracking-tighter text-[#1a1a1a] select-none text-center"
        >
          LET'S TALK.
        </motion.h1>
      </div>

      {/* Bottom Content Area */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity, willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        className="absolute bottom-12 left-8 right-8 md:bottom-16 md:left-12 md:right-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 z-20"
      >
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full max-w-6xl">
          
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Personal Inquiry</span>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:yosif@raqameen.com" 
                className="font-sans font-medium text-2xl md:text-3xl hover:text-gray-500 transition-colors duration-300"
              >
                yosif@raqameen.com
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Raqameen Agency</span>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:contact@raqameen.com" 
                className="font-sans font-medium text-2xl md:text-3xl hover:text-gray-500 transition-colors duration-300"
              >
                contact@raqameen.com
              </a>
              <a 
                href="https://raqameen.com" 
                target="_blank" 
                rel="noreferrer"
                className="font-sans text-lg md:text-xl text-gray-500 hover:text-[#1a1a1a] transition-colors duration-300 flex items-center gap-2 mt-1"
              >
                raqameen.com
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Right: Live Clock */}
        <div className="flex flex-col gap-2 text-left lg:text-right mt-12 lg:mt-0 lg:ml-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">Local Time (Cairo, Egypt)</span>
          <LiveClock />
        </div>
      </motion.div>
    </section>
  );
}
