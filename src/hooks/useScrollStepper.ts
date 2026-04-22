'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollStepper(count: number) {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        {
          threshold: 1,
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Progress line calculation (smooth)
  useEffect(() => {
    const total = count - 1;
    setProgress((activeStep / total) * 100);
  }, [activeStep, count]);

  return { activeStep, progress, stepRefs };
}
