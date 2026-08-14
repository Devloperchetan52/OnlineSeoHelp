
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { 
  ArrowLeftIcon, 
  BookmarkIcon, 
  ShareIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  DevicePhoneMobileIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-2xl font-black">Article not found.</h1>
        <Link to="/blog" className="text-[#7f1bff] mt-4 inline-block font-bold underline">Back to blog insights</Link>
      </div>
    );
  }

  const relatedResources = BLOG_POSTS.filter(p => p.id !== id).slice(0, 10);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Hero - Dark Indigo/Purple Style */}
      <section className="bg-[#1a0b3d] pt-48 pb-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="max-w-3xl">
              {/* Breadcrumbs */}
              <nav className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
                <Link to="/blog" className="hover:text-white transition-colors">SEO</Link>
                <ChevronRightIcon className="w-2.5 h-2.5" />
                <span>{post.category}</span>
              </nav>

              <h1 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter text-[#00f2ff]">
                {post.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-10 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7f1bff] flex items-center justify-center font-bold text-xs">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400">Written by</p>
                    <p className="font-bold text-white">{post.author}</p>
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-white/10 hidden sm:block"></div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">Last Updated</p>
                  <p className="font-bold text-white">August 18, 2025</p>
                </div>
              </div>
            </div>

            {/* Right Side Floating Highlight Card */}
            <div className="lg:w-80 w-full">
              <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl shadow-black/20 transform lg:translate-y-10 border border-white/20">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="font-black text-xl tracking-tight leading-tight">Artificial Intelligence</h3>
                   <BookmarkIcon className="w-5 h-5 text-[#7f1bff]" />
                </div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                   Artificial intelligence (AI) is technology that uses machine processing to simulate human intelligence through a computer system.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Table of Contents & OmniSEO CTA */}
            <aside className="lg:w-64 flex-shrink-0 order-2 lg:order-1">
              <div className="sticky top-40 space-y-12">
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Table of Contents</h4>
                  <ul className="space-y-4 text-xs font-bold text-slate-500">
                    <li className="hover:text-[#7f1bff] transition-colors cursor-pointer">What is Artificial Intelligence?</li>
                    <li className="hover:text-[#7f1bff] transition-colors cursor-pointer">How Does Artificial Intelligence Impact SEO?</li>
                    <li className="hover:text-[#7f1bff] transition-colors cursor-pointer">The Future of SEO with AI Technology</li>
                  </ul>
                </div>

                {/* OmniSEO Visual CTA Card */}
                <div className="bg-[#1a0b3d] rounded-3xl p-8 text-white relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex gap-2 mb-6">
                      <MagnifyingGlassIcon className="w-4 h-4 text-[#00f2ff]" />
                      <ShareIcon className="w-4 h-4 text-orange-400" />
                      <SparklesIcon className="w-4 h-4 text-pink-400" />
                    </div>
                    <h5 className="text-lg font-black mb-4 leading-tight">Future-Proof Your SEO Strategy with <span className="text-[#00f2ff]">OmniSEO®</span></h5>
                    <p className="text-[10px] text-slate-400 font-medium mb-8 leading-relaxed">
                      Goodbye search engine optimization, hello search everywhere optimization.
                    </p>
                    <button className="w-full py-3 bg-[#7f1bff] hover:bg-[#6a15d9] transition-all rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-purple-500/20">
                      Discover OmniSEO®
                    </button>
                  </div>
                  {/* Decor */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            </aside>

            {/* Middle Column: Main Blog Body */}
            <main className="flex-grow max-w-3xl order-1 lg:order-2">
              <div className="prose prose-lg prose-slate max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                  className="blog-content-rich text-slate-700 font-medium leading-[1.8] space-y-8"
                />
              </div>

              {/* Author Bio Footer */}
              <div className="mt-20 pt-12 border-t border-slate-100 flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center font-black text-xl text-[#7f1bff] flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                   <h4 className="text-lg font-black text-slate-900 mb-2">{post.author}</h4>
                   <p className="text-sm text-slate-500 font-medium italic">Content Marketing Consultant & Growth Strategist at OnlineSEOHelp. Passionate about AI-driven performance marketing.</p>
                </div>
              </div>
            </main>

            {/* Right Column: Writers & Resources */}
            <aside className="lg:w-64 flex-shrink-0 order-3">
              <div className="sticky top-40 space-y-12">
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Writers</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="Author" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900">{post.author}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Growth Expert</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Related Resources</h4>
                  <ul className="space-y-4">
                    {relatedResources.map((res) => (
                      <li key={res.id}>
                        <Link to={`/blog/${res.id}`} className="text-xs font-bold text-slate-600 hover:text-[#7f1bff] transition-colors leading-relaxed">
                          {res.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Global Style Inject for Blog Content */}
      <style>{`
        .blog-content-rich h2 { color: #1a0b3d; font-size: 1.875rem; font-weight: 800; line-height: 1.2; margin-bottom: 2rem; letter-spacing: -0.025em; }
        .blog-content-rich h3 { color: #1a0b3d; font-size: 1.5rem; font-weight: 800; margin-top: 3rem; margin-bottom: 1rem; }
        .blog-content-rich h4 { color: #1a0b3d; font-size: 1.25rem; font-weight: 800; margin-top: 2rem; margin-bottom: 1rem; }
        .blog-content-rich p { margin-bottom: 1.5rem; }
        .blog-content-rich b, .blog-content-rich strong { font-weight: 800; color: #1a0b3d; }
      `}</style>
    </div>
  );
};

export default BlogDetail;
