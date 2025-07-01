import React from 'react';
import { Home, ChevronRight, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';

const CorporateProfile = () => {
  usePageTitle('Corporate Profile');

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1770&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Corporate Profile
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>Media Center</span>
                <ChevronRight size={20} />
                <span>Corporate Profile</span>
              </div>
            </div>
            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1770&auto=format&fit=crop" 
                alt="Corporate Discussion" 
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-sm font-bold text-blue-600 uppercase">Corporate Profile</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mt-2 mb-6">
                To learn more about our corporate staffing solutions, please download our most recent Company Profile.
              </h2>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 font-bold text-lg hover:underline"
              >
                Download <ArrowRight size={24} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateProfile; 