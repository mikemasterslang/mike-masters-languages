import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import FlagIcon from '../components/FlagIcon';
import './Spanish.css';

export default function Spanish() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Lessons Online — Spanish Before Spain & Travel Courses | Mike Masters Languages',
    'Learn Spanish online with Mike Masters Languages. Confidence-first Spanish courses including Spanish Before Spain and the Beginners Spanish Travel Pack. Speak from day one.'
  );

  return (
    <main className="spanish-page">
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
              <Link to="/get-started" className="btn btn-primary btn-lg">Get Started</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Book an Enquiry Call</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
