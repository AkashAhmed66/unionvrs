import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Logo, About, Socials */}
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex justify-start mb-4">
              <Link to="/" className="flex items-center">
                <img src="/logo.png" alt="Union Logo" width="250" height="250" className="object-contain flex-shrink-0 logo-large" />
              </Link>
            </div>
            <p className="text-sm max-w-full lg:max-w-sm mb-6 break-words">
              Union, a Bangladeshi closed joint-stock company, transcends traditional recruitment by providing comprehensive, reliable HR solutions tailored to your needs.
            </p>
            <div className="flex space-x-4 flex-wrap justify-start">
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors flex-shrink-0"><Linkedin size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors flex-shrink-0"><Instagram size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors flex-shrink-0"><Facebook size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors flex-shrink-0"><Twitter size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors flex-shrink-0"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about/why-union" className="hover:text-blue-300 transition-colors break-words">Why Union</Link></li>
              <li><Link to="/corporate/services" className="hover:text-blue-300 transition-colors break-words">Corporate</Link></li>
              <li><Link to="/individual/services" className="hover:text-blue-300 transition-colors break-words">Individual</Link></li>
              <li><Link to="/media/blogs" className="hover:text-blue-300 transition-colors break-words">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300 transition-colors break-words">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about/commitment" className="hover:text-blue-300 transition-colors break-words">Commitment</Link></li>
              <li><Link to="/about/licenses" className="hover:text-blue-300 transition-colors break-words">Licenses</Link></li>
              <li><Link to="/about/chairman-message" className="hover:text-blue-300 transition-colors break-words">Chairman's Message</Link></li>
              <li><Link to="/about/ceo-message" className="hover:text-blue-300 transition-colors break-words">CEO's Message</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
            <p className="text-sm mb-4 break-words">Get the latest news and updates from Union right in your inbox.</p>
            <form>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-700 text-white placeholder-gray-400 py-3 pl-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button type="submit" className="absolute right-0 top-0 h-full px-4 text-blue-400 hover:text-white flex-shrink-0">
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p className="text-center sm:text-left mb-4 sm:mb-0 break-words max-w-full">&copy; {new Date().getFullYear()} Union Human Resources. All Rights Reserved.</p>
          <div className="flex space-x-4 flex-wrap justify-center sm:justify-end">
            <Link to="#" className="hover:text-white transition-colors whitespace-nowrap">Terms of Use</Link>
            <Link to="#" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 