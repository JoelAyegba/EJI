import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { motion } from 'framer-motion';
import { Scale, FileText, Search, ShieldAlert, Video, Heart } from 'lucide-react';

interface VolunteerPath {
  title: string;
  role: string;
  icon: React.ReactNode;
  description: string;
  actionText: string;
}

export const VolunteerNetwork: React.FC = () => {
  const { navigateTo } = useNavigation();

  const paths: VolunteerPath[] = [
    {
      title: 'For Attorneys',
      role: 'Pro Bono Legal Network',
      icon: <Scale className="h-5 w-5" />,
      description: 'Join our network of over 200 pro bono lawyers defending unlawfully detained indigent citizens, auditing court cases, and driving bail reform campaigns.',
      actionText: 'Register as Counsel'
    },
    {
      title: 'For Journalists',
      role: 'Investigative Newsroom',
      icon: <FileText className="h-5 w-5" />,
      description: 'Partner with EJI to conduct undercover investigations, check state correctional facilities, write briefs, and expose local checkpoint corruption.',
      actionText: 'Apply to Newsroom'
    },
    {
      title: 'For Researchers',
      role: 'Judicial Transparency audits',
      icon: <Search className="h-5 w-5" />,
      description: 'Audit courtroom sessions, analyze trial watch reports, compile transparency indices, and draft legislative policy recommendation briefs.',
      actionText: 'Join Research Team'
    },
    {
      title: 'For Civic Advocates',
      role: 'Community Activism',
      icon: <ShieldAlert className="h-5 w-5" />,
      description: 'Lead child rights campaigns, support gender equality forums, monitor municipal funds, and coordinate legal clinics in rural communities.',
      actionText: 'Register as Advocate'
    },
    {
      title: 'For Content Creators',
      role: 'Visual Storytelling division',
      icon: <Video className="h-5 w-5" />,
      description: 'Help EJI film human interest testimonials, design infographics for transparency indexes, edit mini-documentaries, and manage digital campaigns.',
      actionText: 'Join Creative Crew'
    }
  ];

  return (
    <section className="bg-white py-24 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-r from-justice-blue/5 via-slate-50 to-white border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-16 mb-16 relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl">
          <div className="absolute -left-12 -top-12 w-48 h-48 bg-advocacy-gold/5 rounded-full blur-3xl"></div>
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <span className="text-advocacy-gold font-sans text-xs uppercase tracking-[0.25em] font-bold">Mobilizing Action</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Stand for Justice. <br />
              Become a Catalyst.
            </h2>
            <p className="text-slate-650 text-base font-sans font-light leading-relaxed">
              Legal rights mean nothing if they aren't defended. EJI invites lawyers, journalists, analysts, and content creators to combine forces. Leverage your professional skill set to protect lives.
            </p>
          </div>

          <div className="shrink-0 text-center lg:text-right">
            <button
              onClick={() => navigateTo('contact', { tab: 'volunteer' })}
              className="flex items-center space-x-2 px-8 py-4 bg-slate-950 hover:bg-slate-800 text-white font-semibold rounded-full uppercase tracking-wider text-xs transition-colors duration-300 shadow-lg shadow-slate-950/10 cursor-pointer mx-auto"
            >
              <Heart className="h-4 w-4 fill-current animate-pulse text-action-red" />
              <span>Join EJI Network Now</span>
            </button>
            <p className="text-[10px] text-slate-500 font-sans mt-3">No entry fees. Full training & legal indemnity provided.</p>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-450 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-100 border border-slate-100 rounded-xl text-justice-blue w-fit group-hover:bg-justice-blue group-hover:text-white transition-colors duration-350">
                  {path.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block">{path.role}</span>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-justice-blue transition-colors duration-300 mt-1">
                    {path.title}
                  </h3>
                </div>
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-sans font-light">
                  {path.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => navigateTo('contact', { tab: 'volunteer', role: path.title })}
                  className="w-full text-center py-2.5 bg-white border border-slate-250 hover:border-slate-800 hover:bg-slate-50 text-slate-750 hover:text-slate-900 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-250 cursor-pointer"
                >
                  {path.actionText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
