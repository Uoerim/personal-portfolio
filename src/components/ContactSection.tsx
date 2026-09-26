'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Inter, Space_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

export default function ContactSection() {
  const [cairoTime, setCairoTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Africa/Cairo',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCairoTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative w-full min-h-screen bg-[#0a0a0a] text-[#f5f5dc] flex flex-col justify-between py-20 px-4 md:px-12 ${inter.variable} ${spaceMono.variable}`}>
      
      <div className="max-w-[1400px] mx-auto w-full flex-grow flex flex-col justify-center">
        
        {/* Top Header - Editorial, strict, bold */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-sans font-black text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.8] tracking-tighter text-[#f5f5dc] uppercase">
            LET'S BUILD<br/>
            <span className="text-[#E84A27]">SOMETHING</span><br/>
            BOLD.
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          
          {/* Left: Raqameen */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 md:p-12 border border-[#f5f5dc]/20 bg-[#141414] group"
          >
            {/* Editorial accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#E84A27]"></div>
            
            <div className="relative z-10">
              <h3 className="font-sans font-black text-4xl text-[#E84A27] uppercase tracking-tight mb-2">Raqameen</h3>
              <p className="font-mono text-sm tracking-widest uppercase text-[#f5f5dc]/60 mb-12">A Software Development Company</p>
              
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-[10px] text-[#f5f5dc]/40 mb-2 uppercase tracking-widest">Agency Inquiries</p>
                  <a href="mailto:hello@raqameen.com" className="font-sans text-2xl md:text-3xl hover:text-[#E84A27] transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#E84A27] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">hello@raqameen.com</a>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#f5f5dc]/40 mb-2 uppercase tracking-widest">Website</p>
                  <a href="https://raqameen.com" target="_blank" rel="noopener noreferrer" className="font-sans text-2xl md:text-3xl hover:text-[#E84A27] transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#E84A27] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">www.raqameen.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Personal */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="font-sans font-black text-4xl uppercase tracking-tight mb-2">Personal</h3>
              <p className="font-mono text-sm tracking-widest uppercase text-[#f5f5dc]/60">Direct Contact</p>
            </div>
            
            <div className="space-y-8">
              <div>
                <p className="font-mono text-[10px] text-[#f5f5dc]/40 mb-2 uppercase tracking-widest">Say Hello</p>
                <a href="mailto:me@yosuf.dev" className="font-sans text-2xl md:text-3xl hover:text-[#E84A27] transition-colors inline-block">me@yosuf.dev</a>
              </div>
              
              <div>
                <p className="font-mono text-[10px] text-[#f5f5dc]/40 mb-4 uppercase tracking-widest">Socials</p>
                <div className="flex flex-wrap gap-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                    <a key={social} href="#" className="font-mono text-xs uppercase tracking-widest border border-[#f5f5dc]/20 px-6 py-3 hover:bg-[#f5f5dc] hover:text-[#0a0a0a] transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer Area */}
      <div className="max-w-[1400px] mx-auto w-full pt-8 border-t border-[#f5f5dc]/10 flex flex-col md:flex-row justify-between items-center gap-6 mt-12">
        
        {/* Cairo Time Clock */}
        <div className="flex items-center space-x-3 bg-[#141414] px-4 py-2 border border-[#f5f5dc]/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-mono tracking-widest text-[#f5f5dc]/80 uppercase">
            LOCAL TIME (CAIRO, EG): <span className="text-[#f5f5dc] font-bold">{cairoTime || '--:--:-- --'}</span>
          </span>
        </div>

        {/* Copyright */}
        <div className="text-[#f5f5dc]/50 text-[10px] md:text-xs font-mono tracking-widest uppercase">
          © 2026 RAQAMEEN & YS.
        </div>
        
      </div>
      
    </section>
  );
}
