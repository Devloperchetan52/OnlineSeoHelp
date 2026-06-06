
import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { ArrowRightIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">Success Stories</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover how we've helped diverse businesses achieve explosive organic growth through precision SEO strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
              <div className="h-56 relative overflow-hidden">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1 bg-white/90 backdrop-blur-md text-[#7f1bff] text-[10px] font-black uppercase rounded-full shadow-lg border border-purple-100">
                    {study.industry}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#7f1bff] transition-colors leading-tight tracking-tight">
                  {study.title}
                </h3>
                <p className="text-slate-500 font-medium mb-8 text-sm flex-1">
                  {study.outcomeSummary}
                </p>
                
                <div className="space-y-3 mb-8">
                  {study.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs font-bold text-slate-700">
                      <ChartBarIcon className="w-4 h-4 text-[#7f1bff]" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/case-studies/${study.id}`} className="inline-flex items-center justify-center w-full py-4 bg-[#7f1bff] text-white font-black rounded-2xl hover:bg-[#6a15d9] transition-all shadow-lg shadow-purple-500/20">
                  Read Full Story <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
