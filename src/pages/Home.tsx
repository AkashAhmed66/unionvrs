import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';

const services = [
  {
    title: 'Construction & Operations Maintenance',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740&auto=format&fit=crop'
  },
  {
    title: 'Retail',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmV0YWlsfGVufDB8fDB8fHww'
  },
  {
    title: 'FMCG Food & Beverage',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1674&auto=format&fit=crop'
  }
];

const Home = () => {
  usePageTitle('Home');

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-[#001f3f] via-[#0066cc] to-[#4a90e2] min-h-[700px] sm:min-h-[600px] md:h-[600px] text-white overflow-hidden"
      >
        
        {/* Professional Images - Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Professional Images Container */}
          <div className="relative h-full w-full">
            {/* Professional 1 - Left side */}
            <div className="absolute bottom-0 right-3/5 sm:right-1/3 md:right-1/4 lg:right-80 xl:right-96 z-20">
              <img 
                src="/p1.png" 
                alt="Professional 1"
                className="block w-auto object-bottom filter drop-shadow-2xl"
                style={{ height: 'calc(100vh - 50px)', maxHeight: '600px', minHeight: '400px' }}
              />
            </div>
            
            {/* Professional 2 - Right side */}
            <div className="absolute bottom-0 right-8 sm:right-8 md:right-12 lg:right-16 xl:right-20 z-10">
              <img 
                src="/p2.png" 
                alt="Professional 2"
                className="block w-auto object-bottom filter drop-shadow-2xl"
                style={{ height: 'calc(100vh - 50px)', maxHeight: '600px', minHeight: '400px' }}
              />
            </div>
            
            {/* Background Design Elements */}
            <div className="absolute top-20 right-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white opacity-10 rounded-full"></div>
            <div className="absolute top-40 right-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-300 opacity-20 rounded-full"></div>
            <div className="absolute bottom-40 right-4 md:right-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white opacity-15 rounded-full"></div>
          </div>
        </div>
        
        {/* Content Container - Foreground Layer */}
        <div className="relative z-20 h-full min-h-[700px] sm:min-h-[600px] md:h-[600px] container mx-auto px-4 max-w-full flex items-center">
          <div className="w-full">
            
            {/* Text Content - Overlays images on small screens */}
            <div className="flex flex-col justify-center py-8 sm:py-12 md:py-0 md:max-w-lg lg:max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Comprehensive, Reliable HR Solutions
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-full md:max-w-xl">
                Our highly trained and qualified workers provide exceptional services that meet your diverse needs and expectations.
              </p>
              <button className="mt-6 sm:mt-8 bg-transparent border-2 border-white text-white font-bold py-2 px-3 sm:py-3 sm:px-4 md:px-6 rounded-lg hover:bg-white hover:text-[#001f3f] transition-colors flex items-center text-xs sm:text-sm md:text-base w-fit">
                Individual Services <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
            
          </div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full z-10 pointer-events-none">
          <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 text-white opacity-20 md:opacity-30 text-3xl sm:text-4xl md:text-6xl font-light">∞</div>
          <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-4 sm:left-6 md:left-10 text-white opacity-15 md:opacity-20 text-2xl sm:text-3xl md:text-4xl">✦</div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8 order-2 md:order-1">
            <p className="text-blue-500 font-semibold">ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mt-2">
              Established in 2015, Union started as a Saudi closed joint-stock company, transcending the boundaries of traditional recruitment agencies.
            </h2>
            <p className="mt-4 text-gray-600">
              Operating with global standards and local expertise, Union has rapidly grown both its client portfolio and workforce. Over the past years, Union has made significant contributions to key sectors of the Kingdom's economy, including hospitality, construction, healthcare, industrial, and retail. Our commitment to excellence and transparency is evident through ...
            </p>
            <button className="mt-6 text-blue-500 font-bold flex items-center">
              Why Union <ArrowRight className="ml-2" />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop" 
              alt="Office meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Connecting Needs Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#001f3f]">
              Connecting Needs, Empowering Lives
            </h2>
            <p className="mt-4 text-gray-600">
              We take pride in being the catalyst for positive change in the Kingdom, shaping brighter futures for both businesses and individuals. Experience the power of connection with us and let us empower your journey.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-xl font-bold text-blue-500">CORPORATE SECTORS</h3>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"><ArrowLeft size={20} /></button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"><ArrowRight size={20} /></button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg h-80">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                  <h4 className="text-white text-2xl font-bold p-6">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impressive Figures Section */}
      <section className="py-20 bg-[#001f3f] text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-blue-400 font-semibold">AT A GLANCE</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Impressive Figures in Focus
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-400">45</p>
              <p className="mt-2">Offices Worldwide</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-400">100M</p>
              <p className="mt-2">Saudi Riyals</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-400">26,000+</p>
              <p className="mt-2">Filled Positions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section 
        className="relative bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-blue-400 font-semibold">GET IN TOUCH</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 max-w-lg">
                Ready to experience exceptional service and find the perfect solution?
              </h2>
            </div>
            <div className="text-center md:text-right">
            <button className="mt-4 md:mt-8 bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-[#001f3f] transition-colors inline-flex items-center">
              Contact US Today <ArrowRight className="ml-2" />
            </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 