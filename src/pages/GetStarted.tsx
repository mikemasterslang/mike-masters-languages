import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './GetStarted.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Level = 'beginner' | 'some-experience' | '';
type Financial = 'yes' | 'no' | '';

export default function GetStarted() {
  useScrollAnimation();
  usePageMeta(
    'Get Started | Mike Masters Languages',
    'Apply for Spanish, French or Russian lessons with Mike Masters Languages. Tell us about your goals and we\'ll find the right programme for you.'
  );

  const [step, setStep] = useState(1);
  const [level, setLevel] = useState<Level>('');
  const [financial, setFinancial] = useState<Financial>('');
  const [goals, setGoals] = useState('');
  const [form, setForm] = useState({ name: '', email: '', language: '', country: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const totalSteps = 4;

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const validateDetails = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim()) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address';
    if (!form.language) errs.language = 'Please select a language';
    if (!form.country.trim()) errs.country = 'Please enter your country';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateDetails()) return;
    setSending(true);
    setSendError('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          language: form.language,
          level: level === 'beginner' ? 'Complete Beginner' : 'Some / Limited Experience',
          message: `FINANCIAL READINESS: ${financial === 'yes' ? 'Yes — ready to invest' : 'Not quite yet'}\n\nGOALS & CHALLENGES:\n${goals}\n\nCOUNTRY OF RESIDENCY: ${form.country}`,
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

  return (
    <main className="get-started-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">Get Started</div>
            <h1>Let's Find Your <span className="gradient-text">Perfect Programme</span></h1>
            <p>Answer a few quick questions so I can recommend the best plan for you.</p>
          </div>
        </div>
      </section>

      <section className="section gs-section">
        <div className="container">
          {submitted ? (
            <div className="gs-success card fade-in">
              <div className="gs-success-icon">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h2>Application Received!</h2>
              <p>Thanks for applying, {form.name}. I'll review your answers and get back to you within 24 hours with my recommendation.</p>
            </div>
          ) : (
            <div className="gs-card card fade-in">
              <div className="gs-progress">
                <div className="gs-progress-bar">
                  <div className="gs-progress-fill" style={{ width: `${(step / totalSteps) * 100}%` }} />
                </div>
                <span className="gs-step-label">Step {step} of {totalSteps}</span>
              </div>

              {step === 1 && (
                <div className="gs-step">
                  <h2>What is your current level?</h2>
                  <p className="gs-subtitle">Select the option that best describes you.</p>
                  <div className="gs-options">
                    <button
                      type="button"
                      className={`gs-option${level === 'beginner' ? ' selected' : ''}`}
                      onClick={() => setLevel('beginner')}
                    >
                      <span className="gs-option-title">Complete Beginner</span>
                      <span className="gs-option-desc">I have little to no experience in this language</span>
                    </button>
                    <button
                      type="button"
                      className={`gs-option${level === 'some-experience' ? ' selected' : ''}`}
                      onClick={() => setLevel('some-experience')}
                    >
                      <span className="gs-option-title">Some / Limited Experience</span>
                      <span className="gs-option-desc">I have studied this language before but want to improve</span>
                    </button>
                  </div>
                  <div className="gs-nav gs-nav-right">
                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!level}>
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="gs-step">
                  <h2>It's great you've found me!</h2>
                  <p className="gs-subtitle">Are you actually ready to invest in your language learning financially?</p>
                  <div className="gs-options">
                    <button
                      type="button"
                      className={`gs-option${financial === 'yes' ? ' selected' : ''}`}
                      onClick={() => setFinancial('yes')}
                    >
                      <span className="gs-option-title">Yes, I'm ready</span>
                      <span className="gs-option-desc">I understand quality tuition is an investment and I'm committed</span>
                    </button>
                    <button
                      type="button"
                      className={`gs-option${financial === 'no' ? ' selected' : ''}`}
                      onClick={() => setFinancial('no')}
                    >
                      <span className="gs-option-title">Not quite yet</span>
                      <span className="gs-option-desc">I'd like to find out more before committing financially</span>
                    </button>
                  </div>
                  <div className="gs-nav">
                    <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!financial}>
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="gs-step">
                  <h2>Tell me a bit more</h2>
                  <p className="gs-subtitle">What has made you want to start now? What's been your biggest challenge so far and what are your goals?</p>
                  <textarea
                    className="gs-textarea"
                    placeholder="Share as much or as little as you like..."
                    rows={6}
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                  />
                  <div className="gs-nav">
                    <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!goals.trim()}>
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="gs-step">
                  <h2>Almost there!</h2>
                  <p className="gs-subtitle">Fill in your details and I'll be in touch within 24 hours.</p>
                  <form onSubmit={handleSubmit} noValidate className="gs-details-form">
                    <div className="form-group">
                      <label htmlFor="gs-name">Name <span className="required">*</span></label>
                      <input
                        id="gs-name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                        className={errors.name ? 'error' : ''}
                        autoComplete="name"
                      />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="gs-email">Email <span className="required">*</span></label>
                      <input
                        id="gs-email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                        className={errors.email ? 'error' : ''}
                        autoComplete="email"
                      />
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="gs-language">Desired Language <span className="required">*</span></label>
                      <select
                        id="gs-language"
                        value={form.language}
                        onChange={(e) => setForm(p => ({ ...p, language: e.target.value }))}
                        className={errors.language ? 'error' : ''}
                      >
                        <option value="">Select a language</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Russian">Russian</option>
                      </select>
                      {errors.language && <span className="field-error">{errors.language}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="gs-country">Country of Residency <span className="required">*</span></label>
                      <input
                        id="gs-country"
                        type="text"
                        placeholder="e.g. United Kingdom"
                        value={form.country}
                        onChange={(e) => setForm(p => ({ ...p, country: e.target.value }))}
                        className={errors.country ? 'error' : ''}
                        autoComplete="country-name"
                      />
                      {errors.country && <span className="field-error">{errors.country}</span>}
                    </div>
                    {sendError && <p className="send-error">{sendError}</p>}
                    <div className="gs-nav">
                      <button type="button" className="btn btn-secondary" onClick={handleBack}>Back</button>
                      <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                        {sending ? 'Sending...' : 'Submit Application'}
                        {!sending && (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
