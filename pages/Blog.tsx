
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BLOG_POSTS.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalPages = Math.ceil(BLOG_POSTS.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Expert SEO Insights</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Practical guides, case studies, and industry trends to help you navigate the ever-changing search landscape.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group">
                <Link to={`/blog/${post.id}`} className="block relative h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1 bg-[#7f1bff] text-white font-bold text-[10px] uppercase rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-slate-400 mb-4 gap-4 font-bold">
                    <span className="flex items-center">
                      <CalendarIcon className="w-3.5 h-3.5 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <UserIcon className="w-3.5 h-3.5 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                    <Link to={`/blog/${post.id}`} className="hover:text-[#7f1bff] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center text-[#7f1bff] font-bold text-sm group/btn">
                      Read Full Article 
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button 
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#7f1bff] transition-colors disabled:opacity-50"
                >
                  &laquo;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => paginate(num)}
                    className={`w-12 h-12 rounded-full font-bold flex items-center justify-center transition-all ${
                      currentPage === num 
                        ? 'bg-[#7f1bff] text-white shadow-lg shadow-purple-500/20' 
                        : 'border border-slate-200 text-slate-600 hover:bg-white hover:text-[#7f1bff]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button 
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#7f1bff] transition-colors disabled:opacity-50"
                >
                  &raquo;
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
