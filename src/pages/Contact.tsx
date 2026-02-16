import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  language: string;
  level: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// EmailJS configuration — replace these with your actual IDs
const EMAILJS_SERVICE_ID = 'service_XXXXXXX';
const EMAILJS_TEMPLATE_ID = 'template_XXXXXXX';
const EMAILJS_PUBLIC_KEY = 'XXXXXXXXXXXXXXX';

export default function Contact() {
  useScrollAnimation();

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    language: '',
    level: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) errs.message = 'Please enter a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSendError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          language: form.language,
          level: form.level,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch {
      setSendError('Something went wrong. Please try emailing michael.s.andrews@outlook.com directly.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">Contact</div>
            <h1>Let's Start <span className="gradient-text">Talking</span></h1>
            <p>
              Have a question, want to book a session, or just curious about what I offer?
              Drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Form */}
          <div className="contact-form-col fade-in-left">
            {submitted ? (
              <div className="success-message card">
                <div className="success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for getting in touch. I'll reply as soon as I can — usually within 24 hours.</p>
                <button type="button" className="btn btn-primary" onClick={() => { setSubmitted(false); setSendError(''); setForm({ name: '', email: '', language: '', level: '', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit} noValidate>
                <h2>Send a Message</h2>

                <div className="form-group">
                  <label htmlFor="name">Name <span className="required">*</span></label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={errors.name ? 'error' : ''}
                    autoComplete="name"
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={errors.email ? 'error' : ''}
                    autoComplete="email"
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="language">Language</label>
                    <select
                      id="language"
                      value={form.language}
                      onChange={(e) => handleChange('language', e.target.value)}
                    >
                      <option value="">Select a language</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="russian">Russian</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="level">Current Level</label>
                    <select
                      id="level"
                      value={form.level}
                      onChange={(e) => handleChange('level', e.target.value)}
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="elementary">Elementary</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="gcse">GCSE Student</option>
                      <option value="alevel">A-Level Student</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your goals, questions, or what you're looking for..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                {sendError && <p className="send-error">{sendError}</p>}
                <button type="submit" className="btn btn-primary btn-lg submit-btn" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                  {!sending && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
                </button>
              </form>
            )}
          </div>

          {/* Info Column */}
          <div className="contact-info-col fade-in-right">
            <div className="info-card card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3>Email</h3>
              <a href="mailto:michael.s.andrews@outlook.com">michael.s.andrews@outlook.com</a>
            </div>

            <div className="info-card card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>Response Time</h3>
              <p>I aim to reply within 24 hours. For urgent queries, please mention it in your message.</p>
            </div>

            <div className="info-card card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3>Availability</h3>
              <p>Sessions available Monday to Saturday, mornings and evenings. Flexible scheduling to suit your routine.</p>
            </div>

            <div className="info-card card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3>Location</h3>
              <p>All sessions are conducted online, so you can learn from anywhere in the world.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
