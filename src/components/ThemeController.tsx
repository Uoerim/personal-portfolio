'use client';

import { useRef } from 'react';
import { useMotionValueEvent } from 'framer-motion';
import { useScrollProgress, usePanelCount } from './HorizontalScroll';

export default function ThemeController() {
  const progress = useScrollProgress();
  const count = usePanelCount();
  const currentDark = useRef(false);

  useMotionValueEvent(progress, 'change', (v) => {
    const activeIndex = Math.round(v * (count - 1));
    const shouldBeDark = activeIndex === 1 || activeIndex === 3;

    if (currentDark.current !== shouldBeDark) {
      currentDark.current = shouldBeDark;
      if (shouldBeDark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    }
  });

  return null;
}
