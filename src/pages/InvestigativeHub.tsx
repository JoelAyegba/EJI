import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/mockData';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { PAGE_SEO } from '../seoConfig';

export const InvestigativeHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const CATEGORIES = [
    'All',
    'Blog posts',
    'ACJA Oversight',
    'News/ Press Releases',
    'Investigations',
    'Trial Watch',
    'YEARLY REPORTS (FOR OUR ANNUAL FINANCIAL REPORT / ANNUAL IMPACT REPORT)'
  ];

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
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap flex-shrink-0 ${activeCategory === cat
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
                <Link
                  to={`/newsroom/${article.id}`}
                  className="w-full py-3 bg-white border border-slate-300 hover:border-slate-800 text-slate-705 hover:text-slate-900 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </motion.article>
          ))}
        </div>

      </div>

    </div>
  );
};
