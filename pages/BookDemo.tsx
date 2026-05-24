
import React, { useState } from 'react';
import { 
  ShieldCheckIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon, 
  UserCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const BookDemo: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-20 gap-20">
        
        {/* Left Side: Benefits */}
        <div className="flex-1">
          {/* Free Audit Value Banner */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7f1bff]/10 border border-[#7f1bff]/20 text-[#7f1bff] text-sm font-bold mb-8">
            <GiftIcon className="w-5 h-5" />
            Free SEO Audit — Worth $100
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Claim Your Free <br />
            <span className="text-[#7f1bff]">SEO Audit Report.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            We'll personally review your website and tell you exactly why it's not ranking — and what changes will bring you more traffic, leads, and customers.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-[#7f1bff] flex-shrink-0">
                <ArrowTrendingUpIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">SEO Performance Analysis</h3>
                <p className="text-slate-600 text-sm">A direct look at your current rankings vs. your top 3 competitors.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 flex-shrink-0">
                <ShieldCheckIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Keyword Gap Report</h3>
                <p className="text-slate-600 text-sm">Discover which high-value keywords your site is missing out on.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                <ClockIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Action Plan to Rank Faster</h3>
                <p className="text-slate-600 text-sm">A step-by-step roadmap of exactly what to fix and when to expect results.</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-10">
            <a href="mailto:growth@onlineseohelp.com" className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-[#7f1bff]/40 transition-all group">
              <div className="w-10 h-10 bg-purple-50 text-[#7f1bff] rounded-xl flex items-center justify-center">
                <EnvelopeIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Email</p>
                <p className="font-bold text-slate-900 group-hover:text-[#7f1bff] transition-colors">growth@onlineseohelp.com</p>
              </div>
            </a>
          </div>

          <div className="p-7 bg-white rounded-3xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-3">
              <UserCircleIcon className="w-9 h-9 text-[#7f1bff]" />
              <span className="font-bold text-slate-900">Trusted by 500+ businesses globally.</span>
            </div>
            <p className="text-sm text-slate-500 italic">"The free audit alone revealed 12 issues we had no idea about. We fixed them and traffic doubled in 2 months." — Rahul V., Startup Founder</p>
          </div>
        </div>
        
        {/* Right Side: Form */}
        <div className="flex-1">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-purple-500/10 border border-slate-100 sticky top-32">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
                  <ShieldCheckIcon className="w-9 h-9" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-3">Audit Request Received!</h2>
                <p className="text-slate-500 font-medium">We'll review your website and send your free SEO audit report within 24 hours. Check your email!</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">Get Your Free SEO Audit</h2>
                  <p className="text-slate-500 text-sm font-medium">Fill in the details below — takes less than 2 minutes.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">Full Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all" />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">Email Address * <span className="text-slate-400 font-normal">(work or Gmail — both fine)</span></label>
                    <input required type="email" placeholder="you@company.com or you@gmail.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all" />
                  </div>

                  {/* Website URL - optional */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">Website URL <span className="text-slate-400 font-normal">(optional)</span></label>
                    <input type="url" placeholder="https://yourwebsite.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all" />
                    <p className="text-xs text-slate-400">If you don't have a website yet, leave this blank.</p>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">Monthly SEO Budget</label>
                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all">
                      <option value="0">No budget yet — just exploring</option>
                      <option value="0-500">$0 – $500 / month</option>
                      <option value="500-1000">$500 – $1,000 / month</option>
                      <option value="1000-3000">$1,000 – $3,000 / month</option>
                      <option value="3000+">$3,000+ / month</option>
                    </select>
                  </div>

                  {/* Service interest */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700">I need help with</label>
                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all">
                      <option>SEO (Rank higher on Google)</option>
                      <option>Local SEO (Google Maps / Near Me)</option>
                      <option>Website Design & Development</option>
                      <option>PPC / Google Ads</option>
                      <option>Content Marketing</option>
                      <option>Not sure — need guidance</option>
                    </select>
                  </div>

                  <div className="p-4 bg-purple-50 text-[#7f1bff] rounded-xl text-xs flex items-start gap-3">
                    <ShieldCheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Your information is 100% private. We never share your data or send spam.</span>
                  </div>

                  <button type="submit" className="w-full py-5 bg-[#7f1bff] text-white font-extrabold rounded-xl hover:bg-[#6a15d9] transition-all shadow-xl shadow-purple-500/20 text-lg">
                    🎁 Claim My Free SEO Audit
                  </button>
                  <p className="text-center text-xs text-slate-400">Limited to 5 businesses per week. No payment required.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
