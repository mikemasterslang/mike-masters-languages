import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Home.css';

export default function Home() {
  useScrollAnimation();

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-badge fade-in">Michael Andrews Language Tutoring</div>
          <h1 className="hero-title fade-in">
            Explore the World<br />
            Through <span className="gradient-text">Language</span>
          </h1>
          <p className="hero-subtitle fade-in">
            Expert tutoring in Spanish, French &amp; Russian for all levels.
            Whether you're preparing for exams, planning travels, or pursuing a passion —
            let's make language learning an adventure.
          </p>
          <div className="hero-actions fade-in">
            <Link to="/book-online" className="btn btn-primary btn-lg">
              Book a Session
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link to="/challenges" className="btn btn-secondary btn-lg">
              View Challenges
            </Link>
          </div>
          <div className="hero-stats fade-in">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Teaching</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Target Grades Achieved</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Languages Offered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="section languages-section" id="languages">
        <div className="container">
          <h2 className="section-title fade-in">
            Three Languages, <span className="gradient-text">Infinite Possibilities</span>
          </h2>
          <p className="section-subtitle fade-in">
            Choose your language and start your journey today. Every lesson is tailored to your goals and level.
          </p>
          <div className="lang-grid">
            <div className="lang-card fade-in">
              <div className="lang-flag">🇪🇸</div>
              <h3>Spanish</h3>
              <p>
                From conversational fluency to exam preparation, master one of the world's most spoken languages.
                Includes our popular Travel Pack programme.
              </p>
              <Link to="/book-online" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="lang-card fade-in">
              <div className="lang-flag">🇫🇷</div>
              <h3>French</h3>
              <p>
                Build confidence in reading, writing, listening and speaking. Perfect for GCSE, A-Level or adult learners
                exploring French culture.
              </p>
              <Link to="/book-online" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="lang-card fade-in">
              <div className="lang-flag">🇷🇺</div>
              <h3>Russian</h3>
              <p>
                Take on a rewarding challenge with Russian. From Cyrillic basics to confident conversation,
                we'll guide you every step of the way.
              </p>
              <Link to="/book-online" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-image-col fade-in-left">
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img
                  src="/images/mike-andrews.jpeg"
                  alt="Michael Andrews — Language Tutor"
                  className="about-image"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('fallback');
                  }}
                />
              </div>
              <div className="about-badge">
                <span className="about-badge-number">5+</span>
                <span className="about-badge-text">Years<br/>Experience</span>
              </div>
            </div>
          </div>
          <div className="about-text-col fade-in-right">
            <div className="section-tag">About Me</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Passionate About <span className="gradient-text">Languages</span>
            </h2>
            <p>
              I studied Spanish and French at school and A-Levels, then expanded my language learning to Russian at the University of Nottingham, where I graduated with a degree in all three languages.
            </p>
            <p>
              For the last five years, I've helped all of my GCSE and A-Level students achieve their target grades or better. I aim to keep lessons enjoyable — teaching students not only to pass exams but to fall in love with the languages they study.
            </p>
            <p>
              My approach focuses on building confidence so you can make the most of travel plans, relationships, and foreign cultures. Whether you're a complete beginner or looking to refine your skills, I tailor every session to your goals.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section" id="services">
        <div className="container">
          <h2 className="section-title fade-in">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subtitle fade-in">
            Flexible learning options designed around your schedule, goals and preferred style.
          </p>
          <div className="services-grid">
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>1-to-1 Sessions</h3>
              <p>
                Personalised lessons tailored to your specific needs, pace and goals. Flexible scheduling that fits your weekly routine.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Small Group Sessions</h3>
              <p>
                Learn alongside others in small, focused groups. Great for building conversational confidence and learning collaboratively.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3>Travel Packs</h3>
              <p>
                Complete Spanish and French travel programmes designed to have you confident with locals in the target country in under 30 days.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>Exam Preparation</h3>
              <p>
                Targeted GCSE and A-Level preparation covering all four skills. Proven track record of students achieving their target grades.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>Speak Up Abroad</h3>
              <p>
                An extension programme with additional content to supplement your course or serve as a confidence booster before a trip.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h3>Conversation Practice</h3>
              <p>
                Dedicated sessions focused on speaking and listening skills. Build the confidence to hold real conversations in your target language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title fade-in">
            What Students <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle fade-in">
            Don't just take my word for it — hear from people who've experienced the lessons first-hand.
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card card fade-in">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>
                "He is brilliant. He teaches myself and my daughter at the same time. The lessons are well structured, informative and at the perfect pace."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">S</div>
                <div>
                  <strong>Sarah T.</strong>
                  <span>Spanish Student</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card card fade-in">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>
                "Michael's teaching style makes even the trickiest grammar feel approachable. My son went from a grade 5 to a grade 8 at GCSE. Couldn't recommend more highly."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">J</div>
                <div>
                  <strong>James R.</strong>
                  <span>Parent of GCSE Student</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card card fade-in">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>
                "The travel pack was exactly what I needed before my trip to Barcelona. In just a few weeks I felt confident enough to order food, ask for directions and have basic conversations."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">L</div>
                <div>
                  <strong>Laura M.</strong>
                  <span>Travel Pack Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card fade-in">
            <h2>Ready to Start Your Language Journey?</h2>
            <p>
              Whether you're a complete beginner or looking to take your skills to the next level,
              I'd love to help you reach your goals.
            </p>
            <div className="cta-actions">
              <Link to="/book-online" className="btn btn-primary btn-lg">
                Book Your First Session
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
