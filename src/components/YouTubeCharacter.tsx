'use client';

import { motion } from 'framer-motion';
import { Permanent_Marker, Inter, Space_Mono } from 'next/font/google';

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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

export default function YouTubeCharacter() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section className={`relative w-full min-h-screen bg-[#141414] flex flex-col justify-center p-8 overflow-hidden ${inter.variable} ${spaceMono.variable}`}>
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
        
        {/* Content Side - Professional & Editorial */}
        <motion.div 
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <motion.p variants={itemVariants} className="font-mono text-[10px] text-[#E84A27] uppercase tracking-widest mb-4">
              YOUTUBE ORIGINAL —
            </motion.p>
            <motion.h2 
              variants={itemVariants}
              className="font-sans font-black text-[4rem] md:text-[6rem] leading-[0.9] tracking-tighter text-[#f5f5dc] uppercase"
            >
              THE YOUTUBE<br />
              <span className="text-[#E84A27]">PERSONA</span>
            </motion.h2>
          </div>
          
          <motion.p variants={itemVariants} className="font-mono text-sm text-[#f5f5dc]/60 leading-relaxed max-w-md">
            A digital persona that explains complex tech concepts, breaks down intricate engineering projects, and makes the seemingly impossible accessible. No fluff, just pure engineering knowledge delivered with a creative edge.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {[
              { label: "Subscribers", value: "0" },
              { label: "Videos", value: "Tutorials" },
              { label: "Style", value: "Animation" },
              { label: "Vibe", value: "Creative Tech" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-[#0a0a0a] border border-[#f5f5dc]/10 p-6 flex flex-col"
              >
                <span className="font-mono text-[10px] text-[#f5f5dc]/40 uppercase tracking-widest mb-2">{stat.label}</span>
                <span className="font-sans font-bold text-xl text-[#f5f5dc]">{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Character Side - Cartoonish & Playful (Isolated) */}
        <div className="relative flex items-center justify-center h-[600px]">
          {/* Speech Bubble */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute top-10 right-0 md:-right-10 z-20"
          >
            <div className="speech-bubble relative bg-white border-4 border-black p-4 md:p-6 rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,1)] max-w-[250px] animate-float">
              <p className={`text-xl text-black leading-tight ${permanentMarker.className}`}>
                Hey! I'm the digital engineer. Subscribe for tech deep dives!
              </p>
              {/* Tail of speech bubble */}
              <div className="absolute -bottom-6 left-10 w-0 h-0 border-l-[16px] border-l-transparent border-t-[24px] border-t-black border-r-[16px] border-r-transparent"></div>
              <div className="absolute -bottom-[18px] left-[42px] w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-white border-r-[12px] border-r-transparent"></div>
            </div>
          </motion.div>

          {/* Character Comic Panel */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-sm aspect-[3/4] bg-white border-[8px] border-black rounded-3xl shadow-[16px_16px_0_rgba(0,0,0,1)] rotate-3 flex flex-col items-center justify-center p-6 relative overflow-hidden"
          >
            {/* Panel background comic dots pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-40 h-40 bg-amber-400 rounded-full border-4 border-black mx-auto mb-6 flex items-center justify-center shadow-inner relative overflow-hidden">
                <span className="text-6xl absolute z-10">🤖</span>
                {/* Comic starburst background behind robot */}
                <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg,#FBBF24_0deg_15deg,#F59E0B_15deg_30deg)] animate-[star-spin_10s_linear_infinite] opacity-50"></div>
              </div>
              <h3 className={`text-3xl font-black text-black uppercase ${permanentMarker.className}`}>YOUR AVATAR</h3>
              <div className="mt-3 bg-black text-white font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full">
                COMING SOON
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
