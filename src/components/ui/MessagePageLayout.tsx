import React from 'react';
import { Home, ChevronRight, Share2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MessagePageLayoutProps {
  title: string;
  breadcrumb: string;
  quote: React.ReactNode;
  paragraphs: string[];
  imageUrl: string;
}

const MessagePageLayout: React.FC<MessagePageLayoutProps> = ({ title, breadcrumb, quote, paragraphs, imageUrl }) => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                {title}
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>About Us</span>
                <ChevronRight size={20} />
                <span>{breadcrumb}</span>
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
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Quote */}
          <div className="relative bg-blue-600 text-white p-8 md:p-12 rounded-lg mb-12">
            <Quote className="absolute top-4 left-4 text-white/20" size={80} />
            <div className="relative text-2xl md:text-3xl font-bold leading-snug">
              {quote}
            </div>
          </div>
          
          {/* Main Text */}
          <div className="text-gray-700 text-lg space-y-6">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessagePageLayout; 