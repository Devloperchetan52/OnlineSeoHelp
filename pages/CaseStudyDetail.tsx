
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { ArrowLeftIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = CASE_STUDIES.find(s => s.id === id);

  if (!study) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-2xl font-black">Case study not found.</h1>
        <Link to="/case-studies" className="text-[#7f1bff] mt-4 inline-block font-bold">Back to case studies</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/case-studies" className="inline-flex items-center text-slate-400 hover:text-[#7f1bff] mb-12 transition-colors font-bold text-sm">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Success Stories
        </Link>
        
        <div className="mb-8">
          <span className="px-4 py-1 bg-purple-50 text-[#7f1bff] text-[10px] font-black uppercase rounded-full border border-purple-100 tracking-widest">
            {study.industry}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-10 tracking-tighter">
          {study.title}
        </h1>

        <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-20">
          <img src={study.image} alt={study.title} className="w-full h-[500px] object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 py-12 border-y border-slate-100">
          <div>
            <h4 className="text-xs font-black text-[#7f1bff] uppercase tracking-widest mb-2">Client</h4>
            <p className="text-lg font-black text-slate-900">{study.client}</p>
          </div>
          <div>
            <h4 className="text-xs font-black text-[#7f1bff] uppercase tracking-widest mb-2">Industry</h4>
            <p className="text-lg font-black text-slate-900">{study.industry}</p>
          </div>
          <div>
            <h4 className="text-xs font-black text-[#7f1bff] uppercase tracking-widest mb-2">Service</h4>
            <p className="text-lg font-black text-slate-900">Full Scale SEO</p>
          </div>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">The Challenge</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              {study.challenge}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">The Solution</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              {study.solution}
            </p>
          </section>

          <section className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Key Results</h2>
            <div className="grid grid-cols-1 gap-6">
              {study.results.map((res, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-6 h-6 text-[#7f1bff]" />
                  </div>
                  <span className="text-lg font-bold text-slate-800">{res}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-white text-center">
          <h3 className="text-3xl font-black mb-6">Ready for similar results?</h3>
          <p className="text-slate-400 mb-10 font-medium">Let's audit your current search presence and map out your path to #1.</p>
          <Link to="/book-demo" className="inline-flex items-center px-10 py-4 bg-[#7f1bff] text-white font-black rounded-2xl hover:bg-[#6a15d9] transition-all shadow-xl shadow-purple-500/30">
            Book My Audit <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
