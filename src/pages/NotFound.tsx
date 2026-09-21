import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Users, Scale, Mail } from 'lucide-react';
import { Seo } from '../components/Seo';

const destinations = [
  {
    to: '/newsroom',
    icon: FileText,
    title: 'Publications',
    desc: 'Monitoring reports, policy review and blog posts.',
  },
  {
    to: '/about',
    icon: Users,
    title: 'About EJI',
    desc: 'Who we are, how we work, and the team behind it.',
  },
  {
    to: '/pro-bono',
    icon: Scale,
    title: 'Report Abuse / Legal Aid',
    desc: 'Report a rights violation or request legal assistance.',
  },
  {
    to: '/contact',
    icon: Mail,
    title: 'Contact',
    desc: 'Reach the team directly.',
  },
];

export const NotFound: React.FC = () => {
  return (
    <div className="bg-white py-20 sm:py-28 font-sans min-h-screen">
      <Seo
        title="Page Not Found | Equal Justice Initiative"
        description="The page you are looking for is not available. Browse EJI's publications, programmes and contact details."
        path="/404"
        noindex
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="space-y-6 pb-10 border-b border-slate-100">
          <span className="text-advocacy-gold text-xs uppercase tracking-[0.25em] font-bold">
            Error 404
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-slate-900 leading-tight">
            This page isn&rsquo;t here.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-light max-w-2xl">
            The address may have been mistyped, or the page may have been moved or
            withdrawn. Everything we publish is available from the sections below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {destinations.map(({ to, icon: Icon, title, desc }) => (
            <Link
              key={to}
              to={to}
              className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-advocacy-gold transition-colors duration-300 flex flex-col justify-between gap-6"
            >
              <div className="space-y-3">
                <div className="p-3 bg-justice-blue/10 border border-slate-100 rounded-xl text-justice-blue w-fit group-hover:bg-justice-blue group-hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-xl font-bold text-slate-900">{title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{desc}</p>
              </div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-advocacy-gold transition-colors">
                <span>Go to {title}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-advocacy-gold transition-colors"
          >
            <span>Return to the homepage</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
