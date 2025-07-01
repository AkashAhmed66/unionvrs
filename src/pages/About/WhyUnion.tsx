import React from 'react';
import { Home, ChevronRight, Share2, TrendingUp, Briefcase, Users, ShieldCheck, Handshake, Gem, Star, Settings, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';

const values = [
    { icon: Star, title: "Service", text: "We put our customers above ourselves. We decide and act for the benefit of our patrons, contributing to their welfare and creating positive experiences for them." },
    { icon: Settings, title: "Integrity", text: "We do the right thing without compromising. We are honest in our conduct and always deliver on our commitments in a fair and transparent manner." },
    { icon: HeartHandshake, title: "Nurturing", text: "We encourage and cultivate the development of human resources, ensuring optimal qualifications that precisely match our clients' requirements." },
    { icon: ShieldCheck, title: "Credibility", text: "We continuously build on our skills, attributes, and behaviors to enhance our viability both at individual and organizational levels, and establish a rapport with our clients, and people in the organization." },
    { icon: Handshake, title: "Engagement", text: "We recognize and celebrate the potential of ours and others. We act to appreciate, support, and motivate, thus creating a purpose and delivering faster, better, and more efficiently executed outcomes." },
    { icon: Gem, title: "Relationships", text: "We create value for co-workers and customers alike, forging lasting relationships based on confidence and trust, and building amity in and out of workplace." }
];

const WhyUnion = () => {
  usePageTitle('Why Union');

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
                Why Union
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>About Us</span>
                <ChevronRight size={20} />
                <span>Why Union</span>
              </div>
            </div>
            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm font-bold text-blue-600 uppercase">ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mt-2 mb-6">
            Established in 2015, Union started as a Bangladeshi closed joint-stock company, transcending the boundaries of traditional recruitment agencies.
          </h2>
          <div className="text-gray-600 space-y-4 text-lg">
            <p>Operating with global standards and local expertise, Union has rapidly grown both its client portfolio and workforce. Over the past years, Union has made significant contributions to key sectors of Bangladesh's economy, including hospitality, construction, healthcare, industrial, and retail. Our commitment to excellence and transparency is evident through substantial investments in technological infrastructure, policy development, and procedures alignment with these principles.</p>
            <p>Union has forged international partnerships focusing on ethical recruitment practices, human rights, and combating human trafficking. Care is ingrained in Union's values, with accommodations strategically located throughout Bangladesh, ensuring employee well-being during emergencies. Our commitment extends to providing top-tier healthcare through licensed providers and establishing a dedicated employee hotline for swift issue resolution.</p>
            <p>Looking forward to the end of 2026, Union aims to expand its workforce to nearly 30,000 employees, achieve sales exceeding one billion Bangladeshi Taka, all while delivering an unparalleled customer experience.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white" style={{ backgroundImage: "url('https://www.union.com.sa/website_assets/images/home/v-bg.webp')" }}>
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-12">
            <div>
              <p className="text-sm uppercase tracking-widest">Global Presence</p>
              <p className="text-6xl font-bold mt-2">45</p>
              <p className="mt-2 text-lg">Offices Worldwide</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest">Invested Capital</p>
              <p className="text-6xl font-bold mt-2">100M</p>
              <p className="mt-2 text-lg">Bangladeshi Taka</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest">Team of Professionals</p>
              <p className="text-6xl font-bold mt-2">26,000+</p>
              <p className="mt-2 text-lg">Filled Positions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-[#001f3f] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <div className="p-4 border-2 border-blue-500 rounded-full">
                  <TrendingUp size={40} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Vision</h3>
              <p className="text-lg text-gray-300">Our vision is to be the preferred partner for comprehensive human resource solutions and the trusted human capital choice for clients in Bangladesh.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="p-4 border-2 border-blue-500 rounded-full">
                  <Briefcase size={40} className="text-blue-500" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Mission</h3>
              <p className="text-lg text-gray-300">To empower organizations and elevate customers' experience in the human capital services market, through a diverse workforce comprising both Bangladeshi nationals and expatriates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Value Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <p className="text-sm font-bold text-blue-600 uppercase">Our Value</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mt-2">World class manpower Service</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {values.map(item => {
                    const Icon = item.icon;
                    return (
                        <div key={item.title} className="text-center">
                            <Icon size={48} className="mx-auto mb-4 text-blue-600" />
                            <h3 className="text-4xl font-bold text-[#001f3f]">
                                <span className="text-blue-600">{item.title.charAt(0)}</span>{item.title.slice(1)}
                            </h3>
                            <p className="mt-4 text-gray-600">{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

    </div>
  );
};

export default WhyUnion; 