import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FlagIcon from '../components/FlagIcon';
import './Spanish.css';
import './Courses.css';

export default function Spanish() {
  useScrollAnimation();

  return (
    <main className="spanish-page">
      {/* Hero */}
      <section className="page-hero spanish-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">
              <span className="spanish-flag-inline"><FlagIcon country="spain" size={20} /></span> Spanish Programmes
            </div>
            <h1>
              Learn Spanish <span className="gradient-text">Your</span> Way
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
              <div className="hero-badge">New</div>
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
                <span className="spanish-card-flag"><FlagIcon country="spain" size={40} /></span>
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
                  <li>Keep yourself accountable with weekly conversations</li>
                </ul>
              </div>
              <div className="spanish-course-actions">
                <Link to="/book-online" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Enquire Now</Link>
              </div>
            </div>
            <div className="spanish-course-visual fade-in-left">
              <div className="spanish-visual-card travel-card">
                <span className="spanish-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
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
                <span className="compare-flag"><FlagIcon country="spain" size={24} /></span>
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
                  <span className="compare-value">Speak first approach</span>
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
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
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

      {/* 1-1 Online Tuition */}
      <section className="section spanish-tuition-section">
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
              This can look like conversation classes, giving exercises to practice reading, listening and writing skills or covering everything to help you build an overall strong foundation in the language.
            </p>
            <p>
              For the last five years, I am proud to say that I have helped all of my GCSE and A-level students achieve their target grades or better. Maybe you or someone you know feels completely lost with upcoming language exams or simply feel like you need a helping hand to get you over that final hurdle.
            </p>
            <p>
              Whatever the requirements, I'd love to hear from you and see how I can help you maximise your potential!
            </p>
          </div>
          <div className="tuition-grid">
            <div className="tuition-card card fade-in">
              <div className="tuition-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>1-1 Online Lessons</h3>
              <p>Fully personalised curriculum with flexible scheduling. All levels welcome — from complete beginner to advanced.</p>
              <Link to="/contact" className="btn btn-primary tuition-btn">Enquire Now</Link>
            </div>
            <div className="tuition-card card fade-in">
              <div className="tuition-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3>5 Lesson Block Booking</h3>
              <p>Commit to your learning with a block of five 1-1 online sessions at a discounted rate.</p>
              <Link to="/contact" className="btn btn-primary tuition-btn">Enquire Now</Link>
            </div>
            <div className="tuition-card card fade-in">
              <div className="tuition-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>Exam Preparation</h3>
              <p>Focused GCSE and A-Level preparation covering reading, writing, listening and speaking. 100% target grade record.</p>
              <Link to="/contact" className="btn btn-primary tuition-btn">Enquire Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="spanish-cta fade-in">
            <span className="spanish-cta-flag"><FlagIcon country="spain" size={40} /></span>
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
