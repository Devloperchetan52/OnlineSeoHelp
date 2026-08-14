
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  MapPinIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  LinkIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/solid';

const Services: React.FC = () => {
  const location = useLocation();

  // Scroll to hash section on page load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const seoServices = [
    {
      emoji: '📌', num: '01',
      icon: <MagnifyingGlassIcon className="w-7 h-7" />,
      title: 'On-Page SEO Optimization',
      tagline: 'We optimize every element of your website to improve rankings.',
      includes: ['Keyword optimization', 'Meta tags (title & description)', 'Internal linking strategy', 'Content structure & formatting', 'Image optimization & alt text'],
      benefit: 'Helps search engines understand your website better and rank it higher.',
    },
    {
      emoji: '⚙️', num: '02',
      icon: <WrenchScrewdriverIcon className="w-7 h-7" />,
      title: 'Technical SEO',
      tagline: 'We fix backend issues that affect performance and rankings.',
      includes: ['Website speed optimization', 'Mobile responsiveness fixes', 'Crawl errors & indexing fixes', 'XML sitemap & robots.txt setup', 'Core Web Vitals improvements'],
      benefit: 'Ensures your site is fast, smooth, and fully search-engine friendly.',
    },
    {
      emoji: '📍', num: '03',
      icon: <MapPinIcon className="w-7 h-7" />,
      title: 'Local SEO Services',
      tagline: 'Rank your business in Google Maps and local searches.',
      includes: ['Google Business Profile optimization', 'Local keyword targeting', 'Citations & directory listings', 'Reviews strategy & management'],
      benefit: 'Perfect for local businesses like salons, clinics, gyms, restaurants, and more.',
    },
    {
      emoji: '🔍', num: '04',
      icon: <DocumentTextIcon className="w-7 h-7" />,
      title: 'Keyword Research & Strategy',
      tagline: 'We find the right keywords your customers are searching for.',
      includes: ['Low-competition keyword research', 'Competitor keyword analysis', 'Search intent targeting', 'Content planning & calendar'],
      benefit: 'Helps you attract the right audience with the right content.',
    },
    {
      emoji: '✍️', num: '05',
      icon: <PencilSquareIcon className="w-7 h-7" />,
      title: 'Content SEO',
      tagline: 'Content is the backbone of SEO success.',
      includes: ['Blog optimization & writing', 'SEO content creation', 'Content gap analysis', 'Updating & refreshing old content'],
      benefit: 'Drives consistent organic traffic and improves long-term rankings.',
    },
    {
      emoji: '🔗', num: '06',
      icon: <LinkIcon className="w-7 h-7" />,
      title: 'Link Building',
      tagline: 'Build authority and trust for your website.',
      includes: ['High-quality backlink acquisition', 'Guest posting campaigns', 'Directory submissions', 'Outreach & digital PR'],
      benefit: 'Improves domain authority and pushes your pages up in rankings.',
    },
    {
      emoji: '📊', num: '07',
      icon: <ChartBarIcon className="w-7 h-7" />,
      title: 'SEO Audit & Reporting',
      tagline: "Understand what's working and what needs improvement.",
      includes: ['Full website SEO audit', 'Keyword ranking reports', 'Traffic & conversion analysis', 'Monthly performance reports'],
      benefit: 'Keeps your SEO strategy transparent, data-driven, and effective.',
    },
  ];

  const webDesignServices = [
    {
      emoji: '🎨',
      title: 'Website Design',
      tagline: 'We create visually appealing and user-friendly designs.',
      includes: ['Custom UI/UX design', 'Mobile-responsive layout', 'Clean and modern interface', 'Brand-focused design'],
    },
    {
      emoji: '💻',
      title: 'Website Development',
      tagline: 'We build fast, secure, and scalable websites.',
      includes: ['WordPress & custom development', 'Business & service websites', 'Landing pages', 'Blog setup', 'Speed optimization'],
    },
    {
      emoji: '⚡',
      title: 'SEO-Friendly Website Development',
      tagline: 'Every website we build is optimized for search engines from day one.',
      includes: ['SEO structure setup', 'Fast loading pages (90+ PageSpeed)', 'Proper heading structure', 'Schema markup ready', 'Technical SEO basics included'],
    },
    {
      emoji: '🔧',
      title: 'Website Redesign',
      tagline: 'Already have a website? We improve it.',
      includes: ['UI/UX improvements', 'Speed & performance optimization', 'SEO audit & fixes', 'Conversion rate optimization'],
    },
  ];

  const appDevServices = [
    {
      emoji: '📱',
      title: 'Mobile App Development',
      tagline: 'Build native or cross-platform mobile apps for iOS & Android.',
      includes: ['Android & iOS app development', 'React Native / Flutter', 'Custom UI/UX design', 'App Store & Play Store submission'],
    },
    {
      emoji: '🌐',
      title: 'Web App Development',
      tagline: 'Build powerful web applications that scale with your business.',
      includes: ['Custom web apps & portals', 'React / Next.js development', 'Dashboard & admin panels', 'Third-party API integrations'],
    },
    {
      emoji: '🛒',
      title: 'E-Commerce App',
      tagline: 'Launch an online store with a seamless shopping experience.',
      includes: ['Product catalog & shopping cart', 'Payment gateway integration', 'Order & inventory management', 'Mobile-optimized checkout'],
    },
    {
      emoji: '🔌',
      title: 'App Maintenance & Support',
      tagline: 'Keep your app running smoothly after launch.',
      includes: ['Bug fixes & regular updates', 'Performance optimization', 'New feature additions', 'Security patches & monitoring'],
    },
  ];

  const bundles = [
    {
      name: 'Starter Growth Package',
      price: '₹9,999',
      period: 'one-time',
      features: ['Website Development (up to 5 pages)', 'Basic On-Page SEO Setup', 'Google Search Console Setup', 'Meta Tags & Site Structure', '1 Month Free Support'],
      highlight: false,
      cta: 'Get Started',
    },
    {
      name: 'Business Growth Package',
      price: '₹14,999',
      period: '/month',
      features: ['Website + SEO + Content Strategy', 'Monthly SEO Optimization', 'Local SEO & Google Maps', '2 Blog Posts per Month', 'Keyword Tracking & Reporting', 'Monthly Performance Report'],
      highlight: true,
      cta: 'Most Popular — Get This',
    },
    {
      name: 'Premium Growth Package',
      price: 'Custom',
      period: '',
      features: ['Full SEO + Website + Monthly Optimization', 'Technical SEO Audit & Fixes', 'Link Building Campaign', 'Content Strategy & Writing', 'Dedicated Account Manager', 'Bi-weekly Reporting'],
      highlight: false,
      cta: 'Contact for Pricing',
    },
  ];

  const whyUs = [
    'Data-driven SEO strategies tailored to your business',
    'Affordable pricing for startups & small businesses',
    'Customized solutions — no copy-paste or template work',
    'Transparent monthly reporting you can actually understand',
    'Focus on real business growth, not vanity metrics',
  ];

  return (
    <div className="pt-24 bg-white text-slate-900">

      {/* ── HERO HEADER ── */}
      <section className="bg-[#050505] text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7f1bff] rounded-full blur-[200px] opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 mb-8">
            <span className="w-2 h-2 bg-[#7f1bff] rounded-full" />
            Professional SEO &amp; Web Services
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Our SEO Services
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            We provide professional SEO services designed to help your business rank higher on Google, attract targeted traffic, and generate consistent leads.
          </p>
          <p className="text-slate-500 text-sm italic mb-10 max-w-2xl mx-auto">
            "We help businesses grow online with SEO-driven websites that rank, attract traffic, and generate leads."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book-demo" className="px-10 py-5 bg-[#7f1bff] text-white font-black rounded-xl hover:bg-[#6a15d9] transition-all shadow-2xl shadow-purple-500/30 text-base active:scale-95">
              🎁 Get Free SEO Audit
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all text-base active:scale-95">
              📞 Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEO SERVICES LIST ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">SEO Services That Drive Real Results</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              We offer complete SEO solutions tailored to your business goals.
            </p>
          </div>

          <div className="space-y-5">
            {seoServices.map((service, idx) => (
              <div key={idx} className="group p-8 md:p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-[#7f1bff]/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-purple-50 text-[#7f1bff] rounded-2xl flex items-center justify-center group-hover:bg-[#7f1bff] group-hover:text-white transition-all">
                      {service.icon}
                    </div>
                    <span className="text-xs font-black text-slate-300 tracking-widest">{service.num}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xl">{service.emoji}</span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900">{service.title}</h3>
                    </div>
                    <p className="text-slate-500 font-medium mb-5 text-sm">{service.tagline}</p>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Includes:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <CheckCircleIcon className="w-4 h-4 text-[#7f1bff] flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-xl">
                      <ArrowRightIcon className="w-3 h-3 text-[#7f1bff]" />
                      <span className="text-xs font-bold text-[#7f1bff]">{service.benefit}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <Link to="/book-demo" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-black rounded-xl hover:bg-[#7f1bff] transition-all text-sm whitespace-nowrap">
                      Get Audit <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OUR SEO ── */}
      <section className="py-20 bg-[#050505] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">Why Choose Us</p>
          <h2 className="text-4xl font-black text-white mb-10 tracking-tight">🎯 Why Our SEO Services?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {whyUs.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl text-left">
                <CheckCircleIcon className="w-5 h-5 text-[#7f1bff] flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            These content strategies help you rank for: <span className="text-slate-400">SEO services for small businesses · Affordable SEO services India · Local SEO services · Technical SEO · SEO agency for startups · Website SEO optimization</span>
          </p>
        </div>
      </section>

      {/* ── WEBSITE DESIGN & DEVELOPMENT ── */}
      <section id="website-design" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">We Also Build</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              🌐 Website Design &amp; Development Services
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium mb-8">
              We design and develop websites that are built for performance, user experience, and search engine rankings.
            </p>
            <div className="inline-block px-8 py-4 bg-purple-50 rounded-2xl border border-purple-100 max-w-3xl">
              <p className="text-[#7f1bff] font-bold text-sm leading-relaxed">
                "Unlike typical agencies, we combine website development with SEO to ensure your website not only looks good — but also ranks and brings customers."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {webDesignServices.map((service, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-[#7f1bff]/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                <div className="text-3xl mb-4">{service.emoji}</div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm font-medium mb-5">{service.tagline}</p>
                <div className="space-y-2">
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircleIcon className="w-4 h-4 text-[#7f1bff] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/book-demo" className="inline-flex items-center gap-3 px-12 py-5 bg-[#7f1bff] text-white font-black rounded-xl hover:bg-[#6a15d9] transition-all shadow-2xl shadow-purple-500/30 text-lg active:scale-95">
              👉 Get Your Website + SEO Plan <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── APP DEVELOPMENT ── */}
      <section id="app-development" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">We Also Build</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              📱 App Development Services
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium mb-8">
              Launch professional mobile and web apps that engage your users, automate your business, and help you scale faster.
            </p>
            <div className="inline-block px-8 py-4 bg-purple-50 rounded-2xl border border-purple-100 max-w-3xl">
              <p className="text-[#7f1bff] font-bold text-sm leading-relaxed">
                "We build apps that don't just look great — they perform, grow with your business, and integrate seamlessly with your SEO strategy."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {appDevServices.map((service, idx) => (
              <div key={idx} className="p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-[#7f1bff]/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                <div className="text-3xl mb-4">{service.emoji}</div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm font-medium mb-5">{service.tagline}</p>
                <div className="space-y-2">
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircleIcon className="w-4 h-4 text-[#7f1bff] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/book-demo" className="inline-flex items-center gap-3 px-12 py-5 bg-[#7f1bff] text-white font-black rounded-xl hover:bg-[#6a15d9] transition-all shadow-2xl shadow-purple-500/30 text-lg active:scale-95">
              📱 Get Your App Built <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE BUNDLES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">Best Value</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">🚀 Service Bundles</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              Get more for less. Our growth packages combine design, SEO, and content for maximum results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bundles.map((bundle, idx) => (
              <div key={idx} className={`bg-white rounded-[2.5rem] p-10 border transition-all duration-300 hover:shadow-2xl ${bundle.highlight ? 'border-[#7f1bff] shadow-xl shadow-purple-500/10 ring-4 ring-purple-50' : 'border-slate-100 shadow-sm'}`}>
                {bundle.highlight && (
                  <div className="text-[10px] font-black text-[#7f1bff] uppercase tracking-[0.2em] mb-4">⭐ Most Popular</div>
                )}
                <h3 className="text-xl font-black text-slate-900 mb-4">{bundle.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900 tracking-tighter">{bundle.price}</span>
                  {bundle.period && <span className="text-slate-400 font-medium ml-2 text-sm">{bundle.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {bundle.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                      <CheckCircleIcon className="w-5 h-5 text-[#7f1bff] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-demo"
                  className={`block w-full py-4 rounded-xl font-black text-center text-sm transition-all active:scale-95 ${bundle.highlight ? 'bg-[#7f1bff] text-white hover:bg-[#6a15d9] shadow-xl shadow-purple-500/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'}`}
                >
                  {bundle.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#7f1bff] to-[#4f0fbf] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">Get Started with SEO Today</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
            Want to improve your rankings and grow your business? Let's build an SEO strategy that actually works.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book-demo" className="px-12 py-5 bg-white text-[#7f1bff] font-black rounded-xl hover:bg-slate-50 transition-all shadow-2xl text-lg active:scale-95">
              🎁 Get Free SEO Audit
            </Link>
            <Link to="/contact" className="px-12 py-5 bg-white/10 border border-white/20 text-white font-black rounded-xl hover:bg-white/20 transition-all text-lg active:scale-95">
              📞 Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
