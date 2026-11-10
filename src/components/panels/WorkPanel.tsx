'use client';

import Image from 'next/image';
import { useId } from 'react';
import { motion, useReducedMotion, useTransform } from 'framer-motion';
import { useIsMobile, useScrollProgress } from '@/components/HorizontalScroll';
import styles from './WorkPanel.module.css';

const projects = [
  {
    name: 'Shams', category: 'STUDENT TOOLKIT',
    domain: 'shams.raqameen.com', url: 'https://shams.raqameen.com',
    image: '/projects/shams-site.webp',
    alt: 'The live Shams homepage, with its blue starfield and Uni, made easy headline',
    description: 'A university toolkit bringing Moodle courses, study checklists, deadlines and everyday tools into one place.',
    accent: '#4261d9', canvas: '#030827',
  },
  {
    name: 'Blueprint', category: 'TEAM WORKSPACE',
    domain: 'blueprint.raqameen.com', url: 'https://blueprint.raqameen.com',
    image: '/projects/blueprint-site.webp',
    alt: 'The live Blueprint homepage, showing its dark interface, idea vault and execution board',
    description: 'A shared workspace for capturing ideas, turning them into projects and keeping a team’s tasks moving.',
    accent: '#a798e6', canvas: '#101012',
  },
  {
    name: 'Raqameen', category: 'SOFTWARE STUDIO',
    domain: 'raqameen.com', url: 'https://raqameen.com',
    image: '/projects/raqameen-site.webp',
    alt: 'The live Raqameen homepage, with its dark software studio layout and gold brand mark',
    description: 'The studio’s public website, presenting custom software, web platforms, mobile development and its process.',
    accent: '#c6a570', canvas: '#090909',
  },
];

function Arrow({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function WorkPanel() {
  const instanceId = useId();
  const progress = useScrollProgress();
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const cardY = useTransform(progress, [0.2, 0.4, 0.6], [24, 0, -24]);

  return (
    <section className={styles.panel} aria-labelledby={`${instanceId}-work-title`}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.rail} aria-hidden="true"><span>SELECTED WORK</span><small>SEC. 03 / PORTFOLIO</small></div>
      <div className={styles.content}>
        <header className={styles.header}>
          <div><p className={styles.eyebrow}>SELECTED WEB PROJECTS</p><h2 id={`${instanceId}-work-title`} className={styles.title}>Built. Shipped. Live.</h2></div>
          <span className={styles.intro}>Three products.<br />See them for yourself.</span>
        </header>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <motion.a
              key={project.name} href={project.url} target="_blank" rel="noopener noreferrer"
              aria-label={`${project.name}: visit the live website (opens in a new tab)`}
              aria-describedby={`${instanceId}-${project.name.toLowerCase()}-description`}
              className={styles.card} style={isMobile || reduceMotion ? undefined : { y: cardY }}
            >
              <div className={styles.browser}>
                <span className={styles.browserDots} aria-hidden="true"><i /><i /><i /></span>
                <span className={styles.domain}>{project.domain}</span><Arrow className={styles.browserArrow} />
              </div>
              <div className={styles.preview} style={{ backgroundColor: project.canvas }}>
                <Image src={project.image} alt={project.alt} fill
                  sizes="(min-width: 1600px) 380px, (min-width: 768px) 27vw, (min-width: 600px) 85vw, calc(100vw - 48px)"
                  className={`${styles.screenshot} ${project.name === 'Shams' ? styles.fillScreenshot : ''}`} />
                <span className={styles.viewSite}>Visit live site <Arrow /></span>
              </div>
              <div className={styles.details}>
                <div className={styles.category}><span style={{ color: project.accent }}>{String(index + 1).padStart(2, '0')}</span><span>{project.category}</span></div>
                <div className={styles.projectTitle}><h3>{project.name}</h3><Arrow /></div>
                <p id={`${instanceId}-${project.name.toLowerCase()}-description`} className={styles.description}>{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <footer className={styles.footer}>
          <p>Actual site previews. Explore each project live.</p>
          <a href="https://github.com/Uoerim" target="_blank" rel="noopener noreferrer">More on GitHub <Arrow /></a>
        </footer>
      </div>
    </section>
  );
}
