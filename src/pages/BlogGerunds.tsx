import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGerunds() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Gerunds and the Present Continuous: -ando, -iendo | Mike Masters Languages',
    'The Spanish gerund (-ando/-iendo) is used to form the present continuous and other progressive tenses. This guide explains how to form it and all the ways it\'s used.'
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
          <h1>Spanish Gerunds and the Present Continuous</h1>
          <p className="blog-hero-intro">
            "I am eating", "she is studying" — the present continuous is one of the first tenses beginners want to use. Here's how it works in Spanish.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The gerund in Spanish is the <em>-ando / -iendo</em> form of a verb — the equivalent of "-ing" in English. It's most commonly used to form the <strong>present continuous</strong> (estar + gerund), but it appears in other constructions too. It's simple to form and immediately useful.</p>

            <h2>Forming the Gerund</h2>
            <ul>
              <li><strong>-AR verbs:</strong> drop -ar, add <strong>-ando</strong> → hablar → <em>hablando</em></li>
              <li><strong>-ER verbs:</strong> drop -er, add <strong>-iendo</strong> → comer → <em>comiendo</em></li>
              <li><strong>-IR verbs:</strong> drop -ir, add <strong>-iendo</strong> → vivir → <em>viviendo</em></li>
            </ul>

            <div className="blog-example">
              <p className="es">hablar → hablando — speaking</p>
              <p className="es">comer → comiendo — eating</p>
              <p className="es">escribir → escribiendo — writing</p>
              <p className="es">leer → leyendo — reading (i→y between vowels)</p>
            </div>

            <h2>Irregular Gerunds</h2>
            <p>Stem-changing -IR verbs use their stem change in the gerund. The most important ones:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Gerund</th></tr></thead>
                <tbody>
                  <tr><td>decir</td><td><strong>diciendo</strong></td></tr>
                  <tr><td>dormir</td><td><strong>durmiendo</strong></td></tr>
                  <tr><td>pedir</td><td><strong>pidiendo</strong></td></tr>
                  <tr><td>venir</td><td><strong>viniendo</strong></td></tr>
                  <tr><td>ir</td><td><strong>yendo</strong></td></tr>
                  <tr><td>poder</td><td><strong>pudiendo</strong></td></tr>
                  <tr><td>seguir</td><td><strong>siguiendo</strong></td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Present Continuous: Estar + Gerund</h2>
            <p>To say what is happening right now, use the present tense of <em>estar</em> + gerund:</p>
            <div className="blog-example">
              <p className="es">Estoy comiendo. — <span style={{fontWeight:400}}>I am eating (right now).</span></p>
              <p className="es">Está lloviendo. — <span style={{fontWeight:400}}>It is raining.</span></p>
              <p className="es">¿Qué estás haciendo? — <span style={{fontWeight:400}}>What are you doing?</span></p>
              <p className="es">Estamos estudiando español. — <span style={{fontWeight:400}}>We are studying Spanish.</span></p>
            </div>

            <h2>Important Difference from English</h2>
            <p>In English, the "-ing" form is used in many situations — as a noun, after prepositions, to describe ongoing habits. In Spanish, the gerund is more restricted. It is <strong>not</strong> used:</p>
            <ul>
              <li>After prepositions → use the infinitive instead: <em>antes de comer</em> (before eating), not <em>antes de comiendo</em></li>
              <li>As a noun (subject) → use the infinitive: <em>Hablar es importante</em> (Speaking is important)</li>
              <li>For future plans → use ir a + infinitive: <em>Voy a estudiar</em> (I'm going to study)</li>
            </ul>

            <div className="blog-example">
              <p className="es wrong">✗ Antes de comiendo. (gerund after preposition)</p>
              <p className="es right">✓ Antes de comer. — Before eating.</p>
            </div>

            <h2>Other Uses of the Gerund</h2>
            <p>The gerund also appears in useful set constructions:</p>
            <div className="blog-example">
              <p className="es">Seguir + gerund: Sigo estudiando. — <span style={{fontWeight:400}}>I keep studying / I continue studying.</span></p>
              <p className="es">Llevar + time + gerund: Llevo tres horas esperando. — <span style={{fontWeight:400}}>I've been waiting for three hours.</span></p>
              <p className="es">Terminar + gerund: Terminó llorando. — <span style={{fontWeight:400}}>She ended up crying.</span></p>
            </div>

            <div className="blog-highlight">
              <p>The gerund is one of the most straightforward structures in Spanish. Master <em>estar + gerund</em> for the present continuous, know which other verbs take it, and remember that after prepositions you use the infinitive instead — and you'll have it covered.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to describe what's happening in Spanish in real time?</h3>
              <p>The present continuous is one of the most natural tenses in conversation. Let's get it working for you.</p>
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
