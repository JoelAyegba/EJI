import React from 'react';

export const Partners: React.FC = () => {
  const partners = [
    { name: 'Hopebehind Bars Africa.', domain: 'hopebehindbarsafrica.org' },
    { name: 'The Liberalist Centre', domain: 'liberalistcentre.org' },
    { name: 'Young Mens Network Against SGBV', domain: 'menagainstgbv.org' },
    { name: 'Nigerian Correctional Centre', domain: 'corrections.gov.ng' },
    { name: 'Administration of Criminal Justice Monitoring Committee (ACJMC)', domain: 'acjmc.gov.ng' },
    { name: 'Aids for Street Adolescents Initiative', domain: '' },
    { name: 'Project 29', domain: '' }
  ];

  // Duplicate the array to ensure seamless infinite looping ticker
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-16 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <span className="text-slate-500 font-sans text-xs uppercase tracking-[0.25em] font-semibold">Supporting Organizations & Collaborators</span>
      </div>

      {/* Infinite Horizontal Ticker */}
      <div className="relative w-full flex items-center justify-center overflow-hidden py-4">

        {/* Left & Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Ticker Box */}
        <div className="animate-ticker">
          {duplicatedPartners.map((partner, idx) => (
            <div
              key={idx}
              className="mx-6 sm:mx-8 px-6 py-3.5 bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white rounded-xl flex items-center space-x-3 transition-all duration-300 pointer-events-auto"
            >
              {partner.domain ? (
                <img 
                  src={`https://logo.clearbit.com/${partner.domain}`} 
                  alt={`${partner.name} Logo`} 
                  className="h-6 w-auto object-contain rounded-sm"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&size=64`;
                  }}
                />
              ) : (
                <img 
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&size=64`} 
                  alt={`${partner.name} Avatar`} 
                  className="h-6 w-auto object-contain rounded-sm"
                />
              )}
              <span className="text-sm sm:text-base font-serif font-bold text-slate-600 hover:text-slate-900 transition-colors duration-250 select-none whitespace-nowrap tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
