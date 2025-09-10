import { BUSINESS_INFO, CONTACT_INFO } from '@/utils/constants';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Julio
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {BUSINESS_INFO.aboutDescription}
            </p>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Julio?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personal Touch</h4>
                    <p className="text-gray-600">As the owner, I&apos;m personally involved in every job and always available to answer your questions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Honest Pricing</h4>
                    <p className="text-gray-600">No hidden fees or surprises. I believe in transparent pricing and honest communication.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reliable Service</h4>
                    <p className="text-gray-600">When I say I&apos;ll be there, I&apos;ll be there. Your time is valuable and I respect that.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Knowledge</h4>
                    <p className="text-gray-600">I know the Dallas-Fort Worth area and understand the unique challenges of pool maintenance in our climate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Certifications */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="space-y-4">
              {/* Top Row - Main Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{BUSINESS_INFO.yearsExperience}</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{BUSINESS_INFO.customers}</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
              </div>
              
              {/* Bottom Row - Additional Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{BUSINESS_INFO.satisfactionRate}</div>
                  <div className="text-gray-600 text-sm">Satisfaction Rate</div>
                </div>
                <div className="text-center bg-blue-50 rounded-lg p-4">
                  <div className="text-lg font-bold text-blue-600 mb-2 leading-tight">{BUSINESS_INFO.businessHours.display}</div>
                  <div className="text-gray-600 text-sm">Service Hours</div>
                </div>
              </div>
            </div>

            {/* Team Image Placeholder */}
            {/* <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="font-medium">Our Professional Team</p>
                <p className="text-sm">Licensed technicians with years of experience</p>
              </div>
            </div> */}

            {/* Certifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4 font-display">Certifications & Memberships</h4>
              <div className="grid grid-cols-2 gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                  {BUSINESS_INFO.certifications.licensedAndInsured}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                  {BUSINESS_INFO.certifications.bbbAccredited}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                  {BUSINESS_INFO.certifications.poolAndSpaAssociation}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                  {BUSINESS_INFO.certifications.safetyCertified}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
