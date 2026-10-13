import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogOtraVez() {
  useScrollAnimation();
  usePageMeta(
    'How to Say "Again" in Spanish: Otra Vez, De Nuevo and More | Mike Masters Languages',
    'How do you say "again" in Spanish? Otra vez and de nuevo are both correct — but they\'re not always interchangeable. Here\'s when to use each and what else you need to know.'
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
            <span className="blog-hero-date">October 2026</span>
          </div>
          <h1>How to Say "Again" in Spanish: Otra Vez, De Nuevo and More</h1>
          <p className="blog-hero-intro">There are two main ways to say "again" in Spanish — and a handful of others worth knowing. Here's when to use each one.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>"Again" is one of those words you need constantly in conversation — asking someone to repeat themselves, talking about doing something again, saying "once more". In Spanish there are two main options (<em>otra vez</em> and <em>de nuevo</em>) plus several others depending on context.</p>

            <div className="blog-highlight">
              <p><strong>Otra vez</strong> and <strong>de nuevo</strong> both mean "again" and are largely interchangeable in everyday speech. In formal writing, <em>de nuevo</em> is slightly more common. In spoken Spanish, <em>otra vez</em> is the most natural choice.</p>
            </div>

            <h2>Otra Vez</h2>

            <p><em>Otra vez</em> literally means "another time". It's the most common, most natural way to say "again" in everyday spoken Spanish — in Spain and across Latin America.</p>

            <div className="blog-example">
              <p className="es">¿Puedes repetir otra vez? — <span style={{fontWeight:400}}>Can you repeat that again?</span></p>
              <p className="es">Otra vez me he olvidado el móvil. — <span style={{fontWeight:400}}>I've forgotten my phone again.</span></p>
              <p className="es">Vamos otra vez. — <span style={{fontWeight:400}}>Let's go again.</span></p>
              <p className="es">Lo hice otra vez. — <span style={{fontWeight:400}}>I did it again.</span></p>
              <p className="es">¡Otra vez! — <span style={{fontWeight:400}}>Again! / Once more!</span></p>
            </div>

            <h2>De Nuevo</h2>

            <p><em>De nuevo</em> literally means "of new" (i.e. anew). It means exactly the same as <em>otra vez</em> and is equally correct. Slightly more common in formal writing and in some Latin American countries.</p>

            <div className="blog-example">
              <p className="es">Empieza de nuevo. — <span style={{fontWeight:400}}>Start again.</span></p>
              <p className="es">Lo intentaré de nuevo. — <span style={{fontWeight:400}}>I'll try again.</span></p>
              <p className="es">Bienvenido de nuevo. — <span style={{fontWeight:400}}>Welcome back. (lit. welcome again)</span></p>
              <p className="es">¿Puedes explicarlo de nuevo? — <span style={{fontWeight:400}}>Can you explain it again?</span></p>
            </div>

            <h2>Other Ways to Say Again</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Expression</th><th>Meaning</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  <tr><td>volver a + infinitive</td><td>to do something again</td><td>Most natural for repeated actions — see below</td></tr>
                  <tr><td>una vez más</td><td>one more time</td><td>Slightly more emphatic</td></tr>
                  <tr><td>nuevamente</td><td>again / once more</td><td>More formal, mainly written Spanish</td></tr>
                  <tr><td>de vuelta</td><td>back again</td><td>More about returning: "estoy de vuelta" = I'm back</td></tr>
                  <tr><td>repetir</td><td>to repeat</td><td>A verb, not an adverb — "¿puedes repetir?" = can you repeat?</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Volver a + Infinitive — The Most Natural Option for Actions</h2>

            <p>For describing doing something again, <em>volver a + infinitive</em> is often more natural than <em>otra vez</em>:</p>

            <div className="blog-example">
              <p className="es">Volvió a llamar. — <span style={{fontWeight:400}}>He called again. (more natural than "llamó otra vez")</span></p>
              <p className="es">Voy a volver a intentarlo. — <span style={{fontWeight:400}}>I'm going to try again.</span></p>
              <p className="es">Volvimos a vernos. — <span style={{fontWeight:400}}>We met again.</span></p>
              <p className="es">No quiero volver a cometer ese error. — <span style={{fontWeight:400}}>I don't want to make that mistake again.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Volver a + infinitive</strong> is the most elegant way to express doing something again in Spanish. It's more natural-sounding than tagging <em>otra vez</em> onto the end of a sentence.</p>
            </div>

            <h2>Quick Reference</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Situation</th><th>Best choice</th></tr>
                </thead>
                <tbody>
                  <tr><td>Asking someone to repeat</td><td>¿Otra vez? / ¿De nuevo? / ¿Puedes repetir?</td></tr>
                  <tr><td>Doing an action again</td><td>Volver a + infinitive</td></tr>
                  <tr><td>One more time (emphatic)</td><td>Una vez más</td></tr>
                  <tr><td>Formal writing</td><td>De nuevo / Nuevamente</td></tr>
                  <tr><td>Casual speech</td><td>Otra vez</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>Knowing which option sounds most natural in context is the kind of thing a real conversation partner helps you develop — not just vocabulary lists.</p>
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
