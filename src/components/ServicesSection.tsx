'use client';

import { motion } from 'framer-motion';

const services = [
  'Web Design',
  'Web Development',
  'Branding',
  'UI/UX',
  'CMS',
  'Maintenance'
];

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'AWS',
  'Docker'
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ServicesSection() {
  return (
    <section className="bg-[#F4F0EB] text-[#0a0a0a] py-24 md:py-32 px-4 md:px-12">
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Column 1: Services */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <h2 className="text-sm font-mono tracking-[0.2em] mb-12 text-[#E84A27]">SERVICES /</h2>
          <div className="flex flex-col border-t border-[#0a0a0a]/20">
            {services.map((service, index) => (
              <div 
                key={service} 
                className="group flex items-center justify-between py-6 border-b border-[#0a0a0a]/20 cursor-pointer transition-colors hover:bg-black/5 px-2 -mx-2"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-sm opacity-50">0{index + 1}</span>
                  <span className="text-xl md:text-2xl font-semibold uppercase">{service}</span>
                </div>
                <span className="text-2xl font-light transform transition-transform group-hover:rotate-90">+</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Column 2: Design Manifesto */}
        <motion.div variants={itemVariants} className="flex flex-col h-full">
          <h2 className="text-sm font-mono tracking-[0.2em] mb-12 text-[#E84A27] lg:opacity-0 hidden lg:block">MANIFESTO /</h2>
          <div className="bg-[#E84A27] text-[#0a0a0a] p-8 md:p-12 h-full flex flex-col justify-center shadow-lg">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight mb-6">
              Good design isn't just about how it looks.
            </h3>
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              It's about how it works, how it feels, and how it solves real engineering problems. We build systems that are beautiful, robust, and scalable.
            </p>
          </div>
        </motion.div>

        {/* Column 3: Tech Stack */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <h2 className="text-sm font-mono tracking-[0.2em] mb-12 text-[#E84A27]">TECH STACK /</h2>
          <ul className="space-y-6">
            {techStack.map((tech) => (
              <li key={tech} className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#0a0a0a]"></span>
                <span className="text-xl font-medium uppercase tracking-wide">{tech}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </motion.div>
    </section>
  );
}
