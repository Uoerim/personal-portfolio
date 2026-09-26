'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'TechCorp',
    period: '2023-Present',
    description: 'Leading a team of engineers to build scalable microservices. Spearheaded the migration to a modern tech stack improving performance by 40%.'
  },
  {
    role: 'Embedded Systems Engineer',
    company: 'IoT Solutions Inc',
    period: '2021-2023',
    description: 'Designed and developed firmware for low-power IoT devices. Integrated sensor data with cloud platforms using MQTT and AWS.'
  },
  {
    role: 'Software Engineering Intern',
    company: 'StartupXYZ',
    period: '2020-2021',
    description: 'Developed full-stack web applications using React and Node.js. Assisted in deploying infrastructure using Docker and CI/CD pipelines.'
  }
];

const interests = ['Embedded Systems', 'FPGA Design', 'IoT', 'Cloud Architecture', 'AI/ML'];
const software = ['VS Code', 'Vivado', 'KiCad', 'Docker Desktop', 'AWS Console', 'Figma'];

export default function ExperienceSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4 md:px-8 lg:px-16" id="experience">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column - Experiences (60%) */}
          <div className="w-full lg:w-[60%]">
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F59E0B] uppercase flex items-center gap-3">
                <span className="text-3xl">✦</span> Experiences
              </h2>
            </motion.div>

            <div className="relative border-l-2 border-[#F59E0B] border-dashed pl-6 ml-3 md:ml-4 space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] md:-left-[33px] top-4 w-4 h-4 bg-[#F59E0B] rounded-full border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform duration-300" />
                  
                  {/* Card */}
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-l-[#F59E0B] shadow-lg group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[4px_4px_15px_rgba(245,158,11,0.2)] transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-4">
                      <span className="text-[#FBBF24] font-semibold">{exp.company}</span>
                      <span className="hidden md:inline text-gray-500">•</span>
                      <span className="text-gray-400 text-sm font-mono">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Education & Others (40%) */}
          <div className="w-full lg:w-[40%] space-y-16">
            
            {/* Educations */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-display font-bold text-[#F59E0B] uppercase flex items-center gap-3 mb-8">
                <span className="text-2xl">✦</span> Educations
              </h2>
              <div className="space-y-6">
                <div className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-800 hover:border-[#F59E0B] transition-colors">
                  <div className="text-gray-400 text-sm font-mono mb-1">2021-Present</div>
                  <div className="text-lg font-bold">Computer Engineering</div>
                  <div className="text-[#FBBF24] text-sm">University</div>
                </div>
                <div className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-800 hover:border-[#F59E0B] transition-colors">
                  <div className="text-gray-400 text-sm font-mono mb-1">2019-2021</div>
                  <div className="text-lg font-bold">Senior High School</div>
                  <div className="text-[#FBBF24] text-sm">Science Major</div>
                </div>
              </div>
            </motion.div>

            {/* Interest */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-display font-bold text-[#F59E0B] uppercase flex items-center gap-3 mb-6">
                <span className="text-2xl">✦</span> Interest
              </h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-900 border border-gray-700 text-gray-300 rounded text-sm hover:border-[#F59E0B] hover:text-white transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Software */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-display font-bold text-[#F59E0B] uppercase flex items-center gap-3 mb-6">
                <span className="text-2xl">✦</span> Software
              </h2>
              <div className="flex flex-wrap gap-2">
                {software.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#1a1a1a] text-[#FBBF24] rounded text-sm border-b-2 border-[#F59E0B]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
