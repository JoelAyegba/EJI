import React, { useState, useMemo } from 'react';
import { newsArticles, type NewsArticle } from '../data/mockData';
import { Search, Calendar, User, Clock, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Seo } from '../components/Seo';
import { PAGE_SEO } from '../seoConfig';

export const InvestigativeHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Blog Post' | 'Financials' | 'Legal Digest'>('All');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-white py-20 font-sans">
      <Seo {...PAGE_SEO.newsroom} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl pb-8 border-b border-slate-100">
          <span className="text-advocacy-gold text-xs uppercase tracking-[0.25em] font-bold">EJI Publications</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
            Our Publications.
          </h1>
          <p className="text-slate-655 text-base sm:text-lg leading-relaxed font-sans font-light">
            Access our reports, audited financial updates, and academic legal digests analyzing justice delivery and civic rights across Nigeria.
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Categories */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            {(['All', 'Blog Post', 'Financials', 'Legal Digest'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-slate-950 border-slate-950 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-4 top-3 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search newsroom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
            />
          </div>

        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-50">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 border border-slate-200 text-[10px] text-advocacy-gold uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-slate-500 text-xs font-mono">
                    <span className="flex items-center space-x-1">
                      <User className="h-3 w-3 text-advocacy-gold" />
                      <span>{article.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-advocacy-gold" />
                      <span>{article.date}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-advocacy-gold transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-3 bg-white border border-slate-300 hover:border-slate-800 text-slate-705 hover:text-slate-900 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-slate-100 text-slate-600 hover:text-slate-900 p-2 rounded-full z-10 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover Image */}
              <div className="relative h-64 w-full bg-slate-50">
                <img 
                  src={selectedArticle.imageUrl} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-slate-950 text-white border border-slate-950/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {selectedArticle.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6 max-h-[50vh] overflow-y-auto">
                <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 border-b border-slate-100 pb-4">
                  <span>Author: {selectedArticle.author}</span>
                  <span>|</span>
                  <span>Date: {selectedArticle.date}</span>
                  <span>|</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-advocacy-gold" />
                    <span>{selectedArticle.readTime}</span>
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  {selectedArticle.title}
                </h3>

                <p className="text-slate-655 text-sm sm:text-base leading-relaxed font-sans font-light whitespace-pre-line">
                  {selectedArticle.content}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">EJI Press Release</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 bg-white border border-slate-300 hover:border-slate-800 text-slate-700 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close article
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
