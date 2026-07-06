import React, { useState } from 'react';
import { focusAreas, type FocusArea } from '../../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Eye, Film, Shield, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Eye,
  Film,
  Shield,
  FileText,
};

export const StrategicFocusAreas: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section style={{ backgroundColor: '#e3e4e6' }} className="py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-advocacy-gold font-sans text-xs uppercase tracking-[0.25em] font-bold">Strategic Pillars</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-3 mb-4 leading-tight">
            How We Work
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-sans">
            Our strategic focus areas coordinate resources across media channels, trial watch analytics, and courtrooms to guarantee civil freedoms.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area: FocusArea) => {
            const IconComponent = iconMap[area.iconName] || Scale;
            const isExpanded = expandedId === area.id;

            return (
              <motion.div
                key={area.id}
                layout
                className={`bg-white border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isExpanded 
                    ? 'border-advocacy-gold bg-slate-50 md:col-span-2 lg:col-span-2 shadow-2xl shadow-advocacy-gold/5' 
                    : 'border-slate-200 hover:border-slate-400'
                }`}
                onClick={() => toggleExpand(area.id)}
              >
                {/* Background Glow */}
                {isExpanded && (
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-advocacy-gold/5 rounded-full blur-3xl"></div>
                )}
                
                <div className="space-y-6">
                  {/* Card Top */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-slate-100 border border-slate-100 rounded-2xl text-justice-blue group-hover:bg-justice-blue group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-justice-blue transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-sans mt-3">
                      {area.shortDesc}
                    </p>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-slate-200 pt-6 mt-6 space-y-6"
                        onClick={(e) => e.stopPropagation()} // Prevent card closing when clicking interior details
                      >
                        <p className="text-slate-650 text-sm leading-relaxed">
                          {area.longDesc}
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-slate-800 text-xs uppercase tracking-wider font-bold">Pillar Impact Metrics:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {area.impactMetrics.map((metric, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-advocacy-gold shrink-0"></span>
                                <span>{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Toggle Indicator */}
                <div className="flex justify-end pt-6 border-t border-slate-100 mt-6">
                  <div className="text-slate-500 group-hover:text-advocacy-gold transition-colors duration-300">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <div className="flex items-center space-x-1 text-xs">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Expand details</span>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
