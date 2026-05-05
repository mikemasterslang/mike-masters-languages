import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">MM</span>
              <span className="logo-text">Languages</span>
            </Link>
            <p className="footer-desc">
              Explore the world through language. Expert tutoring in Spanish, French &amp; Russian for all levels.
            </p>
            <SocialIcons className="social-links" />
          </div>

          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/get-started">Get Started</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Languages</h4>
            <ul>
              <li>Spanish</li>
              <li>French</li>
              <li>Russian</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <a href="mailto:michael.s.andrews@outlook.com">
                  michael.s.andrews@outlook.com
                </a>
              </li>
              <li>
                <Link to="/get-started" className="btn btn-primary btn-sm footer-cta">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mike Masters Languages. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
