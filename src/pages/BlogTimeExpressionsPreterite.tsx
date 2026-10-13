import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogTimeExpressionsPreterite() {
  useScrollAnimation();
  usePageMeta(
    'Time Expressions in Spanish: Preterite or Imperfect? | Mike Masters Languages',
    'Muchas veces, siempre, ayer, a veces — which Spanish time expressions go with the preterite and which with the imperfect? The complete guide with examples.'
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
            <span className="blog-hero-date">October 2026</span>
          </div>
          <h1>Time Expressions in Spanish: Preterite or Imperfect?</h1>
          <p className="blog-hero-intro">Certain time expressions almost always point to the preterite. Others signal the imperfect. Learning these is one of the fastest ways to get your past tenses right more consistently.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the most practical shortcuts for choosing between the preterite and the imperfect is paying attention to time expressions — the words and phrases that describe when or how often something happened. Many of these point strongly to one tense or the other.</p>

            <div className="blog-highlight">
              <p><strong>The key question:</strong> does the time expression indicate a completed, specific event (preterite) or a habitual, repeated, or ongoing situation (imperfect)? The time expression often answers this for you.</p>
            </div>

            <h2>Time Expressions That Signal the Preterite</h2>

            <p>These expressions indicate a specific, completed moment or period — they go with the preterite:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Expression</th><th>Meaning</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>ayer</td><td>yesterday</td><td>Ayer fui al médico.</td></tr>
                  <tr><td>anteayer</td><td>the day before yesterday</td><td>Anteayer llegó mi hermano.</td></tr>
                  <tr><td>la semana pasada</td><td>last week</td><td>La semana pasada estudié mucho.</td></tr>
                  <tr><td>el año pasado</td><td>last year</td><td>El año pasado viví en Madrid.</td></tr>
                  <tr><td>el mes pasado</td><td>last month</td><td>El mes pasado empecé un nuevo trabajo.</td></tr>
                  <tr><td>esta mañana</td><td>this morning</td><td>Esta mañana me levanté tarde.</td></tr>
                  <tr><td>hace [time]</td><td>[time] ago</td><td>Hace dos años viajé a México.</td></tr>
                  <tr><td>de repente</td><td>suddenly</td><td>De repente empezó a llover.</td></tr>
                  <tr><td>en ese momento</td><td>at that moment</td><td>En ese momento llegó la policía.</td></tr>
                  <tr><td>una vez</td><td>once</td><td>Una vez fui a un concierto de Shakira.</td></tr>
                  <tr><td>dos veces</td><td>twice</td><td>Lo hice dos veces.</td></tr>
                  <tr><td>el lunes/martes (specific)</td><td>on Monday/Tuesday</td><td>El lunes fui al gimnasio.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Ayer comí en un restaurante italiano. — <span style={{fontWeight:400}}>Yesterday I ate at an Italian restaurant.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Hace tres años aprendí a conducir. — <span style={{fontWeight:400}}>Three years ago I learned to drive.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">De repente sonó el teléfono. — <span style={{fontWeight:400}}>Suddenly the phone rang.</span></p>
            </div>

            <h2>Time Expressions That Signal the Imperfect</h2>

            <p>These expressions indicate habitual, repeated, or ongoing actions in the past — they go with the imperfect:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Expression</th><th>Meaning</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>siempre</td><td>always</td><td>Siempre llegaba tarde.</td></tr>
                  <tr><td>normalmente</td><td>normally</td><td>Normalmente desayunaba en casa.</td></tr>
                  <tr><td>generalmente</td><td>generally</td><td>Generalmente iba al trabajo en metro.</td></tr>
                  <tr><td>a veces</td><td>sometimes</td><td>A veces comía en el trabajo.</td></tr>
                  <tr><td>muchas veces</td><td>many times / often</td><td>Muchas veces me olvidaba el paraguas.</td></tr>
                  <tr><td>con frecuencia</td><td>frequently</td><td>Con frecuencia visitaba a mis abuelos.</td></tr>
                  <tr><td>cada día</td><td>every day</td><td>Cada día estudiaba dos horas.</td></tr>
                  <tr><td>cada semana</td><td>every week</td><td>Cada semana iba al mercado.</td></tr>
                  <tr><td>todos los días</td><td>every day</td><td>Todos los días escuchaba música.</td></tr>
                  <tr><td>de niño/a</td><td>as a child</td><td>De niño vivía en el campo.</td></tr>
                  <tr><td>cuando era joven</td><td>when I was young</td><td>Cuando era joven no me gustaban las verduras.</td></tr>
                  <tr><td>en aquella época</td><td>in those days</td><td>En aquella época todo era más barato.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Muchas veces me olvidaba el móvil. — <span style={{fontWeight:400}}>I often used to forget my phone.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Cuando era niña, siempre jugaba en el parque. — <span style={{fontWeight:400}}>When I was a girl, I always used to play in the park.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Normalmente comíamos juntos los domingos. — <span style={{fontWeight:400}}>We normally used to eat together on Sundays.</span></p>
            </div>

            <div className="blog-highlight">
              <p><strong>Muchas veces</strong> signals the imperfect — it means 'many times' in a habitual, ongoing sense. It describes a pattern, not a counted number of specific events. Compare: <em>Fui al cine dos veces</em> (preterite — exactly twice, completed) vs <em>Muchas veces iba al cine</em> (imperfect — it was a regular habit).</p>
            </div>

            <h2>Expressions That Can Go With Either — Depending on Meaning</h2>

            <p>Some expressions can appear with both tenses depending on what you mean:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Expression</th><th>With preterite</th><th>With imperfect</th></tr></thead>
                <tbody>
                  <tr><td>el lunes</td><td>El lunes fui (specific Monday)</td><td>Los lunes iba (every Monday, habitual)</td></tr>
                  <tr><td>por la mañana</td><td>Esta mañana me desperté (this morning)</td><td>Por las mañanas corría (habitually in the mornings)</td></tr>
                  <tr><td>un día</td><td>Un día decidí cambiar de trabajo (one specific day)</td><td>Rare with imperfect</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Muchas Veces Question</h2>

            <p><em>Muchas veces</em> is a classic exam question — preterite or imperfect?</p>

            <p>The answer: <strong>imperfect</strong>, because <em>muchas veces</em> describes a habitual pattern, not a specific counted number of events.</p>

            <div className="blog-example">
              <p className="es wrong">✗ Muchas veces fui al gimnasio. <span style={{fontWeight:400}}>(This isn't wrong in all contexts but implies a vague, completed series — less natural)</span></p>
            </div>

            <div className="blog-example">
              <p className="es right">✓ Muchas veces iba al gimnasio después del trabajo. — <span style={{fontWeight:400}}>I often used to go to the gym after work.</span> (habitual pattern — imperfect)</p>
            </div>

            <p>Compare with a specific number:</p>

            <div className="blog-example">
              <p className="es right">✓ Fui al gimnasio tres veces la semana pasada. — <span style={{fontWeight:400}}>I went to the gym three times last week.</span> (specific, completed — preterite)</p>
            </div>

            <div className="blog-tip">
              <p><strong>When you see <em>muchas veces, siempre, a veces, normalmente, cada día</em></strong> — default to the imperfect. These words signal repetition and habit, which is exactly what the imperfect is for.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>Past tense accuracy is one of the clearest markers of intermediate vs advanced Spanish. If you'd like to work on this in real sentences with feedback, get in touch.</p>
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
