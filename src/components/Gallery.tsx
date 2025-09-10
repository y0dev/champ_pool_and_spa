'use client';

import { useState } from 'react';
import Image from 'next/image';

import { GALLERY_PROJECTS, GALLERY_CATEGORIES } from '@/utils/constants';

interface GalleryProps {
  onServiceSelect: (service: string) => void;
}

const projects = GALLERY_PROJECTS;

const categories = ["All", ...Object.keys(GALLERY_CATEGORIES)];

export default function Gallery({ onServiceSelect }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent pool maintenance and repair projects. 
            We take pride in keeping pools clean, safe, and fully functional for our customers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                />
                {project.beforeAfter && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before/After
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Pool Maintenance or Repair?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you keep your pool in top condition or fix any issues you&apos;re experiencing. 
              Contact us today for a free quote on maintenance or repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Quote
              </a>
              <a href="#contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.title}
                width={600}
                height={256}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
                {selectedProject.beforeAfter && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    Before/After Available
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">
                {selectedProject.description}
              </p>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    // Map gallery category to contact form service
                    let serviceValue = '';
                    if (selectedProject.category === 'Repair') {
                      serviceValue = 'pool-repairs';
                    } else if (selectedProject.category === 'Cleaning') {
                      serviceValue = 'pool-cleaning';
                    }
                    
                    onServiceSelect(serviceValue);
                    setSelectedProject(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Get Quote for Similar Service
                </button>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
