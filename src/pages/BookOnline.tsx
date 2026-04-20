import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BookOnline.css';

const services = [
  {
    id: 'one-to-one',
    title: '1-to-1 Lessons',
    description: 'Personalised lessons tailored to your individual needs, pace, and learning goals. Available for all three languages and all levels.',
    features: ['Fully personalised curriculum', 'Flexible scheduling', 'All levels welcome', 'Exam prep or conversational focus'],
    duration: '55 min',
    highlight: false,
    badge: '',
    cta: 'Enquire Now',
    ctaLink: '/contact',
  },
  {
    id: 'spanish-before-spain',
    title: 'Spanish Before Spain',
    description: "A course designed to prepare you for real conversations using my confidence-first method. You'll speak from day one and arrive in Spain confident and prepared.",
    features: ['15–30 min daily practice', 'Confidence-first approach', 'Real-life scenarios', 'Mindset & strategy sessions'],
    duration: '4 weeks',
    highlight: true,
    badge: 'New',
    cta: 'Enquire Now',
    ctaLink: '/contact',
  },
  {
    id: 'group-sessions',
    title: '6 Week Group Sessions',
    description: 'Learn and practise alongside friends in a small, supportive group setting. Great for building conversational confidence together in a social environment before your trip.',
    features: ['Small group setting', 'Maximum group size six', 'Conversational focus', 'Social learning environment'],
    duration: '6 weeks',
    highlight: false,
    badge: '',
    cta: 'Enquire Now',
    ctaLink: '/contact',
  },
  {
    id: 'block-booking',
    title: '5 Lesson Block Booking',
    description: 'Commit to your learning with a block of five 1-1 online sessions at a discounted rate.',
    features: ['5 online sessions', 'Personalised curriculum', 'Flexible scheduling', 'Best value option'],
    duration: '5 × 55 min',
    highlight: false,
    badge: '',
    cta: 'Enquire Now',
    ctaLink: '/contact',
  },
  {
    id: 'travel-pack',
    title: 'Beginners Spanish Travel Pack',
    description: 'More structure, more depth, and more speaking practice before your trip — with weekly live calls.',
    features: ['35–50 min daily content', 'Live weekly practice call', 'Progressive skill-building', 'Real travel scenarios'],
    duration: 'Programme',
    highlight: false,
    badge: '',
    cta: 'Enquire Now',
    ctaLink: '/contact',
  },
  {
    id: 'exam-prep',
    title: 'Exam Preparation',
    description: 'Focused GCSE and A-Level preparation. Covers reading, writing, listening, and speaking. 100% target grade record.',
    features: ['GCSE & A-Level focused', 'All four skills covered', 'Past paper practice', '100% target grade record'],
    duration: '55 min',
    highlight: false,
    badge: '',
    cta: 'Enquire Now',
    ctaLink: '/contact',
  },
];

export default function BookOnline() {
  useScrollAnimation();
  usePageMeta(
    'Book a Language Lesson Online | Mike Masters Languages',
    'Book online Spanish, French or Russian lessons with Mike Masters Languages. Choose from 1-to-1 sessions, block bookings, exam prep, and the Spanish Before Spain course.'
  );

  return (
    <main className="book-online-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">Book Online</div>
            <h1>Find the <span className="gradient-text">Right</span> Session for You</h1>
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
                {service.badge && <div className="popular-badge">{service.badge}</div>}
                <div className="booking-card-header">
                  <h3>{service.title}</h3>
                  <span className="duration-badge">{service.duration}</span>
                </div>
                <p className="booking-desc">{service.description}</p>
                <ul className="features-list">
                  {service.features.map((f) => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.ctaLink}
                  className={`btn ${service.highlight ? 'btn-primary' : 'btn-secondary'} booking-btn`}
                >
                  {service.cta}
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
