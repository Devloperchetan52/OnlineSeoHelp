
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { SERVICES, ICON_MAP } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsMegaOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed w-full z-50 flex justify-center top-4 px-4 sm:px-6">
      <nav className={`w-full max-w-7xl transition-all duration-300 rounded-[2rem] border ${scrolled ? 'bg-white/80 backdrop-blur-xl border-slate-200 shadow-xl py-3' : 'bg-white border-transparent py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-full">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/favicon.svg" alt="OnlineSEOHelp Logo" className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Online<span className="text-[#7f1bff]">SEOHelp</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-[#7f1bff]' : 'text-slate-600 hover:text-[#7f1bff]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mega Menu Link */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsMegaOpen(true)}
                onMouseLeave={() => setIsMegaOpen(false)}
              >
                <Link to="/services" className="flex items-center space-x-1 text-sm font-bold text-slate-600 hover:text-[#7f1bff] py-2">
                  <span>Services</span>
                  <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${isMegaOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Mega Menu Content */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${isMegaOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                  <div className="bg-white border border-slate-200 shadow-2xl rounded-3xl overflow-hidden w-[600px] p-6 grid grid-cols-2 gap-4">
                    {SERVICES.slice(0, 8).map((service) => (
                      <Link 
                        key={service.id} 
                        to={`/services/${service.id}`}
                        className="flex items-start p-4 hover:bg-slate-50 rounded-2xl transition-all group/item"
                      >
                        <div className="w-10 h-10 bg-purple-50 text-[#7f1bff] rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#7f1bff] group-hover/item:text-white transition-colors">
                          {ICON_MAP[service.icon]}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-bold text-slate-900 group-hover/item:text-[#7f1bff]">{service.title}</h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-1">{service.shortDesc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-[#7f1bff]' : 'text-slate-600 hover:text-[#7f1bff]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-demo"
                className="bg-[#7f1bff] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#6a15d9] transition-all shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-[#7f1bff] transition-colors"
              >
                {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
          <div className="px-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-base font-bold ${
                  location.pathname === link.path ? 'text-[#7f1bff]' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/services"
              className="block text-base font-bold text-slate-700"
            >
              Services
            </Link>
            <Link
              to="/book-demo"
              className="block w-full text-center bg-[#7f1bff] text-white px-5 py-3 rounded-2xl font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
