'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValueEvent } from 'framer-motion';
import { useScrollProgress, usePanelCount } from './HorizontalScroll';

/**
 * Zero-repaint theme controller.
 * Instead of transitioning body background-color (which forces full-screen repaints),
 * we render a fixed dark overlay and animate its OPACITY.
 * Opacity is composited entirely on the GPU — zero layout, zero paint, zero jank.
 */
export default function ThemeController() {
  const progress = useScrollProgress();
  const count = usePanelCount();
  const [isDark, setIsDark] = useState(false);
  const currentDark = useRef(false);

  useMotionValueEvent(progress, 'change', (v) => {
    const activeIndex = Math.round(v * (count - 1));
    const shouldBeDark = activeIndex === 1 || activeIndex === 3;

    if (currentDark.current !== shouldBeDark) {
      currentDark.current = shouldBeDark;
      // Toggle body class for text/border color overrides (instant, no transition)
      if (shouldBeDark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
      // Trigger the opacity fade on the overlay
      setIsDark(shouldBeDark);
    }
  });

  return (
    <motion.div
      animate={{ opacity: isDark ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{
        backgroundColor: '#0a0a0a',
        willChange: 'opacity',
        transform: 'translateZ(0)',
      }}
    />
  );
}
