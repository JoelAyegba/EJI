import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Compass,
  ShieldCheck,
  Lightbulb,
  Flame,
  Heart,
  BadgeCheck,
  Users,
  Eye,
  Film,
  Scale,
  Search,
  Mic,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/mockData';
import { Seo } from '../components/Seo';
import { PAGE_SEO } from '../seoConfig';

const coreValues = [
  {
    title: 'Accountability',
    icon: ShieldCheck,
    desc: 'We hold power to account through rigorous investigative reporting and trial monitoring.',
  },
  {
    title: 'Innovation',
    icon: Lightbulb,
    desc: 'As a civic tech hub, we continuously seek digital solutions to bridge the justice gap.',
  },
  {
    title: 'Courage',
    icon: Flame,
    desc: 'We fearlessly pursue truth and justice, even in the face of adversity.',
  },
  {
    title: 'Empathy',
    icon: Heart,
    desc: 'We approach every case and story with the understanding that behind every file is a human life.',
  },
  {
    title: 'Integrity',
    icon: BadgeCheck,
    desc: 'We adhere to the highest ethical standards in legal practice and journalism.',
  },
];

const focusAreas = [
  {
    title: 'Gender Equality',
    icon: Users,
    desc: 'Protecting women and children from abuse, harmful practices, and neglect. Through solution-based advocacy and media campaigns, we drive enforcement of the Child’s Rights Act and fight gender-based violence.',
  },
  {
    title: 'Trial Watch',
    icon: Eye,
    desc: 'Monitoring court proceedings and reporting our findings to ensure transparency and fairness — stepping in for suspects arraigned without counsel, deterring judicial corruption, and keeping the system accountable.',
  },
  {
    title: 'Documentaries',
    icon: Film,
    desc: 'Harnessing the power of visual storytelling to document human rights violations — evidence of injustice that doubles as a powerful tool for advocacy and public education.',
  },
  {
    title: 'Pro Bono Services',
    icon: Scale,
    desc: 'Bridging the representation gap by connecting volunteer lawyers with indigent defendants and victims of rights violations, ensuring justice is never a commodity for the rich.',
  },
  {
    title: 'Investigative Reporting',
    icon: Search,
    desc: 'Using data and field investigation to uncover systemic corruption, human rights abuses, and environmental injustices — publishing our findings to drive policy reform.',
  },
  {
    title: 'Behind the Bars',
    icon: Mic,
    desc: 'A platform for incarcerated persons and ex-offenders to share their lived experiences in their own voices — challenging stigma and fostering conversations on reintegration and human dignity.',
  },
];

export const About: React.FC = () => {
  const [activeMember, setActiveMember] = useState<string | null>(null);

  // Display order: place Bernard (Executive Director) first.
  const orderedTeam = (() => {
    const bernard = teamMembers.find((m) => m.id === 'bernard-oke');
    const rest = teamMembers.filter((m) => m.id !== 'bernard-oke');
    if (!bernard) return teamMembers;
    return [bernard, ...rest];
  })();

  const getInitials = (name: string) =>
    name
      .replace(/,?\s*Esq\.?/i, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  return (
    <div className="font-sans">
      <Seo {...PAGE_SEO.about} />

      {/* Static Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="/law.jpg"
          alt="Equal Justice Initiative advocacy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
        >
          <span className="text-advocacy-gold text-xs uppercase tracking-[0.25em] font-bold">Who We Are</span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4 leading-[1.05] max-w-3xl">
            Justice, Lived. <br />
            <span className="text-advocacy-gold">Not Just Argued.</span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl font-light mt-6 max-w-2xl leading-relaxed">
            Africa&rsquo;s premier civic hub at the crossroads of Law, Media, and Social Accountability.
          </p>
        </motion.div>
      </section>

      <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Editorial Intro — logo beside content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Logo */}
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/logo.jpeg"
              alt="Equal Justice Initiative logo"
              loading="lazy"
              decoding="async"
              className="w-full max-w-xl h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-6">
            <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-slate-500 border border-slate-200 rounded-full px-2.5 py-1 mb-6">
              RC 9299556 · Registered NGO
            </span>
            <p className="text-slate-600 text-lg leading-relaxed">
              The Equal Justice Initiative (EJI) is a registered Non-Governmental Organisation based in Nigeria, operating at the forefront of justice reform, advocacy, and social accountability to advance the Rule of Law. As Africa&rsquo;s premier non-governmental civic hub, we sit at the crossroads of <span className="text-slate-900 font-semibold">Law</span>, <span className="text-slate-900 font-semibold">Media</span>, and <span className="text-slate-900 font-semibold">Social Accountability</span>.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mt-4">
              We believe justice is not just a concept to be argued in courtrooms, but a reality to be lived in communities. So we deploy journalism to expose injustice, media platforms to amplify marginalised voices, and legal expertise to secure remedies &mdash; transforming abstract legal rights into tangible realities for the most vulnerable.
            </p>
          </div>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div style={{ backgroundColor: '#003334' }} className="p-8 sm:p-12 rounded-3xl space-y-4 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-advocacy-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative space-y-4">
              <div className="p-3 bg-white/10 border border-white/15 rounded-xl text-advocacy-gold w-fit">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">Our Vision</h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                To create an inclusive and equitable society where every voice is heard and justice is accessible to all without barriers.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#003334' }} className="p-8 sm:p-12 rounded-3xl space-y-4 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-advocacy-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative space-y-4">
              <div className="p-3 bg-white/10 border border-white/15 rounded-xl text-advocacy-gold w-fit">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">Our Mission</h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                To leverage the symbiotic power of Law, Media, and Social Accountability to drive social change, protect fundamental rights, promote justice, and expand access to legal services for underserved communities.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div style={{ backgroundColor: '#e3e4e6' }} className="relative left-1/2 -translate-x-1/2 w-screen py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">Our Core Values</h2>
            <p className="text-slate-550 text-base sm:text-lg mt-3">The principles that guide our legal representation, journalism, and advocacy.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`bg-white border border-slate-200 p-6 rounded-2xl space-y-3 ${
                    idx === coreValues.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-advocacy-gold" />
                    <span className="text-xs font-mono text-slate-400 font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="font-sans font-bold text-slate-900 text-base">{value.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="max-w-2xl">
              <span className="text-advocacy-gold text-xs uppercase tracking-[0.25em] font-bold">Our Leadership</span>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-3">Meet the Team</h2>
              <p className="text-slate-550 text-sm mt-2">
                An interdisciplinary team of lawyers, journalists, and policy analysts driving EJI&rsquo;s work.
              </p>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-advocacy-gold hover:text-slate-900 transition-colors cursor-pointer shrink-0"
            >
              <span>View full profiles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {orderedTeam.map((member, idx) => {
              const isActive = activeMember === member.id;
              return (
              <motion.div
                key={member.id}
                onClick={() => setActiveMember(isActive ? null : member.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-advocacy-gold/50 hover:shadow-xl hover:shadow-advocacy-gold/5 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/5] bg-slate-100 overflow-hidden flex items-center justify-center">
                  {member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 ${isActive ? 'grayscale-0 scale-105' : 'grayscale'}`}
                    />
                  ) : (
                    <span className="font-serif font-bold text-5xl text-advocacy-gold">{getInitials(member.name)}</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-slate-900 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-advocacy-gold uppercase tracking-wider mt-1.5">{member.role}</p>
                </div>

                {/* Reveal Popup (hover on desktop, tap on mobile) */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/30 transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                >
                  <h3 className="font-serif text-lg font-bold text-white leading-tight">{member.name}</h3>
                  <p className="text-[10px] font-bold text-advocacy-gold uppercase tracking-wider mt-1">{member.role}</p>
                  <p className="text-slate-200 text-xs leading-relaxed mt-3">{member.summary}</p>
                  <Link
                    to={`/team#${member.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-advocacy-gold hover:text-white transition-colors mt-4 w-fit cursor-pointer"
                  >
                    <span>View full profile</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Focus Points */}
        <div className="space-y-12">
          <div className="max-w-2xl">
            <span className="text-advocacy-gold text-xs uppercase tracking-[0.25em] font-bold">What We Do</span>
            <h2 className="font-serif text-3xl font-bold text-slate-900 mt-3">Our Key Focus Points</h2>
            <p className="text-slate-550 text-sm mt-2">
              The strategic pillars through which we operationalise our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.05 }}
                  className="group bg-white border border-slate-200 p-8 rounded-3xl space-y-4 hover:border-advocacy-gold/50 hover:shadow-xl hover:shadow-advocacy-gold/5 transition-all duration-300"
                >
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-advocacy-gold w-fit group-hover:bg-advocacy-gold/10 transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-900 text-xl">{area.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{area.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};
