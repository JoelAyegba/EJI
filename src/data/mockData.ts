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
  contentHTML?: string;
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
  contentHTML?: string;
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
    id: 'news-6',
    title: "Policy Review: What the New Armed Forces Salary Increase Means for Nigeria's Security and Public Accountability",
    excerpt: "President Bola Tinubu has approved a salary increase of between 30% and 80% for personnel of the Nigerian Armed Forces. EJI examines the fiscal implications, institutional challenges, and what transparent implementation demands.",
    content: `Policy Review: What the New Armed Forces Salary Increase Means for Nigeria's Security and Public Accountability\n\nAuthors: Bernard Daniel and Hauwa Tauhid\n\nPresident Bola Tinubu has approved salary increase of between 30% and 80% for personnel of the Nigerian Armed Forces, with implementation scheduled to commence on Tuesday 1st September 2026.\n\nThe new salary structure announced via the Presidency's official X handle @NGRPresident on Wednesday 5th August 2026 and detailed in a statement by Bayo Onanuga, Special Adviser to the President on Information and Strategy, will benefit approximately 250,000 personnel serving in the Nigerian Army, Navy and Air Force. The annual wage bill for the Armed Forces will rise from ₦660 billion to ₦924 billion, representing an additional ₦264 billion in personnel expenditure.\n\nWhile the policy has drawn praise from military officials and lawmakers, it also raises significant questions about fiscal sustainability, implementation transparency and whether improved pay alone can resolve the deep seated institutional challenges facing Nigeria's armed forces.\n\nThe Salary Structure\n\nUnder the new remuneration package, the increases are distributed across ranks with 30% for officers above the rank of Colonel, 50% for personnel from Colonel down to Warrant Officer, and 80% for personnel from Private to Staff Sergeant.\n\nThe tiered structure deliberately favours junior ranks, who receive the highest percentage increase. This follows Defence Minister Christopher Musa's announcement in July 2026 that the minimum monthly salary for soldiers had been raised from ₦49,000 to ₦100,000. However, analysts note that even this new baseline, which the minister described as "historic", remains modest given Nigeria's current inflationary pressures.\n\nThe Context\n\nThe salary review comes amid longstanding complaints from military personnel over inadequate compensation and alleged diversion of allowances.\n\nA September 2025 report showed that soldiers deployed in operations against Boko Haram in the North-East were receiving only ₦20,000 out of a ₦100,000 "Scarce Skills Allowance" approved by the Federal Government. The report quoted aggrieved soldiers stating that the shortfall had persisted since 2017, despite approvals dating back to the administration of former President Muhammadu Buhari.\n\nThe same investigation revealed that troops were also subjected to poor feeding conditions, with commanders allegedly receiving ₦90,000 monthly per soldier for meals but providing substandard rations.\n\nA serving junior officer at Ojo Cantonment, Lagos, confirmed that morale had been "very low" and that many soldiers resort to "hustling" during off duty hours, including riding Okada or driving commercial buses to supplement their income.\n\nOfficial Reactions\n\nThe salary increase has received broad support from government officials and lawmakers. Defence Minister Christopher Musa described the decision as a "historic increase" that demonstrates the government's readiness to back its security commitments with concrete financial support.\n\nSenator Orji Uzor Kalu, representing Abia North, declared the move a "bold investment in national security" and challenged troops to repay the government's confidence with renewed determination against terrorism and banditry.\n\nSenator Ahmad Ibrahim Lawcalledan, Chairman of the Senate Committee on Defence, described the review as "one of the most significant investments in military welfare in recent years" and called for stronger joint operations and intelligence sharing among all branches of the Armed Forces.\n\nThe Fiscal Reality\n\nThe salary increase must be viewed within the broader context of Nigeria's defence spending. According to the 2026 Appropriation Bill, the Ministry of Defence is allocated ₦3.154 trillion with ₦2.392 trillion — approximately 75% — earmarked for personnel costs, covering salaries, allowances and benefits.\n\nThe Nigerian Army remains the largest recipient, with a total allocation of ₦1.504 trillion, of which personnel costs alone exceed ₦1.25 trillion. The Navy receives ₦443.92 billion, while the Air Force is allocated ₦407.15 billion.\n\nHowever, experts have raised concerns about the capital-to-personnel ratio. With personnel and overhead costs accounting for over 75 per cent of the defence budget, capital investment including equipment procurement, arms, ammunition, and infrastructure remains underfunded.\n\nAn overview of the 2025 budget performance revealed that of the ₦20.56 billion budgeted by the Nigerian Army for security equipment, only ₦1.46 billion — constituting 7.11% — was disbursed as of December 2025. For the Air Force, just ₦5.25 billion — making 33.33% of the ₦15.75 billion budgeted for security equipment — was released.\n\nExpert Views\n\nAnalysts and security experts have welcomed the pay raise but caution that it must be accompanied by broader institutional reforms. Onyewuchi Akagbule, an academic and economist, stated that while a pay raise is necessary, it "always comes with additional burdens on the government and also impacts inflation." He expressed concern that the government may need to borrow more to meet the growing financial burden, "sadly mortgaging the future of the unborn generations."\n\nBem Hembafan, a retired senior officer who now runs a private security firm, argued that the morale boost from the pay raise is a "win-win for Nigerians" but warned that "the psyche of the new generation soldiers is different." "They often weigh the sacrifice, the love of life and country. So, when there is nothing to boost their morale, they will prefer safety to sacrifice," he said.\n\nAn anonymous senior officer expressed mixed feelings, noting that while the pay raise is commendable, "the harsh economic realities make the raise less impactful due to high inflation." "By September, we will have more money in our pockets, but it will buy less things," he added.\n\nEqual Justice Initiative's Perspective\n\nAt the Equal Justice Initiative, we recognise that policies affecting national security institutions deserve balanced public discourse rooted in evidence, transparency and accountability.\n\nSupporting the welfare of members of the Armed Forces is a legitimate public policy objective. Equally important is ensuring that significant public expenditure is implemented within the framework of fiscal responsibility, transparency and the rule of law.\n\nAs this policy takes effect, continued public access to information on funding, implementation and measurable outcomes will be essential to promoting informed civic engagement and strengthening accountability in public governance.`,
    author: 'Bernard Daniel & Hauwa Tauhid',
    date: 'September 1, 2026',
    readTime: '8 min read',
    imageUrl: '/armed-forces-salary-policy.png',
    category: 'Blog posts',
    contentHTML: `
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">Policy Review: What the New Armed Forces Salary Increase Means for Nigeria's Security and Public Accountability</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700"><em>Authors: Bernard Daniel and Hauwa Tauhid</em></p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">President Bola Tinubu has <a href="https://thewillnews.com/breaking-tinubu-approves-salary-increase-for-armed-forces-raises-military-wage-bill-to-%e2%82%a6924bn/#respond" target="_blank" rel="noopener noreferrer" class="text-advocacy-gold underline decoration-advocacy-gold/40 underline-offset-2 hover:decoration-advocacy-gold transition-colors">approved</a> salary increase of between 30% and 80% for personnel of the Nigerian Armed Forces, with implementation scheduled to commence on Tuesday 1st September 2026.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The new salary structure announced via the Presidency's official X handle @NGRPresident on Wednesday 5th August 2026 and detailed in a statement by Bayo Onanuga, Special Adviser to the President on Information and Strategy, will benefit approximately 250,000 personnel serving in the Nigerian Army, Navy and Air Force. The annual wage bill for the Armed Forces will rise from ₦660 billion to ₦924 billion, representing an additional ₦264 billion in personnel expenditure.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">While the policy has drawn praise from military officials and lawmakers, it also raises significant questions about fiscal sustainability, implementation transparency and whether improved pay alone can resolve the deep seated institutional challenges facing Nigeria's armed forces.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">The Salary Structure</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Under the new remuneration package, the increases are distributed across ranks with 30% for officers above the rank of Colonel, 50% for personnel from Colonel down to Warrant Officer, and 80% for personnel from Private to Staff Sergeant.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The tiered structure deliberately favours junior ranks, who receive the highest percentage increase. This follows Defence Minister Christopher Musa's announcement in July 2026 that the minimum monthly salary for soldiers had been raised from ₦49,000 to ₦100,000. However, analysts note that even this new baseline, which the minister described as "historic", remains modest given Nigeria's current inflationary pressures.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">The Context</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The salary review comes amid longstanding complaints from military personnel over inadequate compensation and alleged diversion of allowances.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">A September 2025 report showed that soldiers <a href="https://saharareporters.com/2025/09/26/exclusive-nigerian-soldiers-fighting-boko-haram-paid-only-n20000-out-n100000-approved" target="_blank" rel="noopener noreferrer" class="text-advocacy-gold underline decoration-advocacy-gold/40 underline-offset-2 hover:decoration-advocacy-gold transition-colors">deployed</a> in operations against Boko Haram in the North-East were receiving only ₦20,000 out of a ₦100,000 "Scarce Skills Allowance" approved by the Federal Government. The report quoted aggrieved soldiers stating that the shortfall had persisted since 2017, despite approvals dating back to the administration of former President Muhammadu Buhari.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The same investigation revealed that troops were also subjected to poor feeding conditions, with commanders allegedly receiving ₦90,000 monthly per soldier for meals but providing substandard rations.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">A serving junior officer at Ojo Cantonment, Lagos, <a href="https://businessday.ng/life/article/beyond-bank-alert-for-soldiers-will-pay-raise-change-nigerias-insecurity-story/?amp#1" target="_blank" rel="noopener noreferrer" class="text-advocacy-gold underline decoration-advocacy-gold/40 underline-offset-2 hover:decoration-advocacy-gold transition-colors">confirmed</a> that morale had been "very low" and that many soldiers resort to "hustling" during off duty hours, including riding Okada or driving commercial buses to supplement their income.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">Official Reactions</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The salary increase has received broad support from government officials and lawmakers. Defence Minister Christopher Musa, who had previously promised upon assuming office in December 2025 to prioritise troop welfare, <a href="https://independent.ng/the-hike-in-military-pay/#1" target="_blank" rel="noopener noreferrer" class="text-advocacy-gold underline decoration-advocacy-gold/40 underline-offset-2 hover:decoration-advocacy-gold transition-colors">described</a> the decision as a "historic increase" that demonstrates the government's readiness to back its security commitments with concrete financial support.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Senator Orji Uzor Kalu, representing Abia North, <a href="https://independent.ng/kalu-praises-tinubus-hike-of-military-salary-demands-professionalism-from-troops/#1" target="_blank" rel="noopener noreferrer" class="text-advocacy-gold underline decoration-advocacy-gold/40 underline-offset-2 hover:decoration-advocacy-gold transition-colors">declared</a> the move a "bold investment in national security" and challenged troops to repay the government's confidence with renewed determination against terrorism and banditry.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Senator Ahmad Ibrahim Lawcalledan, Chairman of the Senate Committee on Defence, <a href="https://guardian.ng/news/senate-chairman-on-defence-hails-tinubus-military-salary-review/#1" target="_blank" rel="noopener noreferrer" class="text-advocacy-gold underline decoration-advocacy-gold/40 underline-offset-2 hover:decoration-advocacy-gold transition-colors">described</a> the review as "one of the most significant investments in military welfare in recent years" and called for stronger joint operations and intelligence sharing among all branches of the Armed Forces.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">The Fiscal Reality</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The salary increase must be viewed within the broader context of Nigeria's defence spending. According to the 2026 Appropriation Bill, the Ministry of Defence is <a href="https://thesun.ng/defence-fg-budgets-n3-15trn-to-empower-troops-boost-technology-in-2026/?amp#1" target="_blank" rel="noopener noreferrer" class="text-advocacy-gold underline decoration-advocacy-gold/40 underline-offset-2 hover:decoration-advocacy-gold transition-colors">allocated</a> ₦3.154 trillion with ₦2.392 trillion — approximately 75% — earmarked for personnel costs, covering salaries, allowances and benefits.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The Nigerian Army remains the largest recipient, with a total allocation of ₦1.504 trillion, of which personnel costs alone exceed ₦1.25 trillion. The Navy receives ₦443.92 billion, while the Air Force is allocated ₦407.15 billion.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">However, experts have raised concerns about the capital-to-personnel ratio. With personnel and overhead costs accounting for over 75 per cent of the defence budget, capital investment — including equipment procurement, arms, ammunition, and infrastructure — remains underfunded.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">An overview of the 2025 budget performance revealed that of the ₦20.56 billion budgeted by the Nigerian Army for security equipment, only ₦1.46 billion — constituting 7.11% — was disbursed as of December 2025. For the Air Force, just ₦5.25 billion — making 33.33% of the ₦15.75 billion budgeted for security equipment — was released.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">Expert Views</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Analysts and security experts have <a href="https://dailytrust.com/a-war-budget-that-fails-troops/#1" target="_blank" rel="noopener noreferrer" class="text-advocacy-gold underline decoration-advocacy-gold/40 underline-offset-2 hover:decoration-advocacy-gold transition-colors">welcomed</a> the pay raise but caution that it must be accompanied by broader institutional reforms. Onyewuchi Akagbule, an academic and economist, stated that while a pay raise is necessary, it "always comes with additional burdens on the government and also impacts inflation." He expressed concern that the government may need to borrow more to meet the growing financial burden, "sadly mortgaging the future of the unborn generations."</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Bem Hembafan, a retired senior officer who now runs a private security firm, argued that the morale boost from the pay raise is a "win-win for Nigerians" but warned that "the psyche of the new generation soldiers is different." "They often weigh the sacrifice, the love of life and country. So, when there is nothing to boost their morale, they will prefer safety to sacrifice," he said.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">An anonymous senior officer <a href="https://businessday.ng/life/article/beyond-bank-alert-for-soldiers-will-pay-raise-change-nigerias-insecurity-story/?amp#1" target="_blank" rel="noopener noreferrer" class="text-advocacy-gold underline decoration-advocacy-gold/40 underline-offset-2 hover:decoration-advocacy-gold transition-colors">expressed</a> mixed feelings, noting that while the pay raise is commendable, "the harsh economic realities make the raise less impactful due to high inflation." "By September, we will have more money in our pockets, but it will buy less things," he added.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">Equal Justice Initiative's Perspective</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">At the Equal Justice Initiative, we recognise that policies affecting national security institutions deserve balanced public discourse rooted in evidence, transparency and accountability.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Supporting the welfare of members of the Armed Forces is a legitimate public policy objective. Equally important is ensuring that significant public expenditure is implemented within the framework of fiscal responsibility, transparency and the rule of law.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">As this policy takes effect, continued public access to information on funding, implementation and measurable outcomes will be essential to promoting informed civic engagement and strengthening accountability in public governance.</p>
`
  },
  {
    id: 'news-5',
    title: 'Overview of Equal Justice Initiative Monitoring Visits (June-July 2026)',
    excerpt: 'Between June and July 2026, Equal Justice Initiative (Nigeria) participated in a series of detention monitoring visits across police divisions and other detention facilities within the Federal Capital Territory (FCT).',
    content: 'Between June and July 2026, Equal Justice Initiative (Nigeria) participated in a series of detention monitoring visits across police divisions and other detention facilities within the Federal Capital Territory (FCT) interviewing 50 detainees and observing approximately 100 migrants.\n\nThis exercise was conducted alongside the Administration of Criminal Justice Monitoring Committee (ACJMC), Citizens\' Gavel, the National Human Rights Commission (NHRC), the Nigerian Bar Association (NBA), Asabe Waziri Justice Advocacy Initiative (AWJAI), Legend Golden Care Foundation and FCT Magistrates, these visits formed part of ongoing efforts to promote accountability, safeguard the rights of persons in custody and strengthen compliance with the Administration of Criminal Justice Act (ACJA).\n\nJune: Bwari and Ushafa Police Divisions\n\nOn Thursday, 25th June 2026, the Equal Justice Initiative EJI carried out a monitoring exercise at Bwari Police Division and Ushafa Police Division, led by Her Worship, Nonye Okonkwo, recording a total of 22 detainees across both divisions.\n\nThe monitoring team set out by 9:AM in a number of seven to visit the Bwari Police Division first where they were all received by the police officers who demonstrated full cooperation throughout the monitoring exercise. Through precise handling and guidance by her worship leader Nonye Okonkwo, 16 detainees were interviewed. Of which, six had been charged to court, six released on bail, and three were still under investigation.\n\nAfter successfully monitoring the cases at Bwari the team also visited Ushafa Police Division, Her Worship successfully oversaw six cases. Three detainees were released on bail, one case was reopened and is currently under investigation, one suspect had been charged to court and through the intervention of the EJI, one matter was resolved through a settlement with the complainant. Overall a successful monitoring exercise and a big win for the EJI in the month of June.\n\nJuly: Bwari and Ushafa Police Divisions\n\nDuring the month of July, the monitoring committee once again embarked on a follow-up visit to Bwari and Ushafa Police Division on Wednesday, 8th August 2026. The exercise was led by Her Worship, Nonye Okonkwo, who identified a total of 17 detainees across both divisions.\n\nAt Bwari Police Division, 6 detainees were interviewed. Of which, 3 are currently under investigation, 1 has been charged to court, 1 suspect was successfully released on bail, and 1 remains in custody pursuant to a remand order.\n\nThe team then proceeded to Ushafa Police Division, where a total of 11 cases were reviewed. 4 suspects have been charged to court, 6 cases are currently under investigation and 1 suspect released on bail.\n\nOverall, both Bwari and Ushafa Police Divisions remain in fair condition, with officers providing full cooperation throughout the exercise. In total, 17 cases were reviewed by the EJI monitoring team under the leadership of Her Worship, Nonye Okonkwo.\n\nJuly: Karu and Nyanya Police Divisions\n\nOn Monday, 20 July 2026, the Equal Justice Initiative (EJI) conducted another monitoring exercise at Karu Police Division and Nyanya Police Division in collaboration with the Administration of Criminal Justice Monitoring Committee (ACJMC), Citizens\' Gavel, the Nigerian Bar Association (NBA) Nyanya Branch, and Legend Golden Care Foundation. The exercise was led by Her Worship, Haruna A. Haruna.\n\nAt Nyanya Police Division, 11 detainees were interviewed. Of these, five were released on bail, four were charged to court and two cases were reopened and are currently under investigation.\n\nAt Karu Police Division, one detainee was interviewed, and the case remains under investigation.\n\nOverall, the team interviewed a total of 12 detainees during the monitoring exercise led by Her Worship, Haruna A. Haruna. While officers at both police divisions cooperated fully with the monitoring team, it was observed that the detention facilities at Nyanya Police Division require significant improvement, as they were found to be in poor condition. In contrast, the detention facilities at Karu Police Division were generally found to be in fair condition.\n\nJuly: Migrant Holding Centre (NIS) Abuja, National Agency for the Prohibition of Trafficking in Persons (NAPTIP) Headquarters Abuja and Nigeria Security and Civil Defence Corps (NSCDC) FCT Command\n\nOn Thursday 23rd July the Equal Justice Initiative set out on a multi-agency monitoring visit in collaboration with the Administration of Criminal Justice Monitoring Committee (ACJMC), Citizens\' Gavel, the Asabe Waziri Justice Advocacy Initiative (AWJAI) and three FCT Magistrates, Her Worship Fatima Malo Nadoma, His Worship Muhammed Tahir, and His Worship Abdulmajid Oniyangi.\n\nNigerian Immigration Service Migrant Holding Centre, Airport Road, Abuja\n\nAt the Nigerian Immigration Service Migrant Holding Centre, The team observed approximately 100 migrants, including women, being held at the facility. Although Interviews with the detainees indicated that they were adequately fed and generally treated well, the management highlighted persistent challenges relating to overcrowding, detainee identification, profiling and cooperation from foreign embassies.\n\nNational Agency for the Prohibition of Trafficking in Persons (NAPTIP), Headquarters Wuse Abuja\n\nTwo persons were found in lawful custody pending investigation. The detention facility was observed to be clean, orderly and humane, with running water and adequate ventilation, reflecting good detention standards.\n\nNigeria Security and Civil Defence Corps (NSCDC), Federal capital Territory (FCT) Command\n\nFive persons were found in lawful custody pending investigation. During the visit, the Magistrates engaged officers on compliance with the Administration of Criminal Justice Act, particularly the legal requirements governing remand proceedings. The detention facility, however, was noted to be small and in need of improvement.\n\nJuly: Maitama Police Division\n\nThe monitoring visit to Maitama Police Division was conducted in collaboration with the Administration of Criminal Justice Monitoring Committee (ACJMC), the Nigerian Bar Association (Karu Branch) and the Asabe Waziri Justice Advocacy Initiative (AWJAI), under the leadership of His Worship Abubakar Jega.\n\nThe team interviewed two detainees, at the police division both of whom were found to be in lawful custody pending investigation.\n\nThe station was observed to be clean, orderly and well maintained, with professional and cooperative officers who readily engaged with the monitoring team throughout the exercise reflecting positive institutional practices and demonstrated the importance of professionalism, transparency and compliance with due process within police detention facilities.\n\nLooking Ahead\n\nThese monitoring visits continue to reinforce the importance of independent oversight within Nigeria\'s criminal justice system. Beyond documenting detention conditions, the visits provide opportunities to identify unlawful detention, encourage compliance with due process, promote humane treatment of detainees and strengthen collaboration among justice sector stakeholders.\n\nThe Equal Justice Initiative remains committed to advancing accountability, protecting fundamental rights and supporting a criminal justice system that is fair, transparent and compliant with the law.',
    author: 'Equal Justice Initiative',
    date: 'August 1, 2026',
    readTime: '6 min read',
    imageUrl: '/field-report-june-july-2026.jpg',
    category: 'ACJA Oversight',
    contentHTML: `
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">Overview of Equal Justice Initiative Monitoring Visits (June-July 2026)</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Between June and July 2026, Equal Justice Initiative (Nigeria)  participated in a series of detention monitoring visits across police divisions and other detention facilities within the Federal Capital Territory (FCT) interviewing 50 detainees and observing approximately 100 migrants. </p>
<img src="/images/field-report/image4.jpg" alt="Report Image" class="my-12 rounded-xl shadow-lg w-full object-cover" />
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">This exercise was conducted alongside the Administration of Criminal Justice Monitoring Committee (ACJMC), Citizens' Gavel, the National Human Rights Commission (NHRC), the Nigerian Bar Association (NBA), Asabe Waziri Justice Advocacy Initiative (AWJAI), Legend Golden Care Foundation and FCT Magistrates, these visits formed part of ongoing efforts to promote accountability, safeguard the rights of persons in custody and strengthen compliance with the Administration of Criminal Justice Act (ACJA).</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">June: Bwari and Ushafa Police Divisions</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">On Thursday, 25th June 2026, the Equal Justice Initiative EJI carried out a monitoring exercise at Bwari Police Division and Ushafa Police Division, led by Her Worship, Nonye Okonkwo, recording a total of 22 detainees across both divisions.</p>
<img src="/images/field-report/image7.jpg" alt="Report Image" class="my-12 rounded-xl shadow-lg w-full object-cover" />
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The monitoring team set out by 9:AM  in a number of seven to visit the  Bwari Police Division first where they were all received by the police officers who demonstrated full cooperation throughout the monitoring exercise. Through precise handling and guidance by her worship leader Nonye Okonkwo, 16 detainees were interviewed. Of which, six had been charged to court, six  released on bail, and three were still under investigation.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">After successfully monitoring the cases at Bwari the team also visited Ushafa Police Division, Her Worship successfully oversaw six cases. Three detainees were released on bail, one case was reopened and is currently under investigation, one suspect had been charged to court and through the intervention of the EJI, one matter was resolved through a settlement with the complainant. Overall a successful monitoring exercise and a big win for the EJI in the month of June.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">July: Bwari and Ushafa Police Divisions</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">During the month of July, the monitoring committee once again embarked on a follow-up visit to Bwari  and Ushafa Police Division on Wednesday, 8th August 2026. The exercise was led by Her Worship, Nonye Okonkwo, who identified a total of 17 detainees across both divisions.</p>
<img src="/images/field-report/image8.jpg" alt="Report Image" class="my-12 rounded-xl shadow-lg w-full object-cover" />
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">At Bwari Police Division, 6 detainees were interviewed. Of which, 3 are currently under investigation, 1 has been charged to court, 1 suspect was successfully released on bail, and 1 remains in custody pursuant to a remand order.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The team then proceeded to Ushafa Police Division, where a total of 11 cases were reviewed. 4 suspects have been charged to court, 6 cases are currently under investigation and 1 suspect released on bail.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Overall, both Bwari and Ushafa Police Divisions remain in fair condition, with officers providing full cooperation throughout the exercise. In total, 17 cases were reviewed by the EJI monitoring team under the leadership of Her Worship, Nonye Okonkwo.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">July: Karu and Nyanya Police Divisions</strong></h4>
<img src="/images/field-report/image6.jpg" alt="Report Image" class="my-12 rounded-xl shadow-lg w-full object-cover" />
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">On Monday, 20 July 2026, at…time… the Equal Justice Initiative (EJI) conducted another monitoring exercise at Karu Police Division and Nyanya Police Division in collaboration with the Administration of Criminal Justice Monitoring Committee (ACJMC), Citizens' Gavel, the Nigerian Bar Association (NBA) Nyanya Branch, and Legend Golden Care Foundation. The exercise was led by Her Worship, Haruna A. Haruna.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">At Nyanya Police Division, 11 detainees were interviewed. Of these, five were released on bail, four were charged to court and two cases were reopened and are currently under investigation.</p>
<img src="/images/field-report/image3.jpg" alt="Report Image" class="my-12 rounded-xl shadow-lg w-full object-cover" />
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">At Karu Police Division, one detainee was interviewed, and the case remains under investigation.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Overall, the team interviewed a total of 12 detainees during the monitoring exercise led by Her Worship, Haruna A. Haruna. While officers at both police divisions cooperated fully with the monitoring team, it was observed that the detention facilities at Nyanya Police Division require significant improvement, as they were found to be in poor condition. In contrast, the detention facilities at Karu Police Division were generally found to be in fair condition.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">July: Migrant Holding Centre (NIS) Abuja, National Agency for the Prohibition of Trafficking in Persons (NAPTIP) Headquarters Abuja and  Nigeria Security and Civil Defence Corps (NSCDC) FCT Command</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">On Thursday 23rd July the Equal Justice Initiative set out on a multi-agency monitoring visit  in collaboration with the Administration of Criminal Justice Monitoring Committee (ACJMC), Citizens' Gavel, the Asabe Waziri Justice Advocacy Initiative (AWJAI) and three FCT Magistrates, Her Worship Fatima Malo Nadoma, His Worship Muhammed Tahir, and His Worship Abdulmajid Oniyangi.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">Nigerian Immigration Service Migrant Holding Centre</strong><strong class="font-bold text-slate-900">, Airport Road, Abuja</strong></h4>
<img src="/images/field-report/image1.jpg" alt="Report Image" class="my-12 rounded-xl shadow-lg w-full object-cover" />
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">At the Nigerian Immigration Service Migrant Holding Centre, The team observed approximately 100 migrants, including women, being held at the facility. Although Interviews with the detainees indicated that they were adequately fed and generally treated well, the management highlighted persistent challenges relating to overcrowding, detainee identification, profiling and cooperation from foreign embassies.       </p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">National Agency for the Prohibition of Trafficking in Persons (NAPTIP), Headquarters Wuse Abuja </strong></h4>
<img src="/images/field-report/image9.jpg" alt="Report Image" class="my-12 rounded-xl shadow-lg w-full object-cover" />
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Two persons were found in lawful custody pending investigation. The detention facility was observed to be clean, orderly and humane, with running water and adequate ventilation, reflecting good detention standards.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">Nigeria Security and Civil Defence Corps (NSCDC), Federal capital Territory (FCT) Command</strong></h4>
<img src="/images/field-report/image2.jpg" alt="Report Image" class="my-12 rounded-xl shadow-lg w-full object-cover" />
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">Five persons were found in lawful custody pending investigation. During the visit, the Magistrates engaged officers on compliance with the Administration of Criminal Justice Act, particularly the legal requirements governing remand proceedings. The detention facility, however, was noted to be small and in need of improvement.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">July: Maitama Police Division</strong></h4>
<img src="/images/field-report/image5.jpg" alt="Report Image" class="my-12 rounded-xl shadow-lg w-full object-cover" />
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The monitoring visit to Maitama Police Division was conducted in collaboration with the Administration of Criminal Justice Monitoring Committee (ACJMC), the Nigerian Bar Association (Karu Branch) and the Asabe Waziri Justice Advocacy Initiative (AWJAI), under the leadership of His Worship Abubakar Jega.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The team interviewed two detainees, at the police division both of whom were found to be in lawful custody pending investigation.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The station was observed to be clean, orderly and well maintained, with professional and cooperative officers who readily engaged with the monitoring team throughout the exercise reflecting positive institutional practices and demonstrated the importance of professionalism, transparency and compliance with due process within police detention facilities.</p>
<h4 class="font-sans text-xl sm:text-2xl font-black text-slate-900 mt-16 mb-8 ml-4 sm:ml-8 border-l-4 border-advocacy-gold pl-4"><strong class="font-bold text-slate-900">Looking Ahead</strong></h4>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">These monitoring visits continue to reinforce the importance of independent oversight within Nigeria's criminal justice system. Beyond documenting detention conditions, the visits provide opportunities to identify unlawful detention, encourage compliance with due process, promote humane treatment of detainees and strengthen collaboration among justice sector stakeholders.</p>
<p class="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-slate-700">The Equal Justice Initiative remains committed to advancing accountability, protecting fundamental rights and supporting a criminal justice system that is fair, transparent and compliant with the law.</p>
`
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
