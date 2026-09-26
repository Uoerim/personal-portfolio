'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'IoT Smart Home Dashboard',
    description: 'A comprehensive smart home control center with real-time sensor data visualization and device management.',
    tags: ['React', 'Node.js', 'MQTT', 'MongoDB'],
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'FPGA Signal Processor',
    description: 'High-speed digital signal processing pipeline implemented on hardware for real-time audio filtering.',
    tags: ['VHDL', 'Vivado', 'DSP', 'C'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cloud Infrastructure CLI',
    description: 'Command-line tool for declarative provisioning and management of cloud resources across multiple providers.',
    tags: ['Go', 'AWS', 'Terraform', 'Docker'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform mobile application for tracking workouts, integrating with BLE heart rate monitors.',
    tags: ['React Native', 'Firebase', 'BLE', 'TypeScript'],
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    title: 'Autonomous Robot Navigation',
    description: 'Vision-based SLAM and path planning system for an autonomous wheeled robot in indoor environments.',
    tags: ['Python', 'ROS', 'OpenCV', 'C++'],
    gradient: 'from-yellow-400 to-amber-600'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack headless e-commerce solution with high-performance edge rendering and seamless checkout.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
    gradient: 'from-indigo-500 to-violet-500'
  }
];

const softSkills = [
  'Leadership', 'Communication', 'Adaptability', 'Confident', 
  'Team Work', 'Design', 'Creative', 'Problem Solving', 
  'Time Management', 'Conflict Management', 'Eye for Detail'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-50px" });

  return (
    <section className="bg-[#0a0a0a] min-h-screen py-20 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-16 relative" ref={sectionRef}>
        <motion.h2 
          className="text-5xl md:text-7xl text-white font-display uppercase tracking-widest mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          MY PROJECTS
        </motion.h2>
        <motion.svg 
          width="250" height="20" viewBox="0 0 250 20" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="text-amber-500 stroke-current"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <path d="M2 10 Q 30 20 60 10 T 120 10 T 180 10 T 248 10" strokeWidth="4" strokeLinecap="round" fill="none"/>
        </motion.svg>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-32">
        {projects.map((project, index) => {
          const number = String(index + 1).padStart(2, '0');
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, borderColor: '#F59E0B' }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 relative group cursor-pointer transition-shadow hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] flex flex-col h-full"
            >
              {/* Top Gradient Strip */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Number Overlay */}
                <div className="absolute top-4 right-6 text-7xl font-display font-bold text-white/5 pointer-events-none transition-colors group-hover:text-amber-500/10">
                  {number}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{project.title}</h3>
                <p className="text-gray-400 mb-8 relative z-10 flex-grow">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-medium rounded-full border border-amber-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Strengths Banner */}
      <div className="w-full bg-[#111] py-12 border-y border-white/10 mb-16 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500 stroke-current">
              <path d="M30 5 C 10 5, 2 20, 2 20 C 2 20, 10 35, 30 35 C 50 35, 58 20, 58 20 C 58 20, 50 5, 30 5 Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="30" cy="20" r="8" strokeWidth="3" fill="none"/>
              <circle cx="30" cy="20" r="2" fill="currentColor"/>
            </svg>
          </motion.div>
          <motion.h3 
            className="text-4xl md:text-5xl text-white font-display uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            THIS IS MY <span className="text-amber-500">STRENGTHS!</span>
          </motion.h3>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto text-center" ref={skillsRef}>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
              className="px-6 py-3 bg-[#151515] text-gray-300 rounded-lg border border-white/10 hover:border-amber-500/50 hover:text-amber-400 transition-colors font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
