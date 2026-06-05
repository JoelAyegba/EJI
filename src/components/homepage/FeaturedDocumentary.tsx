import React, { useState } from 'react';
import { documentaries } from '../../data/mockData';
import { useNavigation } from '../../context/NavigationContext';
import { Play, Calendar, Clock, Film, X, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FeaturedDocumentary: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const featuredDoc = documentaries.find(doc => doc.featured) || documentaries[0];

  return (
    <section className="relative bg-white py-24 border-t border-slate-100 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-justice-blue/2 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-advocacy-gold font-sans text-xs uppercase tracking-[0.25em] font-bold">Investigative Film Showcase</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-3 mb-4 leading-tight">
            Cinematic Accountability
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-sans">
            We document real injustices. Our award-winning documentary division films what happens behind high prison walls and checkpoints.
          </p>
        </div>

        {/* Cinematic Display Card */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            
            {/* Film Poster Column */}
            <div className="lg:col-span-5 relative group overflow-hidden">
              <img 
                src={featuredDoc.posterUrl} 
                alt={featuredDoc.title}
                className="w-full h-[320px] sm:h-[450px] lg:h-[550px] object-cover object-center group-hover:scale-102 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-action-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                Featured Release
              </div>
            </div>

            {/* Film Metadata & Description Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
              
              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center space-x-1.5">
                  <Calendar className="h-3.5 w-3.5 text-advocacy-gold" />
                  <span>{featuredDoc.year}</span>
                </span>
                <span className="h-3.5 w-[1px] bg-slate-200"></span>
                <span className="flex items-center space-x-1.5">
                  <Clock className="h-3.5 w-3.5 text-advocacy-gold" />
                  <span>{featuredDoc.duration}</span>
                </span>
                <span className="h-3.5 w-[1px] bg-slate-200"></span>
                <span className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-800 text-[10px]">
                  {featuredDoc.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {featuredDoc.title}
              </h3>

              {/* Description */}
              <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-sans font-light">
                {featuredDoc.description}
              </p>

              {/* Impact Achieved Section */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
                <div className="flex items-center space-x-2 text-advocacy-gold">
                  <Award className="h-4 w-4 shrink-0" />
                  <span className="text-xs uppercase tracking-widest font-bold font-sans">Tangible Impact Achieved:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-650 font-sans leading-relaxed italic">
                  "{featuredDoc.impactAchieved}"
                </p>
              </div>

              {/* Play & Library Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-advocacy-gold text-slate-900 font-semibold rounded-full uppercase tracking-wider text-xs transition-colors duration-300 hover:bg-slate-950 hover:text-white cursor-pointer shadow-lg shadow-advocacy-gold/10"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span>Watch Trailer</span>
                </button>

                <button
                  onClick={() => navigateTo('documentaries')}
                  className="flex items-center justify-center space-x-2 px-6 py-3.5 border border-slate-350 hover:border-slate-800 text-slate-700 font-semibold rounded-full uppercase tracking-wider text-xs transition-colors duration-300 hover:bg-slate-50 cursor-pointer"
                >
                  <Film className="h-4 w-4" />
                  <span>Explore Documentary Library</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-slate-100 text-slate-600 hover:text-slate-900 p-2 rounded-full z-10 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Video Player aspect-video */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src={featuredDoc.videoUrl}
                  title="Documentary Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Modal Footer Info */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-slate-900 font-serif font-bold text-lg">{featuredDoc.title}</h4>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">Category: {featuredDoc.category} | Release: {featuredDoc.year}</p>
                </div>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    navigateTo('documentaries');
                  }}
                  className="text-xs text-advocacy-gold hover:text-slate-900 font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View Outcomes
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
