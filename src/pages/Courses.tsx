import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import FlagIcon from '../components/FlagIcon';
import './Courses.css';

export default function Courses() {
  useScrollAnimation();
  usePageMeta(
    'Language Learning Courses | Mike Masters Languages',
    'Online Spanish, French and Russian courses with Mike Masters Languages. 1-to-1 lessons from £49, 5-lesson block bookings, exam prep, and the Spanish Before Spain travel course.'
  );

  return (
    <main className="courses-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">Courses</div>
            <h1>Language Learning <span className="gradient-text">Courses</span></h1>
            <p>
              Structured programmes designed to build real-world confidence — whether you're preparing for exams,
              heading abroad, or learning for the love of it.
            </p>
          </div>
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
              <div className="course-actions">
                <Link to="/book-online" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Book an Enquiry Call</Link>
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

      {/* Beginners Spanish Travel Pack */}
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
                <h3>Beginners Travel Pack</h3>
                <p>Structured &amp; Guided</p>
                <ul className="course-highlights-list">
                  <li>35–50 min per day</li>
                  <li>6 days + live weekly call</li>
                  <li>Real travel scenarios</li>
                  <li>Deeper fluency foundations</li>
                </ul>
              </div>
            </div>
            <div className="course-feature-content fade-in-right">
              <div className="hero-badge">In-Depth Programme</div>
              <h2>Beginners Spanish Travel Pack</h2>
              <p className="course-powered">Structured &amp; Guided Learning</p>
              <p className="course-tagline">
                More structure, more depth, and more speaking practice before your trip.
              </p>
              <div className="course-body">
                <p>
                  The Beginners Spanish Travel Pack is designed for those who want more structure, more depth, and more speaking practice before their trip.
                </p>
                <p>
                  You'll complete 35–50 minutes of focused content each day, 6 days a week. On the 6th day, we'll have a live call together where you'll actively practise what you've been working on that week.
                </p>
                <ul className="course-highlights-list" style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem' }}>
                  <li>Real-life travel situations</li>
                  <li>Progressive skill-building</li>
                  <li>A deeper understanding of how Spanish works</li>
                  <li>Live weekly practice call</li>
                  <li>Speak comfortably, not just survive</li>
                </ul>
              </div>
              <div className="course-actions">
                <Link to="/book-online" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Enquire Now</Link>
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
              <Link to="/contact" className="btn btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Enquire Now</Link>
            </div>
            <div className="benefit-card card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>6 Week Conversation Class — Group</h3>
              <p>Learn and practise alongside friends in a small, supportive group setting. Great for building conversational confidence together in a social environment before your trip. Maximum group size six.</p>
              <Link to="/contact" className="btn btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Enquire Now</Link>
            </div>
            <div className="benefit-card card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>6 Week Pre Exam Blast</h3>
              <p>Intensive, targeted preparation in the lead-up to your GCSE or A-Level exams. Cover the key areas fast and go into your exam feeling ready. Available for Spanish and French.</p>
              <Link to="/contact" className="btn btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Enquire Now</Link>
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
              <div className="tuition-price">
                <span className="price">£49</span>
                <span className="price-detail">per 55 min online</span>
              </div>
              <div className="tuition-price">
                <span className="price">£65</span>
                <span className="price-detail">per 55 min in-person</span>
              </div>
              <Link to="/book-online" className="btn btn-primary tuition-btn">Book Now</Link>
            </div>
            <div className="tuition-card card fade-in">
              <div className="tuition-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3>5 Lesson Block Booking</h3>
              <p>Commit to your learning with a block of five 1-1 online sessions at a discounted rate.</p>
              <div className="tuition-price">
                <span className="price">£220</span>
                <span className="price-detail">5 online lessons</span>
              </div>
              <div className="tuition-saving">Save £25</div>
              <Link to="/book-online" className="btn btn-primary tuition-btn">Book Now</Link>
            </div>
            <div className="tuition-card card fade-in">
              <div className="tuition-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>Exam Preparation</h3>
              <p>Focused GCSE and A-Level French, Spanish and Russian preparation covering reading, writing, listening and speaking. 100% target grade record.</p>
              <div className="tuition-price">
                <span className="price">£49</span>
                <span className="price-detail">per 55 min online</span>
              </div>
              <div className="tuition-price">
                <span className="price">£65</span>
                <span className="price-detail">per 55 min in-person</span>
              </div>
              <Link to="/book-online" className="btn btn-primary tuition-btn">Book Now</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
