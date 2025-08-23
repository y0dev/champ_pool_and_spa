import { CONTACT_INFO } from '@/utils/constants';

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Champion Pool & Spa proudly serves the Dallas-Fort Worth Metro Area. 
            We&apos;re your local pool maintenance and repair experts.
          </p>
        </div>

        {/* Service Area Map */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {CONTACT_INFO.serviceArea}
            </h3>
            <p className="text-gray-600">
              Professional pool services available in these locations
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CONTACT_INFO.serviceAreas.map((city) => (
              <div 
                key={city} 
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {city.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 text-lg mb-2">
                  {city}
                </h4>
                <p className="text-gray-600 text-sm">
                  Pool Maintenance & Repair
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Metro Coverage</h3>
            <p className="text-gray-600">
              Serving the entire Dallas-Fort Worth metropolitan area with reliable pool services
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-gray-600">
              Fast service response times across all our service areas
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
            <p className="text-gray-600">
              Deep knowledge of local pool maintenance challenges and solutions
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Service in Your Area?
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you&apos;re in Dallas, McKinney, Frisco, or anywhere in the Metroplex, 
              we&apos;re here to help with all your pool maintenance and repair needs.
            </p>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
