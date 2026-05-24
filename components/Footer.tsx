
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { 
      name: 'Twitter', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.5c1.55 0 3.4 1.01 3.4 3.85z"></path>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/favicon.svg" alt="OnlineSEOHelp Logo" className="w-9 h-9" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Online<span className="text-[#7f1bff]">SEOHelp</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering brands through cutting-edge SEO and digital marketing solutions. Data-driven results, human-focused communication.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#7f1bff] hover:border-[#7f1bff] transition-all flex items-center justify-center"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-[#7f1bff] transition-colors">About Our Agency</Link></li>
              <li><Link to="/services" className="hover:text-[#7f1bff] transition-colors">Our Expertise</Link></li>
              <li><Link to="/pricing" className="hover:text-[#7f1bff] transition-colors">Pricing Plans</Link></li>
              <li><Link to="/blog" className="hover:text-[#7f1bff] transition-colors">Latest Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#7f1bff] transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/services/seo" className="hover:text-[#7f1bff] transition-colors">Search Optimization</Link></li>
              <li><Link to="/services/technical-seo" className="hover:text-[#7f1bff] transition-colors">Technical Audits</Link></li>
              <li><Link to="/services/on-page-seo" className="hover:text-[#7f1bff] transition-colors">Content Strategy</Link></li>
              <li><Link to="/services/off-page-seo" className="hover:text-[#7f1bff] transition-colors">Off-Page SEO</Link></li>
              <li><Link to="/services/local-seo" className="hover:text-[#7f1bff] transition-colors">Local SEO Growth</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start">
                <span className="text-slate-400 mr-3">📍</span>
                123 Growth St, San Francisco, CA 94103
              </li>
              <li className="flex items-start">
                <span className="text-slate-400 mr-3">✉️</span>
                <a href="mailto:growth@onlineseohelp.com" className="hover:text-[#7f1bff] transition-colors">growth@onlineseohelp.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs font-semibold uppercase tracking-wider text-slate-400">
          <p>&copy; {currentYear} OnlineSEOHelp Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#7f1bff] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#7f1bff] transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-[#7f1bff] transition-colors">Cookie Policy</Link>
            <Link to="/sitemap" className="hover:text-[#7f1bff] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
