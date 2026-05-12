import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPassiveVoice() {
  useScrollAnimation();
  usePageMeta(
    'The Passive Voice and "Se" Constructions in Spanish | Mike Masters Languages',
    'Spanish has two ways to express the passive — and the "se" construction is far more common in everyday speech. This guide explains both, with clear examples.'
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
          <h1>The Passive Voice and "Se" Constructions in Spanish</h1>
          <p className="blog-hero-intro">
            "Spanish is spoken here." "The museum was built in 1890." Passive constructions are everywhere — and Spanish handles them differently from English.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The passive voice describes what happens to the subject rather than what the subject does. English uses "to be" + past participle for this: "The door was opened." Spanish has two main ways to express the same idea — the true passive (ser + participle) and the much more common <em>se</em> passive.</p>

            <h2>The True Passive: Ser + Past Participle</h2>
            <p>The true passive in Spanish works like English: <strong>ser</strong> (to be) + past participle. The participle agrees in gender and number with the subject:</p>

            <div className="blog-example">
              <p className="es">La carta fue escrita por María. — <span style={{fontWeight:400}}>The letter was written by María.</span></p>
              <p className="es">El museo fue construido en 1890. — <span style={{fontWeight:400}}>The museum was built in 1890.</span></p>
              <p className="es">Los libros son vendidos en la librería. — <span style={{fontWeight:400}}>The books are sold in the bookshop.</span></p>
            </div>

            <p>The true passive is used when the agent (the person doing the action) is mentioned or important — introduced with <em>por</em> (by).</p>

            <h2>The Se Passive: More Common in Everyday Speech</h2>
            <p>In practice, Spanish speakers much prefer the <strong>se passive</strong> over the true passive when no specific agent is mentioned. The structure is <strong>se + verb</strong>, and the verb agrees with the subject:</p>

            <div className="blog-example">
              <p className="es">Se habla español aquí. — <span style={{fontWeight:400}}>Spanish is spoken here.</span></p>
              <p className="es">Se venden pisos. — <span style={{fontWeight:400}}>Flats for sale. (flats are sold)</span></p>
              <p className="es">Se abre a las nueve. — <span style={{fontWeight:400}}>It opens at nine. (it is opened)</span></p>
            </div>

            <p>The verb is singular when the subject is singular, plural when plural:</p>
            <div className="blog-example">
              <p className="es">Se vende piso. — <span style={{fontWeight:400}}>Flat for sale. (singular)</span></p>
              <p className="es">Se venden pisos. — <span style={{fontWeight:400}}>Flats for sale. (plural)</span></p>
            </div>

            <h2>Se for Impersonal Statements</h2>
            <p>The <em>se</em> construction is also used for general, impersonal statements — things that are done in general, with no specific subject. The verb is always third person singular:</p>

            <div className="blog-example">
              <p className="es">Se puede aparcar aquí. — <span style={{fontWeight:400}}>You can park here. / One can park here.</span></p>
              <p className="es">En España se cena tarde. — <span style={{fontWeight:400}}>In Spain, people eat dinner late.</span></p>
              <p className="es">No se debe fumar aquí. — <span style={{fontWeight:400}}>One must not / You shouldn't smoke here.</span></p>
            </div>

            <h2>Ser + Participle vs Estar + Participle</h2>
            <p>An important distinction: <em>ser</em> + participle describes a process or action; <em>estar</em> + participle describes a resulting state:</p>
            <div className="blog-example">
              <p className="es">La puerta fue cerrada por el guardia. — <span style={{fontWeight:400}}>The door was closed by the guard. (action — ser)</span></p>
              <p className="es">La puerta está cerrada. — <span style={{fontWeight:400}}>The door is closed. (state — estar)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Practical focus:</strong> For most everyday situations, learn the <em>se</em> passive first. It's what you'll see on signs, menus and notices (<em>se vende, se alquila, se habla inglés</em>), and it's what native speakers use in conversation when they don't want to specify who does something.</p>
            </div>

            <div className="blog-highlight">
              <p>The <em>se</em> construction is one of the most versatile structures in Spanish. It handles passive meaning, impersonal meaning, and several reflexive meanings — all with the same simple form. Once you're comfortable with it, a large chunk of Spanish text suddenly becomes transparent.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to understand real Spanish in context?</h3>
              <p>Passive and se constructions are everywhere in written and spoken Spanish. Let's make sure you can use and understand them confidently.</p>
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
