import React, { useState } from 'react';
import { impactStories, type ImpactStory } from '../../data/mockData';
import { useNavigation } from '../../context/NavigationContext';
import { MapPin, Calendar, ArrowRight, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ImpactStories: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedStory, setSelectedStory] = useState<ImpactStory | null>(null);

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-advocacy-gold font-sans text-xs uppercase tracking-[0.25em] font-bold">Stories of Change</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-3 mb-4 leading-tight">
              Humanizing Justice
            </h2>
            <p className="text-slate-650 text-base sm:text-lg font-sans">
              Behind every metric is a human being. Read how EJI's legal networks and investigative teams fought to rescue children, secure freedom, and enforce trial transparency.
            </p>
          </div>
          <div>
            <button
              onClick={() => navigateTo('impact')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-950 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              <span>View Full Impact Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactStories.map((story: ImpactStory) => (
            <motion.article 
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-justice-blue/90 border border-advocacy-gold/20 text-advocacy-gold text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {story.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Metadata */}
                  <div className="flex items-center space-x-4 text-slate-500 text-xs font-mono">
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-3.5 w-3.5 text-advocacy-gold" />
                      <span>{story.location}</span>
                    </span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5 text-advocacy-gold" />
                      <span>{story.date}</span>
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-justice-blue transition-colors duration-300">
                    {story.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-light line-clamp-3">
                    {story.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-8 pb-8 pt-2">
                <button
                  onClick={() => setSelectedStory(story)}
                  className="w-full text-center py-3 border border-slate-250 group-hover:border-slate-800 group-hover:bg-slate-50 text-slate-700 group-hover:text-slate-900 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer"
                >
                  Read Full Case Study
                </button>
              </div>

            </motion.article>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-slate-100 text-slate-655 hover:text-slate-900 p-2 rounded-full z-10 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Cover Image */}
              <div className="relative h-60 w-full bg-slate-100">
                <img 
                  src={selectedStory.imageUrl} 
                  alt={selectedStory.title} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-action-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {selectedStory.category}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 space-y-6 max-h-[50vh] overflow-y-auto">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-xs font-mono text-slate-500">
                  <span>Location: {selectedStory.location}</span>
                  <span>|</span>
                  <span>Date: {selectedStory.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  {selectedStory.title}
                </h3>

                {/* Narrative text */}
                <p className="text-slate-650 text-sm leading-relaxed font-sans font-light whitespace-pre-line">
                  {selectedStory.fullStory}
                </p>

                {/* Highlights block */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <div className="flex items-center space-x-2 text-advocacy-gold font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="h-4 w-4 text-advocacy-gold animate-pulse" />
                    <span>Resolution Summary:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {selectedStory.impactText}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Equal Justice Case File</span>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close File
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
