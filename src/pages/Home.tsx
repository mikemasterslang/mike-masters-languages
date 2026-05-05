import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import FlagIcon from '../components/FlagIcon';
import './Home.css';

const reviews = [
  {
    text: "I took the Spanish course before travelling in Central America. The compact, concise format taught me all the basics and necessities that I needed to communicate effectively with the locals. It really enhanced my experiences while travelling!",
    author: "Kieran",
  },
  {
    text: "Michael's Spanish course is outstanding! It's well-structured, easy to follow, and perfect for beginners. His teaching style is clear and engaging, making complex grammar concepts understandable. The diverse content, including interactive exercises and quizzes, kept me motivated. The flexibility of learning at my own pace was fantastic, and Michael's prompt feedback was invaluable. This course has significantly improved my language skills, and I highly recommend it to anyone looking to learn Spanish effectively. Muchas gracias, Michael!",
    author: "Jamie",
  },
  {
    text: "My sessions with Michael really accelerated my vocabulary, grammar and conversational skills as well as my confidence in Spanish. From the very first session, I felt extremely confident and excited due to his knowledge and demeanor. His interesting and insightful lessons included learning about culture as well as just the language which I thoroughly enjoyed. Michael's patience and ability to help my learning really made a huge difference and I could not recommend him enough!",
    author: "Liv",
  },
  {
    text: "Mike has been absolutely brilliant. I've tried learning Spanish before with other teachers, and never got past one or two lessons. Either their approach, or the pressure as a beginner to speak immediately didn't work. Mike has been the opposite: he is an excellent teacher, combining the right amount of expectation and challenge with an understanding of what it's like to learn a language. He's very adaptable and his lessons are practical, engaging and interesting. As well as one to one lessons, I'm doing one of his courses, which is very useful and focuses on what you need to be able to speak with more confidence. His communication is also very good between lessons and I always feel he's going the extra mile to make sure you get the most out of working with him. Very pleased to have found his services and already recommended to others.",
    author: "Tom",
  },
  {
    text: "He is brilliant. He teaches myself and my daughter at the same time. The lessons are well structured, informative and at the perfect pace.",
    author: "Naomi",
  },
  {
    text: "My son was at very low confidence levels for French GCSE. We had 4 weeks of sessions with Michael and although we are still waiting for results, his confidence having done the exams is much better. Michael was very patient, and very willing to help. Gave prep for the first session in order to ascertain my son's working level. I genuinely couldn't have asked for more and can't recommend Michael highly enough.",
    author: "Reshma",
  },
  {
    text: "Michael is an excellent tutor. My daughter finds him easy to follow, the lessons well structured and led by the areas of learning that she identified. He is extremely knowledgeable and friendly and she is very happy to be learning Spanish with Michael.",
    author: "Laura",
  },
  {
    text: "Michael is a very good tutor, he is very patient with me and I enjoy my sessions. I would definitely recommend him.",
    author: "Kahrel",
  },
  {
    text: "The tutoring has been great. Works at my own pace which is much appreciated. Lessons are well structured and informative. Can't fault a thing.",
    author: "Cador",
  },
];

export default function Home() {
  useScrollAnimation();
  usePageMeta(
    'Mike Masters Languages — Online Spanish, French & Russian Tutoring',
    'Expert online language tutoring in Spanish, French and Russian. 1-to-1 lessons, GCSE & A-Level exam prep, and confidence-first Spanish courses. 100% target grade record.'
  );

  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextReview = useCallback(() => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevReview = useCallback(() => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextReview]);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-badge fade-in">Mike Masters Languages</div>
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
            <Link to="/spanish" className="btn btn-secondary btn-lg">
              View Courses
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
              <div className="lang-flag"><FlagIcon country="spain" size={72} /></div>
              <h3>Spanish</h3>
              <p>
                From conversational fluency to exam preparation, master one of the world's most spoken languages.
                Includes the new Spanish before Spain course powered by the confidence-first method.
              </p>
              <Link to="/book-online" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="lang-card fade-in">
              <div className="lang-flag"><FlagIcon country="france" size={72} /></div>
              <h3>French</h3>
              <p>
                Build confidence in reading, writing, listening and speaking. Perfect for GCSE, A-Level or adult learners
                exploring French culture.
              </p>
              <Link to="/book-online" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="lang-card fade-in">
              <div className="lang-flag"><FlagIcon country="russia" size={72} /></div>
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
              Having studied Spanish and French at school and A-levels, I decided to expand my language learning to Russian when I started at the University of Nottingham where I graduated with a degree in all three languages.
            </p>
            <p>
              Although my background in languages was mainly developed in education, I always found using my languages the most rewarding and enjoyable part of the process. My approach to teaching languages, which is represented in my courses and tutoring, is to help you develop confidence in your abilities so that you can make the most of any travel plans, relationships that are built along the way and foreign cultures!
            </p>
            <p>
              Finally, I am proud that I can say I have helped all of my GCSE and A-level students reach their target grades or better for the last three years since I started tutoring. As well as maintaining this 100% record, I aim to keep lessons as enjoyable for the students as possible and not only teach them to pass their exams, but hopefully to fall in love with the languages they study too!
            </p>
            <Link to="/contact" className="btn btn-secondary">
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
              <h3>1-to-1 Lessons</h3>
              <p>
                Personalised lessons tailored to your individual needs, pace, and learning goals. Available for all three languages and all levels.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>Spanish Before Spain</h3>
              <p>
                A course designed to prepare you for real conversations using my confidence-first method. You'll speak from day one and arrive in Spain confident and prepared.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>6 Week Group Sessions</h3>
              <p>
                Learn and practise alongside friends in a small, supportive group setting. Great for building conversational confidence together before your trip. Maximum group size six.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3>5 Lesson Block Booking</h3>
              <p>
                Commit to your learning with a block of five 1-1 online sessions at a discounted rate.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
              <h3>Beginners Spanish Travel Pack</h3>
              <p>
                More structure, more depth, and more speaking practice before your trip — with weekly live calls included.
              </p>
            </div>
            <div className="service-card card fade-in">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>Exam Preparation</h3>
              <p>
                Focused GCSE and A-Level preparation. Covers reading, writing, listening, and speaking. 100% target grade record.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Enquire Now</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title fade-in">
            What Students <span className="gradient-text-purple">Say</span>
          </h2>
          <p className="section-subtitle fade-in">
            Don't just take my word for it — hear from people who've experienced the lessons first-hand.
          </p>
          <div
            className="carousel fade-in"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button type="button" className="carousel-btn carousel-prev" onClick={prevReview} aria-label="Previous review">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div className="carousel-track">
              {reviews.map((review, i) => (
                <div
                  key={review.author}
                  className={`carousel-slide${i === currentReview ? ' active' : ''}`}
                  aria-hidden={i !== currentReview ? "true" : undefined}
                >
                  <div className="testimonial-card card">
                    <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <blockquote>"{review.text}"</blockquote>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{review.author[0]}</div>
                      <div>
                        <strong>{review.author}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="carousel-btn carousel-next" onClick={nextReview} aria-label="Next review">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <div className="carousel-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`carousel-dot${i === currentReview ? ' active' : ''}`}
                  onClick={() => setCurrentReview(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
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
