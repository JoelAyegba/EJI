import React from 'react';

export const Partners: React.FC = () => {
  const partnerNames = [
    'Open Society Foundations',
    'MacArthur Foundation',
    'Ford Foundation',
    'Amnesty International',
    'Human Rights Watch',
    'Legal Aid Council of Nigeria',
    'National Human Rights Commission',
    'Civic Tech Africa Fund',
    'Luminate Group',
    'NED Endowment for Democracy'
  ];

  // Duplicate the array to ensure seamless infinite looping ticker
  const duplicatedPartners = [...partnerNames, ...partnerNames];

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
          {duplicatedPartners.map((name, idx) => (
            <div 
              key={idx}
              className="mx-8 sm:mx-12 px-6 py-3.5 bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 pointer-events-auto"
            >
              <span className="text-sm sm:text-base font-serif font-bold text-slate-600 hover:text-slate-900 transition-colors duration-250 select-none whitespace-nowrap tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
