import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogWorkVocab() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Work and Jobs Vocabulary | Mike Masters Languages',
    'Essential Spanish vocabulary for jobs, workplaces and careers — job titles, workplace phrases, talking about your schedule and asking what someone does for work.'
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
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>Spanish Work and Jobs Vocabulary</h1>
          <p className="blog-hero-intro">
            Whether you're talking about your own job or asking someone about theirs, work vocabulary is essential for real conversation.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the most natural topics when meeting someone new is work. <em>¿A qué te dedicas?</em> ("What do you do for a living?") is one of the first questions you'll be asked in Spanish, and you'll want to answer confidently. This guide covers the key job titles, essential workplace vocabulary, and the phrases you need to talk about your working life with ease.</p>

            <h2>Asking What Someone Does</h2>
            <p>There are several natural ways to ask about someone's job in Spanish. The most common in informal conversation is <em>¿a qué te dedicas?</em>, which literally means "what do you dedicate yourself to?" — but it functions as a friendly equivalent of "what do you do?"</p>

            <div className="blog-example">
              <p className="es">¿A qué te dedicas? — <span style={{fontWeight: 400}}>What do you do (for a living)?</span></p>
              <p className="es">¿En qué trabajas? — <span style={{fontWeight: 400}}>What do you work in? / What's your job?</span></p>
              <p className="es">¿Cuál es tu trabajo? — <span style={{fontWeight: 400}}>What is your job?</span></p>
              <p className="es">¿Dónde trabajas? — <span style={{fontWeight: 400}}>Where do you work?</span></p>
            </div>

            <h2>Talking About Your Own Job</h2>
            <p>To say what you do, Spanish gives you several options. The most concise is <strong>soy + job title</strong> — and crucially, you do <em>not</em> use an article (<em>un/una</em>) when stating a profession after <em>ser</em>:</p>

            <div className="blog-example">
              <p className="es">Soy médico. — <span style={{fontWeight: 400}}>I am a doctor. (not: "Soy un médico")</span></p>
              <p className="es">Me dedico a la enseñanza. — <span style={{fontWeight: 400}}>I work in teaching / I'm a teacher.</span></p>
              <p className="es">Trabajo en una empresa de informática. — <span style={{fontWeight: 400}}>I work at a technology company.</span></p>
              <p className="es">Trabajo como recepcionista. — <span style={{fontWeight: 400}}>I work as a receptionist.</span></p>
              <p className="es">Soy autónomo/a. — <span style={{fontWeight: 400}}>I'm self-employed / freelance.</span></p>
              <p className="es">Estoy en paro. — <span style={{fontWeight: 400}}>I'm unemployed.</span></p>
              <p className="es">Estoy jubilado/a. — <span style={{fontWeight: 400}}>I'm retired.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Soy vs. Trabajo como:</strong> Both are correct. <em>Soy médico</em> states your identity; <em>trabajo como médico</em> describes your role. For most everyday conversation, <em>soy</em> is more natural and direct.</p>
            </div>

            <h2>Job Titles (Las Profesiones)</h2>
            <p>Many job titles in Spanish change their ending depending on whether the speaker is male or female. Where two forms exist, masculine is shown first.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el/la médico/a</td><td>doctor</td></tr>
                  <tr><td>el enfermero / la enfermera</td><td>nurse</td></tr>
                  <tr><td>el/la profesor/a</td><td>teacher / professor</td></tr>
                  <tr><td>el/la abogado/a</td><td>lawyer</td></tr>
                  <tr><td>el/la ingeniero/a</td><td>engineer</td></tr>
                  <tr><td>el/la programador/a</td><td>programmer / developer</td></tr>
                  <tr><td>el/la arquitecto/a</td><td>architect</td></tr>
                  <tr><td>el/la periodista</td><td>journalist</td></tr>
                  <tr><td>el cocinero / la cocinera</td><td>cook / chef</td></tr>
                  <tr><td>el/la conductor/a</td><td>driver</td></tr>
                  <tr><td>el/la recepcionista</td><td>receptionist</td></tr>
                  <tr><td>el/la dependiente/a</td><td>shop assistant</td></tr>
                  <tr><td>el fontanero / la fontanera</td><td>plumber</td></tr>
                  <tr><td>el/la electricista</td><td>electrician</td></tr>
                  <tr><td>el/la contable</td><td>accountant</td></tr>
                  <tr><td>el/la psicólogo/a</td><td>psychologist</td></tr>
                  <tr><td>el/la comercial</td><td>sales representative</td></tr>
                  <tr><td>el/la director/a</td><td>manager / director</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Workplace Vocabulary (El Trabajo)</h2>
            <p>Once you can name your job, you'll want to talk about your actual working environment. Here are the words that come up most often:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la oficina</td><td>office</td></tr>
                  <tr><td>la empresa</td><td>company / business</td></tr>
                  <tr><td>el jefe / la jefa</td><td>boss / manager</td></tr>
                  <tr><td>el/la colega</td><td>colleague</td></tr>
                  <tr><td>la reunión</td><td>meeting</td></tr>
                  <tr><td>el sueldo</td><td>salary / wage</td></tr>
                  <tr><td>el contrato</td><td>contract</td></tr>
                  <tr><td>la jornada completa</td><td>full-time</td></tr>
                  <tr><td>la jornada parcial / media jornada</td><td>part-time</td></tr>
                  <tr><td>el turno</td><td>shift</td></tr>
                  <tr><td>las vacaciones</td><td>holidays / annual leave</td></tr>
                  <tr><td>el descanso</td><td>break / rest</td></tr>
                  <tr><td>el despacho</td><td>office (personal room)</td></tr>
                  <tr><td>la fábrica</td><td>factory</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Key Verbs for Work</h2>
            <div className="blog-example">
              <p className="es">trabajar — <span style={{fontWeight: 400}}>to work</span></p>
              <p className="es">contratar — <span style={{fontWeight: 400}}>to hire / to take on</span></p>
              <p className="es">despedir — <span style={{fontWeight: 400}}>to fire / to dismiss</span></p>
              <p className="es">dimitir — <span style={{fontWeight: 400}}>to resign</span></p>
              <p className="es">ascender — <span style={{fontWeight: 400}}>to promote / to be promoted</span></p>
              <p className="es">cobrar — <span style={{fontWeight: 400}}>to earn / to get paid</span></p>
              <p className="es">jubilarse — <span style={{fontWeight: 400}}>to retire</span></p>
            </div>

            <h2>Talking About Your Work Schedule</h2>
            <p>Discussing hours and routines is a natural part of work conversations. These phrases will help you describe a typical working day:</p>

            <div className="blog-example">
              <p className="es">Empiezo a trabajar a las nueve. — <span style={{fontWeight: 400}}>I start work at nine.</span></p>
              <p className="es">Salgo a las seis de la tarde. — <span style={{fontWeight: 400}}>I finish at six in the evening.</span></p>
              <p className="es">Trabajo de lunes a viernes. — <span style={{fontWeight: 400}}>I work Monday to Friday.</span></p>
              <p className="es">Hago horas extra a veces. — <span style={{fontWeight: 400}}>I sometimes do overtime.</span></p>
              <p className="es">Trabajo desde casa dos días a la semana. — <span style={{fontWeight: 400}}>I work from home two days a week.</span></p>
              <p className="es">Tengo un mes de vacaciones al año. — <span style={{fontWeight: 400}}>I have a month's holiday a year.</span></p>
            </div>

            <div className="blog-highlight">
              <p>The three most useful structures for work conversations are: <em>Soy + profesión</em> (identity), <em>Trabajo en + lugar/sector</em> (location or field), and <em>Me dedico a + actividad</em> (what you do day-to-day). Use them confidently and you'll handle work-related small talk with ease.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Talk about work with real confidence</h3>
              <p>Work vocabulary is one of the first things you'll use in real Spanish conversations. Let's get you speaking naturally from day one.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/get-started" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/get-started" className="btn btn-secondary btn-lg">Ask a Question</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
