import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Logo, About, Socials */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              <span className="text-2xl font-bold text-white">mueen</span>
            </Link>
            <p className="text-sm max-w-sm mb-6">
              Mueen, a Saudi closed joint-stock company, transcends traditional recruitment by providing comprehensive, reliable HR solutions tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about/why-mueen" className="hover:text-blue-300 transition-colors">Why Mueen</Link></li>
              <li><Link to="/corporate/services" className="hover:text-blue-300 transition-colors">Corporate</Link></li>
              <li><Link to="/individual/services" className="hover:text-blue-300 transition-colors">Individual</Link></li>
              <li><Link to="/media/blogs" className="hover:text-blue-300 transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about/commitment" className="hover:text-blue-300 transition-colors">Commitment</Link></li>
              <li><Link to="/about/licenses" className="hover:text-blue-300 transition-colors">Licenses</Link></li>
              <li><Link to="/about/chairman-message" className="hover:text-blue-300 transition-colors">Chairman's Message</Link></li>
              <li><Link to="/about/ceo-message" className="hover:text-blue-300 transition-colors">CEO's Message</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
            <p className="text-sm mb-4">Get the latest news and updates from Mueen right in your inbox.</p>
            <form>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-700 text-white placeholder-gray-400 py-3 pl-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="absolute right-0 top-0 h-full px-4 text-blue-400 hover:text-white">
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p className="text-center sm:text-left mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Mueen Human Resources. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 