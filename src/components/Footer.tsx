import Link from 'next/link';
import { BUSINESS_INFO, CONTACT_INFO, FOOTER_LINKS } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Champion Pool & Spa Logo" 
                className="w-12 h-12 object-contain"
                style={{ imageRendering: 'auto' }}
              />
              <span className="text-xl font-bold">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-gray-300 mb-4">
              {BUSINESS_INFO.tagline}. 
              We&apos;re committed to keeping your pool and spa in perfect condition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((service) => (
                <li key={service} className="text-gray-300">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${CONTACT_INFO.email}?subject=Pool Service Inquiry&body=Hi Julio,%0D%0A%0D%0AI'm interested in your pool services.%0D%0A%0D%0APlease provide more information about:%0D%0A- Pool maintenance services%0D%0A- Pool repair services%0D%0A- Pricing and availability%0D%0A%0D%0AThank you!`}
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li className="text-gray-300"> M-F: {BUSINESS_INFO.businessHours.weekdays}</li>
              <li className="text-gray-300"> Sat: {BUSINESS_INFO.businessHours.saturday}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
