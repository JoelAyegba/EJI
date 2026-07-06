import React, { useState } from 'react';
import { Scale, CheckCircle, ShieldAlert, ArrowRight, Upload, Loader, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WEB3FORMS_ACCESS_KEY } from '../config';
import { Seo } from '../components/Seo';
import { PAGE_SEO } from '../seoConfig';

export const ProBono: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clientName, setClientName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [detentionState, setDetentionState] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; state?: string; desc?: string; age?: string; gender?: string; consent?: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = () => {
    const tempErrors: typeof errors = {};
    if (!clientName.trim()) tempErrors.name = 'Full name of the victim is required.';
    if (!contactPhone.trim()) tempErrors.phone = 'Contact phone number is required.';
    if (!detentionState.trim()) tempErrors.state = 'Location of the detention is required.';
    if (!age.trim()) tempErrors.age = 'Victim\'s age is required.';
    if (!gender.trim()) tempErrors.gender = 'Victim\'s gender is required.';
    if (caseDescription.trim().length < 20) tempErrors.desc = 'Please describe the incident in at least 20 characters.';
    if (!consent) tempErrors.consent = 'You must provide consent to submit this form.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Legal Aid Intake — ${clientName}`,
          from_name: 'EJI Report Abuse Form',
          victim_name: clientName,
          contact_phone: contactPhone,
          detention_location: detentionState,
          age,
          gender,
          description: caseDescription,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
        setClientName('');
        setContactPhone('');
        setDetentionState('');
        setCaseDescription('');
        setAge('');
        setGender('');
        setConsent(false);
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-20 font-sans">
      <Seo {...PAGE_SEO.proBono} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="p-3.5 bg-justice-blue/10 border border-slate-200 rounded-full w-fit mx-auto text-advocacy-gold">
            <Scale className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Legal Assistance Intake
          </h1>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-sans">
            Are you or a loved one unlawfully detained? Submit a secure case file report. Our network of pro bono attorneys reviews dockets daily to coordinate legal defenses.
          </p>
        </div>

        {formSubmitted ? (
          /* Success Screen */
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl text-center space-y-6 max-w-xl mx-auto"
          >
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-full w-fit mx-auto text-emerald-650 animate-pulse">
              <CheckCircle className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Intake Form Submitted</h2>
              <p className="text-xs text-slate-500 font-mono">Case File Token: EJI-IN-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>
            <p className="text-sm text-slate-650 leading-relaxed font-sans">
              Thank you. Your legal aid submission has been encrypted and sent to EJI's pro-bono defense desk. A regional coordinator will audit the details and contact you via phone within 24 hours.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setClientName('');
                  setContactPhone('');
                  setDetentionState('');
                  setCaseDescription('');
                  setAge('');
                  setGender('');
                  setConsent(false);
                }}
                className="px-6 py-2.5 bg-white border border-slate-300 hover:border-slate-800 text-slate-705 hover:text-slate-900 hover:bg-slate-50 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Submit another case file
              </button>
            </div>
          </motion.div>
        ) : (
          /* Form Screen */
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-advocacy-gold/5 rounded-full blur-3xl"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Client Name */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold">Victim's Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
                  />
                  {errors.name && <p className="text-xs text-action-red font-sans">{errors.name}</p>}
                </div>

                {/* Contact Phone */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold">Contact Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 809 000 0000"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
                  />
                  {errors.phone && <p className="text-xs text-action-red font-sans">{errors.phone}</p>}
                </div>

                {/* Detention Location */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold">Location of Detention / Abuse (State, Facility)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kirikiri Prison, Lagos State"
                    value={detentionState}
                    onChange={(e) => setDetentionState(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
                  />
                  {errors.state && <p className="text-xs text-action-red font-sans">{errors.state}</p>}
                </div>

                {/* Age */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold">Victim's Age</label>
                  <input
                    type="number"
                    required
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
                  />
                  {errors.age && <p className="text-xs text-action-red font-sans">{errors.age}</p>}
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold">Victim's Gender</label>
                  <select
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
                  >
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  {errors.gender && <p className="text-xs text-action-red font-sans">{errors.gender}</p>}
                </div>

                {/* Description */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold">Describe what happened</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide details: dockets of arrest, charges (if any), bail requested, cell block, names of officers involved, etc..."
                    value={caseDescription}
                    onChange={(e) => setCaseDescription(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-slate-800 focus:bg-white transition-colors resize-none"
                  />
                  {errors.desc && <p className="text-xs text-action-red font-sans">{errors.desc}</p>}
                </div>

                {/* Upload Case Files */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold">Attach case files / charge sheet (Optional)</label>
                  <div className="border border-slate-300 border-dashed rounded-xl p-6 text-center cursor-pointer hover:border-slate-800 transition-colors bg-slate-50">
                    <Upload className="h-5 w-5 text-slate-400 mx-auto mb-2" />
                    <span className="text-xs text-slate-655 font-sans block">Click to upload charge documents, warrants, or court logs</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Accepts PDF, JPG, PNG (Max 10MB)</span>
                  </div>
                </div>

              </div>

              {/* Confidentiality Alert */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start space-x-3 text-xs">
                <ShieldAlert className="h-4 w-4 text-advocacy-gold shrink-0 mt-0.5" />
                <span className="text-slate-650 font-sans leading-relaxed">
                  <strong>Confidential:</strong> The details you provide are sent securely over HTTPS and treated in strict confidence by our legal team. We will not share your information with any third party without your consent.
                </span>
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  required
                  id="consent-probono"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 text-advocacy-gold bg-slate-50 border-slate-300 rounded focus:ring-advocacy-gold cursor-pointer"
                />
                <label htmlFor="consent-probono" className="text-xs text-slate-600 leading-relaxed font-sans cursor-pointer">
                  I consent to providing this information for legal review and intake purposes.
                </label>
              </div>
              {errors.consent && <p className="text-xs text-action-red font-sans">{errors.consent}</p>}

              {/* Error message */}
              {submitError && (
                <div className="flex items-start space-x-2 text-action-red text-xs bg-action-red/5 border border-action-red/20 rounded-xl px-4 py-3">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit Actions */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-advocacy-gold hover:bg-slate-900 text-slate-900 hover:text-white font-semibold rounded-full uppercase tracking-wider text-xs transition-colors duration-300 shadow-lg shadow-advocacy-gold/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader className="h-4 w-4 animate-spin" />
                      <span>Encrypting & Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Case File</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
