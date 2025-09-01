'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import ServiceAreas from '@/components/ServiceAreas';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="Champion Pool and Spa - Professional Pool Services" />
      <meta itemProp="description" content="Expert pool maintenance and repair services in Dallas-Fort Worth Metro Area" />
      
      <section id="home" itemScope itemType="https://schema.org/Service">
        <Hero />
      </section>
      
      <section id="services" itemScope itemType="https://schema.org/Service">
        <Services />
      </section>
      
      <section id="about" itemScope itemType="https://schema.org/Organization">
        <About />
      </section>
      
      <section id="service-areas" itemScope itemType="https://schema.org/Place">
        <ServiceAreas />
      </section>
      
      <section id="gallery" itemScope itemType="https://schema.org/ImageGallery">
        <Gallery onServiceSelect={setSelectedService} />
      </section>
      
      <section id="reviews" itemScope itemType="https://schema.org/Review">
        <Testimonials />
      </section>
      
      <section id="contact" itemScope itemType="https://schema.org/ContactPage">
        <Contact selectedService={selectedService} />
      </section>
    </div>
  );
}
