
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  RocketLaunchIcon, 
  PresentationChartLineIcon,
  MagnifyingGlassIcon,
  StarIcon,
  CheckCircleIcon,
  CalendarIcon,
  UserIcon,
  ChartBarIcon,
  MapPinIcon,
  DocumentTextIcon,
  LinkIcon,
  ShieldCheckIcon,
  BuildingStorefrontIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
  PencilSquareIcon,
  ClockIcon,
  BoltIcon,
  GiftIcon,
  ExclamationTriangleIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/solid';
import { BLOG_POSTS, PRICING_PLANS, CASE_STUDIES } from '../constants';

const Home: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const seoServices = [
    { icon: <MagnifyingGlassIcon className="w-6 h-6" />, title: 'On-Page SEO Optimization', desc: 'Optimize meta tags, content structure, internal links, and images so every page is built to rank.' },
    { icon: <WrenchScrewdriverIcon className="w-6 h-6" />, title: 'Technical SEO Fixes', desc: 'Fix speed issues, crawl errors, Core Web Vitals, and mobile problems that hold your rankings back.' },
    { icon: <MapPinIcon className="w-6 h-6" />, title: 'Local SEO (Google Maps Ranking)', desc: 'Rank in "near me" searches and Google Maps — ideal for salons, clinics, gyms, and local businesses.' },
    { icon: <DocumentTextIcon className="w-6 h-6" />, title: 'Keyword Research & Strategy', desc: 'Find low-competition, high-intent keywords your customers are actively searching for.' },
    { icon: <PencilSquareIcon className="w-6 h-6" />, title: 'Content Optimization', desc: 'Create and optimize blogs, landing pages, and service content that ranks and converts visitors.' },
    { icon: <LinkIcon className="w-6 h-6" />, title: 'Link Building & Authority Growth', desc: 'Earn quality backlinks via guest posts, outreach, and directories to boost your domain authority.' },
  ];

  const whoWeHelp = [
    { icon: <BuildingStorefrontIcon className="w-7 h-7" />, label: 'Small Businesses', desc: 'Get found by local & national customers without a huge marketing budget.' },
    { icon: <BoltIcon className="w-7 h-7" />, label: 'Startups', desc: 'Build organic traffic from day one and grow without burning cash on ads.' },
    { icon: <WrenchScrewdriverIcon className="w-7 h-7" />, label: 'Local Service Providers', desc: 'Salons, Gyms, Clinics, Restaurants — rank at the top when people search nearby.' },
    { icon: <PencilSquareIcon className="w-7 h-7" />, label: 'Bloggers & Affiliates', desc: 'Drive consistent search traffic and grow passive income through SEO.' },
  ];

  const expectations = [
    { stat: '↑ Traffic', label: 'Increase in organic website visitors' },
    { stat: '↑ Rankings', label: 'Higher positions on Google Search' },
    { stat: '↑ Leads', label: 'More inquiries, calls & sign-ups' },
    { stat: '↑ Performance', label: 'Faster, healthier, search-ready website' },
  ];

  const whyUs = [
    { icon: <ChartBarIcon className="w-5 h-5" />, text: 'Affordable SEO plans built for startups & small businesses' },
    { icon: <UsersIcon className="w-5 h-5" />, text: 'Personalized strategies — no copy-paste or generic work' },
    { icon: <PresentationChartLineIcon className="w-5 h-5" />, text: 'Transparent monthly reporting you can actually understand' },
    { icon: <RocketLaunchIcon className="w-5 h-5" />, text: 'Focused on real business results, not vanity metrics' },
    { icon: <ClockIcon className="w-5 h-5" />, text: 'No long-term contracts — stay because it works' },
  ];

  const clientTestimonials = [
    {
      name: 'Rahul Verma',
      role: 'Founder, Local Gym',
      content: 'Within 3 months our Google ranking jumped from page 5 to page 1. We now get 15–20 new customer calls every week purely from search.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80',
    },
    {
      name: 'Priya Nair',
      role: 'CEO, D2C Skincare Brand',
      content: 'OnlineSEOHelp doubled our organic traffic in 4 months. Our ad spend dropped by 40% and leads kept coming. Totally worth it.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80',
    },
    {
      name: 'James Carter',
      role: 'Owner, Law Firm',
      content: 'We were invisible on Google before. Now we rank #1 for "personal injury lawyer near me" in our city. The ROI has been incredible.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80',
    }
  ];

  return (
    <div className="bg-[#050505] text-white">

      {/* ── HERO SECTION ── */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-[#050505] min-h-screen flex flex-col items-center justify-center">
        {/* Background grid */}
        <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
        {/* Purple glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#7f1bff] rounded-full blur-[220px] opacity-20 pointer-events-none" />

        <div className={`max-w-5xl mx-auto px-4 relative z-10 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 mb-10 backdrop-blur-md">
            <span className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]" />
            500+ small businesses trust us with their growth
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
            Rank Higher on Google &<br />
            <span className="text-[#7f1bff]">Get More Customers</span> Organically
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            We help small businesses, startups, and local brands grow online through <span className="text-white font-bold">SEO, website development, and app development</span> — everything you need to rank, convert, and scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/services/seo"
              className="px-10 py-5 bg-[#7f1bff] text-white font-black rounded-xl hover:bg-[#6a15d9] transition-all shadow-2xl shadow-purple-500/30 text-base active:scale-95"
            >
              🎁 Get Your Free SEO Audit — Worth $99
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all text-base active:scale-95 backdrop-blur-md"
            >
              📞 Book Free Consultation
            </Link>
          </div>

          {/* Social proof stars */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-5 h-5 text-orange-400" />)}
            </div>
            <p className="text-sm text-slate-500 font-medium">Rated 4.9/5 by 200+ clients across 15 industries</p>
          </div>
        </div>
      </section>

      <div className="bg-white text-slate-900 relative z-20">

        {/* ── 3 SERVICE PILLARS ── */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Everything You Need to Grow Online</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">We build, optimize, and scale your digital presence — all under one roof.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Service 1 — Website Development */}
              <Link to="/services/website-design" className="group relative p-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                <div className="text-5xl mb-5">🌐</div>
                <h3 className="text-2xl font-black text-white mb-3">Website Development</h3>
                <p className="text-white/80 font-medium text-sm leading-relaxed mb-6 flex-1">
                  Modern, fast, SEO-ready websites that look stunning on all devices. Built to convert visitors into customers.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Responsive design', 'Fast loading (90+ PageSpeed)', 'SEO-optimized structure', '1 month free maintenance'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-white" />{item}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 text-white font-black text-sm group-hover:gap-4 transition-all">
                  Explore Web Development <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Link>
              {/* Service 2 — SEO */}
              <Link to="/services/seo" className="group relative p-10 bg-gradient-to-br from-[#7f1bff] to-[#5a10c0] rounded-[2.5rem] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-wider">Most Popular</div>
                <div className="text-5xl mb-5">🔍</div>
                <h3 className="text-2xl font-black text-white mb-3">SEO Services</h3>
                <p className="text-white/80 font-medium text-sm leading-relaxed mb-6 flex-1">
                  Rank higher on Google, drive organic traffic, and generate leads — without paying for ads.
                </p>
                <ul className="space-y-2 mb-6">
                  {['On-Page & Technical SEO', 'Local SEO (Google Maps)', 'Keyword research & content', 'Link building & authority'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-white" />{item}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 text-white font-black text-sm group-hover:gap-4 transition-all">
                  Explore SEO Services <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Link>
              {/* Service 3 — App Dev */}
              <Link to="/services" className="group relative p-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[2.5rem] hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                <div className="text-5xl mb-5">📱</div>
                <h3 className="text-2xl font-black text-white mb-3">App Development</h3>
                <p className="text-white/80 font-medium text-sm leading-relaxed mb-6 flex-1">
                  Mobile & web apps that engage users, automate your business, and help you scale faster.
                </p>
                <ul className="space-y-2 mb-6">
                  {['iOS & Android apps', 'Web apps & portals', 'E-commerce solutions', 'Maintenance & support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-white" />{item}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 text-white font-black text-sm group-hover:gap-4 transition-all">
                  Explore App Development <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Link>
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-[#7f1bff] transition-all shadow-lg text-sm">
                View All Services <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── OUR SEO SERVICES ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">SEO Services That Drive Real Results</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                We offer complete SEO solutions tailored to your business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoServices.map((service, idx) => (
                <div key={idx} className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-[#7f1bff]/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-50 text-[#7f1bff] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#7f1bff] group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{service.desc}</p>
                </div>
              ))}
              {/* CTA card */}
              <div className="p-8 bg-[#7f1bff] rounded-[2rem] flex flex-col justify-between">
                <p className="text-white/80 text-sm font-medium mb-6">Not sure which service you need? Let's find out together — for free.</p>
                <Link to="/book-demo" className="inline-flex items-center gap-2 text-white font-black text-sm hover:gap-4 transition-all">
                  Get a free audit <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── WEBSITE DESIGN & DEVELOPMENT ── */}
        <section className="py-28 bg-[#050505] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">We Also Build</p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
                  🌐 Build a Website That<br />
                  <span className="text-[#7f1bff]">Ranks &amp; Converts</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium mb-5 leading-relaxed">
                  We don't just design websites — we create SEO-friendly, high-performance websites that help your business grow online.
                </p>
                <p className="text-slate-400 text-sm italic mb-8 border-l-2 border-[#7f1bff] pl-4 leading-relaxed">
                  "Unlike typical agencies, we combine website development with SEO to ensure your website not only looks good — but also ranks and brings customers."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {['Modern & responsive design', 'SEO-optimized structure from day 1', 'Fast loading speed (90+ PageSpeed)', 'Mobile-friendly design', 'Conversion-focused layout', 'Easy-to-manage website'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                      <CheckCircleIcon className="w-4 h-4 text-[#7f1bff] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm font-medium mb-8">👉 Perfect for businesses that want both design + SEO in one place.</p>
                <Link to="/services#website-design" className="inline-flex items-center gap-2 px-10 py-5 bg-[#7f1bff] text-white font-black rounded-xl hover:bg-[#6a15d9] transition-all shadow-2xl shadow-purple-500/30 active:scale-95">
                  Get Your Website + SEO Plan <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800"
                    alt="Website Design & Development"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#7f1bff]/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl">
                    <p className="text-xs font-black text-[#7f1bff] uppercase tracking-widest mb-1">Included Free</p>
                    <p className="text-lg font-black text-slate-900">1 Month SEO + Maintenance</p>
                    <p className="text-sm text-slate-500 font-medium">with every website we build</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── APP DEVELOPMENT SECTION ── */}
        <section className="py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 w-full order-2 lg:order-1">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                    alt="App Development"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl">
                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Cross-Platform</p>
                    <p className="text-lg font-black text-slate-900">iOS + Android + Web</p>
                    <p className="text-sm text-slate-500 font-medium">Built with modern technologies</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <p className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-3">App Development</p>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
                  📱 Launch an App That<br />
                  <span className="text-emerald-600">Scales Your Business</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium mb-5 leading-relaxed">
                  From mobile apps to web portals, we build digital products that engage users, automate workflows, and drive revenue.
                </p>
                <p className="text-slate-500 text-sm italic mb-8 border-l-2 border-emerald-600 pl-4 leading-relaxed">
                  "We build apps that don't just look great — they perform, grow with your business, and integrate with your digital strategy."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {['iOS & Android apps', 'Web apps & dashboards', 'E-commerce solutions', 'Custom business tools', 'API integrations', 'Ongoing maintenance'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link to="/services#app-development" className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-500/30 active:scale-95">
                  Get Your App Built <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE HELP ── */}
        <section className="py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">Who We Work With</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">Businesses We Help Grow</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                From startups to established brands — we focus on businesses that want real, sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoWeHelp.map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#7f1bff]/20 transition-all duration-300 text-center">
                  <div className="w-14 h-14 bg-purple-50 text-[#7f1bff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{item.label}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT YOU CAN EXPECT ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">Results</p>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">What You Can Expect</h2>
                <p className="text-slate-500 text-lg font-medium mb-10 leading-relaxed">
                  We focus on <span className="text-slate-900 font-bold">long-term growth, not shortcuts.</span> Our clients see sustainable results that compound over time — not spikes that disappear.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {expectations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <CheckCircleIcon className="w-6 h-6 text-[#7f1bff] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-black text-slate-900 text-lg">{item.stat}</p>
                        <p className="text-slate-500 text-sm font-medium">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=900"
                    alt="SEO Results Dashboard"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#7f1bff]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl">
                    <p className="text-xs font-black text-[#7f1bff] uppercase tracking-widest mb-1">Real Client Result</p>
                    <p className="text-2xl font-black text-slate-900">+300% Organic Traffic</p>
                    <p className="text-sm text-slate-500 font-medium">in 6 months — B2B SaaS client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-28 bg-[#050505] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">Why Choose Online SEO Help?</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                There are hundreds of SEO agencies. Here's why businesses like yours choose us — and stay with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyUs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-7 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-[#7f1bff]/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#7f1bff]/20 text-[#7f1bff] rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-white font-semibold text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FREE SEO AUDIT LEAD MAGNET ── */}
        <section className="py-28 bg-gradient-to-br from-[#7f1bff] to-[#4f0fbf] text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-white/80 mb-8">
              <GiftIcon className="w-4 h-4" />
              Limited Availability
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">Get a Free SEO Audit</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
              We'll personally review your website and show you:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 max-w-3xl mx-auto">
              {[
                { icon: '🔍', text: 'Why your website is not ranking on Google' },
                { icon: '🎯', text: 'Which high-value keywords you are missing out on' },
                { icon: '⚡', text: 'Exact changes that can start bringing you traffic' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white/10 border border-white/20 rounded-2xl text-center backdrop-blur-sm">
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <p className="text-sm font-bold text-white leading-snug">{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              to="/book-demo"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#7f1bff] font-black rounded-xl hover:bg-slate-50 transition-all shadow-2xl text-lg active:scale-95"
            >
              👉 Claim Your Free Audit Now
            </Link>
            <div className="mt-5 flex items-center justify-center gap-2 text-white/60 text-sm font-medium">
              <ExclamationTriangleIcon className="w-4 h-4 text-yellow-400" />
              Limited to <span className="text-yellow-300 font-bold mx-1">5 businesses per week.</span> Spots fill up fast.
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-4">Proven Results</p>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Real clients. Real growth.</h2>
              </div>
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-slate-900 font-black hover:text-[#7f1bff] transition-colors">
                View all stories <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CASE_STUDIES.slice(0, 3).map((study, idx) => (
                <Link key={idx} to={`/case-studies/${study.id}`} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="h-56 relative overflow-hidden">
                    <img loading="lazy" decoding="async" src={study.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-5 left-5 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-[#7f1bff] uppercase border border-purple-100">
                      {study.industry}
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#7f1bff] transition-colors line-clamp-2">{study.title}</h4>
                    <div className="space-y-3 mb-6">
                      {study.results.slice(0, 2).map((res, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-bold text-slate-700">{res}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Read Case Study</span>
                      <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#7f1bff] group-hover:text-white transition-all">
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-3">Testimonials</p>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientTestimonials.map((item, idx) => (
                <div key={idx} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-0.5 mb-5">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-4 h-4 text-orange-400" />)}
                  </div>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed mb-8 italic">"{item.content}"</p>
                  <div className="flex items-center gap-4">
                    <img loading="lazy" decoding="async" src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#7f1bff]/20" />
                    <div>
                      <p className="font-black text-slate-900 text-sm">{item.name}</p>
                      <p className="text-slate-400 text-xs font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG INSIGHTS ── */}
        <section className="py-28 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <p className="text-[#7f1bff] font-black uppercase tracking-widest text-xs mb-4">Insights</p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">Stay ahead of the curve.</h2>
              </div>
              <Link to="/blog" className="inline-flex items-center gap-2 text-white font-black hover:text-[#7f1bff] transition-colors">
                Read our blog <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.slice(0, 3).map((post, idx) => (
                <Link key={idx} to={`/blog/${post.id}`} className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500">
                  <div className="h-52 relative overflow-hidden">
                    <img loading="lazy" decoding="async" src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5">
                      <span className="flex items-center gap-1.5"><CalendarIcon className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><UserIcon className="w-3 h-3" /> {post.author}</span>
                    </div>
                    <h4 className="text-xl font-black mb-4 group-hover:text-[#7f1bff] transition-colors line-clamp-2">{post.title}</h4>
                    <p className="text-slate-400 text-sm font-medium line-clamp-3 mb-6">{post.excerpt}</p>
                    <div className="flex items-center text-[#7f1bff] font-black text-xs gap-2 group-hover:gap-4 transition-all">
                      Read Article <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-28 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[#7f1bff] font-black text-xs uppercase mb-4 tracking-widest">Transparent Pricing</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Affordable SEO Plans</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10 font-medium">No hidden fees. No long-term contracts. Just results.</p>

            <div className="flex items-center justify-center gap-4 mb-14">
              <span className={`text-sm font-bold ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-8 bg-slate-100 rounded-full relative p-1.5 transition-colors hover:bg-slate-200"
              >
                <div className={`w-5 h-5 bg-[#7f1bff] rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm font-bold ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
                Yearly <span className="text-[#7f1bff] font-black text-[10px] ml-1 uppercase">Save 20%</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {PRICING_PLANS.map((plan, idx) => (
                <div key={idx} className={`bg-white rounded-[2.5rem] p-10 border transition-all duration-500 hover:shadow-2xl ${plan.isPopular ? 'border-[#7f1bff] shadow-xl shadow-purple-500/5 ring-4 ring-purple-50' : 'border-slate-100 shadow-sm'}`}>
                  {plan.isPopular && <div className="text-[10px] font-black text-[#7f1bff] uppercase tracking-[0.2em] mb-4">Most Popular</div>}
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-black tracking-tighter">${isYearly ? plan.yearlyPrice : plan.price}</span>
                    <span className="text-slate-400 font-medium ml-2">/mo</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                  <Link to="/book-demo" className={`block w-full py-4 rounded-xl font-black mb-8 transition-all ${plan.isPopular ? 'bg-[#7f1bff] text-white hover:bg-[#6a15d9] shadow-xl shadow-purple-500/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
                    Get Started
                  </Link>
                  <ul className="text-left space-y-4">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#7f1bff] flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-28 bg-[#050505] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]" />
              Taking new clients this month
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
              Ready to Grow<br />Your Business?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Let's help you rank higher, attract more traffic, and convert visitors into paying customers — with SEO that actually works.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="px-12 py-5 bg-[#7f1bff] text-white font-black rounded-xl hover:bg-[#6a15d9] transition-all shadow-2xl shadow-purple-500/30 text-lg active:scale-95"
              >
                👉 Get Started Today
              </Link>
              <Link
                to="/contact"
                className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all text-lg active:scale-95 backdrop-blur-md"
              >
                📞 Book Free Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
