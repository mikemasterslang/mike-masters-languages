import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogDaysMonths() {
  useScrollAnimation();
  usePageMeta(
    'Days, Months and Seasons in Spanish: Complete Guide | Mike Masters Languages',
    'Learn days of the week, months, seasons and how to say dates in Spanish — including the important rule that days and months do not use capital letters in Spanish.'
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
          <h1>Days, Months and Seasons in Spanish: Complete Guide</h1>
          <p className="blog-hero-intro">
            From making appointments to planning a trip, knowing days, months and seasons in Spanish is essential. And there's one rule that catches nearly every beginner out — no capital letters!
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Time vocabulary is foundational in Spanish — you need it for making appointments, talking about plans, reading timetables and understanding dates. This guide covers everything from the days of the week to how to say full dates, with all the key phrases you'll use in everyday situations.</p>

            <h2>Days of the Week (Los Días de la Semana)</h2>
            <p>In Spanish, days of the week are <strong>masculine</strong> and use <strong>no capital letters</strong> — this is one of the most common written errors beginners make:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th><th>Plural</th></tr></thead>
                <tbody>
                  <tr><td>lunes</td><td>Monday</td><td>los lunes</td></tr>
                  <tr><td>martes</td><td>Tuesday</td><td>los martes</td></tr>
                  <tr><td>miércoles</td><td>Wednesday</td><td>los miércoles</td></tr>
                  <tr><td>jueves</td><td>Thursday</td><td>los jueves</td></tr>
                  <tr><td>viernes</td><td>Friday</td><td>los viernes</td></tr>
                  <tr><td>sábado</td><td>Saturday</td><td>los sábados</td></tr>
                  <tr><td>domingo</td><td>Sunday</td><td>los domingos</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>No capitals for days or months:</strong> Unlike English, Spanish does not capitalise days of the week, months of the year or seasons. Write <em>lunes</em>, not <em>Lunes</em>; <em>enero</em>, not <em>Enero</em>. This applies in all contexts.</p>
            </div>

            <h2>Using Days in Sentences</h2>
            <p>Spanish uses the definite article with days in ways English doesn't. <em>El lunes</em> means "on Monday" (a specific day) and <em>los lunes</em> means "on Mondays" (habitual):</p>

            <div className="blog-example">
              <p className="es">El lunes tengo una reunión. — <span style={{fontWeight:400}}>On Monday I have a meeting.</span></p>
              <p className="es">Los martes voy al gimnasio. — <span style={{fontWeight:400}}>On Tuesdays I go to the gym.</span></p>
              <p className="es">¿Qué haces el viernes? — <span style={{fontWeight:400}}>What are you doing on Friday?</span></p>
              <p className="es">El fin de semana salgo con amigos. — <span style={{fontWeight:400}}>At the weekend I go out with friends.</span></p>
              <p className="es">Hoy es miércoles. — <span style={{fontWeight:400}}>Today is Wednesday.</span></p>
              <p className="es">Ayer fue lunes. — <span style={{fontWeight:400}}>Yesterday was Monday.</span></p>
              <p className="es">Mañana es jueves. — <span style={{fontWeight:400}}>Tomorrow is Thursday.</span></p>
            </div>

            <h2>Months of the Year (Los Meses del Año)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>enero</td><td>January</td></tr>
                  <tr><td>febrero</td><td>February</td></tr>
                  <tr><td>marzo</td><td>March</td></tr>
                  <tr><td>abril</td><td>April</td></tr>
                  <tr><td>mayo</td><td>May</td></tr>
                  <tr><td>junio</td><td>June</td></tr>
                  <tr><td>julio</td><td>July</td></tr>
                  <tr><td>agosto</td><td>August</td></tr>
                  <tr><td>septiembre</td><td>September</td></tr>
                  <tr><td>octubre</td><td>October</td></tr>
                  <tr><td>noviembre</td><td>November</td></tr>
                  <tr><td>diciembre</td><td>December</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Mi cumpleaños es en marzo. — <span style={{fontWeight:400}}>My birthday is in March.</span></p>
              <p className="es">En agosto hace mucho calor en España. — <span style={{fontWeight:400}}>In August it's very hot in Spain.</span></p>
              <p className="es">Empiezo las clases en septiembre. — <span style={{fontWeight:400}}>I start lessons in September.</span></p>
              <p className="es">Voy a España en mayo o en junio. — <span style={{fontWeight:400}}>I'm going to Spain in May or June.</span></p>
            </div>

            <h2>The Seasons (Las Estaciones)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la primavera</td><td>spring</td></tr>
                  <tr><td>el verano</td><td>summer</td></tr>
                  <tr><td>el otoño</td><td>autumn</td></tr>
                  <tr><td>el invierno</td><td>winter</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">En verano voy a la playa. — <span style={{fontWeight:400}}>In summer I go to the beach.</span></p>
              <p className="es">Me encanta la primavera en España. — <span style={{fontWeight:400}}>I love spring in Spain.</span></p>
              <p className="es">En invierno hace frío en el norte. — <span style={{fontWeight:400}}>In winter it's cold in the north.</span></p>
            </div>

            <h2>How to Say Dates in Spanish</h2>
            <p>Spanish uses cardinal numbers for dates (not ordinals), with the structure: <strong>el + number + de + month</strong>. The one exception is the first of the month, where <em>primero</em> (an ordinal) is often used, though <em>uno</em> is also acceptable in speech:</p>

            <div className="blog-example">
              <p className="es">Hoy es el quince de mayo. — <span style={{fontWeight:400}}>Today is the fifteenth of May.</span></p>
              <p className="es">El uno de enero es Año Nuevo. — <span style={{fontWeight:400}}>The first of January is New Year's Day.</span></p>
              <p className="es">Nací el veintidós de marzo de mil novecientos ochenta y cinco. — <span style={{fontWeight:400}}>I was born on the twenty-second of March 1985.</span></p>
              <p className="es">La reunión es el martes tres de junio. — <span style={{fontWeight:400}}>The meeting is on Tuesday the third of June.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Writing the year in Spanish:</strong> Years in Spanish are written and spoken as whole numbers — <em>dos mil veinticuatro</em> (2024), not "twenty twenty-four" as in British English. The year is always preceded by <em>de</em> when giving a full date: <em>el 5 de mayo de 2026</em>.</p>
            </div>

            <div className="blog-highlight">
              <p>The most important rule to remember: days and months never take capital letters in Spanish. Use <em>el + day</em> for "on Monday" and <em>los + day</em> for habitual actions. For dates, use cardinal numbers with <em>el ... de ...</em> structure.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Get confident with everyday Spanish</h3>
              <p>Time vocabulary underpins so much of daily conversation — appointments, plans, travel dates. Let's make sure it feels completely natural.</p>
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
