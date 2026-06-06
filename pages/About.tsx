
import React from 'react';
/* Added DocumentTextIcon to the import list from @heroicons/react/24/outline */
import { ShieldCheckIcon, UserGroupIcon, BeakerIcon, GlobeAltIcon, ChartBarIcon, CpuChipIcon, BoltIcon, MagnifyingGlassIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7f1bff] rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">Built to <span className="text-[#7f1bff]">Outperform</span>.</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            OnlineSEOHelp is a team of data scientists, content architects, and technical engineers obsessed with turning organic search into your most profitable channel.
          </p>
        </div>
      </section>

      {/* Detailed Intro Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-100 rounded-[3.5rem] -rotate-2"></div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Our Team at Work" className="relative rounded-[3rem] shadow-2xl border-4 border-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">We think like owners, not just consultants.</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg font-medium">
                Founded in 2015, OnlineSEOHelp was born out of frustration with the "black box" nature of typical digital agencies. We saw too many businesses paying high retainers for reports they didn't understand and results that didn't impact their bottom line.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                We decided to change the script. Our philosophy is simple: SEO is a business investment, not a technical expense. Today, we manage a portfolio of clients ranging from agile B2B SaaS startups to global e-commerce giants, helping them capture market share from established incumbents.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-[#7f1bff] transition-colors">
                  <h4 className="text-5xl font-black text-[#7f1bff] mb-2">500+</h4>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Companies Scaled</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-[#7f1bff] transition-colors">
                  <h4 className="text-5xl font-black text-[#7f1bff] mb-2">98%</h4>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Grid */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-[#7f1bff] uppercase tracking-[0.2em] mb-4">Our Foundation</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Purpose-driven performance.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Our Mission", icon: <GlobeAltIcon className="w-10 h-10" />, desc: "To democratize search authority. Every innovative product deserves to be discovered by the audience that needs it most." },
              { title: "Our Vision", icon: <BeakerIcon className="w-10 h-10" />, desc: "To become the global benchmark for transparent, ROI-focused digital growth, where data leads every decision." },
              { title: "Our Values", icon: <ShieldCheckIcon className="w-10 h-10" />, desc: "Radical transparency, extreme ownership, and a relentless commitment to out-learning the competition." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-purple-50 text-[#7f1bff] rounded-3xl flex items-center justify-center mb-8">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{v.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Our Expertise */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1">
              <h2 className="text-sm font-black text-[#7f1bff] uppercase tracking-[0.2em] mb-4">Core Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">Where we excel.</h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-12">
                We don't try to be everything to everyone. We focus on the high-impact pillars of organic search that drive 90% of the value for our clients.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Technical Architecture", icon: <CpuChipIcon className="w-6 h-6" />, desc: "Ensuring your backend is optimized for search spider efficiency and modern performance metrics." },
                  { title: "Semantic Content Design", icon: <DocumentTextIcon className="w-6 h-6" />, desc: "Moving beyond keywords to topic clusters that build topical authority in your niche." },
                  { title: "Digital PR & Outreach", icon: <BoltIcon className="w-6 h-6" />, desc: "Ethical authority building through genuine editorial placements and high-tier mentions." },
                  { title: "Data Attribution", icon: <ChartBarIcon className="w-6 h-6" />, desc: "Closing the loop between search rankings and actual bottom-line revenue." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="mt-1 text-[#7f1bff]">{item.icon}</div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10">
                <blockquote className="text-3xl font-black mb-8 leading-tight italic">
                  "They didn't just give us a list of keywords. They gave us a roadmap for how to dominate our entire industry category."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#7f1bff] rounded-full flex items-center justify-center font-black">TM</div>
                  <div>
                    <p className="font-black">Thomas Miller</p>
                    <p className="text-sm text-slate-400">Head of Growth, SaaS Metrics</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <ChartBarIcon className="w-64 h-64" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Our Strategic Process */}
      <section className="py-32 bg-slate-950 text-white rounded-[4rem] mx-4 mb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-[#7f1bff] uppercase tracking-[0.2em] mb-4">The Workflow</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">Our 6-Step Strategy for Growth.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {[
              { num: "01", title: "Technical Diagnostics", desc: "A deep dive into your site code, server logs, and crawl patterns to eliminate indexation barriers." },
              { num: "02", title: "Market Intelligence", desc: "Identifying competitor weak spots and high-intent keyword gaps your business is uniquely suited for." },
              { num: "03", title: "Content Architecture", desc: "Designing a semantic web of content that establishes you as the go-to authority for your core topics." },
              { num: "04", title: "Authority Velocity", desc: "Rapidly building external signals of trust through strategic partnerships and high-tier digital PR." },
              { num: "05", title: "Conversion Tuning", desc: "Optimizing the user journey from search result to lead form to ensure organic traffic actually converts." },
              { num: "06", title: "Scale & Lifecycle", desc: "Continuously monitoring performance to protect your gains and expand into adjacent market categories." }
            ].map((step, i) => (
              <div key={i} className="group relative">
                <div className="text-6xl font-black text-slate-800 mb-6 group-hover:text-[#7f1bff] transition-colors duration-500">{step.num}</div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">{step.title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-slate-800"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
