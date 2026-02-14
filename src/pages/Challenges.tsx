import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Challenges.css';

const challenges = [
  {
    id: 'effective-tutoring',
    title: 'Effective Language Tutoring for Diverse Learners',
    description: 'A structured programme exploring strategies to make language learning accessible and effective for learners with different backgrounds, levels, and learning styles.',
    tags: ['Teaching', 'Methodology', 'Inclusive'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    id: 'study-group',
    title: 'Study Group Success: Strategies for Effective Collaborative Learning',
    description: 'Discover how to get the most out of group study sessions with proven strategies for collaboration, accountability, and shared progress in language learning.',
    tags: ['Collaboration', 'Study Skills', 'Group Work'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 'classroom-lectures',
    title: 'Mastering Effective Classroom Lectures',
    description: 'Learn techniques for delivering engaging, structured, and memorable language lessons — whether online or in person. Focus on pacing, interaction, and student engagement.',
    tags: ['Presentation', 'Engagement', 'Structure'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
];

export default function Challenges() {
  useScrollAnimation();

  return (
    <main className="challenges-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">Challenges</div>
            <h1>Language Learning <span className="gradient-text">Challenges</span></h1>
            <p>
              Push your skills further with structured learning challenges. Each programme is designed to help you build
              specific competencies through focused, step-by-step content.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="section">
        <div className="container">
          <div className="challenges-grid">
            {challenges.map((challenge, i) => (
              <article key={challenge.id} className="challenge-card card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="challenge-icon">{challenge.icon}</div>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
                <div className="challenge-tags">
                  {challenge.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-secondary challenge-btn">
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Challenges */}
      <section className="section why-challenges">
        <div className="container">
          <h2 className="section-title fade-in">
            Why Take a <span className="gradient-text">Challenge</span>?
          </h2>
          <p className="section-subtitle fade-in">
            Challenges provide structured learning paths that keep you motivated and on track.
          </p>
          <div className="benefits-grid">
            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>Structured Progress</h3>
              <p>Follow a clear, step-by-step path with defined goals and milestones.</p>
            </div>
            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3>Stay Motivated</h3>
              <p>Challenges keep you engaged with achievable targets and a sense of accomplishment.</p>
            </div>
            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h3>Real-World Skills</h3>
              <p>Every challenge is designed around practical skills you'll actually use.</p>
            </div>
            <div className="benefit-card fade-in">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>Build Confidence</h3>
              <p>Completing challenges gives you a proven foundation to build from.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
