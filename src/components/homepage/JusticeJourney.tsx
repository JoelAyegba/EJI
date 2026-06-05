import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search, Megaphone, Scale, CheckCircle, ArrowRight } from 'lucide-react';

interface JourneyStep {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  example: string;
  metrics: string;
}

export const JusticeJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: JourneyStep[] = [
    {
      id: 1,
      title: 'Report Abuse',
      subtitle: 'Citizen Submission',
      icon: <FileText className="h-6 w-6" />,
      description: 'A victim, family member, or whistleblower submits details of an unlawful detention, extortion incident, or rights violation through EJI\'s secure web form or hotline.',
      example: 'A relative submits details of a young driver held for three weeks in a local cell without charges or access to phone calls.',
      metrics: 'Average response: < 24 hours'
    },
    {
      id: 2,
      title: 'Investigation',
      subtitle: 'Verification & Audits',
      icon: <Search className="h-6 w-6" />,
      description: 'EJI\'s legal experts audit the court files while our investigative journalists verify statements, cross-reference detention logs, and compile evidence.',
      example: 'Court monitoring observers locate the specific case file and confirm the magistrate lack of jurisdiction to hold the citizen.',
      metrics: 'Verifications completed: 92%'
    },
    {
      id: 3,
      title: 'Media Exposure',
      subtitle: 'Shining a Light',
      icon: <Megaphone className="h-6 w-6" />,
      description: 'Once verified, the case is published as an investigative expose or featured in a video documentary, generating community focus and civic accountability.',
      example: 'A mini-documentary detailing the illegal holding is released, garnering 250,000 views and triggering a judicial panel inquiry.',
      metrics: 'Direct public reach: 15M+'
    },
    {
      id: 4,
      title: 'Legal Representation',
      subtitle: 'Courtroom Action',
      icon: <Scale className="h-6 w-6" />,
      description: 'EJI pro bono lawyers file bail applications, initiate habeas corpus proceedings, or file formal constitutional petitions directly on behalf of the victim.',
      example: 'An EJI human rights attorney files an emergency motion in Lagos High Court demanding the immediate release of the citizen.',
      metrics: 'Active pro-bono network: 200+ lawyers'
    },
    {
      id: 5,
      title: 'Justice Achieved',
      subtitle: 'Tangible Resolution',
      icon: <CheckCircle className="h-6 w-6" />,
      description: 'The detainee is released, illegal charges are quashed, victims are rehabilitated, or corrupt actors are held accountable by judicial authorities.',
      example: 'The High Court orders immediate release, awards damages for illegal detention, and transfers the corrupt magistrate to an audit review.',
      metrics: 'Citizens freed: 3,420+'
    }
  ];

  return (
    <section style={{ backgroundColor: '#001a1b' }} className="relative py-24 border-t border-white/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-advocacy-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-justice-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-advocacy-gold font-sans text-xs uppercase tracking-[0.25em] font-bold">The Advocacy Pipeline</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            The Justice Journey
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-sans">
            How we translate citizen reports into tangible systemic outcomes. Click each stage to trace the workflow.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Stepper Navigation */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-none">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 shrink-0 w-36 lg:w-full cursor-pointer ${
                    isActive
                      ? 'bg-advocacy-gold/10 border-advocacy-gold shadow-lg shadow-advocacy-gold/20'
                      : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-advocacy-gold text-slate-900'
                      : 'bg-white/10 border border-white/10 text-slate-300'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Stage 0{step.id}</span>
                    <h3 className={`font-sans font-bold text-sm tracking-wide transition-colors ${
                      isActive ? 'text-white' : 'text-slate-200'
                    }`}>
                      {step.title}
                    </h3>
                    <span className="text-[10px] text-slate-400 hidden lg:block mt-0.5">{step.subtitle}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stepper Content Spotlight */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
              >

                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-advocacy-gold/10 rounded-full blur-3xl"></div>

                <div className="space-y-6">
                  {/* Step Stage Badge */}
                  <div className="flex items-center space-x-2 text-advocacy-gold font-mono text-xs uppercase tracking-widest font-bold">
                    <span>Stage 0{steps[activeStep].id}</span>
                    <span>&bull;</span>
                    <span>{steps[activeStep].subtitle}</span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {steps[activeStep].title}
                  </h3>

                  {/* Core Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                    {steps[activeStep].description}
                  </p>

                  {/* Real-world Example Box */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-2">
                    <h4 className="text-slate-200 text-xs uppercase tracking-widest font-bold font-sans">
                      Case File Walkthrough:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed italic">
                      "{steps[activeStep].example}"
                    </p>
                  </div>

                  {/* Pipeline Performance Metrics */}
                  <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                    <span className="font-mono">Metric: {steps[activeStep].metrics}</span>
                    {activeStep < steps.length - 1 ? (
                      <button
                        onClick={() => setActiveStep(activeStep + 1)}
                        className="inline-flex items-center space-x-1 text-advocacy-gold hover:text-white transition-colors cursor-pointer"
                      >
                        <span>Next Stage</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    ) : (
                      <span className="text-emerald-500 font-bold uppercase tracking-wider">Pipeline complete</span>
                    )}
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
