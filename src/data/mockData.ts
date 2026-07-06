export interface FocusArea {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  stats: string;
  impactMetrics: string[];
}



export interface ImpactStory {
  id: string;
  title: string;
  category: string;
  summary: string;
  fullStory: string;
  date: string;
  location: string;
  imageUrl: string;
  impactText: string;
}

export interface CourtReport {
  id: string;
  caseName: string;
  court: string;
  judge: string;
  status: 'Ongoing' | 'Resolved' | 'Adjourned';
  dateObserved: string;
  observerNotes: string;
  transparencyScore: number; // out of 100
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  summary: string;
  bio: string[];
  imageUrl?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: 'gender-equality',
    title: 'Gender Equality',
    shortDesc: 'Advocating against gender-based violence, protecting child brides, and securing economic equality.',
    longDesc: 'EJI operates a dedicated gender justice desk that provides free legal representation to victims of gender-based violence (GBV), challenges discriminatory customary laws in court, and campaigns for gender-inclusive legislative reforms across West Africa.',
    iconName: 'Scale',
    stats: '1,200+ Cases Handled',
    impactMetrics: ['85% Case resolution rate for survivors of abuse', '15 Policy briefs submitted on Child Rights Act adoption', '5 Free community shelters supported']
  },
  {
    id: 'trial-watch',
    title: 'Trial Watch',
    shortDesc: 'Monitoring high-profile public interest litigation to ensure judicial transparency and fair trials.',
    longDesc: 'Our specialized Trial Watch observers sit in courtrooms daily. We deploy technology and legal experts to monitor anti-corruption cases, human rights trials, and citizen prosecutions, exposing delays, bribery, and procedural violations.',
    iconName: 'Eye',
    stats: '450+ Trials Monitored',
    impactMetrics: ['450 Court sessions independently audited', 'Weekly transparency indexes published', 'Corrupt practices exposed in 12 jurisdictions']
  },
  {
    id: 'documentaries',
    title: 'Documentary Storytelling',
    shortDesc: 'Producing high-impact documentary films that expose systemic abuse and drive legal action.',
    longDesc: 'We believe in the power of visual media. By combining journalism with legal insights, EJI produces investigative films and mini-documentaries that capture the human faces behind courtroom statistics, forcing public action and accountability.',
    iconName: 'Film',
    stats: '25+ Films Produced',
    impactMetrics: ['3 International awards for human rights storytelling', '15 Million+ cumulative digital views', 'Direct legislative hearings triggered by 2 documentaries']
  },
  {
    id: 'pro-bono',
    title: 'Pro Bono Services',
    shortDesc: 'Providing free legal aid and representation to indigent and unlawfully detained citizens.',
    longDesc: 'Thousands languish in prison awaiting trial without legal representation. Our network of pro bono lawyers works directly with penitentiaries to secure bail, contest illegal detentions, and represent marginalized individuals.',
    iconName: 'Shield',
    stats: '3,400+ Citizens Freed',
    impactMetrics: ['3,400+ Unlawfully detained persons released', '200+ Active volunteer lawyers across Nigeria', '24/7 Hotlines active for urgent legal assistance']
  },
  {
    id: 'investigative-reporting',
    title: 'Investigative Reporting',
    shortDesc: 'Uncovering corruption, police brutality, and systemic rights violations in vulnerable communities.',
    longDesc: 'EJI operates a newsroom of courageous investigative journalists. We shine a light on police extortion, unlawful detention centers, corporate environmental violations, and misappropriation of funds meant for civic development.',
    iconName: 'FileText',
    stats: '120+ Exposés Published',
    impactMetrics: ['120+ Investigative stories published', '4 Public judicial panels set up following exposes', 'Collaborative reporting with premium global outlets']
  }
];



export const impactStories: ImpactStory[] = [
  {
    id: 'story-1',
    title: 'A Decade in Pre-trial Detention: The Story of Samuel',
    category: 'Detainee Release',
    summary: 'Samuel was arrested at age 17 on an unsubstantiated charge. He spent 10 years in medium-security prison without a single trial session.',
    fullStory: 'Samuel was rounded up during a street sweep in Lagos in 2014. Incapable of hiring legal representation, he was held on remand. EJI pro bono attorney Amina Yusuf discovered Samuel during an audit triggered by the documentary "Behind The Bars". Within six weeks, we secured an unconditional release and a rehabilitation package for Samuel, who is now training to become a legal secretary.',
    date: 'March 2025',
    location: 'Lagos, Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    impactText: 'Unconditional release secured, full psychological rehabilitation & career mentorship provided.'
  },
  {
    id: 'story-2',
    title: 'Rescuing Halima: Child Rights Intervention',
    category: 'Child Rights',
    summary: 'Preventing the forced early marriage of a 14-year-old girl and securing her education through legal injunction and community advocacy.',
    fullStory: 'In Kaduna State, Halima was scheduled for forced marriage. An anonymous tip reached EJI\'s human rights reporting desk. Working with local child advocates and the Ministry of Justice, EJI secured a legal restraining order based on the Child Rights Act. Today, Halima is the top-performing student in her secondary school, with her educational fees fully sponsored by EJI donors.',
    date: 'November 2024',
    location: 'Kaduna, Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    impactText: 'Forced marriage legally halted, 5-year academic scholarship secured.'
  },
  {
    id: 'story-3',
    title: 'Trial Watch Exposes Bribery in Municipal Audit Case',
    category: 'Trial Watch',
    summary: 'An EJI observer\'s notes exposed backroom negotiations between a defense lawyer and court clerk, leading to a trial transfer.',
    fullStory: 'During the state prosecution of an official accused of diverting local health clinic funds, EJI court monitor Joshua Umoh noticed suspicious private meetings between court staff and defense counsel. EJI filed a formal petition backed by recorded observer logs. The chief judge reassigned the case, and the official was eventually convicted and sentenced to 7 years in prison, with the diverted funds recovered.',
    date: 'January 2025',
    location: 'Abuja, Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1453733190148-c44698c265f8?auto=format&fit=crop&w=800&q=80',
    impactText: 'Corruption exposed, trial transfer ordered, $120,000 public funds recovered.'
  }
];

export const courtReports: CourtReport[] = [
  {
    id: 'case-101',
    caseName: 'State vs. Inspector Godwin & Ors',
    court: 'Federal High Court, Abuja',
    judge: 'Hon. Justice M. B. Bello',
    status: 'Ongoing',
    dateObserved: 'May 28, 2026',
    observerNotes: 'Prosecution presented third witness, a forensic examiner. Defense cross-examined extensively. Notable delay observed in scheduling subsequent dates. Transparency level high but scheduling efficiency low.',
    transparencyScore: 82,
    category: 'Police Brutality'
  },
  {
    id: 'case-102',
    caseName: 'F.R.N. vs. Chief Ibrahim (Diversion of Health Funds)',
    court: 'High Court of Lagos State',
    judge: 'Hon. Justice O. A. Taiwo',
    status: 'Resolved',
    dateObserved: 'April 14, 2026',
    observerNotes: 'Final judgment delivered. Accused found guilty on 4 of 6 counts of money laundering and embezzlement. Sentence: 7 years imprisonment. Full recovery of asset ordered.',
    transparencyScore: 95,
    category: 'Public Corruption'
  },
  {
    id: 'case-103',
    caseName: 'State vs. Beatrice Okoro (Protest Incarceration)',
    court: 'Magistrate Court, Port Harcourt',
    judge: 'Magistrate E. K. Johnson',
    status: 'Adjourned',
    dateObserved: 'May 12, 2026',
    observerNotes: 'Adjourned due to failure of state counsel to present witnesses for the fourth consecutive time. EJI representative raised concern regarding systemic delay and denial of bail.',
    transparencyScore: 45,
    category: 'Freedom of Assembly'
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'The Shadows of Remand: Nigeria’s Broken Bail System',
    excerpt: 'An in-depth investigation into how systemic police extortion and complex court procedures keep innocent citizens locked in detention centers.',
    content: 'Our reporters spent six months tracking bail processing in three major states. The findings are staggering: over 70% of individuals in correctional facilities are awaiting trial, with many held because they could not pay informal fees demanded for their court files. EJI is calling for an immediate digitisation of case files and a federal investigation into court clerks.',
    author: 'Chidi Nwankwo',
    date: 'May 15, 2026',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    category: 'Blog posts'
  },
  {
    id: 'news-2',
    title: 'Justice Delayed: How Adjournments Kill Public Interest Trials',
    excerpt: 'Analyzing the stalling tactics used by defense teams in major corruption and corporate abuse trials and the judges who allow it.',
    content: 'By compiling data from our Trial Watch app, we outline the average lifespan of a public interest case. Statistics show a single trial is adjourned on average 14 times, often for trivial reasons like "counsel\'s indisposition" or "missing prosecutor files". We argue for strict limits on adjournment frequencies.',
    author: 'Joshua Umoh',
    date: 'April 22, 2026',
    readTime: '5 min read',
    imageUrl: '/justice-delayed.png',
    category: 'ACJA Oversight'
  },
  {
    id: 'news-3',
    title: 'Customary Court Rules Against Women Land Rights in Niger State',
    excerpt: 'A report on how traditional institutions continue to disenfranchise widows, and the landmark appeal filed by EJI.',
    content: 'Following a customary ruling denying Maryam Musa inheritance rights to her late husband’s house, EJI has filed a constitutional appeal. Our gender equality desk argues that constitutional provisions on non-discrimination override custom. This case could establish a critical precedent for thousands of widows.',
    author: 'Amina Yusuf',
    date: 'March 11, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    category: 'Blog posts'
  },
  {
    id: 'news-4',
    title: 'EJI 2025 Audited Financial Report & Fund Distribution',
    excerpt: 'Detailed financial update disclosing EJI funding sources, institutional grants, and allocation transparency.',
    content: 'At Equal Justice Initiative, we maintain a strict transparency protocol. Over the 2025 fiscal year, EJI received $185,000 in total funding. Our resource allocation was as follows: 82% deployed directly to pro bono representation and prisoner reintegration; 10% towards court monitor training and dockets audits under our Trial Watch initiative; and 8% directed to administrative compliance and public storytelling operations. We are proud to maintain a clean auditor opinion from our auditing partners.',
    author: 'Stephanie O. Tokode, Esq.',
    date: 'January 25, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    category: 'YEARLY REPORTS (FOR OUR ANNUAL FINANCIAL REPORT / ANNUAL IMPACT REPORT)'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'bernard-oke',
    name: 'Bernard D. Oke, Esq.',
    role: 'Executive Director / Legal and Communications Strategist',
    tagline: 'Crusader for penal reform and the rights of defendants.',
    summary: 'Practising lawyer, trained journalist, and multimedia expert who coordinates EJI’s Pro Bono Services and Trial Watch programs. Called to the Bar in 2025, his fieldwork keeps EJI present in the courts, the media, and detention centers.',
    imageUrl: '/Bernard.jpeg',
    bio: [
      'Bernard is a crusader for penal reform and the rights of defendants. He is a practising lawyer with training as a journalist as well as a versatile multimedia expert. He coordinates EJI’s Pro Bono Services and Trial Watch programs, and is responsible for training media volunteers on technical media skills, monitoring courtroom procedures, and human rights standards.',
      'He is a Nigerian legal practitioner and human rights advocate with a Second Class Upper Division LL.B from Kogi State University and was called to the Bar in 2025. His professional experience spans law, media, and development. During his NYSC with HumAngle Media in Abuja, he worked as a humanitarian and conflict reporter, producing research-driven stories that translated complex justice and governance issues into accessible narratives.',
      'He further developed his legal expertise at Kenna Partners, where he supported litigation through legal research, case preparation, and drafting. Through his volunteer work with Hope Behind Bars Africa and The Liberalist Centre, he has engaged directly with grassroots justice challenges, contributing to case reviews, legal support, and advocacy for incarcerated individuals. He brings strong competencies in legal analysis, documentation, stakeholder engagement, and communication, with a demonstrated commitment to advancing access to justice, accountability, and social impact across Nigeria and the African continent.',
      'Bernard’s fieldwork ensures that EJI’s presence is felt directly in the courts, in the media, and in detention centers across Nigeria.',
    ],
  },
  {
    id: 'stephanie-tokode',
    name: 'Stephanie O. Tokode, Esq.',
    role: 'Co-Founder / Director — Policy, Research & Law Reform',
    tagline: 'Lawyer, policy analyst, and business intelligence professional.',
    summary: 'Co-Founder leading EJI’s policy, research, and law reform. With an LL.B., B.L., and MBA, she bridges law, governance, and strategic management to advance evidence-based reform for underserved communities.',
    imageUrl: '/stephenie.jpeg',
    bio: [
      'Stephanie Oluwapamilerin Tokode is a lawyer, policy analyst, and business intelligence professional dedicated to advancing equitable access to justice through evidence-based policy reform and strategic legal research. As Co-Founder/Director of Policy, Research & Law Reform at the Equal Justice Initiative (EJI), she leads the organization’s efforts in developing transformative policy frameworks, conducting in-depth legal analysis, and advocating for systemic law reform that serves marginalized and underserved communities.',
      'With an LL.B. from Kogi State University, a B.L. from the Nigerian Law School, and an MBA from Ahmadu Bello University, Stephanie brings a unique interdisciplinary approach that bridges law, governance, and strategic management. Her expertise spans legal research, policy development, contract evaluation, business intelligence/development, and dispute resolution.',
      'Before co-founding EJI, Stephanie served as Team Lead, Policy & Research Specialist at 6th Element Analytics & Research Ltd., where she played a pivotal role in developing the copyrighted Four-Pronged Outcomes Matrix Approach (FOMA)© — a pioneering framework for policy design and good governance delivery. She has led training programs for the Federal Inland Revenue Service (FIRS), influenced legislative agendas through high-level policy analysis, and managed complex research projects spanning academia, government, and the private sector.',
      'Her experience also includes serving as Head of Business Intelligence & Strategy at Open Space Financial Services Ltd. and Business Intelligence Specialist at Credlanche Ltd., where she contributed to the development of innovative financial products, market expansion strategies, and investor engagement. These roles honed her ability to apply data-driven insights to policy formulation and institutional development.',
      'Stephanie is an Associate Member of the Institute of Chartered Mediators & Conciliators (ICMC), the International Law Association (ILA), and a CMD Certified Management Training Consultant. She is a member of the Nigerian Bar Association (NBA), the International Federation of Women Lawyers (FIDA), and Amnesty International.',
      'Her research interests include human rights protection, police accountability, civilian protection in armed conflict, policy development, and the intersection of governance and sustainable development. She is deeply committed to good governance, conflict resolution, social justice, and advancing the Sustainable Development Goals (SDGs).',
    ],
  },
  {
    id: 'lydia-isenewa',
    name: 'Lydia A. Isenewa, Esq.',
    role: 'Director — Gender, Legal Advocacy & Public Enlightenment',
    tagline: 'Vibrant legal practitioner with a strong zeal for excellence.',
    summary: 'Leads Gender, Legal Advocacy & Public Enlightenment. A FIDA member with interests spanning litigation, family, property, and corporate law, she is devoted to public sensitization and the rights of women and children.',
    imageUrl: '/Lydia.jpeg',
    bio: [
      'Lydia is a young, vibrant and highly motivated legal practitioner with a strong zeal for excellence in the legal profession. She possesses keen interest in Litigation, Corporate legal practice, Family Law, Property Law, Medical Law, Labour and Fashion law. She leads Gender, Legal Advocacy & Public Enlightenment, overseeing the production and accessibility of our works with grassroots communities and the public.',
      'Lydia is a graduate of Kogi State University, where she obtained her law degree before proceeding to the Nigerian Law School, Kano Campus, where she distinguished herself academically and completed her vocational training in flying colours before being called to the Nigerian Bar. She is also a strong member of the International Federation of Women Lawyers (FIDA), an organization that fights for the rights of women and children.',
      'She is committed to delivering efficient, professional, and solution-driven legal services while upholding the highest standard of integrity and professionalism in legal practice. Her dedication to public sensitization, attention to detail, and strong advocacy skills position her as a dependable and resourceful member of this organization.',
    ],
  },
];
