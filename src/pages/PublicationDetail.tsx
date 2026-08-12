import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { newsArticles } from '../data/mockData';
import { Clock, ArrowLeft } from 'lucide-react';
import { Seo } from '../components/Seo';

export const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/newsroom" replace />;
  }

  return (
    <div className="bg-white py-20 font-sans min-h-screen">
      <Seo 
        title={`${article.title} | Equal Justice Initiative`} 
        description={article.excerpt}
        path={`/newsroom/${article.id}`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back button */}
        <Link 
          to="/newsroom" 
          className="inline-flex items-center space-x-2 text-slate-500 hover:text-advocacy-gold transition-colors text-sm font-bold uppercase tracking-wider"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Newsroom</span>
        </Link>

        {/* Header section */}
        <div className="space-y-6">
          <span className="bg-slate-950 text-white border border-slate-950/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block">
            {article.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 border-b border-slate-100 pb-6">
            <span>Author: {article.author}</span>
            <span>|</span>
            <span>Date: {article.date}</span>
            <span>|</span>
            <span className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-advocacy-gold" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-50">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Body - Applied text-justify here */}
        <div className="max-w-3xl mx-auto text-justify">
          {article.contentHTML ? (
            <div
              className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans font-light [&>p]:mb-6 [&>h4]:mt-12 [&>h4]:mb-6"
              dangerouslySetInnerHTML={{ __html: article.contentHTML }}
            />
          ) : (
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans font-light whitespace-pre-line">
              {article.content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
