import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogCafeGender() {
  useScrollAnimation();
  usePageMeta(
    'Is Café Masculine or Feminine in Spanish? | Mike Masters Languages',
    'Is café masculine or feminine in Spanish? It\'s masculine — el café. Here\'s why, plus a guide to other commonly confused noun genders and how to remember them.'
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
          <h1>Is Café Masculine or Feminine in Spanish?</h1>
          <p className="blog-hero-intro">Short answer: masculine — el café. But noun gender in Spanish goes beyond endings, and café is a good example of why. Here's how to think about it.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <div className="blog-highlight">
              <p><strong>El café</strong> — masculine. <em>Un café solo, por favor.</em> — A black coffee, please. Café ends in -é, which is typically masculine in Spanish, especially for borrowed words.</p>
            </div>

            <p>Knowing whether a Spanish noun is masculine or feminine matters — it affects the article (el/la), adjective endings, and pronoun choice. <em>Café</em> is one that catches learners out because it doesn't follow the most obvious -o/-a rule. Here's why it's masculine, and how to approach noun gender more broadly.</p>

            <h2>Why Is Café Masculine?</h2>

            <p>Nouns ending in a stressed vowel (é, á, ó, ú) — especially borrowed words from other languages — tend to be masculine in Spanish. <em>Café</em> comes from French and follows this pattern:</p>

            <div className="blog-example">
              <p className="es">el café — <span style={{fontWeight:400}}>coffee / café</span></p>
              <p className="es">el sofá — <span style={{fontWeight:400}}>sofa</span></p>
              <p className="es">el tabú — <span style={{fontWeight:400}}>taboo</span></p>
              <p className="es">el menú — <span style={{fontWeight:400}}>menu</span></p>
              <p className="es">el champú — <span style={{fontWeight:400}}>shampoo</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Pattern to remember:</strong> Words ending in a stressed -é, -á, -ú tend to be masculine. This pattern covers many borrowed words: café, menú, sofá, tabú.</p>
            </div>

            <h2>Other Commonly Confused Noun Genders</h2>

            <p>Some nouns trip up learners because their ending looks like the opposite gender:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Noun</th><th>Gender</th><th>Why it surprises learners</th></tr>
                </thead>
                <tbody>
                  <tr><td>el mapa</td><td>masculine</td><td>Ends in -a, looks feminine</td></tr>
                  <tr><td>el día</td><td>masculine</td><td>Ends in -a, looks feminine</td></tr>
                  <tr><td>el problema</td><td>masculine</td><td>Ends in -a, looks feminine (Greek origin)</td></tr>
                  <tr><td>el idioma</td><td>masculine</td><td>Ends in -a, looks feminine (Greek origin)</td></tr>
                  <tr><td>el tema</td><td>masculine</td><td>Ends in -a, looks feminine (Greek origin)</td></tr>
                  <tr><td>la mano</td><td>feminine</td><td>Ends in -o, looks masculine</td></tr>
                  <tr><td>la radio</td><td>feminine</td><td>Ends in -o, looks masculine</td></tr>
                  <tr><td>la foto</td><td>feminine</td><td>Short for fotografía — keeps feminine gender</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>Words ending in -ma, -pa, -ta of Greek origin are nearly always masculine: el problema, el tema, el idioma, el sistema, el programa, el clima, el poema. Learn this group together.</p>
            </div>

            <h2>The Most Useful Rules for Noun Gender</h2>

            <h3>Masculine endings (usually):</h3>

            <div className="blog-example">
              <p className="es">-o: <span style={{fontWeight:400}}>el libro, el vino, el coche</span></p>
              <p className="es">-or: <span style={{fontWeight:400}}>el color, el amor, el calor</span></p>
              <p className="es">-aje: <span style={{fontWeight:400}}>el viaje, el paisaje, el garaje</span></p>
              <p className="es">-án, -ón, -én: <span style={{fontWeight:400}}>el corazón, el camión</span></p>
            </div>

            <h3>Feminine endings (usually):</h3>

            <div className="blog-example">
              <p className="es">-a: <span style={{fontWeight:400}}>la casa, la mesa (but see exceptions above)</span></p>
              <p className="es">-ción / -sión: <span style={{fontWeight:400}}>la canción, la televisión, la nación</span></p>
              <p className="es">-dad / -tad: <span style={{fontWeight:400}}>la ciudad, la libertad, la verdad</span></p>
              <p className="es">-tud: <span style={{fontWeight:400}}>la actitud, la juventud</span></p>
              <p className="es">-umbre: <span style={{fontWeight:400}}>la costumbre, la incertidumbre</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Most reliable rule:</strong> The -ción ending is 100% reliable — every word ending in -ción is feminine. La canción, la nación, la acción, la conversación. Learn this rule and never doubt it.</p>
            </div>

            <h2>How to Remember Noun Gender</h2>

            <p>The single best habit: learn every noun with its article from the start. Don't learn <em>café</em> — learn <em>el café</em>. Don't learn <em>ciudad</em> — learn <em>la ciudad</em>. This way the gender is built into how you remember the word.</p>

            <div className="blog-example">
              <p className="es right">✓ Learn: <span style={{fontWeight:400}}>el café, el problema, el mapa, el día</span></p>
              <p className="es wrong">✗ Not: <span style={{fontWeight:400}}>café, problema, mapa, día</span></p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>Noun gender is one of the first things to build solid habits around. Working with a tutor from early on means getting corrected the moment a gender error creeps in — before it becomes a habit.</p>
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
