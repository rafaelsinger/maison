'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('[data-animate-on-scroll]');
    
    elements.forEach((element) => {
      element.classList.add('translate-y-[50px]', 'opacity-0', 'transition-all', 'duration-1000');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
} 