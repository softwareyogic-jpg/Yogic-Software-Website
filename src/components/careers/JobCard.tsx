import React, { useState } from 'react';
import type { JobPosition } from '../../data/careersData';
import { ChevronDown, ChevronUp, MapPin, Briefcase, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

interface JobCardProps {
  job: JobPosition;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-amber-gold/40">
      {/* Card Header */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sunrise-orange/15 text-sunrise-orange border border-sunrise-orange/30">
            {job.badge}
          </span>
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-royal-blue" />
              <span>{job.location}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-amber-gold" />
              <span>{job.roleType}</span>
            </span>
          </div>
        </div>

        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-deep-navy">
          {job.title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {job.overview}
        </p>

        {/* Quick Contact & Action strip */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-600">
            <a
              href={`tel:${job.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-royal-blue transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-sunrise-orange" />
              <span>{job.phone}</span>
            </a>
            <a
              href={`mailto:${job.email}`}
              className="flex items-center gap-1.5 hover:text-royal-blue transition-colors font-bold"
            >
              <Mail className="w-3.5 h-3.5 text-royal-blue" />
              <span>{job.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Hide Details' : 'View Scope'}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            <a
              href={`mailto:${job.email}?subject=Application for ${encodeURIComponent(job.title)}`}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold hover:from-amber-gold hover:to-sunrise-orange transition-all shadow-sm hover:shadow-md"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Expandable Section */}
      {isExpanded && (
        <div className="px-6 pb-8 sm:px-8 pt-4 bg-cloud/50 border-t border-slate-200/60 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          {/* Responsibilities */}
          <div>
            <h4 className="font-heading font-bold text-sm text-deep-navy mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sunrise-orange" />
              <span>Key Responsibilities</span>
            </h4>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div>
            <h4 className="font-heading font-bold text-sm text-deep-navy mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-royal-blue" />
              <span>Eligibility &amp; Skills</span>
            </h4>
            <ul className="space-y-2">
              {job.eligibility.map((el, i) => (
                <li key={i} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-royal-blue mt-0.5 flex-shrink-0" />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="font-heading font-bold text-sm text-deep-navy mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-gold" />
              <span>Growth &amp; Benefits</span>
            </h4>
            <ul className="space-y-2">
              {job.benefits.map((ben, i) => (
                <li key={i} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-gold mt-0.5 flex-shrink-0" />
                  <span>{ben}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
