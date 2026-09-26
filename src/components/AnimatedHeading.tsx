'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export default function AnimatedHeading({
  text,
  className = '',
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
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
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Calculate viewBox width to accommodate text length comfortably
  const viewBoxWidth = Math.max(800, Math.ceil(text.length * 45));

  return (
    <div
      ref={containerRef}
      className={`${isVisible ? 'animate-draw-text' : 'scroll-hidden'} ${className}`.trim()}
    >
      <svg
        viewBox={`0 0 ${viewBoxWidth} 100`}
        className={`w-full h-auto overflow-visible ${isVisible ? 'animate-draw-text' : ''}`.trim()}
        aria-label={text}
        role="img"
      >
        <text
          x="50%"
          y="70"
          textAnchor="middle"
          dominantBaseline="middle"
          className={!isVisible ? 'scroll-hidden' : ''}
          style={
            {
              stroke: '#4ecdc4',
              strokeWidth: '2',
              fill: '#4ecdc4',
              fontSize: '72px',
              fontFamily: 'Permanent Marker, cursive',
              '--dash-length': '1500',
            } as React.CSSProperties
          }
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

export { AnimatedHeading };
