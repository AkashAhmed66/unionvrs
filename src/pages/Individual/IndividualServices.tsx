import React from 'react';
import { Home, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceSection from '../../components/ui/ServiceSection';
import usePageTitle from '../../hooks/usePageTitle';

const servicesData = [
  {
    title: `Resident Services`,
    tagline: `At Union, your comfort takes center stage, and we're committed to delivering a premium service with live-in, trained, and qualified houseworkers held to the highest standards.`,
    description: `Choose from our array of packages tailored to meet your every need.`,
    imageUrl: `https://plus.unsplash.com/premium_photo-1663047695260-98cde4d6bbc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzaWRlbnRpYWwlMjBzZXJ2aWNlfGVufDB8fDB8fHww`,
  },
  {
    title: `On-Demand Services`,
    tagline: `With a monthly record of over 90 000 home visits, averaging 4 000 daily, we take care of your household chores without you worrying about sponsoring or housing a domestic worker.`,
    description: `Our solutions include a wide variety of customized, professional, and convenient home-based services, available hourly.`,
    imageUrl: `https://plus.unsplash.com/premium_photo-1661755677315-d5fcd4942b20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9uJTIwZGVtYW5kJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D`,
  },
  {
    title: `Mediation Services`,
    tagline: `In line with the Ministry of Human Resources, our mediation services for resident workers (Esteqdam) are available via the governmental platform "Musaned".`,
    description: `Once you request your worker's visa through the platform, choose Union, and we'll complete the rest of the procedures. You can enjoy the benefits of this service upon request, for a period anywhere between 45 and 90 days. Included: Receiving the worker from the ...`,
    imageUrl: `https://images.unsplash.com/photo-1655970580622-4a547789c850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaXRhdGlvbiUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D`,
  }
];

const IndividualServices = () => {
  usePageTitle('Individual Services');

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661955607472-07eff10dafa1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
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