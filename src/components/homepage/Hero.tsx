import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, UserPlus } from 'lucide-react';

interface Slide {
  pillar: string;
  image: string;
  title: React.ReactNode;
  insight: string;
}

const slides: Slide[] = [
  {
    pillar: 'Law',
    image: '/law.jpg',
    title: (
      <>
        Justice Beyond <span className="text-advocacy-gold">Courtrooms.</span>
      </>
    ),
    insight:
      'Strategic litigation and pro bono defense that turn constitutional rights into lived reality for those the system leaves behind.',
  },
  {
    pillar: 'Media',
    image: '/media.jpg',
    title: (
      <>
        Truth That Holds <span className="text-advocacy-gold">Power to Account.</span>
      </>
    ),
    insight:
      'Investigative journalism and documentary storytelling that expose abuse, dismantle impunity, and amplify the voices too often silenced.',
  },
  {
    pillar: 'Social Accountability',
    image: '/social.jpg',
    title: (
      <>
        Communities at the <span className="text-advocacy-gold">Heart of Change.</span>
      </>
    ),
    insight:
      'Grassroots organizing and civic oversight that put power back in the hands of citizens and strengthen democracy across Africa.',
  },
];

const SLIDE_DURATION = 6500;

export const Hero: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [active]);

  const current = slides[active];

  return (
    <section className="relative min-h-[92svh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: SLIDE_DURATION / 1000 + 1, ease: 'linear' } }}
            className="absolute inset-0"
          >
            <img
              src={current.image}
              alt={`${current.pillar} — Equal Justice Initiative`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 pb-24">
        <div className="max-w-3xl">
          {/* Animated text per slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
                {current.title}
              </h1>

              <p className="font-sans text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
                {current.insight}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-10">
            <Link
              to="/pro-bono"
              className="flex items-center justify-center space-x-2 px-8 py-4 border border-action-red bg-action-red/10 text-white font-semibold rounded-full uppercase tracking-wider text-sm transition-all duration-300 hover:bg-action-red cursor-pointer"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Report Abuse</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center space-x-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full uppercase tracking-wider text-sm transition-all duration-300 hover:border-white hover:bg-white/10 cursor-pointer"
            >
              <UserPlus className="h-4 w-4" />
              <span>Become a Volunteer</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
