
import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { FAQS } from '../constants';

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Let's Build Your Growth Engine.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to scale? Our experts are standing by to audit your presence and provide a custom growth roadmap.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="flex-[1.5] bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-purple-500/5 border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Website</label>
                    <input type="text" placeholder="www.yourcompany.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea rows={5} placeholder="Tell us about your SEO goals..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1bff] focus:bg-white transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-[#7f1bff] text-white font-bold rounded-xl hover:bg-[#6a15d9] transition-all shadow-xl shadow-purple-500/20 text-lg">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="flex-1 space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 bg-purple-50 rounded-2xl">
                    <div className="w-12 h-12 bg-white text-[#7f1bff] rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email Us</h4>
                      <a href="mailto:divash12@gmail.com" className="text-[#7f1bff] text-sm font-medium hover:underline">divash12@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-purple-100 rounded-2xl">
                    <div className="w-12 h-12 bg-white text-purple-600 rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Call / WhatsApp</h4>
                      <a href="tel:+919717044331" className="text-slate-600 text-sm hover:text-[#7f1bff] transition-colors">+91 97170 44331</a>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-slate-100 rounded-2xl">
                    <div className="w-12 h-12 bg-white text-slate-900 rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Visit Us</h4>
                      <p className="text-slate-600 text-sm">123 Growth St, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative grayscale">
                <img src="https://picsum.photos/seed/map-location/600/400" alt="Map Location" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-purple-600/10 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="w-8 h-8 bg-[#7f1bff] rounded-full flex items-center justify-center text-white animate-bounce shadow-xl">
                     <MapPinIcon className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our SEO partnership.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  {openFaq === idx ? <ChevronUpIcon className="w-5 h-5 text-[#7f1bff]" /> : <ChevronDownIcon className="w-5 h-5 text-slate-400" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-96 py-6 border-t border-slate-100 px-6' : 'max-h-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
