import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Building2, Copy, CheckCircle } from 'lucide-react';
import { Seo } from '../components/Seo';
import { PAGE_SEO } from '../seoConfig';

export const Donate: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('2048250391');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="font-sans bg-slate-50 min-h-screen pb-20">
      <Seo {...PAGE_SEO.donate} />

      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center overflow-hidden bg-slate-950">
        <img
          src="/law.jpg"
          alt="Support Equal Justice Initiative"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-advocacy-gold font-bold text-xs uppercase tracking-wider mb-4">
            <Heart className="h-4 w-4 fill-current" />
            <span>Make an Impact</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Support Our Work
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Your generous contribution allows us to continue providing pro bono legal aid, monitoring trials, and demanding accountability for systemic injustices.
          </p>
        </motion.div>
      </section>

      {/* Donation Options */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200">
          
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Direct Bank Transfer
            </h2>
            <p className="text-slate-600 text-sm mt-3 max-w-lg mx-auto">
              You can support our mission directly by transferring funds to our official NGO bank account below. Every contribution makes a difference.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Building2 className="w-32 h-32" />
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Account Name</span>
                <p className="font-sans font-semibold text-slate-900 text-lg">Equal Justice Initiative</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Bank Name</span>
                <p className="font-sans font-semibold text-slate-900 text-lg">First Bank</p>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Account Number</span>
                <div className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl">
                  <span className="font-mono text-2xl font-bold text-slate-900 tracking-wider">2048250391</span>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-advocacy-gold text-slate-700 hover:text-slate-900 transition-colors rounded-lg font-semibold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-10 text-center border-t border-slate-100 pt-8">
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              Equal Justice Initiative is a registered NGO in Nigeria. For international transfers, partnerships, or in-kind donations, please reach out to us via our <a href="/contact" className="text-advocacy-gold hover:underline">Contact page</a>.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
