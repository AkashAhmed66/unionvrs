import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search, Menu, X } from 'lucide-react';
import DropdownMenu from '../ui/DropdownMenu';

const navItems = [
  {
    name: 'Corporate Sector',
    path: '#',
    dropdown: true,
    subItems: [
      { name: 'Overview', path: '/corporate/overview' },
      { name: 'Corporate Services', path: '/corporate/services' },
      { name: 'FAQs', path: '/corporate/faq' },
    ],
  },
  {
    name: 'Individual Sector',
    path: '#',
    dropdown: true,
    subItems: [
      { name: 'Overview', path: '/individual/overview' },
      { name: 'Individual Services', path: '/individual/services' },
      { name: 'FAQs', path: '/individual/faq' },
    ],
  },
  {
    name: 'About Us',
    path: '#',
    dropdown: true,
    subItems: [
        { name: 'Why Mueen', path: '/about/why-mueen' },
        { name: 'Licenses & Certifications', path: '/about/licenses' },
        { name: 'Commitment', path: '/about/commitment' },
        { name: "Chairman's Message", path: '/about/chairman-message' },
        { name: "CEO's Message", path: '/about/ceo-message' },
    ],
  },
  { name: 'E-Services', path: '/e-services', dropdown: false },
  {
    name: 'Media Center',
    path: '#',
    dropdown: true,
    subItems: [
        { name: 'Corporate Profile', path: '/media/profile' },
        { name: 'Blogs', path: '/media/blogs' },
    ]
  },
  { name: 'Contact Us', path: '/contact', dropdown: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `fixed w-full top-0 z-50 transition-colors duration-300 ${
    hasScrolled || isMenuOpen ? 'bg-[#001f3f] text-white' : 'bg-transparent text-white'
  }`;
  
  const handleDropdownClick = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            <span className="text-xl md:text-2xl font-bold">mueen</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link to={item.path} className="flex items-center space-x-1 hover:text-blue-300 transition-colors">
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={16} />}
                </Link>
                {item.dropdown && item.subItems && <DropdownMenu subItems={item.subItems} />}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <span className="cursor-pointer">العربية</span>
            <Search className="cursor-pointer" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
              Join Us
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#001f3f] absolute top-full left-0 w-full h-screen overflow-y-auto">
          <nav className="flex flex-col items-center space-y-2 py-4 px-4">
            {navItems.map((item) => (
              <div key={item.name} className="w-full text-center">
                 <div
                   onClick={() => item.dropdown && handleDropdownClick(item.name)}
                   className="flex items-center justify-center space-x-1 hover:text-blue-300 transition-colors w-full py-3 cursor-pointer"
                 >
                   <Link to={item.path} onClick={() => !item.dropdown && setIsMenuOpen(false)} className="flex-grow">
                     <span>{item.name}</span>
                   </Link>
                   {item.dropdown && (openDropdown === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                 </div>
                 {item.dropdown && openDropdown === item.name && item.subItems && (
                     <div className="bg-[#002f5f] rounded-md">
                         {item.subItems.map(subItem => (
                             <Link key={subItem.name} to={subItem.path} onClick={() => setIsMenuOpen(false)} className="block py-3 text-sm hover:text-blue-300 transition-colors">
                                {subItem.name}
                             </Link>
                         ))}
                     </div>
                 )}
               </div>
            ))}
            <div className="flex flex-col items-center space-y-4 pt-6 w-full">
                <div className="flex items-center space-x-6">
                    <span className="cursor-pointer">العربية</span>
                    <Search className="cursor-pointer" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors w-full max-w-xs">
                  Join Us
                </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;