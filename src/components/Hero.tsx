import { BUSINESS_INFO, TRUST_INDICATORS } from '@/utils/constants';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-wide">
            {BUSINESS_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto font-body font-medium tracking-wide">
            {BUSINESS_INFO.tagline}
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-2xl mx-auto font-body font-normal">
            {BUSINESS_INFO.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#contact" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Get Free Quote
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 transform"
            >
              View Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST_INDICATORS.map((indicator, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 font-display">{indicator.title}</h3>
                <p className="text-blue-200 font-body text-sm leading-relaxed">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
