import React, { useState } from 'react';
import { Send, Mail, MapPin, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const { owner } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Hidden honeypot for spam bot detection
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  // Determine Formspree Endpoint from environment variable or central configuration
  const rawFormspree = (import.meta.env.VITE_FORMSPREE_ENDPOINT || owner.formspreeEndpoint || '').trim();
  const formspreeEndpoint = rawFormspree
    ? rawFormspree.startsWith('http')
      ? rawFormspree
      : `https://formspree.io/f/${rawFormspree}`
    : '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side quick check
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please provide your name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      setStatus('error');
      setErrorMessage('Please provide a subject (at least 3 characters).');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please write a message with at least 10 characters.');
      return;
    }

    // Check if Formspree endpoint is configured.
    // If not configured, DO NOT display a fake success message!
    if (!formspreeEndpoint) {
      setStatus('error');
      setErrorMessage(
        'Your message could not be sent. Please try again or contact me directly by email.'
      );
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Send directly to Formspree with visitor email as reply-to
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _gotcha: formData.honeypot, // Formspree built-in honeypot spam filter
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus('success');
        setSuccessMessage("Your message has been sent successfully! I'll get back to you soon.");
        // Clear form only on verified success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        const formspreeError =
          data?.errors?.map((err: { message?: string }) => err.message).filter(Boolean).join(', ') ||
          data?.error ||
          'Your message could not be sent. Please try again or contact me directly by email.';
        setErrorMessage(formspreeError);
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Your message could not be sent. Please try again or contact me directly by email.');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container with 3-column layout matching reference design */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[#12DDF5]/20 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#12DDF5]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Column 1: Invitation & Header */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#12DDF5] uppercase tracking-wider mb-3">
                  <Send className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Let's Build Something Great
                </h2>
                <p className="text-sm text-[#A8B6CA] leading-relaxed">
                  Have a project in mind, an opportunity to discuss, or want to collaborate? I'd love to hear from you.
                </p>
              </div>

              <div className="pt-4 border-t border-[#12DDF5]/10">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] text-xs font-bold shadow-md hover:shadow-[0_0_20px_rgba(18,221,245,0.4)] transition-all cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Direct Contact Info */}
            <div className="lg:col-span-3 space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#07152B]/80 border border-[#12DDF5]/15">
                <div className="w-8 h-8 rounded-lg bg-[#0B1C35] flex items-center justify-center text-[#12DDF5] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-[#A8B6CA] uppercase tracking-wider">Email</div>
                  <a
                    href={`mailto:${owner.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#12DDF5] truncate block transition-colors"
                  >
                    {owner.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp Option */}
              {owner.whatsapp && owner.whatsappUrl && (
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#07152B]/80 border border-[#25D366]/20 hover:border-[#25D366]/50 transition-all group">
                  <a
                    href={owner.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#0B1C35] flex items-center justify-center text-[#25D366] group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(37,211,102,0.35)] shrink-0 mt-0.5 transition-all"
                    aria-label="Chat on WhatsApp"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.237-.245-.588-.493-.508-.678-.517-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.124 3.243 5.146 4.55.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.58-.087 1.78-.727 2.031-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.042 21.688c-1.737 0-3.435-.466-4.93-1.349l-.353-.21-3.669.962.979-3.578-.231-.368A9.704 9.704 0 0 1 2.378 12.04c0-5.342 4.346-9.689 9.691-9.689 2.587 0 5.019 1.008 6.848 2.839a9.634 9.634 0 0 1 2.837 6.85c0 5.343-4.346 9.689-9.712 9.689zm8.268-17.957A11.637 11.637 0 0 0 12.042.44C5.64.44.436 5.644.436 12.046c0 2.045.534 4.043 1.549 5.807L0 24l6.326-1.66a11.603 11.603 0 0 0 5.716 1.492h.005c6.401 0 11.605-5.205 11.605-11.607a11.54 11.54 0 0 0-3.342-8.198z" />
                    </svg>
                  </a>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-[#A8B6CA] uppercase tracking-wider flex items-center gap-1.5">
                      <span>WhatsApp</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                    </div>
                    <a
                      href={owner.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#25D366] truncate block transition-colors"
                      title="Open WhatsApp Chat"
                    >
                      {owner.whatsapp}
                    </a>
                  </div>
                </div>
              )}

              {/* Location */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#07152B]/80 border border-[#12DDF5]/15">
                <div className="w-8 h-8 rounded-lg bg-[#0B1C35] flex items-center justify-center text-[#12DDF5] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-[#A8B6CA] uppercase tracking-wider">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-white truncate">
                    {owner.location}
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#07152B]/80 border border-[#12DDF5]/15">
                <div className="w-8 h-8 rounded-lg bg-[#0B1C35] flex items-center justify-center text-[#12DDF5] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-[#A8B6CA] uppercase tracking-wider">Availability</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#12DDF5] flex items-center gap-1.5 truncate">
                    <span className="w-2 h-2 rounded-full bg-[#12DDF5] animate-pulse"></span>
                    <span>{owner.availability}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Form */}
            <div id="contact-form" className="lg:col-span-5 bg-[#07152B]/90 p-5 sm:p-6 rounded-2xl border border-[#12DDF5]/20 shadow-inner">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot field (hidden from real users, traps automated bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Leave this blank</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-[11px] uppercase tracking-wider text-[#A8B6CA] font-medium mb-1">
                      Your Name <span className="text-[#12DDF5]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#030B1B] border border-[#12DDF5]/20 text-white text-xs sm:text-sm placeholder-[#A8B6CA]/40 focus:outline-none focus:border-[#12DDF5] focus:ring-1 focus:ring-[#12DDF5] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] uppercase tracking-wider text-[#A8B6CA] font-medium mb-1">
                      Your Email <span className="text-[#12DDF5]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@domain.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#030B1B] border border-[#12DDF5]/20 text-white text-xs sm:text-sm placeholder-[#A8B6CA]/40 focus:outline-none focus:border-[#12DDF5] focus:ring-1 focus:ring-[#12DDF5] transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[11px] uppercase tracking-wider text-[#A8B6CA] font-medium mb-1">
                    Subject <span className="text-[#12DDF5]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#030B1B] border border-[#12DDF5]/20 text-white text-xs sm:text-sm placeholder-[#A8B6CA]/40 focus:outline-none focus:border-[#12DDF5] focus:ring-1 focus:ring-[#12DDF5] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] uppercase tracking-wider text-[#A8B6CA] font-medium mb-1">
                    Your Message <span className="text-[#12DDF5]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Hikmat, I'd like to discuss a web project..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#030B1B] border border-[#12DDF5]/20 text-white text-xs sm:text-sm placeholder-[#A8B6CA]/40 focus:outline-none focus:border-[#12DDF5] focus:ring-1 focus:ring-[#12DDF5] transition-all resize-none"
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2 text-rose-300 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Banner */}
                {status === 'success' && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2 text-emerald-300 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] font-bold text-xs sm:text-sm shadow-md hover:shadow-[0_0_20px_rgba(18,221,245,0.4)] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
