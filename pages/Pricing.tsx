
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { PRICING_PLANS, PRICING_FAQS } from '../constants';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
            Choose the plan that's right for your stage. No hidden fees or lock-ins.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-slate-200 rounded-full relative p-1 transition-colors hover:bg-slate-300"
            >
              <div className={`w-6 h-6 bg-[#7f1bff] rounded-full transition-transform duration-200 shadow-sm ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-bold transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly <span className="text-[#7f1bff] ml-1">(20% Off)</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-[2.5rem] p-10 border transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 ${plan.isPopular ? 'border-[#7f1bff] shadow-xl ring-4 ring-purple-50 shadow-purple-500/5' : 'border-slate-100 shadow-sm'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7f1bff] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-black text-slate-900">${isYearly ? plan.yearlyPrice : plan.price}</span>
                <span className="text-slate-400 font-medium ml-2">/mo</span>
              </div>
              
              <Link 
                to="/book-demo" 
                className={`block w-full text-center py-4 rounded-2xl font-black transition-all mb-8 ${plan.isPopular ? 'bg-[#7f1bff] text-white hover:bg-[#6a15d9] shadow-lg shadow-purple-500/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'}`}
              >
                Get Started
              </Link>
              
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">What's included:</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-[#7f1bff] flex-shrink-0" />
                    <span className="text-sm text-slate-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Website Design Plans */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7f1bff]/10 text-[#7f1bff] text-xs font-black uppercase tracking-widest mb-4">Website Design & Development</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">Need a Website Too?</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Get a fast, modern, SEO-ready website — built to rank and convert from day one.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Website */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Basic Website</h3>
              <p className="text-slate-500 text-sm mb-5 font-medium">Landing page or simple brochure site for new businesses.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-slate-900">$299</span>
                <span className="text-slate-400 font-medium ml-2">one-time</span>
              </div>
              <Link to="/book-demo" className="block w-full text-center py-4 rounded-2xl font-black bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200 mb-8 transition-all">Get Started</Link>
              <div className="space-y-3">
                {['Up to 5 pages', 'Mobile responsive design', 'Basic on-page SEO setup', 'Contact form', '1 month free maintenance', 'Delivered in 7–10 days'].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-[#7f1bff] flex-shrink-0" />
                    <span className="text-sm text-slate-600 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Website */}
            <div className="relative bg-white rounded-[2.5rem] p-10 border border-[#7f1bff] shadow-xl ring-4 ring-purple-50 shadow-purple-500/5 hover:shadow-2xl transition-all">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7f1bff] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Business Website</h3>
              <p className="text-slate-500 text-sm mb-5 font-medium">Full business site with SEO optimization and lead capture.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-slate-900">$699</span>
                <span className="text-slate-400 font-medium ml-2">one-time</span>
              </div>
              <Link to="/book-demo" className="block w-full text-center py-4 rounded-2xl font-black bg-[#7f1bff] text-white hover:bg-[#6a15d9] shadow-lg shadow-purple-500/20 mb-8 transition-all">Get Started</Link>
              <div className="space-y-3">
                {['Up to 15 pages', 'Custom design (your brand)', 'Full on-page SEO + schema', 'Blog setup ready', '1 month free maintenance + on-page SEO', 'Google Analytics + Search Console', 'Delivered in 14–21 days'].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-[#7f1bff] flex-shrink-0" />
                    <span className="text-sm text-slate-600 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Plan */}
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 border border-slate-800 shadow-sm hover:shadow-2xl transition-all flex flex-col">
              <h3 className="text-xl font-bold mb-2">Custom Plan</h3>
              <p className="text-slate-400 text-sm mb-5 font-medium">E-commerce, large portals, or specific requirements? Let us build exactly what you need.</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">Custom</span>
              </div>
              <Link to="/book-demo" className="block w-full text-center py-4 rounded-2xl font-black bg-white text-slate-900 hover:bg-slate-100 mb-8 transition-all">Get a Quote</Link>
              <div className="space-y-3">
                {['E-commerce / store setup', 'Unlimited pages', 'Custom features & integrations', 'Advanced SEO & speed optimization', 'Ongoing maintenance plan', 'Dedicated project manager'].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Pricing & Plan FAQs</h2>
            <p className="text-slate-600 font-medium">Have questions about billing? Find answers here.</p>
          </div>
          <div className="space-y-4">
            {PRICING_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  {openFaq === idx ? <ChevronUpIcon className="w-5 h-5 text-[#7f1bff]" /> : <ChevronDownIcon className="w-5 h-5 text-slate-400" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-96 py-6 border-t border-slate-100 px-6' : 'max-h-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
