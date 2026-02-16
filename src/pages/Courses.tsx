import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FlagIcon from '../components/FlagIcon';
import './Courses.css';

export default function Courses() {
  useScrollAnimation();

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
              <p>Focused GCSE and A-Level preparation covering reading, writing, listening and speaking. 100% target grade record.</p>
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

      {/* Spanish before Spain */}
      <section className="section course-feature">
        <div className="container">
          <div className="course-feature-grid">
            <div className="course-feature-content fade-in-left">
              <div className="hero-badge">Featured Course</div>
              <h2>Spanish before Spain</h2>
              <p className="course-powered">Powered by the Confidence-First Spanish Method</p>
              <p className="course-tagline">
                Speak confidently before you arrive — even if you're a complete beginner
              </p>
              <div className="course-body">
                <p>
                  This is for travelers and digital nomads going to Spain who speak little to no Spanish and feel anxious about everyday conversations.
                </p>
                <p>
                  You want to experience Spain like a local, feel comfortable speaking, and maybe even be complimented on your Spanish — but apps and school taught you to recognize words, not actually speak, so you still freeze when it matters.
                </p>
                <p>
                  This programme is built to change that.
                </p>
                <p>
                  Using a confidence-first, real-life method shaped by learning multiple languages and living abroad, you'll learn how to respond without panicking, handle daily situations, and speak imperfect Spanish with confidence.
                </p>
                <p>
                  You won't be fluent in four weeks — but you won't be silent either.
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Courses */}
      <section className="section why-challenges">
        <div className="container">
          <h2 className="section-title fade-in">
            More <span className="gradient-text">Options</span>
          </h2>
          <p className="section-subtitle fade-in">
            Additional programmes and session types to suit your goals.
          </p>
          <div className="benefits-grid">
            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>Speak Up Abroad</h3>
              <p>Extension programme with additional content to supplement your course or boost confidence before a trip.</p>
              <div className="benefit-price">£40</div>
            </div>
            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h3>Conversation Practice</h3>
              <p>Dedicated sessions focused on speaking and listening skills in real-world scenarios.</p>
              <div className="benefit-price">£40</div>
            </div>
            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Small Group Sessions</h3>
              <p>Learn collaboratively in small, focused groups. Great for building conversational confidence.</p>
              <Link to="/contact" className="btn btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Enquire Now</Link>
            </div>
            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3>Travel Packs</h3>
              <p>Complete Spanish and French travel programmes — be confident with locals in under 30 days.</p>
              <Link to="/contact" className="btn btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Enquire Now</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
