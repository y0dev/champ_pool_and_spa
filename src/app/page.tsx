import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import ServiceAreas from '@/components/ServiceAreas';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service-areas">
        <ServiceAreas />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="reviews">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
