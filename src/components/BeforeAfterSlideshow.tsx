'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterImage {
  src: string;
  alt: string;
  label: string;
}

interface BeforeAfterSlideshowProps {
  images: BeforeAfterImage[];
  className?: string;
  showThumbnails?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  splitView?: boolean;
}

export default function BeforeAfterSlideshow({ 
  images, 
  className = "", 
  showThumbnails = true, 
  showArrows = true, 
  autoPlay = false, 
  autoPlayInterval = 3000,
  splitView = false
}: BeforeAfterSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  // For split view, we need exactly 2 images (before and after)
  const beforeImage = images.find(img => img.label.toLowerCase() === 'before');
  const afterImage = images.find(img => img.label.toLowerCase() === 'after');

  return (
    <div className={`relative ${className}`}>
      {/* Main Image Display */}
      <div className="relative overflow-hidden rounded-lg h-64">
        {splitView && beforeImage && afterImage ? (
          // Split View: Before and After side by side
          <div className="relative w-full h-full flex">
            {/* Before Image - Left Half */}
            <div className="relative w-1/2 h-full overflow-hidden">
              <Image
                src={beforeImage.src}
                alt={beforeImage.alt}
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {beforeImage.label}
              </div>
            </div>
            
            {/* Divider Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white shadow-lg transform -translate-x-1/2 z-10"></div>
            
            {/* After Image - Right Half */}
            <div className="relative w-1/2 h-full overflow-hidden">
              <Image
                src={afterImage.src}
                alt={afterImage.alt}
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {afterImage.label}
              </div>
            </div>
          </div>
        ) : (
          // Regular Slideshow View
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <Image
                key={`${image.src}-${index}`}
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Image Label Overlay - Only for regular slideshow */}
        {!splitView && (
          <div className="absolute top-4 left-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {images[currentIndex].label}
          </div>
        )}

        {/* Navigation Arrows - Only for regular slideshow */}
        {images.length > 1 && showArrows && !splitView && (
          <>
            {currentIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {currentIndex < images.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </>
        )}
      </div>

      {/* Thumbnail Navigation - Only for regular slideshow */}
      {images.length > 1 && showThumbnails && !splitView && (
        <div className="flex justify-center gap-2 mt-4 mb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out transform ${
                index === currentIndex 
                  ? 'ring-2 ring-blue-500 scale-110 shadow-lg' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100 hover:shadow-md'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={80}
                height={60}
                className="w-16 h-12 object-cover transition-transform duration-200"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs text-center py-1 transition-opacity duration-200">
                {image.label}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Image Counter - Only for regular slideshow */}
      {images.length > 1 && showThumbnails && !splitView && (
        <div className="text-center mt-2 text-sm text-gray-600 transition-all duration-300 ease-in-out">
          <span className="inline-block transition-all duration-300 ease-in-out">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      )}
    </div>
  );
}

