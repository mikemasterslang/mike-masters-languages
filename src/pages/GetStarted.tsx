import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import FlagIcon from '../components/FlagIcon';
import './GetStarted.css';
import './Spanish.css';
import './Courses.css';
import './BookOnline.css';

type AgeRange = '16-17' | '18-24' | '25-34' | '35-44' | '45+' | '';
type Level = 'beginner' | 'some-experience' | '';
type Financial = 'yes' | 'no' | '';

export default function GetStarted() {
  useScrollAnimation();
  usePageMeta(
    'Get Started | Mike Masters Languages',
    'Apply for Spanish, French or Russian lessons with Mike Masters Languages. Tell us about your goals and we\'ll find the right programme for you.'
  );

  const [step, setStep] = useState(1);
  const [age, setAge] = useState<AgeRange>('');
  const [level, setLevel] = useState<Level>('');
  const [financial, setFinancial] = useState<Financial>('');
  const [goals, setGoals] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 5;

  useEffect(() => {
    if (step !== 5) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
        setSubmitted(true);
      }
    };
    window.addEventListener('message', handleCalendlyEvent);
    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [step]);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

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

      {/* Welcome Video */}
      <section className="section gs-video-section">
        <div className="container">
          <div className="gs-video-wrapper fade-in">
            <iframe
              src="https://www.youtube.com/embed/yvWluEvawzg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Welcome from Mike"
            />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section gs-section">
        <div className="container">
          {submitted ? (
            <div className="gs-success card">
              <div className="gs-success-icon">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h2>Thank You!</h2>
              <p>Your submission has been completed. I look forward to having a chat with you — but if you have any questions in the meantime, please feel free to reach out!</p>
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
                  <h2>I am...</h2>
                  <p className="gs-subtitle">Select your age range.</p>
                  <div className="gs-options gs-options-grid">
                    {(['16-17', '18-24', '25-34', '35-44', '45+'] as AgeRange[]).map((range) => (
                      <button key={range} type="button" className={`gs-option gs-option-compact${age === range ? ' selected' : ''}`} onClick={() => setAge(range)}>
                        <span className="gs-option-title">{range}</span>
                      </button>
                    ))}
                  </div>
                  <div className="gs-nav gs-nav-right">
                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!age}>Continue</button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="gs-step">
                  <h2>What is your current level?</h2>
                  <p className="gs-subtitle">Select the option that best describes you.</p>
                  <div className="gs-options">
                    <button type="button" className={`gs-option${level === 'beginner' ? ' selected' : ''}`} onClick={() => setLevel('beginner')}>
                      <span className="gs-option-title">Complete Beginner</span>
                      <span className="gs-option-desc">I have little to no experience in this language</span>
                    </button>
                    <button type="button" className={`gs-option${level === 'some-experience' ? ' selected' : ''}`} onClick={() => setLevel('some-experience')}>
                      <span className="gs-option-title">Some / Limited Experience</span>
                      <span className="gs-option-desc">I have studied this language before but want to improve</span>
                    </button>
                  </div>
                  <div className="gs-nav">
                    <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!level}>Continue</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="gs-step">
                  <h2>It's great you've found me!</h2>
                  <p className="gs-subtitle">Are you actually ready to invest in your language learning financially?</p>
                  <div className="gs-options">
                    <button type="button" className={`gs-option${financial === 'yes' ? ' selected' : ''}`} onClick={() => setFinancial('yes')}>
                      <span className="gs-option-title">Yes, I'm ready</span>
                      <span className="gs-option-desc">I understand quality tuition is an investment and I'm committed</span>
                    </button>
                    <button type="button" className={`gs-option${financial === 'no' ? ' selected' : ''}`} onClick={() => setFinancial('no')}>
                      <span className="gs-option-title">Not quite yet</span>
                      <span className="gs-option-desc">I'd like to find out more before committing financially</span>
                    </button>
                  </div>
                  <div className="gs-nav">
                    <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!financial}>Continue</button>
                  </div>
                </div>
              )}

              {step === 4 && (
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
                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!goals.trim()}>Continue</button>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="gs-step">
                  <h2>Book a chat with me</h2>
                  <p className="gs-subtitle">Pick a time that suits you and we'll talk through your options together.</p>
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/michael-s-andrews/course-enquiries?hide_gdpr_banner=1&hide_event_type_details=1"
                    style={{ minWidth: '320px', height: '700px', width: '100%', marginTop: '0.5rem' }}
                  />
                  <div className="gs-nav" style={{ marginTop: '1rem' }}>
                    <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      </section>

      {/* Spanish Before Spain */}
      <section className="section course-feature">
        <div className="container">
          <div className="course-feature-grid">
            <div className="course-feature-content fade-in-left">
              <div className="hero-badge">Featured Course</div>
              <h2>Spanish before Spain</h2>
              <p className="course-powered">Powered by the Confidence-First Spanish Method</p>
              <p className="course-tagline">
                Speak confidently before you arrive - even with limited previous Spanish experience
              </p>
              <div className="course-body">
                <p>
                  This is for travellers and digital nomads going to Spain who have limited experience of learning Spanish but feel anxious about everyday conversations.
                </p>
                <p>
                  You want to experience Spain like a local, feel comfortable speaking, and maybe even be complimented on your Spanish — but apps and school taught you to recognise words, not actually speak, so you still freeze when it matters.
                </p>
                <p>
                  Using a confidence-first, real-life method shaped by learning multiple languages and living abroad, you'll learn how to respond without panicking, handle daily situations, and speak imperfect Spanish with confidence.
                </p>
                <p className="course-highlight">
                  Arrive in Spain feeling prepared, capable, and ready to belong instead of anxious and silent.
                </p>
              </div>
            </div>
            <div className="course-feature-visual fade-in-right">
              <div className="course-visual-card">
                <span className="course-flag"><FlagIcon country="spain" size={80} /></span>
                <h3>Spanish before Spain</h3>
                <p>Confidence-First Method</p>
                <ul className="course-highlights-list">
                  <li>Speak from day one</li>
                  <li>Real-life scenarios</li>
                  <li>Handle daily situations</li>
                  <li>Travel-ready confidence</li>
                  <li>Perfect for those with limited experience of Spanish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speak Spanish Sin Miedo */}
      <section className="section course-feature alt-bg">
        <div className="container">
          <div className="course-feature-grid">
            <div className="course-feature-visual fade-in-left">
              <div className="course-visual-card">
                <span className="course-flag">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                  </svg>
                </span>
                <h3>Speak Spanish Sin Miedo</h3>
                <p>Confidence-First Method</p>
                <ul className="course-highlights-list">
                  <li>A1 to B1/B2 in 90 days</li>
                  <li>30 minutes a day</li>
                  <li>Deeper fluency foundations</li>
                  <li>Real Spain, not textbook Spanish</li>
                  <li>Videos, audios and full dialogues throughout</li>
                  <li>Speak comfortably not just survive</li>
                </ul>
              </div>
            </div>
            <div className="course-feature-content fade-in-right">
              <div className="hero-badge">In-Depth Programme</div>
              <h2>Speak Spanish Sin Miedo</h2>
              <p className="course-powered">Powered by the Confidence-First Spanish Method</p>
              <p className="course-tagline">
                Go from complete beginner to genuine B1/B2 — in 90 days, 30 minutes a day, without ever feeling like you're back in a classroom.
              </p>
              <div className="course-body">
                <p>
                  This is for anyone who wants to speak real Spanish in Spain — not just survive it. Whether you're planning a trip, going every year, or simply tired of nodding and smiling while the conversation happens around you.
                </p>
                <p>
                  You've tried apps. You've maybe tried lessons. But nothing has ever taken you far enough to feel genuinely confident — to order without panicking, tell a story, handle something going wrong, or have a proper conversation with a real Spanish person.
                </p>
                <p>
                  Using a context-first, confidence-led method built specifically around life in Spain, you'll work through 84 structured days covering every tense, every real-world situation and the cultural knowledge that separates tourists from people who actually belong.
                </p>
                <p>By Day 84 you won't just have learned Spanish. You'll speak it.</p>
                <ul className="course-highlights-list" style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem' }}>
                  <li>A1 to B1/B2 in 90 days</li>
                  <li>30 minutes a day</li>
                  <li>Deeper fluency foundations</li>
                  <li>Real Spain, not textbook Spanish</li>
                  <li>Videos, audios and full dialogues throughout</li>
                  <li>Speak comfortably not just survive</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Options */}
      <section className="section why-challenges">
        <div className="container">
          <h2 className="section-title fade-in">
            Other <span className="gradient-text">Options</span>
          </h2>
          <p className="section-subtitle fade-in">
            Additional programmes to suit your goals.
          </p>
          <div className="benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="benefit-card card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>6 Week Conversation Class — Individual</h3>
              <p>A dedicated six-week programme focused entirely on your speaking and listening. Build conversational confidence quickly with this immersive method in your target language.</p>
              <Link to="/get-started" className="btn btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Enquire Now</Link>
            </div>
            <div className="benefit-card card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>6 Week Conversation Class — Group</h3>
              <p>Learn and practise alongside friends in a small, supportive group setting. Great for building conversational confidence together in a social environment before your trip. Maximum group size six.</p>
              <Link to="/get-started" className="btn btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Enquire Now</Link>
            </div>
            <div className="benefit-card card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>6 Week Pre Exam Blast</h3>
              <p>Intensive, targeted preparation in the lead-up to your GCSE or A-Level exams. Cover the key areas fast and go into your exam feeling ready. Available for Spanish and French.</p>
              <Link to="/get-started" className="btn btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Enquire Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1-1 Online Tuition */}
      <section className="section course-section">
        <div className="container">
          <h2 className="section-title fade-in">
            One-on-One <span className="gradient-text">Online Tuition</span>
          </h2>
          <div className="tuition-intro fade-in">
            <p>
              One-on-one sessions can be a great way to improve specific areas of your learning and are flexible when fitting into your weekly routine.
            </p>
            <p>
              Whether you'd like to learn Spanish, French or Russian, as an adult learner, regardless of your level and goals, I would love to help in any way that I can!
            </p>
            <p>
              For the last five years, I am proud to say that I have helped all of my GCSE and A-level students achieve their target grades or better. Whatever the requirements, I'd love to hear from you and see how I can help you maximise your potential!
            </p>
          </div>
          <div className="tuition-grid">
            <div className="tuition-card card fade-in">
              <div className="tuition-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>1-1 Online Lessons</h3>
              <p>Fully personalised curriculum with flexible scheduling. All levels welcome — from complete beginner to advanced.</p>
              <Link to="/get-started" className="btn btn-primary tuition-btn">Book Now</Link>
            </div>
            <div className="tuition-card card fade-in">
              <div className="tuition-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3>5 Lesson Block Booking</h3>
              <p>Commit to your learning with a block of five 1-1 online sessions at a discounted rate.</p>
              <Link to="/get-started" className="btn btn-primary tuition-btn">Book Now</Link>
            </div>
            <div className="tuition-card card fade-in">
              <div className="tuition-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>Exam Preparation</h3>
              <p>Focused GCSE and A-Level French, Spanish and Russian preparation covering reading, writing, listening and speaking. 100% target grade record.</p>
              <Link to="/get-started" className="btn btn-primary tuition-btn">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <h2 className="section-title fade-in">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle fade-in">
            Getting started is simple — just three easy steps.
          </p>
          <div className="steps-grid">
            <div className="step-card fade-in">
              <div className="step-number">1</div>
              <h3>Get in Touch</h3>
              <p>Send me a message through the contact form or book directly. Tell me about your goals and current level.</p>
            </div>
            <div className="step-connector" aria-hidden="true" />
            <div className="step-card fade-in">
              <div className="step-number">2</div>
              <h3>Plan Your Sessions</h3>
              <p>We'll work out a schedule and programme that fits your needs, whether that's weekly sessions or an intensive course.</p>
            </div>
            <div className="step-connector" aria-hidden="true" />
            <div className="step-card fade-in">
              <div className="step-number">3</div>
              <h3>Start Learning</h3>
              <p>Begin your language journey with engaging, personalised lessons designed to build real-world confidence.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
