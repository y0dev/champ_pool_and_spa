import { BUSINESS_INFO, CONTACT_INFO } from '@/utils/constants';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                ← Back to Home
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="/#gallery" className="text-gray-600 hover:text-blue-600 transition-colors">
                Gallery
              </a>
              <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
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
              These Terms of Service ("Terms") govern your use of {BUSINESS_INFO.name} services and website. By using our services, you agree to these terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Description</h2>
            <p className="text-gray-600 mb-6">
              {BUSINESS_INFO.name} provides professional pool maintenance, repair, and related services in the Dallas-Fort Worth Metro Area. Our services include but are not limited to pool cleaning, chemical balancing, equipment repair, and leak detection.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Appointments</h2>
            <p className="text-gray-600 mb-4">When scheduling services:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>We require advance notice for scheduling appointments</li>
              <li>Emergency services are available but may incur additional fees</li>
              <li>We reserve the right to reschedule due to weather or safety concerns</li>
              <li>Cancellations require 24-hour notice to avoid cancellation fees</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pricing and Payment</h2>
            <p className="text-gray-600 mb-4">Our pricing structure:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Quotes are valid for 30 days from date of issue</li>
              <li>Payment is due upon completion of services unless otherwise agreed</li>
              <li>We accept cash, check, and major credit cards</li>
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
              We stand behind our work with a satisfaction guarantee. If you're not satisfied with our services, we'll make it right. This guarantee covers workmanship but does not cover normal wear and tear or issues beyond our control.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Liability and Insurance</h2>
            <p className="text-gray-600 mb-6">
              {BUSINESS_INFO.name} is fully licensed and insured. We carry general liability insurance and workers' compensation coverage. However, we are not responsible for damage caused by pre-existing conditions or issues not related to our services.
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
              We believe in resolving issues amicably. If you have concerns about our services, please contact us directly. We're committed to customer satisfaction and will work to resolve any disputes fairly.
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
                Email: {CONTACT_INFO.email}<br />
                Phone: {CONTACT_INFO.phone}<br />
                Service Area: {CONTACT_INFO.serviceArea}
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
  );
}
