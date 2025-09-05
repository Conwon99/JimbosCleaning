import React, { useState } from 'react';
import { useLazyLoading } from '@/hooks/use-lazy-loading';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  webpSrc?: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  webpSrc,
  alt,
  fallbackSrc,
  className,
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [webpSupported, setWebpSupported] = useState<boolean | null>(null);
  const { imgRef, isLoaded, isInView } = useLazyLoading();

  // Check WebP support
  React.useEffect(() => {
    const checkWebPSupport = () => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        setWebpSupported(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    checkWebPSupport();
  }, []);

  const getImageSrc = () => {
    if (imageError && fallbackSrc) {
      return fallbackSrc;
    }
    
    if (webpSupported === true && webpSrc) {
      return webpSrc;
    }
    
    return src;
  };

  const handleError = () => {
    setImageError(true);
  };

  if (loading === 'eager') {
    return (
      <picture>
        {webpSupported === true && webpSrc && (
          <source srcSet={webpSrc} type="image/webp" />
        )}
        <img
          src={src}
          alt={alt}
          className={className}
          onError={handleError}
          {...props}
        />
      </picture>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          aria-hidden="true"
        />
      )}
      
      {/* Actual image */}
      <picture>
        {webpSupported === true && webpSrc && isInView && (
          <source srcSet={webpSrc} type="image/webp" />
        )}
        <img
          ref={imgRef}
          src={isInView ? getImageSrc() : placeholder}
          alt={alt}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => {
            if (isInView) {
              setIsLoaded(true);
            }
          }}
          onError={handleError}
          {...props}
        />
      </picture>
    </div>
  );
};

export default LazyImage;
