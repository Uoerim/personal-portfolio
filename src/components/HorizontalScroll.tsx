'use client'

import { useRef, useEffect, useState, createContext, useContext, ReactNode } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'

/* ─── Context ─── */
const Ctx = createContext<{ progress: MotionValue<number>; panelCount: number } | null>(null)

export function useScrollProgress() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useScrollProgress must be inside HorizontalScroll')
  return ctx.progress
}

export function usePanelCount() {
  return useContext(Ctx)?.panelCount ?? 5
}

export function scrollToPanel(i: number, count: number) {
  const max = document.documentElement.scrollHeight - window.innerHeight
  window.scrollTo({ top: (i / (count - 1)) * max, behavior: 'smooth' })
}

/* ─── Engine ─── */
interface Props { children: ReactNode; overlay?: ReactNode; panelCount: number }

export default function HorizontalScroll({ children, overlay, panelCount }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [dist, setDist] = useState(0)
  const [vh, setVh] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setDist(trackRef.current.scrollWidth - window.innerWidth)
      setVh(window.innerHeight)
    }
    measure()
    document.fonts?.ready?.then(measure)
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [children])

  const { scrollYProgress } = useScroll({ target: wrapRef })

  // Spring‑smoothed transform for buttery motion
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, mass: 0.2 })
  const x = useTransform(smoothProgress, [0, 1], [0, -dist])

  const h = dist > 0 && vh > 0 ? `${dist + vh}px` : '100vh'

  return (
    <Ctx.Provider value={{ progress: smoothProgress, panelCount }}>
      {overlay}
      <div ref={wrapRef} className="relative" style={{ height: h }}>
        <div className="sticky top-0 left-0 h-screen w-screen overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex h-full will-change-transform"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </Ctx.Provider>
  )
}
