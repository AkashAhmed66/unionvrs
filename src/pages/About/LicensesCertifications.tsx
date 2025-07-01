import React from 'react';
import { Home, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';

const certifications = [
  {
    title: 'ISO 9001: 2015 - Manpower Supply and HR consultation services',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770&auto=format&fit=crop',
  },
  {
    title: 'Temporary National Labor Services License (Saudi recruitment)',
    imageUrl: 'https://images.unsplash.com/photo-1575504348239-6b62b7b514f6?q=80&w=1887&auto=format&fit=crop',
  },
  {
    title: 'Global Business Outlook Awards 2020 - Fastest Growing Human Resource Company in Saudi Arabia',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1770&auto=format&fit=crop',
  },
];

const LicensesCertifications = () => {
  usePageTitle('Licenses & Certifications');

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1770&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Licenses & Certifications
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>About Us</span>
                <ChevronRight size={20} />
                <span>Licenses & Certifications</span>
              </div>
            </div>
            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] text-center mb-12 max-w-4xl mx-auto">
            Our certifications attest to our strict compliance with national regulatory frameworks and global best practices.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 h-96 flex items-center justify-center">
                    <img 
                        src={cert.imageUrl} 
                        alt={cert.title} 
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <h3 className="text-lg font-bold text-[#001f3f]">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LicensesCertifications;