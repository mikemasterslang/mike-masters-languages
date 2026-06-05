import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSerVsEstar() {
  useScrollAnimation();
  usePageMeta(
    'Ser vs Estar: The Only Guide Beginner Spanish Learners Need | Mike Masters Languages',
    'Confused about when to use ser vs estar in Spanish? This beginner-friendly guide explains the difference clearly, with examples, memory tricks and common mistakes to avoid.'
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
          <h1>Ser vs Estar: The Only Guide Beginner Spanish Learners Need</h1>
          <p className="blog-hero-intro">
            Both mean "to be" — but they work completely differently. Here's how to tell them apart, every time.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              One of the first things that trips up English speakers learning Spanish is discovering there are <strong>two verbs that both mean "to be"</strong>: <em>ser</em> and <em>estar</em>. In English, we just say "I am", "she is", "they are" — simple. In Spanish, you need to choose the right one every single time.
            </p>
            <p>
              The good news? There is a clear logic to it. Once you understand the pattern, it becomes second nature — and getting it right makes a huge difference to how natural you sound.
            </p>

            <h2>The Core Idea: Permanent vs Temporary</h2>
            <p>
              The most common rule you'll hear is this: use <strong>ser for permanent things</strong> and <strong>estar for temporary things</strong>. That's a useful starting point, but it's not the full picture — which is why so many learners still get confused.
            </p>
            <p>
              A better way to think about it: <strong>ser describes what something fundamentally is</strong>, while <strong>estar describes its current state or condition</strong>.
            </p>

            <h2>When to Use Ser</h2>
            <p>Use <strong>ser</strong> for things that define or identify a person or thing — their essential characteristics:</p>

            <h3>Identity and Descriptions</h3>
            <div className="blog-example">
              <p className="es">Soy inglés. — <span style={{fontWeight: 400}}>I'm English.</span></p>
              <p className="es">Ella es alta. — <span style={{fontWeight: 400}}>She's tall.</span></p>
              <p className="es">El coche es rojo. — <span style={{fontWeight: 400}}>The car is red.</span></p>
            </div>

            <h3>Occupations</h3>
            <div className="blog-example">
              <p className="es">Soy profesor. — <span style={{fontWeight: 400}}>I'm a teacher.</span></p>
              <p className="es">Ella es médica. — <span style={{fontWeight: 400}}>She's a doctor.</span></p>
            </div>

            <h3>Origin and Nationality</h3>
            <div className="blog-example">
              <p className="es">Soy de Londres. — <span style={{fontWeight: 400}}>I'm from London.</span></p>
              <p className="es">El vino es de España. — <span style={{fontWeight: 400}}>The wine is from Spain.</span></p>
            </div>

            <h3>Time and Dates</h3>
            <div className="blog-example">
              <p className="es">Son las tres. — <span style={{fontWeight: 400}}>It's three o'clock.</span></p>
              <p className="es">Hoy es lunes. — <span style={{fontWeight: 400}}>Today is Monday.</span></p>
            </div>

            <h3>Relationships</h3>
            <div className="blog-example">
              <p className="es">Ella es mi madre. — <span style={{fontWeight: 400}}>She's my mother.</span></p>
              <p className="es">Son mis amigos. — <span style={{fontWeight: 400}}>They're my friends.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Memory trick for ser — DOCTOR:</strong> Descriptions, Occupations, Characteristics, Time, Origin, Relationships. If what you're saying fits one of these, use ser.</p>
            </div>

            <h2>When to Use Estar</h2>
            <p>Use <strong>estar</strong> for conditions, states, locations and things that can change:</p>

            <h3>Location</h3>
            <div className="blog-example">
              <p className="es">El libro está en la mesa. — <span style={{fontWeight: 400}}>The book is on the table.</span></p>
              <p className="es">¿Dónde está el baño? — <span style={{fontWeight: 400}}>Where is the bathroom?</span></p>
            </div>

            <h3>Emotions and Feelings</h3>
            <div className="blog-example">
              <p className="es">Estoy cansado. — <span style={{fontWeight: 400}}>I'm tired.</span></p>
              <p className="es">Ella está contenta hoy. — <span style={{fontWeight: 400}}>She's happy today.</span></p>
            </div>

            <h3>Conditions and States</h3>
            <div className="blog-example">
              <p className="es">El café está frío. — <span style={{fontWeight: 400}}>The coffee is cold.</span></p>
              <p className="es">La puerta está cerrada. — <span style={{fontWeight: 400}}>The door is closed.</span></p>
            </div>

            <h3>Continuous Actions (with -ando / -iendo)</h3>
            <div className="blog-example">
              <p className="es">Estoy comiendo. — <span style={{fontWeight: 400}}>I'm eating.</span></p>
              <p className="es">Están hablando. — <span style={{fontWeight: 400}}>They're talking.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Memory trick for estar — PLACE:</strong> Position, Location, Actions (continuous), Conditions, Emotions.</p>
            </div>

            <h2>Adjectives That Change Meaning</h2>
            <p>
              This is where it gets really interesting. Some adjectives mean completely different things depending on whether you use ser or estar. This is one of the most powerful aspects of the language once you grasp it.
            </p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Adjective</th>
                    <th>With SER</th>
                    <th>With ESTAR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>aburrido</strong></td><td>boring (as a person)</td><td>bored (right now)</td></tr>
                  <tr><td><strong>malo</strong></td><td>bad / evil</td><td>ill / sick</td></tr>
                  <tr><td><strong>bueno</strong></td><td>a good person</td><td>tasty / attractive</td></tr>
                  <tr><td><strong>listo</strong></td><td>clever</td><td>ready</td></tr>
                  <tr><td><strong>rico</strong></td><td>wealthy</td><td>delicious</td></tr>
                  <tr><td><strong>vivo</strong></td><td>sharp / lively</td><td>alive</td></tr>
                  <tr><td><strong>muerto</strong></td><td>— (rarely used)</td><td>dead</td></tr>
                </tbody>
              </table>
            </div>

            <p>So "Es aburrido" means "He's a boring person" — that's his personality. But "Está aburrido" means "He's bored right now" — just his current state. Big difference!</p>

            <h2>The Most Common Beginner Mistakes</h2>

            <h3>Using ser for illness</h3>
            <div className="blog-example">
              <p className="es wrong">✗ Soy enfermo.</p>
              <p className="es right">✓ Estoy enfermo. — I'm ill.</p>
              <p className="en">Being ill is a temporary condition, not a permanent characteristic.</p>
            </div>

            <h3>Using ser for location</h3>
            <div className="blog-example">
              <p className="es wrong">✗ El restaurante es en la calle mayor.</p>
              <p className="es right">✓ El restaurante está en la calle mayor. — The restaurant is on the high street.</p>
            </div>

            <h3>Forgetting that estar is used for death</h3>
            <p>Even death uses estar in Spanish, because it's treated as a resulting state rather than a permanent characteristic. So "Está muerto" means "He's dead".</p>

            <div className="blog-highlight">
              <p>The single most useful thing you can do is <strong>learn high-frequency phrases using both verbs</strong> and let the pattern become intuitive. Don't try to remember rules alone — practise saying real sentences out loud.</p>
            </div>

            <h2>Quick Reference</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>SER — what it IS</th><th>ESTAR — how it IS right now</th></tr>
                </thead>
                <tbody>
                  <tr><td>Identity, nationality, origin</td><td>Location</td></tr>
                  <tr><td>Occupation</td><td>Emotions and feelings</td></tr>
                  <tr><td>Permanent characteristics</td><td>Temporary conditions</td></tr>
                  <tr><td>Time and dates</td><td>Continuous actions (-ando / -iendo)</td></tr>
                  <tr><td>Relationships</td><td>Results of actions</td></tr>
                  <tr><td>Material / composition</td><td>Health</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>Ser and estar become natural much faster when you use them in real conversation. Get in touch and we'll find the right programme for you.</p>
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
