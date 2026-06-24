// Central site + SEO configuration.

export const SITE_URL = 'https://equaljusticeinitiativeinc.org';
export const SITE_NAME = 'Equal Justice Initiative';
export const DEFAULT_OG_IMAGE = '/og-image.jpg';

export interface NavItem {
  label: string;
  path: string;
}

// Primary navigation — shared by Header and Footer so they never drift.
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Team', path: '/team' },
  { label: 'Publications', path: '/newsroom' },
  { label: 'Contact', path: '/contact' },
];

export interface PageSeo {
  path: string;
  title: string;
  description: string;
}

// Per-route SEO copy. Titles aim for ~60 chars, descriptions ~150 chars,
// weaving in target terms: Equal Justice Initiative, Nigeria, pro bono,
// trial watch, human rights, legal aid, SGBV.
export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    path: '/',
    title: 'Equal Justice Initiative (EJI) | Law, Media & Social Accountability in Nigeria',
    description:
      'Equal Justice Initiative (EJI) is a Nigerian NGO advancing the rule of law through pro bono legal aid, trial monitoring, investigative media, and social accountability.',
  },
  about: {
    path: '/about',
    title: 'About Us | Equal Justice Initiative (EJI) Nigeria',
    description:
      "Learn about Equal Justice Initiative — Africa's civic justice hub at the crossroads of Law, Media, and Social Accountability, with our vision, mission, and core values.",
  },
  team: {
    path: '/team',
    title: 'Our Leadership Team | Equal Justice Initiative (EJI)',
    description:
      'Meet the lawyers, journalists, and policy analysts leading the Equal Justice Initiative across legal advocacy, trial watch, and law reform in Nigeria.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | Equal Justice Initiative (EJI) Nigeria',
    description:
      'Get in touch with the Equal Justice Initiative — report an abuse, volunteer your professional hours, or support our work. Based in Abuja, Nigeria.',
  },
  trialWatch: {
    path: '/trial-watch',
    title: 'Trial Watch | Equal Justice Initiative (EJI)',
    description:
      'EJI monitors court proceedings to promote transparency and compliance with the Administration of Criminal Justice Act (ACJA) 2015 and deter judicial abuse.',
  },
  newsroom: {
    path: '/newsroom',
    title: 'Newsroom & Investigative Reporting | Equal Justice Initiative',
    description:
      'Investigative reporting from the Equal Justice Initiative — uncovering systemic corruption, human rights abuses, and injustice to drive policy reform in Nigeria.',
  },
  proBono: {
    path: '/pro-bono',
    title: 'Report Abuse & Request Legal Aid | Equal Justice Initiative',
    description:
      'Unlawfully detained or facing rights violations? Submit a confidential case report to EJI. Our pro bono attorney network reviews intake requests and coordinates legal defense.',
  },
};
