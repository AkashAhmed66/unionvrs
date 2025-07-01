import React from 'react';
import { Home, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceSection from '../../components/ui/ServiceSection';
import usePageTitle from '../../hooks/usePageTitle';

const servicesData = [
  {
    title: `Staff Placement`,
    tagline: `Union Human Resources Company takes the hard work out of the job search by using their knowledge and resources to connect candidates and employers.`,
    description: `We are always on the lookout for qualified employees to fill local upcoming positions. We provide you with flexible staffing solutions, including temporary, permanent, or temp-to-hire arrangements. This flexibility can help you scale your workforce based on changing needs. ...`,
    imageUrl: `https://plus.unsplash.com/premium_photo-1681074963670-2110c58f4c24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    title: `Permanent Hiring`,
    tagline: `Union facilitates the recruitment of permanents hires on your behalf as a valuable supplement to your internal staffing teams.`,
    description: `Recognizing that organizations often face fluctuations in staffing needs, Union steps in to provide the specialized expertise and resources you require. This collaborative approach ensures that our clients' internal teams can continue to manage their respective HR ...`,
    imageUrl: `https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1769&auto=format&fit=crop`,
  },
  {
    title: `Managed Workforce Solutions`,
    tagline: `Union provides a range of strategies and services aimed at managing and optimizing the human resources within your organization.`,
    description: `These solutions are designed to address various aspects of workforce management, ensuring that your staffing needs align with your business goals. This ecosystem of solutions constitutes a wide array of services related to recruitment, primarily focused on complementary ...`,
    imageUrl: `https://images.unsplash.com/photo-1640163561346-7778a2edf353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtmb3JjZSUyMHNvbHV0aW9ufGVufDB8fDB8fHww`,
  }
];

const CorporateServices = () => {
  usePageTitle('Corporate Services');

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661439767255-1a71de338b6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Corporate Services
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>Corporate Sector</span>
                <ChevronRight size={20} />
                <span>Corporate Services</span>
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

export default CorporateServices; 