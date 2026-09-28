'use client'

import { useState, useCallback } from 'react'
import { motion, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useScrollProgress, usePanelCount, scrollToPanel } from './HorizontalScroll'

export default function Navbar() {
  const [activePanel, setActivePanel] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const progress = useScrollProgress()
  const panelCount = usePanelCount()

  useMotionValueEvent(progress, 'change', (v) => {
    const panel = Math.round(v * (panelCount - 1))
    setActivePanel(panel)
  })

  const navLinks = [
    { name: 'Home', panel: 0 },
    { name: 'About', panel: 1 },
    { name: 'Work', panel: 2 },
    { name: 'Experience', panel: 3 },
    { name: 'YouTube', panel: 4 },
    { name: 'Contact', panel: 5 },
  ]

  const handleNav = useCallback((panelIndex: number) => {
    setMobileMenuOpen(false)
    scrollToPanel(panelIndex, panelCount)
  }, [panelCount])

  const isYouTube = activePanel === 4;
  const isDark = activePanel === 1 || activePanel === 3;

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-[100] bg-transparent"
        style={{ willChange: 'transform' }}
        animate={isYouTube ? { y: [-4, 4, -4], rotate: [0.5, -0.5, 0.5] } : { y: 0, rotate: 0 }}
        transition={isYouTube ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          
          <button
            onClick={() => handleNav(0)}
            className="font-sans font-black text-2xl uppercase focus:outline-none transition-all duration-300 cursor-pointer"
            style={isYouTube ? {
              color: '#fff',
              textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000, 4px 4px 0 #FBBF24',
              letterSpacing: '0.05em'
            } : {
              color: isDark ? '#fff' : '#1a1a1a',
              letterSpacing: '-0.05em',
              textShadow: 'none'
            }}
          >
            YOSIF IBRAHIM
          </button>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activePanel === link.panel;
              return (
                <motion.button
                  key={link.name}
                  onClick={() => handleNav(link.panel)}
                  whileHover={
                    isYouTube 
                      ? { scale: 1.1, y: -2, textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 4px 4px 0 #FBBF24' }
                      : { scale: 1.1, y: -1, opacity: isActive ? 1 : 0.7 }
                  }
                  whileTap={{ scale: 0.95 }}
                  className="relative font-sans text-xs uppercase transition-all duration-300 cursor-pointer"
                  style={isYouTube ? {
                    color: isActive ? '#fff' : '#e5e7eb',
                    fontWeight: 900,
                    letterSpacing: '0.1em',
                    textShadow: isActive 
                      ? '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 3px 3px 0 #38bdf8' 
                      : '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                  } : {
                    color: isActive ? (isDark ? '#fff' : '#1a1a1a') : (isDark ? '#d4d4d8' : '#9ca3af'),
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textShadow: 'none'
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className={`absolute left-0 right-0 ${
                        isYouTube ? '-bottom-3 h-[4px]' : '-bottom-2 h-[2px]'
                      }`}
                      style={{ backgroundColor: isDark && !isYouTube ? '#ffffff' : '#1a1a1a' }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span 
                className="font-mono text-[10px] uppercase transition-all duration-300"
                style={isYouTube ? {
                  color: '#fff',
                  fontWeight: 900,
                  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                } : {
                  color: '#6b7280',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textShadow: 'none'
                }}
              >
                Available for work
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: isDark && !isYouTube ? '#ffffff' : '#1a1a1a' }} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: isDark && !isYouTube ? '#ffffff' : '#1a1a1a' }} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: isDark && !isYouTube ? '#ffffff' : '#1a1a1a' }} />
            </button>
          </div>

        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNav(link.panel)}
                    className="font-sans font-black uppercase text-4xl tracking-tighter text-[#1a1a1a] hover:text-gray-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
