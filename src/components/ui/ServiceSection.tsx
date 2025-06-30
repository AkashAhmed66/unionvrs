import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceSectionProps {
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, tagline, description, imageUrl, imagePosition }) => {
    const textContent = (
        <div className="lg:w-1/2">
            <h3 className="text-blue-500 font-semibold">{title}</h3>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001f3f] mt-2">
                {tagline}
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
                {description}
            </p>
            <Link to="#" className="inline-flex items-center mt-6 font-bold text-blue-500 hover:text-blue-700">
                Read More <ArrowRight className="ml-2" size={20} />
            </Link>
        </div>
    );

    const imageContent = (
        <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img src={imageUrl} alt={title} className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
    );

    return (
        <section className="py-12 lg:py-20 bg-gray-50 first:bg-white">
            <div className="container mx-auto px-4">
                <div className={`flex flex-col lg:flex-row items-center gap-12 ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                    {textContent}
                    {imageContent}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection; 