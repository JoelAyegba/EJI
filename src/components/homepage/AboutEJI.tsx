import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Film, ShieldAlert, Award } from 'lucide-react';

type SectionType = 'law' | 'media' | 'accountability' | 'intersection';

export const AboutEJI: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('intersection');

  const contentMap: Record<SectionType, { title: string; icon: React.ReactNode; desc: string; bullets: string[] }> = {
    law: {
      title: 'Legal Advocacy & Pro Bono Aid',
      icon: <Scale className="h-6 w-6 text-advocacy-gold" />,
      desc: 'Our legal desk represents unlawfully detained citizens, challenges unconstitutional detention practices, and campaigns for systemic judicial bail reforms.',
      bullets: [
        'Over 200 volunteer lawyers across 12 states.',
        'Direct representation for victims of Gender-Based Violence (GBV).',
        'Filing strategic appeals to establish landmark human rights precedents.'
      ]
    },
    media: {
      title: 'Investigative Media & Storytelling',
      icon: <Film className="h-6 w-6 text-advocacy-gold" />,
      desc: 'We use documentaries and investigative reporting to document real stories, putting faces to judicial delays and capturing systemic exploitation on camera.',
      bullets: [
        'In-depth video exposés on prison overcrowding and police extortion.',
        'Interactive newsroom showcasing raw courtroom audit logs.',
        'Cinematic documentaries triggering national human rights debates.'
      ]
    },
    accountability: {
      title: 'Social Accountability & Trial Watch',
      icon: <ShieldAlert className="h-6 w-6 text-advocacy-gold" />,
      desc: 'We audit the courts to ensure transparency. By tracking session delays and judges behavior, we publish civic audits that push back on backroom deals.',
      bullets: [
        'Courtroom observers audit daily proceedings in major litigation.',
        'Publishing the weekly Trial Transparency Index scorecard.',
        'Equipping citizens with channels to report corruption and bribe demands.'
      ]
    },
    intersection: {
      title: 'The Intersection: Equal Justice Initiative',
      icon: <Award className="h-6 w-6 text-advocacy-gold animate-pulse" />,
      desc: 'EJI operates where Law, Media, and Social Accountability meet. Exposing corruption (Media) and auditing court delays (Accountability) is paired directly with free courtroom representation (Law) to secure concrete freedom.',
      bullets: [
        'A comprehensive human rights shield combining reporting and actions.',
        'Proven record of securing bail, policy reviews, and asset recoveries.',
        'Building Africa’s premier model for collaborative civic tech legal hubs.'
      ]
    }
  };

  const activeContent = contentMap[activeSection];

  return (
    <section style={{ backgroundColor: '#001a1b' }} className="relative py-24 border-t border-white/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-advocacy-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-justice-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-advocacy-gold font-sans text-xs uppercase tracking-[0.25em] font-bold">About EJI</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            Africa's Premier Civic Justice Hub
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-sans">
            EJI is not just a legal aid clinic or a media house. We are a multidisciplinary advocacy machine operating at the crossroads of three core pillars.
          </p>
        </div>

        {/* Interactive Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Interactive Venn Diagram */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] select-none">
              
              {/* Pillar 1: Law (Top Circle) */}
              <button 
                onClick={() => setActiveSection('law')}
                onMouseEnter={() => setActiveSection('law')}
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-60 sm:h-60 rounded-full flex items-center justify-center border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                  activeSection === 'law'
                    ? 'bg-advocacy-gold/10 border-advocacy-gold scale-105 z-20 shadow-lg shadow-advocacy-gold/20'
                    : 'bg-white/5 border-white/10 hover:border-white/30 z-10'
                }`}
              >
                <div className="text-center pt-2">
                  <Scale className="h-6 w-6 text-advocacy-gold mx-auto mb-1.5" />
                  <span className="block font-sans font-bold text-sm uppercase tracking-wider text-white">Law</span>
                  <span className="text-[10px] text-slate-400">Pro Bono Advocacy</span>
                </div>
              </button>

              {/* Pillar 2: Media (Bottom Left Circle) */}
              <button 
                onClick={() => setActiveSection('media')}
                onMouseEnter={() => setActiveSection('media')}
                className={`absolute bottom-0 left-0 w-48 h-48 sm:w-60 sm:h-60 rounded-full flex items-center justify-center border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                  activeSection === 'media'
                    ? 'bg-advocacy-gold/10 border-advocacy-gold scale-105 z-20 shadow-lg shadow-advocacy-gold/20'
                    : 'bg-white/5 border-white/10 hover:border-white/30 z-10'
                }`}
              >
                <div className="text-center pr-2">
                  <Film className="h-6 w-6 text-advocacy-gold mx-auto mb-1.5" />
                  <span className="block font-sans font-bold text-sm uppercase tracking-wider text-white">Media</span>
                  <span className="text-[10px] text-slate-400">Documentary Hub</span>
                </div>
              </button>

              {/* Pillar 3: Social Accountability (Bottom Right Circle) */}
              <button 
                onClick={() => setActiveSection('accountability')}
                onMouseEnter={() => setActiveSection('accountability')}
                className={`absolute bottom-0 right-0 w-48 h-48 sm:w-60 sm:h-60 rounded-full flex items-center justify-center border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                  activeSection === 'accountability'
                    ? 'bg-advocacy-gold/10 border-advocacy-gold scale-105 z-20 shadow-lg shadow-advocacy-gold/20'
                    : 'bg-white/5 border-white/10 hover:border-white/30 z-10'
                }`}
              >
                <div className="text-center pl-2">
                  <ShieldAlert className="h-6 w-6 text-advocacy-gold mx-auto mb-1.5" />
                  <span className="block font-sans font-bold text-sm uppercase tracking-wider text-white">Accountability</span>
                  <span className="text-[10px] text-slate-400">Trial Watch audits</span>
                </div>
              </button>

              {/* Center Core: Intersection */}
              <button 
                onClick={() => setActiveSection('intersection')}
                onMouseEnter={() => setActiveSection('intersection')}
                style={{ backgroundColor: '#003334' }}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer z-30 ${
                  activeSection === 'intersection'
                    ? 'border-advocacy-gold scale-110 shadow-lg shadow-advocacy-gold/40'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <div className="text-center">
                  <span className="block font-serif font-black text-lg tracking-wider text-advocacy-gold">EJI</span>
                  <span className="text-[8px] uppercase tracking-widest text-slate-300">Hub Core</span>
                </div>
              </button>

            </div>

            <p className="text-xs text-slate-400 font-sans mt-8 uppercase tracking-widest">
              Hover or click elements of the diagram to discover functions
            </p>
          </div>

          {/* Right Side: Information Panels */}
          <div className="lg:col-span-6">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Highlight Background Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-advocacy-gold/10 rounded-full blur-3xl"></div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white/10 border border-white/10 rounded-xl">
                  {activeContent.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                  {activeContent.title}
                </h3>
              </div>

              <p className="text-slate-300 text-base leading-relaxed font-sans mb-8">
                {activeContent.desc}
              </p>

              <ul className="space-y-4">
                {activeContent.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-advocacy-gold shrink-0 mt-2"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
