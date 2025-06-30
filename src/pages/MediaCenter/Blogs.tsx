import React from 'react';
import { Home, ChevronRight, Share2, ArrowRight, Search, ListFilter } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    date: '07 APR 2025',
    title: 'Mueen at Major Exhibitions: Strategic Presence and Real Impact Across Sectors',
    excerpt: 'As part of its ongoing growth strategy, Mueen Human Resources Company participated in several leading exhibitions during 2024 and early 2025. These events played a vital role in strengthening partnerships, showcasing innovative workforce solutions, and...',
    imageUrl: 'https://images.unsplash.com/photo-1549923746-c342d7547414?q=80&w=1770&auto=format&fit=crop'
  },
  {
    date: '19 MAR 2025',
    title: '10 Years of Mueen: A Journey of Growth, Excellence, and Impact',
    excerpt: 'This year, we celebrate a remarkable milestone &mdash; 10 years since Mueen was founded. A decade of dedication, transformation, and delivering trusted workforce solutions across the Kingdom and beyond. What started as a vision in 2015 has evolve...',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop'
  },
  {
    date: '11 MAR 2025',
    title: 'A Legacy of Excellence Recognized',
    excerpt: 'At Mueen, excellence is not just a goal&mdash;it&rsquo;s a way of life. Over the years, our commitment to innovation, outstanding service, and creating a thriving workplace has earned us multiple prestigious awards. Each recognition is a testament to our...',
    imageUrl: 'https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=1770&auto=format&fit=crop'
  }
];

const Blogs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Blogs
              </h1>
              <div className="flex items-center space-x-2 mt-4 text-lg">
                <Link to="/"><Home size={20} /></Link>
                <ChevronRight size={20} />
                <span>Media Center</span>
                <ChevronRight size={20} />
                <span>Blogs</span>
              </div>
            </div>
            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Filter and Blog List Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="mb-12 p-4 bg-white shadow-md rounded-lg flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="ENTER KEYWORD..."
              className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative flex-grow md:max-w-xs">
              <select className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>FILTER BY YEAR</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
              <ListFilter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button className="bg-blue-600 text-white p-3 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Search size={24} />
            </button>
          </div>

          {/* Blog Posts */}
          <div className="space-y-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-md">
                <div className="md:w-1/3">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="md:w-2/3">
                  <p className="text-blue-500 font-semibold text-sm mb-2">{post.date}</p>
                  <h3 className="text-2xl font-bold text-[#001f3f] mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                  <Link to="#" className="text-blue-600 font-bold inline-flex items-center hover:underline">
                    Read More <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center mt-16 space-x-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">4</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 