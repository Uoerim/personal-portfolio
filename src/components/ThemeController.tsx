'use client';

import { useRef, useEffect } from 'react';
import { useMotionValueEvent } from 'framer-motion';
import { useScrollProgress, usePanelCount, useIsMobile } from './HorizontalScroll';

export default function ThemeController() {
  const progress = useScrollProgress();
  const count = usePanelCount();
  const isMobile = useIsMobile();
  const currentDark = useRef(false);

  // Desktop: Framer Motion scroll progress
  useMotionValueEvent(progress, 'change', (v) => {
    if (isMobile) return;
    const activeIndex = Math.round(v * (count - 1));
    const shouldBeDark = activeIndex === 1 || activeIndex === 3;
    updateTheme(shouldBeDark);
  });

  // Mobile: Native Scroll Event + getBoundingClientRect
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll('section'));
      if (sections.length === 0) return;

      // The center of the viewport
      const viewportCenter = window.innerHeight * 0.35;

      let closestIndex = -1;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Skip hidden desktop sections
        if (getComputedStyle(section).display === 'none' || (rect.width === 0 && rect.height === 0)) return;

        // Calculate the vertical center of the section relative to the viewport
        const sectionCenter = rect.top + rect.height / 2;
        const distanceToCenter = Math.abs(viewportCenter - sectionCenter);

        // If this section is large enough to completely engulf the center
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
           closestIndex = index;
           minDistance = 0;
        } else if (distanceToCenter < minDistance) {
           minDistance = distanceToCenter;
           closestIndex = index;
        }
      });

      if (closestIndex !== -1) {
        const normalizedIndex = closestIndex % count;
        const shouldBeDark = normalizedIndex === 1 || normalizedIndex === 3;
        updateTheme(shouldBeDark);
      }
    };

    // Run once on mount to set initial theme
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isMobile, count]);

  function updateTheme(shouldBeDark: boolean) {
    if (currentDark.current !== shouldBeDark) {
      currentDark.current = shouldBeDark;
      if (shouldBeDark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    }
  }

  return null;
}


