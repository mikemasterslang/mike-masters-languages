import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './BookOnline.css';

const services = [
  {
    id: 'one-to-one',
    title: '1-to-1 Online Lessons',
    description: 'Personalised lessons tailored to your individual needs, pace, and learning goals. Available for all three languages and all levels.',
    features: ['Fully personalised curriculum', 'Flexible scheduling', 'All levels welcome', 'Exam prep or conversational focus'],
    duration: '55 min',
    price: '£49',
    priceDetail: 'per 55 min online',
    altPrice: '£65',
    altPriceDetail: 'per 55 min in-person',
    highlight: false,
    cta: 'Book Now',
    ctaLink: '/contact',
  },
  {
    id: 'block-booking',
    title: '5 Lesson Block Booking',
    description: 'Commit to your learning with a block of five 1-1 online sessions at a discounted rate.',
    features: ['5 online sessions', 'Personalised curriculum', 'Flexible scheduling', 'Save £25'],
    duration: '5 × 55 min',
    price: '£220',
    priceDetail: '5 online lessons',
    saving: 'Save £25',
    highlight: true,
    cta: 'Book Now',
    ctaLink: '/contact',
  },
  {
    id: 'exam-prep',
    title: 'Exam Preparation',
    description: 'Focused GCSE and A-Level preparation. Covers reading, writing, listening, and speaking. 100% target grade record.',
    features: ['GCSE & A-Level focused', 'All four skills covered', 'Past paper practice', '100% target grade record'],
    duration: '55 min',
    price: '£49',
    priceDetail: 'per 55 min online',
    altPrice: '£65',
    altPriceDetail: 'per 55 min in-person',
    highlight: false,
    cta: 'Book Now',
    ctaLink: '/contact',
  },
  {
    id: 'speak-up-abroad',
    title: 'Speak Up Abroad',
    description: 'An extension programme with additional content to supplement your course or serve as a confidence booster before a trip.',
    features: ['Additional content', 'Confidence booster', 'Supplements your course', 'Trip preparation'],
    duration: 'Extension',
    price: '£40',
    priceDetail: '',
    highlight: false,
    cta: 'Book Now',
    ctaLink: '/contact',
  },
  {
    id: 'conversation',
    title: 'Conversation Practice',
    description: 'Dedicated sessions designed to build your speaking and listening confidence in real-world scenarios.',
    features: ['Real-world scenarios', 'Pronunciation focus', 'Listening comprehension', 'Cultural context'],
    duration: 'Session',
    price: '£40',
    priceDetail: '',
    highlight: false,
    cta: 'Book Now',
    ctaLink: '/contact',
  },
  {
    id: 'group-sessions',
    title: 'Small Group Sessions',
    description: 'Learn collaboratively in small, focused groups. Build confidence through conversation practice and peer learning.',
    features: ['2–4 students per group', 'Collaborative learning', 'Conversation focused', 'More affordable option'],
    duration: 'Session',
    highlight: false,
    cta: 'Enquire Now',
    ctaLink: '/contact',
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
                {service.highlight && <div className="popular-badge">Best Value</div>}
                <div className="booking-card-header">
                  <h3>{service.title}</h3>
                  <span className="duration-badge">{service.duration}</span>
                </div>
                <p className="booking-desc">{service.description}</p>
                {'price' in service && service.price && (
                  <div className="booking-pricing">
                    <div className="booking-price-row">
                      <span className="booking-price">{service.price}</span>
                      {service.priceDetail && <span className="booking-price-detail">{service.priceDetail}</span>}
                    </div>
                    {'altPrice' in service && service.altPrice && (
                      <div className="booking-price-row">
                        <span className="booking-price">{service.altPrice}</span>
                        <span className="booking-price-detail">{service.altPriceDetail}</span>
                      </div>
                    )}
                    {'saving' in service && service.saving && (
                      <div className="booking-saving">{service.saving}</div>
                    )}
                  </div>
                )}
                <ul className="features-list">
                  {service.features.map((f) => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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
