import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogTellingTime() {
  useScrollAnimation();
  usePageMeta(
    'Telling the Time and Dates in Spanish: A Complete Beginner\'s Guide | Mike Masters Languages',
    'Telling the time in Spanish uses a different structure from English. This guide covers hours, minutes, days, months and dates — everything you need for everyday life in Spanish.'
  );

  return (
    <main className="blog-post-page">
      <section className="blog-hero">
        <div className="container">
          <Link to="/blogs" className="blog-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Blog
          </Link>
          <div className="blog-hero-meta">
            <span className="blog-hero-tag">Vocabulary</span>
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Telling the Time and Dates in Spanish</h1>
          <p className="blog-hero-intro">
            Time and dates come up in every conversation. Here's everything you need to express them correctly in Spanish.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Knowing how to tell the time and talk about dates is essential from the very beginning of learning Spanish. The structures follow clear rules — and there's one key difference from English that you need to get right first.</p>

            <h2>Asking the Time</h2>
            <div className="blog-example">
              <p className="es">¿Qué hora es? — <span style={{fontWeight:400}}>What time is it?</span></p>
              <p className="es">¿A qué hora...? — <span style={{fontWeight:400}}>At what time...? (for schedules)</span></p>
            </div>

            <h2>Es la... / Son las... — The Key Rule</h2>
            <p>For one o'clock, use <strong>es la una</strong> (singular). For all other hours, use <strong>son las</strong> + number (plural):</p>
            <div className="blog-example">
              <p className="es">Es la una. — <span style={{fontWeight:400}}>It's one o'clock.</span></p>
              <p className="es">Son las dos. — <span style={{fontWeight:400}}>It's two o'clock.</span></p>
              <p className="es">Son las diez. — <span style={{fontWeight:400}}>It's ten o'clock.</span></p>
            </div>

            <h2>Minutes and Parts of the Hour</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Expression</th><th>Meaning</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td><strong>y</strong> + minutes</td><td>past</td><td>Son las tres y diez. — It's 3:10.</td></tr>
                  <tr><td><strong>y cuarto</strong></td><td>quarter past</td><td>Son las cuatro y cuarto. — It's 4:15.</td></tr>
                  <tr><td><strong>y media</strong></td><td>half past</td><td>Es la una y media. — It's 1:30.</td></tr>
                  <tr><td><strong>menos</strong> + minutes</td><td>to (before the hour)</td><td>Son las cinco menos veinte. — It's 4:40.</td></tr>
                  <tr><td><strong>menos cuarto</strong></td><td>quarter to</td><td>Son las ocho menos cuarto. — It's 7:45.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>AM and PM</h2>
            <p>Spanish uses descriptive phrases rather than AM/PM:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Expression</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td><strong>de la mañana</strong></td><td>in the morning (AM)</td></tr>
                  <tr><td><strong>de la tarde</strong></td><td>in the afternoon/evening (roughly noon–8pm)</td></tr>
                  <tr><td><strong>de la noche</strong></td><td>at night (roughly 8pm onwards)</td></tr>
                </tbody>
              </table>
            </div>
            <div className="blog-example">
              <p className="es">Son las tres de la tarde. — <span style={{fontWeight:400}}>It's 3 in the afternoon.</span></p>
              <p className="es">A las nueve de la noche. — <span style={{fontWeight:400}}>At nine at night / 9pm.</span></p>
            </div>

            <h2>Days of the Week</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>lunes</td><td>Monday</td></tr>
                  <tr><td>martes</td><td>Tuesday</td></tr>
                  <tr><td>miércoles</td><td>Wednesday</td></tr>
                  <tr><td>jueves</td><td>Thursday</td></tr>
                  <tr><td>viernes</td><td>Friday</td></tr>
                  <tr><td>sábado</td><td>Saturday</td></tr>
                  <tr><td>domingo</td><td>Sunday</td></tr>
                </tbody>
              </table>
            </div>
            <p>Days of the week are <strong>not capitalised</strong> in Spanish. For a specific day: <em>el lunes</em> (this Monday). For recurring events: <em>los lunes</em> (on Mondays).</p>

            <h2>Months and Dates</h2>
            <p>Months are also not capitalised. The date format in Spanish is <strong>day + de + month</strong>:</p>
            <div className="blog-example">
              <p className="es">Hoy es el cinco de mayo. — <span style={{fontWeight:400}}>Today is the fifth of May.</span></p>
              <p className="es">Mi cumpleaños es el doce de agosto. — <span style={{fontWeight:400}}>My birthday is the twelfth of August.</span></p>
              <p className="es">¿Cuál es la fecha de hoy? — <span style={{fontWeight:400}}>What's today's date?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Cardinal, not ordinal:</strong> Spanish uses cardinal numbers for dates — <em>el cinco</em> (the five), not "the fifth." The only exception is the first of the month: <em>el primero</em>.</p>
            </div>

            <div className="blog-highlight">
              <p>Time and date expressions are some of the most useful vocabulary you can learn — they come up in almost every practical conversation. Once the <em>es la / son las</em> rule clicks, the rest follows a logical pattern.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to handle real-life Spanish situations confidently?</h3>
              <p>Time, dates, and everyday vocabulary are where fluency begins. Let's build them together.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/get-started" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Ask a Question</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
