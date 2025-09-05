import { useState, useEffect, useRef } from 'react';

interface UseLazyLoadingOptions {
  rootMargin?: string;
  threshold?: number;
}

export const useLazyLoading = (options: UseLazyLoadingOptions = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: options.rootMargin || '50px',
        threshold: options.threshold || 0.1,
      }
    );

    observer.observe(img);

    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);

  useEffect(() => {
    if (isInView) {
      const img = imgRef.current;
      if (img) {
        img.onload = () => setIsLoaded(true);
        img.onerror = () => setIsLoaded(true); // Still set loaded to prevent infinite loading
      }
    }
  }, [isInView]);

  return { imgRef, isLoaded, isInView };
};
