'use client';

import React, { useEffect, useRef, useState } from 'react';

export type ScrollRevealDirection = 'up' | 'left' | 'right' | 'scale' | 'fade';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: ScrollRevealDirection;
  delay?: number;
  className?: string;
  threshold?: number;
  style?: React.CSSProperties;
}

const directionClasses: Record<ScrollRevealDirection, string> = {
  up: 'scroll-reveal-up',
  left: 'scroll-reveal-left',
  right: 'scroll-reveal-right',
  scale: 'scroll-reveal-scale',
  fade: 'scroll-reveal-fade',
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.2,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const animationClass = directionClasses[direction] || directionClasses.up;
  const appliedClass = isVisible ? animationClass : 'scroll-hidden';
  const combinedClassName = className ? `${appliedClass} ${className}` : appliedClass;

  return (
    <div
      ref={ref}
      className={combinedClassName}
      style={{
        ...style,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export { ScrollReveal };
