import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPreteriteVsImperfect() {
  useScrollAnimation();
  usePageMeta(
    'Preterite vs Imperfect in Spanish: When to Use Each Past Tense | Mike Masters Languages',
    'Spanish has two past tenses and choosing between them confuses almost every beginner. This guide explains the difference clearly with examples, triggers and memory tricks.'
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
            <span className="blog-hero-tag">Grammar</span>
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Preterite vs Imperfect in Spanish: When to Use Each Past Tense</h1>
          <p className="blog-hero-intro">
            English only has one simple past tense. Spanish has two — and choosing the right one changes the meaning of what you're saying.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the biggest jumps in difficulty for beginner Spanish learners comes when you hit the past tenses. In English, "I ate", "I was eating" and "I used to eat" are clearly different phrases. In Spanish, two of those ideas live in completely separate tenses — the <strong>preterite</strong> and the <strong>imperfect</strong> — and knowing which to use is one of the most commonly asked questions at every level.</p>

            <h2>The Core Difference</h2>
            <p>Think of it this way:</p>
            <ul>
              <li>The <strong>preterite</strong> is a snapshot — a completed action at a specific moment in the past.</li>
              <li>The <strong>imperfect</strong> is a video — an ongoing, habitual, or background action in the past.</li>
            </ul>

            <div className="blog-example">
              <p className="es">Comí una paella. — <span style={{fontWeight:400}}>I ate a paella. (preterite — one completed event)</span></p>
              <p className="es">Comía paella cada domingo. — <span style={{fontWeight:400}}>I used to eat paella every Sunday. (imperfect — habitual)</span></p>
            </div>

            <h2>When to Use the Preterite</h2>
            <p>Use the preterite for actions that are <strong>completed and specific</strong>:</p>

            <h3>A single completed event</h3>
            <div className="blog-example">
              <p className="es">Ayer fui al supermercado. — <span style={{fontWeight:400}}>Yesterday I went to the supermarket.</span></p>
              <p className="es">Llegué a las tres. — <span style={{fontWeight:400}}>I arrived at three o'clock.</span></p>
            </div>

            <h3>A sequence of completed actions</h3>
            <div className="blog-example">
              <p className="es">Me levanté, me duché y desayuné. — <span style={{fontWeight:400}}>I got up, showered and had breakfast.</span></p>
            </div>

            <h3>An action completed within a specific time period</h3>
            <div className="blog-example">
              <p className="es">Viví en Madrid durante tres años. — <span style={{fontWeight:400}}>I lived in Madrid for three years. (now over)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Preterite trigger words:</strong> ayer (yesterday), anteayer (the day before yesterday), la semana pasada (last week), el año pasado (last year), hace dos días (two days ago), una vez (once), de repente (suddenly).</p>
            </div>

            <h2>When to Use the Imperfect</h2>
            <p>Use the imperfect for actions that were <strong>ongoing, habitual or descriptive</strong> in the past:</p>

            <h3>Habitual or repeated actions (used to / would always)</h3>
            <div className="blog-example">
              <p className="es">De niño, jugaba al fútbol todos los días. — <span style={{fontWeight:400}}>As a child, I used to play football every day.</span></p>
              <p className="es">Siempre comíamos juntos. — <span style={{fontWeight:400}}>We always used to eat together.</span></p>
            </div>

            <h3>Background descriptions and setting the scene</h3>
            <div className="blog-example">
              <p className="es">Hacía calor y la gente estaba en la playa. — <span style={{fontWeight:400}}>It was hot and people were on the beach.</span></p>
              <p className="es">Era una noche oscura. — <span style={{fontWeight:400}}>It was a dark night.</span></p>
            </div>

            <h3>Age, time, and states in the past</h3>
            <div className="blog-example">
              <p className="es">Tenía doce años cuando empecé. — <span style={{fontWeight:400}}>I was twelve years old when I started.</span></p>
              <p className="es">Eran las ocho de la mañana. — <span style={{fontWeight:400}}>It was eight in the morning.</span></p>
            </div>

            <h3>Ongoing action in progress</h3>
            <div className="blog-example">
              <p className="es">Leía cuando llegaste. — <span style={{fontWeight:400}}>I was reading when you arrived.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Imperfect trigger words:</strong> siempre (always), todos los días (every day), a menudo (often), generalmente (generally), cuando era niño/a (when I was a child), antes (before), normalmente (normally), de vez en cuando (from time to time).</p>
            </div>

            <h2>The Classic Combination: Background + Event</h2>
            <p>One of the most useful patterns to learn is when both tenses appear together. The imperfect sets the scene, and the preterite interrupts it with a specific event:</p>

            <div className="blog-example">
              <p className="es">Mientras <strong>dormía</strong> (imperfect), sonó el teléfono (preterite).</p>
              <p className="en">While I was sleeping, the phone rang.</p>
            </div>
            <div className="blog-example">
              <p className="es"><strong>Llovía</strong> (imperfect) cuando <strong>salí</strong> (preterite) de casa.</p>
              <p className="en">It was raining when I left the house.</p>
            </div>
            <p>The imperfect is the ongoing backdrop; the preterite is the thing that happened within it.</p>

            <h2>Verbs That Change Meaning</h2>
            <p>Some verbs have noticeably different meanings depending on which past tense you use:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Preterite</th><th>Imperfect</th></tr></thead>
                <tbody>
                  <tr><td><strong>saber</strong></td><td>found out (I found out the news)</td><td>knew (I knew the answer)</td></tr>
                  <tr><td><strong>conocer</strong></td><td>met (for the first time)</td><td>knew / was acquainted with</td></tr>
                  <tr><td><strong>querer</strong></td><td>tried (but didn't necessarily succeed)</td><td>wanted (ongoing desire)</td></tr>
                  <tr><td><strong>no querer</strong></td><td>refused (actively)</td><td>didn't want</td></tr>
                  <tr><td><strong>poder</strong></td><td>managed to / succeeded in</td><td>was able to (in general)</td></tr>
                  <tr><td><strong>tener que</strong></td><td>had to (and did it)</td><td>was supposed to</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ De niño, fui rubio. (suggests being blond was a single completed event)</p>
              <p className="es right">✓ De niño, era rubio. — As a child, I was blond. (description = imperfect)</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ Ayer, comía en ese restaurante. (ayer signals a specific past event)</p>
              <p className="es right">✓ Ayer, comí en ese restaurante. — Yesterday I ate at that restaurant.</p>
            </div>

            <div className="blog-highlight">
              <p>When in doubt, ask yourself: <strong>is this a specific completed event, or ongoing background?</strong> Specific and completed = preterite. Background, habitual or descriptive = imperfect.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Struggling with Spanish past tenses?</h3>
              <p>This is one of those topics that clicks much faster with guided practice. Get in touch to find out how I can help.</p>
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
