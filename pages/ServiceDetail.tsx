
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, ICON_MAP } from '../constants';
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  ChevronDownIcon, 
  ChevronUpIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/solid';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-3xl font-black">Service not found.</h1>
        <Link to="/services" className="text-[#7f1bff] mt-4 inline-block font-bold">Back to all services</Link>
      </div>
    );
  }

  const otherServices = SERVICES.filter(s => s.id !== id).slice(0, 3);

  return (
    <div className="pt-24 bg-white">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7f1bff] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#7f1bff]/20 text-[#7f1bff] font-bold text-[10px] uppercase tracking-widest mb-8 border border-[#7f1bff]/30">
                <span>Premium Services</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
                {service.title}
              </h1>
              <p className="text-xl text-slate-300 font-medium leading-relaxed mb-10 max-w-2xl">
                {service.shortDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book-demo" className="px-10 py-5 bg-[#7f1bff] text-white font-black rounded-2xl hover:bg-[#6a15d9] transition-all shadow-xl shadow-purple-500/20 text-lg">
                  Book a Strategy Call
                </Link>
                <a href="#details" className="px-10 py-5 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-lg backdrop-blur-sm">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-1 w-full hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#7f1bff] rounded-[3.5rem] opacity-20 blur-2xl"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="relative rounded-[3rem] shadow-2xl border-4 border-slate-800 w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="details" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Sidebar - Navigation & Quick Stats */}
            <aside className="lg:w-1/3 space-y-12">
              <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Our Performance</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-[#7f1bff] rounded-xl flex items-center justify-center">
                      <ArrowTrendingUpIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900">400%</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Avg. Traffic Boost</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                      <ShieldCheckIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900">100%</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">White-Hat Strategy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      <SparklesIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900">100+</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Ranking Successes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden">
                <h3 className="text-xl font-black mb-6 relative z-10">Other Expertise</h3>
                <div className="space-y-4 relative z-10">
                  {otherServices.map(s => (
                    <Link key={s.id} to={`/services/${s.id}`} className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-bold text-sm">
                      {s.title}
                    </Link>
                  ))}
                </div>
                <div className="absolute top-0 right-0 opacity-5 pointer-events-none p-10">
                   {ICON_MAP[service.icon]}
                </div>
              </div>
            </aside>

            {/* Right Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">The {service.title} Advantage.</h2>
              <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-medium leading-relaxed mb-16">
                <p className="mb-6">{service.fullDesc}</p>
                <p className="mb-6">{service.detailedContent}</p>
              </div>

              {/* Service Features Grid */}
              {service.features && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                  {service.features.map((feature, i) => (
                    <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                      <h4 className="text-lg font-black text-slate-900 mb-3">{feature.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Benefits Section */}
              <div className="bg-purple-50 rounded-[3rem] p-12 mb-20">
                <h3 className="text-2xl font-black text-slate-900 mb-8">What You Get</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircleIcon className="w-6 h-6 text-[#7f1bff] flex-shrink-0" />
                      <span className="font-bold text-slate-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Timeline */}
              <div className="mb-20">
                <h3 className="text-2xl font-black text-slate-900 mb-12">Our Proven Implementation Process</h3>
                <div className="space-y-12 relative">
                  <div className="absolute left-6 top-4 bottom-4 w-1 bg-slate-100"></div>
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-10 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center font-black text-[#7f1bff] text-xl shadow-md">
                        {i + 1}
                      </div>
                      <div className="pt-2">
                        <h4 className="text-xl font-black text-slate-900 mb-2">{step}</h4>
                        <p className="text-slate-500 font-medium">Systematic execution designed for predictable and scalable organic growth results.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service FAQ */}
              {service.faqs && (
                <div className="mb-20">
                  <h3 className="text-2xl font-black text-slate-900 mb-8">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all hover:bg-slate-50">
                        <button 
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full p-6 text-left flex justify-between items-center transition-colors"
                        >
                          <span className="font-bold text-slate-900 leading-tight">{faq.question}</span>
                          {openFaq === idx ? <ChevronUpIcon className="w-5 h-5 text-[#7f1bff]" /> : <ChevronDownIcon className="w-5 h-5 text-slate-400" />}
                        </button>
                        <div className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-96 py-6 border-t border-slate-100 px-6' : 'max-h-0'}`}>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7f1bff] rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to dominate search?</h2>
          <p className="text-xl text-slate-400 font-medium mb-12">
            Let's customize a {service.title} strategy that matches your business goals and competitive landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/book-demo" className="w-full sm:w-auto px-12 py-5 bg-[#7f1bff] text-white font-black rounded-2xl hover:bg-[#6a15d9] transition-all shadow-xl shadow-purple-500/20 text-lg">
              Claim Your Free Audit
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all text-lg flex items-center justify-center">
              Talk to an Expert <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
