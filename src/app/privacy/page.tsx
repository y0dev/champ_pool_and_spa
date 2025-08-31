import { BUSINESS_INFO, CONTACT_INFO } from '@/utils/constants';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 py-4 sm:py-0 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-lg sm:text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                ← Back to Home
              </Link>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap justify-center">
              <Link href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
                Services
              </Link>
              <Link href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
                About
              </Link>
              <Link href="/#gallery" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
                Gallery
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <p className="text-gray-600 mb-6">
                {BUSINESS_INFO.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Fill out our contact form</li>
                <li>Request a quote for pool services</li>
                <li>Schedule pool maintenance or repair services</li>
                <li>Contact us for customer support</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of Information</h2>
              <p className="text-gray-600 mb-4">The information we collect may include:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Pool service requirements and preferences</li>
                <li>Service history and maintenance records</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide pool maintenance and repair services</li>
                <li>Communicate with you about appointments and services</li>
                <li>Send quotes and invoices</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except as described in this policy. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>{BUSINESS_INFO.name}</strong><br />
                  Email: {CONTACT_INFO.email}<br />
                  Phone: {CONTACT_INFO.phone}
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
