import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Film, Heart } from 'lucide-react';

interface StatProps {
  label: string;
  target: number;
  suffix: string;
  icon: React.ReactNode;
  description: string;
  delayMs?: number;
  staticValue?: string;
}

const AnimatedCounter: React.FC<StatProps> = ({ label, target, suffix, icon, description, delayMs = 0, staticValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (staticValue) return;
    let start = 0;
    const end = target;
    if (start === end) return;

    const duration = 2000; // 2 seconds animation
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += Math.ceil(end / 40); // increment steps
        if (start >= end) {
          clearInterval(interval);
          setCount(end);
        } else {
          setCount(start);
        }
      }, Math.max(stepTime, 20));
      return () => clearInterval(interval);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [target, delayMs, staticValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delayMs / 1000 }}
      className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-advocacy-gold/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-advocacy-gold/5"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-justice-blue/10 border border-slate-100 rounded-xl text-justice-blue group-hover:bg-justice-blue group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-advocacy-gold transition-colors duration-300"></div>
      </div>
      <div>
        <p className="text-slate-500 font-sans text-xs uppercase tracking-widest font-semibold mb-2">{label}</p>
        <h3 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-2 flex items-baseline">
          {staticValue ? (
            <span>{staticValue}</span>
          ) : (
            <>
              <span>{count.toLocaleString()}</span>
              <span className="text-advocacy-gold ml-0.5">{suffix}</span>
            </>
          )}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed font-sans mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export const ImpactStats: React.FC = () => {
  const statsList = [
    {
      label: 'Legal Representation',
      target: 8,
      suffix: '',
      icon: <Shield className="h-6 w-6" />,
      description: 'Individuals provided with direct legal representation through our pro bono network and strategic litigation.',
      delayMs: 100,
    },
    {
      label: 'Legal Advice',
      target: 4,
      suffix: '',
      icon: <Eye className="h-6 w-6" />,
      description: 'Citizens guided through legal processes and rights awareness via direct consultations and counselling sessions.',
      delayMs: 200,
    },
    {
      label: 'Advocacy',
      target: 1,
      suffix: '',
      icon: <Heart className="h-6 w-6" />,
      description: 'Targeted advocacy intervention advancing systemic policy change and institutional accountability.',
      delayMs: 300,
    },
    {
      label: 'Support',
      target: 5,
      suffix: '',
      icon: <Shield className="h-6 w-6" />,
      description: 'Individuals supported through psychosocial, community, and ancillary justice services.',
      delayMs: 400,
    },
    {
      label: 'Media Publications',
      target: 2,
      suffix: '',
      icon: <Film className="h-6 w-6" />,
      description: 'Published reports and media pieces amplifying justice issues and driving public accountability.',
      delayMs: 500,
    },
  ];

  return (
    <section className="relative bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-advocacy-gold font-sans text-xs uppercase tracking-[0.25em] font-bold">Credibility & Scope</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-3 mb-4 leading-tight">
            Our Impact in Metrics
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-sans">
            Through strategic litigation and media spotlighting, we translate legal rights from paper regulations into concrete freedom.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {statsList.map((stat, idx) => (
            <AnimatedCounter key={idx} {...stat} />
          ))}
        </div>

      </div>
    </section>
  );
};
