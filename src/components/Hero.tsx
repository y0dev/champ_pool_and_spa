'use client';

import { useState, useEffect } from 'react';
import { BUSINESS_INFO, CONTACT_INFO } from '@/utils/constants';
import Image from 'next/image';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroImages = [
    '/images/hero/pool-1.jpeg',
    '/images/hero/pool-2.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500); // Half second for fade out
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-red-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-24 lg:pt-6 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-wide leading-tight">
              Worry-Free Pool Maintenance That Keeps Your Water{' '}
              <span className="bg-gradient-to-r from-red-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                Crystal Clear
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl font-body font-normal leading-relaxed">
              {BUSINESS_INFO.name} provides trusted weekly pool care and cleaning for homes across DFW. Let us take care of your pool so you can focus on enjoying it.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-display font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform text-center"
              >
                Get a Free Quote
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="bg-white text-blue-700 hover:bg-red-50 hover:text-red-700 border-2 border-white px-8 py-4 rounded-xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 transform text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>
            
            {/* Business Info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 text-blue-200 text-sm mb-8">
              <div className="flex items-center gap-2 min-w-[200px]">
                <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{CONTACT_INFO.serviceArea}</span>
              </div>
              <div className="flex items-center gap-2 min-w-[200px]">
                <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>M-F: {BUSINESS_INFO.businessHours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2 min-w-[200px]">
                <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Sat: {BUSINESS_INFO.businessHours.saturday}</span>
              </div>
            </div>

            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs text-blue-200 font-medium">Licensed</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <p className="text-xs text-blue-200 font-medium">Insured</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs text-blue-200 font-medium">BBB Accredited</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-xs text-blue-200 font-medium">Safety Certified</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Images with Fade Transition */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Hero Images with Fade Transition */}
              <div className="w-full h-96 lg:h-[500px] relative">
                {heroImages.map((image, index) => (
                  <Image
                    fill
                    key={image}
                    src={image}
                    alt={`Pool and spa service ${index + 1}`}
                    className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex && !isTransitioning
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Trust Indicator Overlay */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-lg max-w-48">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900 font-display">{BUSINESS_INFO.yearsExperience} Years Experience</span>
                </div>
                <p className="text-sm text-gray-600 font-body">Trusted by {BUSINESS_INFO.customers} families</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
