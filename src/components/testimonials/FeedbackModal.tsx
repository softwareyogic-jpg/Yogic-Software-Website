import React, { useState, useEffect } from 'react';
import { X, Star, Send, CheckCircle2 } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/70 backdrop-blur-md animate-fadeIn overscroll-contain overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-y-auto overscroll-contain animate-scaleUp p-6 sm:p-8 my-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close feedback modal"
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-deep-navy">
              Thank You for Your Feedback!
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Your valuable input helps Yogic Software continuously evolve and serve our partners better.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-bold text-sunrise-orange tracking-wider">
                Community Reviews
              </span>
              <h2 id="feedback-modal-title" className="font-heading font-extrabold text-2xl text-deep-navy mt-1">
                We Value Your Feedback
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Share your experience with Yogic Software to help us improve.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-royal-blue focus:border-royal-blue text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      aria-label={`Rate ${star} stars`}
                      className="p-1 text-amber-gold hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating ? 'fill-amber-gold' : 'stroke-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-500">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Experience / Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about how Yogic Astra or our support helped your business..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-royal-blue focus:border-royal-blue text-sm transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold hover:from-amber-gold hover:to-sunrise-orange transition-all shadow-md active:scale-95 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Feedback</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

