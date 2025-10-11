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
}

export default function BeforeAfterSlideshow({ 
  images, 
  className = "", 
  showThumbnails = true, 
  showArrows = true, 
  autoPlay = false, 
  autoPlayInterval = 3000 
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

  return (
    <div className={`relative ${className}`}>
      {/* Main Image Display */}
      <div className="relative overflow-hidden rounded-lg h-64">
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
        
        {/* Image Label Overlay */}
        <div className="absolute top-4 left-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {images[currentIndex].label}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && showArrows && (
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

      {/* Thumbnail Navigation */}
      {images.length > 1 && showThumbnails && (
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

      {/* Image Counter */}
      {images.length > 1 && showThumbnails && (
        <div className="text-center mt-2 text-sm text-gray-600 transition-all duration-300 ease-in-out">
          <span className="inline-block transition-all duration-300 ease-in-out">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      )}
    </div>
  );
}

