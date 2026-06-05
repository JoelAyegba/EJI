import React, { useState } from 'react';
import { useNavigation, type PageType } from '../../context/NavigationContext';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Team', page: 'team' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <footer style={{ backgroundColor: '#000d0e' }} className="border-t border-white/10 pt-16 pb-8 text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer w-fit" onClick={() => navigateTo('home')}>
              <img
                src="/logo-light.png"
                alt="Equal Justice Initiative logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Equal Justice Initiative (EJI) transforms legal rights into reality. We operate at the intersection of Law, Investigative Media, and Social Accountability to protect human rights across Africa.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="https://twitter.com/Equal_JusticeIN" target="_blank" rel="noopener noreferrer" aria-label="Twitter @Equal_JusticeIN" className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-200 hover:border-advocacy-gold hover:text-advocacy-gold transition-all duration-300">
                <span className="text-xs font-semibold">X</span>
              </a>
              <a href="https://instagram.com/Equa_Justiceinitiave" target="_blank" rel="noopener noreferrer" aria-label="Instagram Equa_Justiceinitiave" className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-200 hover:border-advocacy-gold hover:text-advocacy-gold transition-all duration-300">
                <span className="text-xs font-semibold">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-sans font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.page}>
                  <button 
                    onClick={() => navigateTo(item.page)}
                    className="hover:text-advocacy-gold text-slate-300 hover:translate-x-1 transition-all duration-200 text-sm cursor-pointer block text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="space-y-4">
            <h3 className="text-white font-sans font-bold text-sm uppercase tracking-widest mb-6">Contact Info</h3>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-advocacy-gold shrink-0 mt-0.5" />
                <span>Plot 379, Sabon Lugbe, Aco, Airport Road, FCT Abuja.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-advocacy-gold shrink-0" />
                <a href="tel:+2348102804306" className="hover:text-advocacy-gold transition-colors">+234 (8102804306)</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-advocacy-gold shrink-0" />
                <a href="mailto:equaljusticeinitiativee@gmail.com" className="hover:text-advocacy-gold transition-colors break-all">equaljusticeinitiativee@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div>
            <h3 className="text-white font-sans font-bold text-sm uppercase tracking-widest mb-6">Stay Informed</h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Subscribe to receive weekly trial monitoring reports, investigative releases, and campaign briefs.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-advocacy-gold transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bg-advocacy-gold text-slate-900 p-1.5 rounded-md hover:bg-slate-950 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center space-x-1.5 text-emerald-300 text-xs mt-1 animate-pulse">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>Subscribed! Thank you for standing for justice.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Equal Justice Initiative (EJI) Nigeria. All Rights Reserved. CAC Reg: CAC/IT/NO/948271.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-advocacy-gold">Privacy Policy</a>
            <a href="#" className="hover:text-advocacy-gold">Terms of Service</a>
            <a href="#" className="hover:text-advocacy-gold">Report Corruption</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
