import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Heart, Loader, AlertCircle } from 'lucide-react';
import { XIcon, InstagramIcon } from '../components/SocialIcons';
import { motion } from 'framer-motion';
import { WEB3FORMS_ACCESS_KEY } from '../config';
import { Seo } from '../components/Seo';
import { PAGE_SEO } from '../seoConfig';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Volunteer Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Attorney (Pro-Bono Advocate)');
  const [experience, setExperience] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Volunteer Registration — ${name}`,
          from_name: 'EJI Website',
          name,
          email,
          phone,
          preferred_role: role,
          experience,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setRole('Attorney (Pro-Bono Advocate)');
        setExperience('');
      } else {
        setError(data.message || 'Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans">
      <Seo {...PAGE_SEO.contact} />

      {/* Contact Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden bg-slate-950">
        <img
          src="/media.jpg"
          alt="Connect with Equal Justice Initiative"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
        >
          <span className="text-advocacy-gold text-xs uppercase tracking-[0.25em] font-bold">Connect &amp; Support</span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4 leading-[1.05] max-w-3xl">
            Get in <span className="text-advocacy-gold">Touch.</span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl font-light mt-6 max-w-2xl leading-relaxed">
            Report an abuse, support our work, or volunteer your professional hours &mdash; reach our team directly.
          </p>
        </motion.div>
      </section>

      <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Contact info and form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900">Contact Information</h2>
              <p className="text-advocacy-gold text-xs font-bold uppercase tracking-[0.25em] mt-2">Law. Media. Social Justice.</p>
            </div>

            <div className="space-y-6">

              {/* Registered Office */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3.5">
                <h3 className="font-sans font-bold text-slate-900 text-base">Registered Office</h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="h-4.5 w-4.5 text-advocacy-gold shrink-0 mt-0.5" />
                    <span>Plot 379, Sabon Lugbe, Aco, Airport Road, FCT Abuja.</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Phone className="h-4 w-4 text-advocacy-gold shrink-0" />
                    <a href="tel:+2348102804306" className="hover:text-advocacy-gold transition-colors">+234 (8102804306)</a>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Mail className="h-4 w-4 text-advocacy-gold shrink-0" />
                    <a href="mailto:equaljusticeinitiativee@gmail.com" className="hover:text-advocacy-gold transition-colors break-all">equaljusticeinitiativee@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3.5">
                <h3 className="font-sans font-bold text-slate-900 text-base">Follow Us</h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <a
                    href="https://twitter.com/Equal_JusticeIN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 hover:text-advocacy-gold transition-colors"
                  >
                    <XIcon className="h-3.5 w-3.5 text-advocacy-gold shrink-0" />
                    <span><span className="text-slate-400">X (Twitter)</span> &nbsp;@Equal_JusticeIN</span>
                  </a>
                  <a
                    href="https://instagram.com/Equa_Justiceinitiave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 hover:text-advocacy-gold transition-colors"
                  >
                    <InstagramIcon className="h-4 w-4 text-advocacy-gold shrink-0" />
                    <span><span className="text-slate-400">Instagram</span> &nbsp;Equa_Justiceinitiave</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Volunteer Form */}
          <div className="lg:col-span-7">
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl text-center space-y-6"
              >
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-full w-fit mx-auto text-emerald-600">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-slate-900">Volunteer Application Submitted</h2>
                <p className="text-sm text-slate-655 leading-relaxed font-sans">
                  We appreciate your dedication. Your registration details have been queued. A coordinator matching your preferred role ({role}) will review your skills and contact you to schedule an introductory call.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-white border border-slate-350 hover:border-slate-800 text-slate-700 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Register another profile
                </button>
              </motion.div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-advocacy-gold/5 rounded-full blur-3xl"></div>
                
                <div className="space-y-4 mb-6 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-advocacy-gold font-bold text-xs uppercase tracking-wider">
                    <Heart className="h-4 w-4 fill-current text-action-red" />
                    <span>Volunteer Registration</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">Join the Civic Network</h2>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                    Offer your hours and expertise. Registered volunteers are assigned to regional dockets, investigative files, or documentary projects based on experience.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. name@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +234 800 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Role */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">Preferred Volunteer Role</label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
                      >
                        <option>Attorney (Pro-Bono Advocate)</option>
                        <option>Journalist (Newsroom reporting)</option>
                        <option>Researcher (Judicial auditing)</option>
                        <option>Advocate (Community campaigns)</option>
                        <option>Content Creator (Video editing/media)</option>
                      </select>
                    </div>

                    {/* Experience Bio */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">Briefly summarize your experience / interest</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your professional background, legal licenses, writing skills, or why you want to support EJI..."
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors resize-none"
                      />
                    </div>

                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="flex items-start space-x-2 text-action-red text-xs bg-action-red/5 border border-action-red/20 rounded-lg px-4 py-3">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submission */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 bg-advocacy-gold hover:bg-slate-900 text-slate-900 hover:text-white font-semibold rounded-full uppercase tracking-wider text-xs transition-colors duration-300 shadow-lg shadow-advocacy-gold/10 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader className="h-4 w-4 animate-spin" />
                          <span>Registering profile...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            )}
          </div>

        </div>

      </div>
      </div>
    </div>
  );
};
