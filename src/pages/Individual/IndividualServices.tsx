import React from 'react';
import { Home, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceSection from '../../components/ui/ServiceSection';

const servicesData = [
  {
    title: `Resident Services`,
    tagline: `At Mueen, your comfort takes center stage, and we're committed to delivering a premium service with live-in, trained, and qualified houseworkers held to the highest standards.`,
    description: `Choose from our array of packages tailored to meet your every need.`,
    imageUrl: `https://images.unsplash.com/photo-1582719201943-1f1a1d35a1a2?q=80&w=1770&auto=format&fit=crop`,
  },
  {
    title: `On-Demand Services`,
    tagline: `With a monthly record of over 90 000 home visits, averaging 4 000 daily, we take care of your household chores without you worrying about sponsoring or housing a domestic worker.`,
    description: `Our solutions include a wide variety of customized, professional, and convenient home-based services, available hourly.`,
    imageUrl: `https://images.unsplash.com/photo-1583484963886-75b2b5d1348b?q=80&w=1770&auto=format&fit=crop`,
  },
  {
    title: `Mediation Services`,
    tagline: `In line with the Ministry of Human Resources, our mediation services for resident workers (الاستقدام/ Esteqdam) are available via the governmental platform "Musaned".`,
    description: `Once you request your worker's visa through the platform, choose Mueen, and we'll complete the rest of the procedures. You can enjoy the benefits of this service upon request, for a period anywhere between 45 and 90 days. Included: Receiving the worker from the ...`,
    imageUrl: `https://images.unsplash.com/photo-1607502787834-455b5438813a?q=80&w=1887&auto=format&fit=crop`,
  }
];

const IndividualServices = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719182343-a9176d654260?q=80&w=1770&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Individual Services
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>Individual Sector</span>
                <ChevronRight size={20} />
                <span>Individual Services</span>
              </div>
            </div>
            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <main>
        {servicesData.map((service, index) => (
            <ServiceSection
                key={index}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                imageUrl={service.imageUrl}
                imagePosition={index % 2 === 0 ? 'right' : 'left'}
            />
        ))}
      </main>
    </div>
  );
};

export default IndividualServices; 