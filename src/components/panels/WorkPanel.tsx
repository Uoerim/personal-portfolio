"use client";

import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useScrollProgress } from '@/components/HorizontalScroll';
import Image from 'next/image';

export default function WorkPanel() {
  const scrollProgress = useScrollProgress();

  // Range roughly [0.25, 0.75] where this panel is mostly in view
  const card1X = useTransform(scrollProgress, [0.2, 0.8], [200, -300]);
  const card2X = useTransform(scrollProgress, [0.2, 0.8], [400, -500]);
  const card3X = useTransform(scrollProgress, [0.2, 0.8], [600, -700]);

  return (
    <section className="min-w-[100vw] w-screen h-screen flex-shrink-0 relative overflow-hidden bg-white text-[#1a1a1a]">
      
      {/* Architectural Grid Background */}
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
      
      {/* Major Drafting Lines */}
      <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gray-300 pointer-events-none" />
      <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gray-300 pointer-events-none" />
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gray-300 pointer-events-none" />
      <div className="absolute top-0 left-[60%] w-[1px] h-full bg-gray-300 pointer-events-none" />
      
      {/* Crosshairs at intersections */}
      <div className="absolute top-[30%] left-[20%] w-4 h-4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 font-mono text-xs">+</div>
      <div className="absolute top-[30%] left-[60%] w-4 h-4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 font-mono text-xs">+</div>
      <div className="absolute top-[70%] left-[20%] w-4 h-4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 font-mono text-xs">+</div>
      <div className="absolute top-[70%] left-[60%] w-4 h-4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 font-mono text-xs">+</div>

      {/* Large vertical text with drafting lines */}
      <div className="absolute left-8 md:left-12 top-0 h-full flex flex-col justify-center border-r border-gray-200 pr-4 z-0">
        <h2 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter text-[#1a1a1a]/10 -rotate-180" style={{ writingMode: 'vertical-rl' }}>
          SELECTED WORK
        </h2>
        {/* Architectural dimension line */}
        <div className="absolute -right-[16px] top-[10%] bottom-[10%] w-[1px] bg-gray-300">
          <div className="absolute -left-1 top-0 w-3 h-[1px] bg-gray-400" />
          <div className="absolute -left-1 bottom-0 w-3 h-[1px] bg-gray-400" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white py-4 text-gray-400 font-mono text-[10px] -rotate-90 whitespace-nowrap tracking-widest border border-gray-200">
            SEC. 03 // PORTFOLIO
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pt-20 pl-20 pointer-events-none">
        <div className="relative w-full max-w-7xl h-[80vh] pointer-events-auto">
          {/* Card 1 */}
          <motion.div
            style={{ x: card1X, y: '-10%', willChange: 'transform', transform: 'translateZ(0)' }}
            className="absolute top-[10%] left-[10%] w-[400px] flex flex-col group cursor-pointer z-10 bg-white border border-gray-300 p-4 hover:border-gray-900 transition-colors duration-500 shadow-sm hover:shadow-xl"
          >
            {/* Corner brackets */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-gray-500" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-gray-500" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-gray-500" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-gray-500" />

            <div className="w-full h-[450px] relative overflow-hidden border border-gray-200 mb-4 bg-gray-50 group-hover:bg-gray-100 transition-colors flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full text-gray-200" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span className="font-mono text-xs text-gray-400 z-10 bg-white px-2 border border-gray-200">FIG 1.0</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-sans font-bold text-xl uppercase tracking-widest text-[#1a1a1a]">Project Alpha</h3>
                <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Frontend / WebGL</p>
              </div>
              <span className="font-mono text-[10px] text-gray-400">SCALE 1:1</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            style={{ x: card2X, y: '0%', willChange: 'transform', transform: 'translateZ(0)' }}
            className="absolute top-[15%] left-[45%] w-[350px] flex flex-col group cursor-pointer z-20 bg-white border border-gray-300 p-4 hover:border-gray-900 transition-colors duration-500 shadow-sm hover:shadow-xl"
          >
            {/* Corner brackets */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-gray-500" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-gray-500" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-gray-500" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-gray-500" />

            <div className="w-full h-[350px] relative overflow-hidden border border-gray-200 mb-4 bg-gray-50 group-hover:bg-gray-100 transition-colors flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full text-gray-200" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span className="font-mono text-xs text-gray-400 z-10 bg-white px-2 border border-gray-200">FIG 2.0</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-sans font-bold text-xl uppercase tracking-widest text-[#1a1a1a]">Project Beta</h3>
                <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Backend / API</p>
              </div>
              <span className="font-mono text-[10px] text-gray-400">SCALE 1:2</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            style={{ x: card3X, y: '5%', willChange: 'transform', transform: 'translateZ(0)' }}
            className="absolute bottom-[20%] right-[5%] w-[300px] flex flex-col group cursor-pointer z-30 bg-white border border-gray-300 p-4 hover:border-gray-900 transition-colors duration-500 shadow-sm hover:shadow-xl"
          >
            {/* Corner brackets */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-gray-500" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-gray-500" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-gray-500" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-gray-500" />

            <div className="w-full h-[300px] relative overflow-hidden border border-gray-200 mb-4 bg-gray-50 group-hover:bg-gray-100 transition-colors flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full text-gray-200" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
              </svg>
              <span className="font-mono text-xs text-gray-400 z-10 bg-white px-2 border border-gray-200">FIG 3.0</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-sans font-bold text-xl uppercase tracking-widest text-[#1a1a1a]">Project Gamma</h3>
                <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Embedded Systems</p>
              </div>
              <span className="font-mono text-[10px] text-gray-400">SCALE 1:5</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* View More on GitHub Button (Unchanged) */}
      <div className="absolute top-32 right-12 md:top-40 md:right-24 z-50">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 text-[#1a1a1a] hover:text-gray-500 transition-colors"
        >
          <span className="font-mono text-xs font-semibold tracking-widest uppercase bg-white px-2 border border-transparent group-hover:border-gray-200 transition-colors">View more on GitHub</span>
          <div className="w-12 h-12 rounded-full border-[2px] border-[#1a1a1a] group-hover:border-gray-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white">
            <motion.div
              animate={{ rotate: [-8, 8, -8], y: [-1, 1, -1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: 'transform' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
}
