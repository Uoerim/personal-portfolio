'use client'

import { useRef, useEffect, useState, createContext, useContext, ReactNode } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'

/* "?"?"? Context "?"?"? */
const Ctx = createContext<{ progress: MotionValue<number>; panelCount: number; isMobile: boolean } | null>(null)

export function useScrollProgress() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useScrollProgress must be inside HorizontalScroll')
  return ctx.progress
}

export function usePanelCount() {
  return useContext(Ctx)?.panelCount ?? 5
}

export function useIsMobile() {
  return useContext(Ctx)?.isMobile ?? false
}

export function scrollToPanel(i: number, count: number) {
  if (window.innerWidth < 768) {
    const panels = Array.from(document.querySelectorAll('section')).filter(p => p.getBoundingClientRect().height > 0);
    if (panels[i]) {
      panels[i].scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: (i / (count - 1)) * max, behavior: 'smooth' });
  }
}

/* "?"?"? Engine "?"?"? */
interface Props { children: ReactNode; overlay?: ReactNode; panelCount: number }

export default function HorizontalScroll({ children, overlay, panelCount }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [dist, setDist] = useState(0)
  const [vh, setVh] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const measure = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && trackRef.current) {
        setDist(trackRef.current.scrollWidth - window.innerWidth)
      } else {
        setDist(0);
      }
      setVh(window.innerHeight)
    }
    measure()
    document.fonts?.ready?.then(measure)
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [children])

  const { scrollYProgress } = useScroll()

  // Spring?smoothed transform for ULTRA buttery motion
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 40, mass: 0.8 })
  const x = useTransform(smoothProgress, [0, 1], [0, -dist])

  const h = !isMobile && dist > 0 && vh > 0 ? `${dist + vh}px` : 'auto'

  return (
    <Ctx.Provider value={{ progress: smoothProgress, panelCount, isMobile }}>
      {overlay}
      <div ref={wrapRef} className="relative w-full" style={{ height: h }}>
        {/* Desktop View: Sticky Horizontal Scroll */}
        <div className="hidden md:block sticky top-0 left-0 h-screen w-screen overflow-hidden" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex h-full will-change-transform"
          >
            {children}
          </motion.div>
        </div>
        
        {/* Mobile View: Vertical Stack */}
        <div className="flex md:hidden flex-col w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </Ctx.Provider>
  )
}




