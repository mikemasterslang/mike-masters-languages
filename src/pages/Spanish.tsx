import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Spanish.css';

export default function Spanish() {
  useScrollAnimation();

  return (
    <main className="spanish-page">
      {/* Hero */}
      <section className="page-hero spanish-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">
              <span className="spanish-flag-inline">🇪🇸</span> Spanish Programmes
            </div>
            <h1>
              Learn <span className="gradient-text">Spanish</span> Your Way
            </h1>
            <p>
              Whether you want a structured deep-dive or a confidence-first crash course,
              there's a programme built for you.
            </p>
            <div className="spanish-hero-actions">
              <Link to="/book-online" className="btn btn-primary btn-lg">Get Started</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Book an Enquiry Call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spanish Before Spain */}
      <section className="section spanish-course-section">
        <div className="container">
          <div className="spanish-course-grid">
            <div className="spanish-course-content fade-in-left">
              <div className="hero-badge">Crash Course</div>
              <h2>Spanish Before Spain</h2>
              <p className="spanish-course-subtitle">Confidence-First Training</p>
              <p className="spanish-course-tagline">
                Prepare for real conversations — before you even land.
              </p>
              <div className="spanish-course-body">
                <p>
                  Spanish Before Spain is a confidence-first training designed to prepare you for real conversations — before you even land.
                </p>
                <p>You'll complete 15–30 minutes a day, with:</p>
                <ul className="spanish-feature-list">
                  <li>6 days of structured, independent practice</li>
                  <li>A 7th day each week focused on mindset + strategy</li>
                </ul>
                <p>It's for people who want to:</p>
                <ul className="spanish-feature-list">
                  <li>Speak like a real person — not a textbook</li>
                  <li>Feel calm when a local responds</li>
                  <li>Recover when you forget words or get lost in conversation</li>
                  <li>Sound natural, even as a beginner</li>
                </ul>
              </div>
              <div className="spanish-course-actions">
                <Link to="/book-online" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Enquire Now</Link>
              </div>
            </div>
            <div className="spanish-course-visual fade-in-right">
              <div className="spanish-visual-card sbs-card">
                <span className="spanish-card-flag">🇪🇸</span>
                <h3>Spanish Before Spain</h3>
                <p>Confidence-First Method</p>
                <div className="spanish-card-detail">
                  <span className="detail-label">Daily commitment</span>
                  <span className="detail-value">15–30 min</span>
                </div>
                <div className="spanish-card-detail">
                  <span className="detail-label">Structure</span>
                  <span className="detail-value">6 + 1 days/week</span>
                </div>
                <ul className="spanish-card-highlights">
                  <li>Confidence-first approach</li>
                  <li>Mindset &amp; strategy sessions</li>
                  <li>Sound natural from day one</li>
                  <li>Independent practice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beginners Spanish Travel Pack */}
      <section className="section spanish-course-section alt-bg">
        <div className="container">
          <div className="spanish-course-grid reverse">
            <div className="spanish-course-content fade-in-right">
              <div className="hero-badge">In-Depth Programme</div>
              <h2>Beginners Spanish Travel Pack</h2>
              <p className="spanish-course-subtitle">Structured &amp; Guided Learning</p>
              <p className="spanish-course-tagline">
                More structure, more depth, and more speaking practice before your trip.
              </p>
              <div className="spanish-course-body">
                <p>
                  The Beginners Spanish Travel Pack is designed for those who want more structure, more depth, and more speaking practice before their trip.
                </p>
                <p>
                  You'll complete 35–50 minutes of focused content each day, 6 days a week. On the 6th day, we'll have a live call together where you'll actively practice what you've been working on that week.
                </p>
                <ul className="spanish-feature-list">
                  <li>Real-life travel situations</li>
                  <li>Progressive skill-building so you feel genuine improvement</li>
                  <li>A deeper understanding of how Spanish works</li>
                  <li>More time to build fluency foundations before you arrive</li>
                  <li>Speak comfortably, not just survive</li>
                </ul>
                <p className="spanish-course-note">
                  Has a bit more accountability because of the weekly convos.
                </p>
              </div>
              <div className="spanish-course-actions">
                <Link to="/book-online" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Enquire Now</Link>
              </div>
            </div>
            <div className="spanish-course-visual fade-in-left">
              <div className="spanish-visual-card travel-card">
                <span className="spanish-card-icon">
                  {/* Bull icon */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c-4 0-8-2-8-6 0-2 1-3.5 2.5-4.5C5 10 4 8 4 6c0-1.5 1-3 2-3 .5 0 1 .5 1.5 1L9 5.5C10 4.5 11 4 12 4s2 .5 3 1.5L16.5 4c.5-.5 1-1 1.5-1 1 0 2 1.5 2 3 0 2-1 4-2.5 5.5C19 12.5 20 14 20 16c0 4-4 6-8 6z"/>
                    <circle cx="9" cy="14" r="1" fill="currentColor"/>
                    <circle cx="15" cy="14" r="1" fill="currentColor"/>
                    <path d="M10 18c.5.5 1.5.5 2 .5s1.5 0 2-.5"/>
                  </svg>
                </span>
                <h3>Beginners Travel Pack</h3>
                <p>Structured &amp; Guided</p>
                <div className="spanish-card-detail">
                  <span className="detail-label">Daily commitment</span>
                  <span className="detail-value">35–50 min</span>
                </div>
                <div className="spanish-card-detail">
                  <span className="detail-label">Structure</span>
                  <span className="detail-value">6 days + live call</span>
                </div>
                <ul className="spanish-card-highlights">
                  <li>Live weekly practice call</li>
                  <li>Real travel scenarios</li>
                  <li>Progressive skill-building</li>
                  <li>Deeper fluency foundations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section spanish-compare">
        <div className="container">
          <h2 className="section-title fade-in">
            Which Programme is <span className="gradient-text">Right for You</span>?
          </h2>
          <p className="section-subtitle fade-in">
            Both courses prepare you for Spain — choose the pace that fits your life.
          </p>
          <div className="compare-grid">
            <div className="compare-card card fade-in">
              <div className="compare-header sbs-header">
                <span className="compare-flag">🇪🇸</span>
                <h3>Spanish Before Spain</h3>
              </div>
              <ul className="compare-list">
                <li>
                  <span className="compare-label">Time per day</span>
                  <span className="compare-value">15–30 min</span>
                </li>
                <li>
                  <span className="compare-label">Weekly structure</span>
                  <span className="compare-value">6 days practice + 1 mindset</span>
                </li>
                <li>
                  <span className="compare-label">Live calls</span>
                  <span className="compare-value">No</span>
                </li>
                <li>
                  <span className="compare-label">Best for</span>
                  <span className="compare-value">Quick confidence boost</span>
                </li>
                <li>
                  <span className="compare-label">Style</span>
                  <span className="compare-value">Independent &amp; flexible</span>
                </li>
              </ul>
              <Link to="/book-online" className="btn btn-primary compare-btn">Choose This</Link>
            </div>
            <div className="compare-card card fade-in">
              <div className="compare-header travel-header">
                <span className="compare-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c-4 0-8-2-8-6 0-2 1-3.5 2.5-4.5C5 10 4 8 4 6c0-1.5 1-3 2-3 .5 0 1 .5 1.5 1L9 5.5C10 4.5 11 4 12 4s2 .5 3 1.5L16.5 4c.5-.5 1-1 1.5-1 1 0 2 1.5 2 3 0 2-1 4-2.5 5.5C19 12.5 20 14 20 16c0 4-4 6-8 6z"/>
                    <circle cx="9" cy="14" r="1" fill="currentColor"/>
                    <circle cx="15" cy="14" r="1" fill="currentColor"/>
                  </svg>
                </span>
                <h3>Beginners Travel Pack</h3>
              </div>
              <ul className="compare-list">
                <li>
                  <span className="compare-label">Time per day</span>
                  <span className="compare-value">35–50 min</span>
                </li>
                <li>
                  <span className="compare-label">Weekly structure</span>
                  <span className="compare-value">6 days content + live call</span>
                </li>
                <li>
                  <span className="compare-label">Live calls</span>
                  <span className="compare-value">Yes — weekly</span>
                </li>
                <li>
                  <span className="compare-label">Best for</span>
                  <span className="compare-value">Deeper fluency foundations</span>
                </li>
                <li>
                  <span className="compare-label">Style</span>
                  <span className="compare-value">Guided with accountability</span>
                </li>
              </ul>
              <Link to="/book-online" className="btn btn-primary compare-btn">Choose This</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="spanish-cta fade-in">
            <span className="spanish-cta-flag">🇪🇸</span>
            <h2>Ready to Start Your Spanish Journey?</h2>
            <p>
              Whether it's 15 minutes or 50 minutes a day — the important thing is to start.
              Arrive in Spain feeling prepared, capable, and ready to belong.
            </p>
            <div className="spanish-cta-actions">
              <Link to="/book-online" className="btn btn-primary btn-lg">Get Started</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Book an Enquiry Call</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
