'use client';

import React from 'react';

const skills = [
  'Python', 'C/C++', 'TypeScript', 'React', 'Node.js', 'FPGA',
  'Docker', 'AWS', 'IoT', 'Embedded', 'VHDL', 'Go', 'PostgreSQL',
  'Redis', 'Firebase'
];

export default function SkillsMarquee() {
  return (
    <div className="w-full bg-amber-500 overflow-hidden py-4 border-y-2 border-amber-600">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
      `}} />
      <div className="animate-marquee flex whitespace-nowrap items-center">
        {/* We duplicate the content to make it seamless. 
            Since width is 200% and we translate to -50%, having two sets covers the space perfectly. */}
        {[0, 1].map((set) => (
          <div key={set} className="flex w-1/2 justify-around">
            {skills.map((skill, index) => (
              <React.Fragment key={`${set}-${index}`}>
                <span className="text-black font-display text-2xl uppercase font-bold mx-4 tracking-wider">
                  {skill}
                </span>
                <span className="text-black text-xl mx-4">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
