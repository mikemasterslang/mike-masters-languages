import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './BookOnline.css';

const services = [
  {
    id: 'one-to-one',
    title: '1-to-1 Sessions',
    description: 'Personalised lessons tailored to your individual needs, pace, and learning goals. Available for all three languages and all levels.',
    features: ['Fully personalised curriculum', 'Flexible scheduling', 'All levels welcome', 'Exam prep or conversational focus'],
    duration: '60 min',
    highlight: false,
  },
  {
    id: 'travel-pack',
    title: 'Travel Pack',
    description: 'Complete Spanish or French travel programme designed to have you confident to try out your skills with locals in under 30 days.',
    features: ['Listening & video content', 'Small group sessions', 'Speaking & listening practice', 'Travel-ready in 30 days'],
    duration: '30-day programme',
    highlight: true,
  },
  {
    id: 'group-sessions',
    title: 'Small Group Sessions',
    description: 'Learn collaboratively in small, focused groups. Build confidence through conversation practice and peer learning.',
    features: ['2–4 students per group', 'Collaborative learning', 'Conversation focused', 'More affordable option'],
    duration: '60 min',
    highlight: false,
  },
  {
    id: 'speak-up-abroad',
    title: 'Speak Up Abroad',
    description: 'An extension to the Travel Pack with additional days of content. Use it to supplement your beginners course or as a booster before a trip.',
    features: ['6 additional days of content', 'Confidence booster', 'Supplements Travel Pack', 'Trip preparation'],
    duration: '6-day extension',
    highlight: false,
  },
  {
    id: 'exam-prep',
    title: 'Exam Preparation',
    description: 'Focused GCSE and A-Level preparation. Covers reading, writing, listening, and speaking with proven results.',
    features: ['GCSE & A-Level focused', 'All four skills covered', 'Past paper practice', '100% target grade record'],
    duration: '60 min',
    highlight: false,
  },
  {
    id: 'conversation',
    title: 'Conversation Practice',
    description: 'Dedicated sessions designed to build your speaking and listening confidence in real-world scenarios.',
    features: ['Real-world scenarios', 'Pronunciation focus', 'Listening comprehension', 'Cultural context'],
    duration: '45 min',
    highlight: false,
  },
];

export default function BookOnline() {
  useScrollAnimation();

  return (
    <main className="book-online-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">Book Online</div>
            <h1>Find the Right <span className="gradient-text">Session</span> for You</h1>
            <p>
              Whether you're after exam prep, conversational confidence or travel-ready language skills —
              there's a session to match your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="booking-grid">
            {services.map((service) => (
              <article
                key={service.id}
                className={`booking-card card fade-in${service.highlight ? ' highlighted' : ''}`}
              >
                {service.highlight && <div className="popular-badge">Most Popular</div>}
                <div className="booking-card-header">
                  <h3>{service.title}</h3>
                  <span className="duration-badge">{service.duration}</span>
                </div>
                <p className="booking-desc">{service.description}</p>
                <ul className="features-list">
                  {service.features.map((f) => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${service.highlight ? 'btn-primary' : 'btn-secondary'} booking-btn`}
                >
                  Enquire Now
                </Link>
              </article>
            ))}
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
