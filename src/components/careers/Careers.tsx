import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Phone, Mail, MessageSquare, ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';

export const Careers: React.FC = () => {
  const hrPhone = '+91 7596055178';
  const hrPhoneDisplay = '+91 75960 55178';
  const hrEmail = 'hr@yogicsoftware.com';
  const whatsappUrl = `https://wa.me/917596055178?text=${encodeURIComponent(
    'Hello HR Team, I would like to enquire about career and job opportunities at Yogic Software.'
  )}`;

  return (
    <section id="careers" className="relative py-24 md:py-32 bg-slate-50/60 text-ink overflow-hidden border-t border-slate-200/60">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-royal-blue/10 via-amber-gold/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="CAREERS & TALENT"
          title="Career & Job Enquiries"
          subtitle="Interested in joining Yogic Software? Reach out directly to our Human Resources team for all hiring enquiries and resume submissions."
        />

        {/* Central Dedicated HR Contact Box */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white border-2 border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-12 relative">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-gold/15 flex items-center justify-center text-amber-gold flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-sunrise-orange" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-sunrise-orange font-bold block">
                    HR Recruitment Desk
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-deep-navy">
                    Direct Career Inquiries
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Accepting Resumes</span>
              </div>
            </div>

            {/* Explanatory Text */}
            <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              We are constantly scouting talented, ambitious professionals across mobile software engineering, platform security, distributor relations, and field operations. For all job enquiries, internship applications, or CV submissions, please contact our Human Resources department directly:
            </p>

            {/* Two Primary HR Contact Tiles */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Phone / WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-amber-gold/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sunrise-orange/15 text-sunrise-orange flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                    HR Helpline / WhatsApp
                  </span>
                  <a
                    href={`tel:${hrPhone.replace(/\s+/g, '')}`}
                    className="mt-1 text-xl sm:text-2xl font-heading font-extrabold text-deep-navy hover:text-sunrise-orange transition-colors block"
                  >
                    {hrPhoneDisplay}
                  </a>
                  <p className="mt-1 text-xs text-slate-500">
                    Direct call or WhatsApp message for immediate enquiry.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`tel:${hrPhone.replace(/\s+/g, '')}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-deep-navy hover:bg-royal-blue text-white text-xs font-bold font-heading flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call HR</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-heading flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-royal-blue/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-royal-blue/15 text-royal-blue flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                    HR Official Email
                  </span>
                  <a
                    href={`mailto:${hrEmail}?subject=Job%20Enquiry%20%E2%80%94%20Yogic%20Software`}
                    className="mt-1 text-xl sm:text-2xl font-heading font-extrabold text-deep-navy hover:text-royal-blue transition-colors block break-all"
                  >
                    {hrEmail}
                  </a>
                  <p className="mt-1 text-xs text-slate-500">
                    Send your updated CV, portfolio, or role queries.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={`mailto:${hrEmail}?subject=Job%20Enquiry%20%E2%80%94%20Yogic%20Software`}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sunrise-orange to-amber-gold hover:brightness-105 text-midnight text-xs font-extrabold font-heading flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Your Resume</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Assurance Note */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>All resume submissions are treated with strict confidentiality.</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">Head Office: Kaikhali VIP Road, Kolkata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
