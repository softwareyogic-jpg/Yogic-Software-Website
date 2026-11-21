import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonialsData';
import { FeedbackModal } from './FeedbackModal';
import { Star, MessageSquarePlus, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-cloud text-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Voices of Trust"
          title="What People Are Saying"
          subtitle="Trusted by retailers and customers across India."
        />

        {/* 4 Unique Testimonial Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-amber-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-gold mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="relative text-sm text-slate-700 leading-relaxed font-normal">
                  <Quote className="w-6 h-6 text-royal-blue/20 mb-2 -scale-x-100" />
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author profile */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full text-white font-heading font-black text-xs flex items-center justify-center flex-shrink-0 shadow-sm ${t.avatarBg}`}
                >
                  {t.avatarInitial}
                </div>
                <div className="overflow-hidden">
                  <span className="block font-heading font-bold text-sm text-deep-navy truncate">
                    {t.name}
                  </span>
                  <span className="block text-[11px] text-royal-blue font-medium truncate">
                    {t.handle}
                  </span>
                  <span className="block text-[10px] text-slate-400 truncate">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Feedback Action Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setFeedbackOpen(true)}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-deep-navy bg-white hover:bg-slate-50 border-2 border-amber-gold/40 hover:border-amber-gold transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-gold"
          >
            <MessageSquarePlus className="w-4 h-4 text-sunrise-orange group-hover:scale-110 transition-transform" />
            <span>Add Your Feedback</span>
          </button>
        </div>

      </div>

      {/* Feedback Submission Modal */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />
    </section>
  );
};

