import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { teamMembers } from '../data/mockData';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { PAGE_SEO } from '../seoConfig';

const getInitials = (name: string) =>
  name
    .replace(/,?\s*Esq\.?/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

export const Team: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const id = hash.replace(/^#/, '');
    if (!id) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="font-sans">
      <Seo {...PAGE_SEO.team} />

      {/* Leadership Hero */}
      <section className="relative h-[60vh] min-h-[460px] flex items-center overflow-hidden bg-slate-950">
        <img
          src="/social.jpg"
          alt="EJI leadership and advocacy"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
        >
          <span className="text-advocacy-gold text-xs uppercase tracking-[0.25em] font-bold">Our Leadership</span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4 leading-[1.05] max-w-3xl">
            The People Behind <br />
            <span className="text-advocacy-gold">the Mission.</span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl font-light mt-6 max-w-2xl leading-relaxed">
            A dedicated, interdisciplinary team of lawyers, journalists, and policy analysts working at the crossroads of Law, Media, and Social Accountability.
          </p>
        </motion.div>
      </section>

      <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Leadership Profiles */}
        <div className="space-y-20 lg:space-y-28">
          {teamMembers.map((member, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <motion.div
                key={member.id}
                id={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start scroll-mt-28"
              >
                {/* Portrait */}
                <div className={`lg:col-span-4 ${reversed ? 'lg:order-2' : ''}`}>
                  <div className="lg:sticky lg:top-28">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                      {member.imageUrl ? (
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center px-4">
                          <span className="font-serif font-bold text-5xl text-advocacy-gold">{getInitials(member.name)}</span>
                          <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-3">Photo coming soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className={`lg:col-span-8 ${reversed ? 'lg:order-1' : ''}`}>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {member.name}
                  </h2>
                  <p className="text-advocacy-gold text-sm font-bold uppercase tracking-wider mt-1.5">
                    {member.role}
                  </p>
                  <p className="text-slate-500 italic text-sm mt-2">{member.tagline}</p>

                  <div className="mt-6 space-y-4">
                    {member.bio.map((para, i) => (
                      <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
      </div>
    </div>
  );
};
