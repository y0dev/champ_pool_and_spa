import { BUSINESS_INFO, CONTACT_INFO, SERVICE_AREA_DETAILS } from '@/utils/constants';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 py-4 sm:py-0 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3">
                <Image 
                  src="/logo.png" 
                  alt="Champion Pool & Spa Logo" 
                  className="object-contain"
                  width={200}
                  height={100}
                  style={{ imageRendering: 'auto' }}
                />
              </Link>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap justify-center">
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base">
                Services
              </Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base">
                About
              </Link>
              <Link href="/#gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base">
                Gallery
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base">
                Contact
              </Link>
              <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <p className="text-gray-600 mb-6">
                These Terms of Service (&quot;Terms&quot;) govern your use of {BUSINESS_INFO.name} services and website. By using our services, you agree to these terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Description</h2>
              <p className="text-gray-600 mb-6">
                {BUSINESS_INFO.name} provides professional pool cleaning and pool repair services in the Dallas-Fort Worth Metro Area. Our services include weekly pool maintenance, equipment repairs, filter cleaning, and green-to-clean transformations. We serve {SERVICE_AREA_DETAILS.cities.length} cities including Dallas, McKinney, Frisco, Prosper, Allen, Plano, and more.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Appointments</h2>
              <p className="text-gray-600 mb-4">When scheduling services:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>We require advance notice for scheduling appointments</li>
                <li>Our business hours are {BUSINESS_INFO.businessHours.display}</li>
                <li>We reserve the right to reschedule due to weather or safety concerns</li>
                <li>Cancellations require 24-hour notice to avoid cancellation fees</li>
                <li>Weekly pool maintenance services are scheduled on a recurring basis</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pricing and Payment</h2>
              <p className="text-gray-600 mb-4">Our pricing structure:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Free quotes are provided for all pool cleaning and repair services</li>
                <li>Quotes are valid for 30 days from date of issue</li>
                <li>Payment is due upon completion of services unless otherwise agreed</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>Weekly pool maintenance services may be billed monthly</li>
                <li>Late payments may incur additional fees</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Customer Responsibilities</h2>
              <p className="text-gray-600 mb-4">As our customer, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide safe access to your pool area</li>
                <li>Ensure pets are secured during service visits</li>
                <li>Notify us of any known pool issues or hazards</li>
                <li>Be available for service completion or provide access instructions</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Guarantee</h2>
              <p className="text-gray-600 mb-6">
                We stand behind our work with a {BUSINESS_INFO.satisfactionRate} satisfaction guarantee. With {BUSINESS_INFO.yearsExperience} years of experience and {BUSINESS_INFO.customers} satisfied customers, we are committed to quality service, customer satisfaction, and professional excellence. If you&apos;re not satisfied with our services, we&apos;ll make it right. This guarantee covers workmanship but does not cover normal wear and tear or issues beyond our control.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Liability and Insurance</h2>
              <p className="text-gray-600 mb-6">
                {BUSINESS_INFO.name} is fully licensed and insured. We carry general liability insurance and workers&apos; compensation coverage. However, we are not responsible for damage caused by pre-existing conditions or issues not related to our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Safety and Compliance</h2>
              <p className="text-gray-600 mb-6">
                We prioritize safety in all our operations. Our technicians are trained in pool safety and follow industry best practices. We comply with all local, state, and federal regulations governing pool services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                Our liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages arising from our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Dispute Resolution</h2>
              <p className="text-gray-600 mb-6">
                We believe in resolving issues amicably. If you have concerns about our services, please contact us directly. We&apos;re committed to customer satisfaction and will work to resolve any disputes fairly.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We may update these Terms of Service from time to time. We will notify customers of significant changes. Continued use of our services constitutes acceptance of updated terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>{BUSINESS_INFO.name}</strong><br />
                  Email: {BUSINESS_INFO.email}<br />
                  Phone: {BUSINESS_INFO.phone}<br />
                  Service Area: {SERVICE_AREA_DETAILS.primary}<br />
                  Business Hours: {BUSINESS_INFO.businessHours.weekdays + ", " + BUSINESS_INFO.businessHours.saturday}
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms of Service are governed by the laws of the State of Texas. Any disputes will be resolved in the courts of Dallas County, Texas.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
