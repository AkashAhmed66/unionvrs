import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const services = [
  {
    title: 'Construction & Operations Maintenance',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740&auto=format&fit=crop'
  },
  {
    title: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742111-a3297a0e5d52?q=80&w=1740&auto=format&fit=crop'
  },
  {
    title: 'FMCG Food & Beverage',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1674&auto=format&fit=crop'
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[600px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-2xl">
            Comprehensive, Reliable HR Solutions
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            Our highly trained and qualified workers provide exceptional services that meet your diverse needs and expectations.
          </p>
          <button className="mt-8 bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-[#001f3f] transition-colors flex items-center">
            Individual Services <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8 order-2 md:order-1">
            <p className="text-blue-500 font-semibold">ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mt-2">
              Established in 2015, Mueen started as a Saudi closed joint-stock company, transcending the boundaries of traditional recruitment agencies.
            </h2>
            <p className="mt-4 text-gray-600">
              Operating with global standards and local expertise, Mueen has rapidly grown both its client portfolio and workforce. Over the past years, Mueen has made significant contributions to key sectors of the Kingdom's economy, including hospitality, construction, healthcare, industrial, and retail. Our commitment to excellence and transparency is evident through ...
            </p>
            <button className="mt-6 text-blue-500 font-bold flex items-center">
              Why Mueen <ArrowRight className="ml-2" />
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