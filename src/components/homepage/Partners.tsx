import React from 'react';

interface Partner {
  name: string;
  logo?: string;
  renderLogo?: () => React.ReactNode;
}

export const Partners: React.FC = () => {
  const partners: Partner[] = [
    { 
      name: 'Hope behind Bars Africa', 
      logo: '/images/logos/hope-behind-bars.webp'
    },
    { 
      name: 'The Liberalist Centre', 
      logo: '/images/logos/liberalist-centre.png'
    },
    { 
      name: 'Young Men\'s Network Against SGBV', 
      logo: '/images/logos/young-mens-network.jpg'
    },
    { 
      name: 'Nigerian Correctional Service', 
      logo: '/images/logos/nigerian-correctional-service.png'
    },
    { 
      name: 'Administration of Criminal Justice Monitoring Committee (ACJMC)', 
      logo: '/images/logos/acjmc.png'
    },
    { 
      name: 'Aids for Street Adolescents Initiative', 
      renderLogo: () => (
        <svg className="h-10 w-10 sm:h-12 sm:w-12 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#F0FDF4" />
          <path d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12Z" stroke="#16A34A" strokeWidth="2" />
          <path d="M12 16L16 12L20 16" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 13V20" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    { 
      name: 'Project 29', 
      renderLogo: () => (
        <svg className="h-10 w-10 sm:h-12 sm:w-12 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#EEF2F6" />
          <path d="M11 11H21V13L15 21H11L17 13H11V11Z" fill="#3B82F6" />
          <path d="M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  // Duplicate the array to ensure seamless infinite looping ticker
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-20 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <span className="text-slate-500 font-sans text-sm uppercase tracking-[0.25em] font-semibold">Supporting Organizations & Collaborators</span>
      </div>

      {/* Infinite Horizontal Ticker */}
      <div className="relative w-full flex items-center justify-center overflow-hidden py-6">

        {/* Left & Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Ticker Box */}
        <div className="animate-ticker">
          {duplicatedPartners.map((partner, idx) => (
            <div
              key={idx}
              className="mx-4 sm:mx-5 px-6 py-6 w-56 sm:w-64 min-h-[160px] sm:min-h-[190px] bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white rounded-2xl flex flex-col items-center justify-between space-y-4 transition-all duration-300 pointer-events-auto shadow-xs hover:shadow-md text-center shrink-0"
            >
              <div className="flex-1 flex items-center justify-center w-full">
                {partner.renderLogo ? (
                  partner.renderLogo()
                ) : (
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    className="h-12 sm:h-16 w-auto max-w-[90%] object-contain rounded-md shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&size=64`;
                    }}
                  />
                )}
              </div>
              <span className="text-xs sm:text-sm font-serif font-bold text-slate-700 hover:text-slate-900 transition-colors duration-250 select-none tracking-wide leading-snug">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

