import React from 'react';
import { Home, ChevronRight, Share2, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceSection from '../../components/ui/ServiceSection';
import usePageTitle from '../../hooks/usePageTitle';

const industries = [
    { name: 'Delivery Services', image: 'https://plus.unsplash.com/premium_photo-1682090260563-191f8160ca48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Construction & Operations Maintenance', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740&auto=format&fit=crop' },
    { name: 'Retail', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmV0YWlsfGVufDB8fDB8fHww' },
    { name: 'FMCG Food & Beverage', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1674&auto=format&fit=crop' },
    { name: 'Hospitality', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1770&auto=format&fit=crop' },
];

const partners = ['NSH', 'RSCM', 'SR Group', 'Nascom', 'ESOM'];

const CorporateOverview = () => {
  usePageTitle('Corporate Overview');

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Overview
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>Corporate Sector</span>
                <ChevronRight size={20} />
                <span>Overview</span>
              </div>
            </div>
            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-500 font-semibold">CONNECTING NEEDS, EMPOWERING LIVES</p>
              <h2 className="text-4xl font-bold text-[#001f3f] mt-4 leading-snug">
                Our comprehensive HR solutions are built upon the foundation of an easy-to-navigate framework
              </h2>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Characterized by flexible contracting terms, financial support options, and exceptional pre- and post-service customer care. We ensure our clients understand the entire process and all applicable terms and conditions before formalizing an agreement with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-500 font-semibold">OUR SECTORS</p>
            <h2 className="text-4xl font-bold text-[#001f3f] mt-2">The Industries We Serve</h2>
          </div>
          <div className="relative">
             <div className="flex overflow-x-auto space-x-8 pb-4">
                {industries.map((industry, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                    <div className="relative rounded-lg overflow-hidden shadow-lg h-80 group">
                        <img src={industry.image} alt={industry.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                        <h4 className="text-white text-xl font-bold p-4">{industry.name}</h4>
                        </div>
                    </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {partners.map(partner => (
                <div key={partner} className="grayscale hover:grayscale-0 transition-all duration-300">
                    <span className="text-3xl font-bold text-gray-400">{partner}</span>
                </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* International Outreach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-500 font-semibold">INTERNATIONAL OUTREACH</p>
              <h2 className="text-4xl font-bold text-[#001f3f] mt-4 leading-snug">
                Our talent pool spans several countries
              </h2>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                We take pride in being the catalyst for positive change in Bangladesh, shaping brighter futures for both businesses and individuals. Experience the power of connection with us and let us empower your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateOverview; 