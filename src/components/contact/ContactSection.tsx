import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PRODUCTS } from '../../data/productsData';
import { SupportHotlines } from './SupportHotlines';
import { ShieldCheck, Clock, Users, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenLegalModal: (docId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLegalModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'yogic-astra-shakti',
    role: 'Retailer',
    message: '',
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage('Please accept the privacy policy to proceed.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // Fallback gracefully
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-br from-royal-blue via-[#0C3A7A] to-deep-navy text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-sunrise-orange/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-amber-gold/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Connect"
          title="Let's Build Secure Digital Systems Together"
          subtitle="Tell us your requirements and our team will get back to you within 24 hours."
          theme="dark"
        />

        {/* Feature Value Chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-semibold text-blue-100">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Secure Communication</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Clock className="w-4 h-4 text-amber-gold" />
            <span>Fast Response Time (&lt;24 hrs)</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Users className="w-4 h-4 text-sunrise-orange" />
            <span>Dedicated Support Team</span>
          </div>
        </div>

        {/* Form and Support Panel Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Floating Glass Form (Netlify Compatible) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-2xl text-ink shadow-2xl border border-white/30">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-deep-navy">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 max-w-md">
                    Thank you, <strong className="text-royal-blue">{formData.name}</strong>. Our enterprise consulting and onboarding team will connect with you via {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        product: 'yogic-astra-shakti',
                        role: 'Retailer',
                        message: '',
                        consent: false,
                      });
                    }}
                    className="mt-8 px-6 py-2.5 rounded-full text-xs font-bold text-royal-blue bg-cloud hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-full-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Vikramaditya Sen"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-royal-blue focus:border-royal-blue text-sm transition-all bg-white"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone-number" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone-number"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-royal-blue focus:border-royal-blue text-sm transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email-address" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work / Personal Email *
                      </label>
                      <input
                        id="contact-email-address"
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-royal-blue focus:border-royal-blue text-sm transition-all bg-white"
                      />
                    </div>

                    {/* Interested Product */}
                    <div>
                      <label htmlFor="contact-product-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Interested Solution *
                      </label>
                      <select
                        id="contact-product-select"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-royal-blue focus:border-royal-blue text-sm transition-all bg-white"
                      >
                        {PRODUCTS.map((prod) => (
                          <option key={prod.id} value={prod.id}>
                            {prod.name} ({prod.category})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Role Selector: Retailer / Parent / Business */}
                  <div>
                    <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      I am a *
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      {['Retailer', 'Parent', 'Business'].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, role: r }))}
                          className={`py-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                            formData.role === r
                              ? 'bg-deep-navy text-white border-deep-navy shadow-sm'
                              : 'bg-cloud text-slate-700 border-slate-200 hover:border-royal-blue'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-user-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Requirements / Message *
                    </label>
                    <textarea
                      id="contact-user-message"
                      name="message"
                      required
                      rows={3}
                      placeholder="Describe your device lock requirements, store count, or security needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-royal-blue focus:border-royal-blue text-sm transition-all resize-none bg-white"
                    />
                  </div>

                  {/* Privacy Policy Consent */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent-checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded text-royal-blue focus:ring-royal-blue border-slate-300"
                    />
                    <label htmlFor="consent-checkbox" className="text-xs text-slate-600 leading-relaxed">
                      I agree to the processing of my contact information in accordance with Yogic Software's{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegalModal('privacy')}
                        className="text-royal-blue underline font-semibold hover:text-brand-navy inline"
                      >
                        Privacy Policy
                      </button>
                      .
                    </label>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-rose-600 font-bold">{errorMessage}</p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold hover:from-amber-gold hover:to-sunrise-orange transition-all duration-300 shadow-lg hover:shadow-glow-sunrise active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise-orange"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: 24/7 Support Hotline Panel */}
          <div className="lg:col-span-5 flex flex-col">
            <SupportHotlines />
          </div>

        </div>

      </div>
    </section>
  );
};
