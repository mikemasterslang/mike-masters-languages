import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPrepositions() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Prepositions: A, En, De, Con, Sin, Para and More | Mike Masters Languages',
    'Prepositions are small words that cause big problems. This guide explains the most common Spanish prepositions — what they mean, when to use them, and where beginners go wrong.'
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
          <h1>Spanish Prepositions: A, En, De, Con, Sin, Para and More</h1>
          <p className="blog-hero-intro">
            Prepositions don't translate directly between languages — and that's why they trip up almost every beginner. Here's a clear guide to the most essential ones.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Prepositions are among the hardest things to master in any language because they rarely map directly from one language to another. The word you use to say "in", "on", "at" or "about" in English will often be different in Spanish, and vice versa. The best approach is to learn prepositions in context — as part of phrases — rather than trying to find a one-to-one translation.</p>

            <h2>A — To / At / (Personal A)</h2>
            <p><em>A</em> is one of the most common prepositions. Its main uses:</p>
            <ul>
              <li><strong>Direction / destination:</strong> <em>Voy a Madrid. — I'm going to Madrid.</em></li>
              <li><strong>Time:</strong> <em>A las tres. — At three o'clock.</em></li>
              <li><strong>Personal a:</strong> <em>Llamo a mi madre. — I call my mother.</em></li>
              <li><strong>A + infinitive (after ir):</strong> <em>Voy a comer. — I'm going to eat.</em></li>
            </ul>

            <h2>En — In / On / At</h2>
            <p><em>En</em> covers several English prepositions and is used for location and means of transport:</p>
            <ul>
              <li><strong>Location (in, at):</strong> <em>Estoy en casa. — I'm at home. / Vivo en España. — I live in Spain.</em></li>
              <li><strong>On a surface:</strong> <em>El libro está en la mesa. — The book is on the table.</em></li>
              <li><strong>Transport:</strong> <em>Voy en tren / en coche / en avión. — I'm going by train / by car / by plane.</em></li>
              <li><strong>Time period:</strong> <em>En verano / en enero. — In summer / in January.</em></li>
            </ul>

            <h2>De — Of / From / About</h2>
            <p><em>De</em> is the most flexible preposition in Spanish:</p>
            <ul>
              <li><strong>Possession / belonging:</strong> <em>El coche de Ana. — Ana's car.</em></li>
              <li><strong>Origin:</strong> <em>Soy de Londres. — I'm from London.</em></li>
              <li><strong>Material:</strong> <em>Una mesa de madera. — A wooden table.</em></li>
              <li><strong>Topic:</strong> <em>Hablamos de política. — We talked about politics.</em></li>
              <li><strong>Part of the day:</strong> <em>Son las tres de la tarde. — It's three in the afternoon.</em></li>
            </ul>

            <h2>Con — With</h2>
            <p><em>Con</em> means "with" in almost all cases — people, things, and characteristics:</p>
            <div className="blog-example">
              <p className="es">Voy con mis amigos. — <span style={{fontWeight:400}}>I'm going with my friends.</span></p>
              <p className="es">Un café con leche. — <span style={{fontWeight:400}}>A coffee with milk.</span></p>
              <p className="es">Con cuidado. — <span style={{fontWeight:400}}>Carefully. / With care.</span></p>
            </div>

            <h2>Sin — Without</h2>
            <p><em>Sin</em> means "without" and is followed directly by a noun or infinitive:</p>
            <div className="blog-example">
              <p className="es">Sin azúcar. — <span style={{fontWeight:400}}>Without sugar.</span></p>
              <p className="es">Salió sin decir nada. — <span style={{fontWeight:400}}>He left without saying anything.</span></p>
            </div>

            <h2>Desde / Hasta — From / Until</h2>
            <div className="blog-example">
              <p className="es">Trabajo desde las nueve hasta las cinco. — <span style={{fontWeight:400}}>I work from nine until five.</span></p>
              <p className="es">Desde Madrid hasta Barcelona. — <span style={{fontWeight:400}}>From Madrid to Barcelona.</span></p>
              <p className="es">Hasta luego. — <span style={{fontWeight:400}}>See you later. (until later)</span></p>
            </div>

            <h2>Sobre — On / About / Over</h2>
            <div className="blog-example">
              <p className="es">El libro está sobre la mesa. — <span style={{fontWeight:400}}>The book is on the table. (on top of)</span></p>
              <p className="es">Un documental sobre la historia de España. — <span style={{fontWeight:400}}>A documentary about the history of Spain.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Por and para</strong> both mean "for" but are used differently — they deserve their own guide (see our Por vs Para post). Don't try to learn them alongside all the other prepositions at once.</p>
            </div>

            <div className="blog-highlight">
              <p>The most effective way to learn prepositions is through repeated exposure to natural Spanish — reading, listening, and speaking. Rather than memorising lists, notice prepositions in context and let the patterns build up gradually. They will click over time.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to use Spanish prepositions naturally?</h3>
              <p>Prepositions are best learned in conversation — with feedback when you get them wrong. Let's work on them together.</p>
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
