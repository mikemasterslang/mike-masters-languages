import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogNegation() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Negation: No, Nunca, Nada, Nadie and Double Negatives | Mike Masters Languages',
    'Saying no in Spanish is simple — but Spanish also uses double negatives in a way English doesn\'t. This guide explains all the negative words and how to use them correctly.'
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
          <h1>Spanish Negation: No, Nunca, Nada, Nadie and Double Negatives</h1>
          <p className="blog-hero-intro">
            Negation in Spanish starts simply — but Spanish uses double negatives in a way that trips up English speakers. Here's the full picture.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The simplest form of negation in Spanish is easy: put <em>no</em> directly before the verb. But Spanish has a range of negative words — <em>nunca, nada, nadie, ninguno, tampoco</em> — and the rule about how they combine is different from English. Understanding it is one of those things that will immediately make your Spanish feel more correct.</p>

            <h2>Simple No</h2>
            <p>Place <strong>no</strong> directly before the conjugated verb. No other word goes between <em>no</em> and the verb:</p>
            <div className="blog-example">
              <p className="es">No hablo japonés. — <span style={{fontWeight:400}}>I don't speak Japanese.</span></p>
              <p className="es">No tengo coche. — <span style={{fontWeight:400}}>I don't have a car.</span></p>
              <p className="es">No me gusta el café. — <span style={{fontWeight:400}}>I don't like coffee.</span></p>
            </div>

            <h2>The Negative Words</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Negative word</th><th>Meaning</th><th>Positive equivalent</th></tr></thead>
                <tbody>
                  <tr><td><strong>nunca / jamás</strong></td><td>never</td><td>siempre (always)</td></tr>
                  <tr><td><strong>nada</strong></td><td>nothing</td><td>algo (something)</td></tr>
                  <tr><td><strong>nadie</strong></td><td>nobody / no one</td><td>alguien (someone)</td></tr>
                  <tr><td><strong>ningún / ninguno/a</strong></td><td>no / none / not any</td><td>algún / alguno/a (some / any)</td></tr>
                  <tr><td><strong>tampoco</strong></td><td>neither / not either</td><td>también (also / too)</td></tr>
                  <tr><td><strong>ni... ni</strong></td><td>neither... nor</td><td>o... o (either... or)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Double Negatives: Required in Spanish</h2>
            <p>In English, using two negatives in one sentence ("I don't know nothing") is considered incorrect. In Spanish, it is <strong>required</strong>. When a negative word comes after the verb, <em>no</em> must also appear before the verb:</p>

            <div className="blog-example">
              <p className="es wrong">✗ Sé nada. (negative word after verb without no)</p>
              <p className="es right">✓ No sé nada. — I don't know anything. / I know nothing.</p>
            </div>
            <div className="blog-example">
              <p className="es right">✓ No hay nadie aquí. — There's nobody here.</p>
              <p className="es right">✓ No voy nunca al gimnasio. — I never go to the gym.</p>
              <p className="es right">✓ No quiero ni café ni té. — I want neither coffee nor tea.</p>
            </div>

            <p>However, if the negative word comes <strong>before</strong> the verb, <em>no</em> is not needed:</p>
            <div className="blog-example">
              <p className="es right">✓ Nunca voy al gimnasio. — I never go to the gym.</p>
              <p className="es right">✓ Nadie sabe la respuesta. — Nobody knows the answer.</p>
              <p className="es right">✓ Nada me sorprende. — Nothing surprises me.</p>
            </div>

            <h2>Ningún vs Ninguno</h2>
            <p><em>Ningún</em> is used before a masculine noun; <em>ninguno</em> stands alone:</p>
            <div className="blog-example">
              <p className="es">No tengo ningún problema. — <span style={{fontWeight:400}}>I have no problem.</span></p>
              <p className="es">¿Tienes amigos aquí? — No tengo ninguno. — <span style={{fontWeight:400}}>Do you have friends here? — I have none.</span></p>
            </div>

            <h2>Tampoco — Neither / Not Either</h2>
            <p><em>Tampoco</em> is the negative equivalent of <em>también</em> (also). Use it to agree with a negative statement:</p>
            <div className="blog-example">
              <p className="es">No me gusta el fútbol. — Tampoco a mí. / A mí tampoco. — <span style={{fontWeight:400}}>I don't like football. — Me neither.</span></p>
              <p className="es">No quiero salir. — Yo tampoco. — <span style={{fontWeight:400}}>I don't want to go out. — Me neither.</span></p>
            </div>

            <div className="blog-highlight">
              <p>The double negative rule is one of the things beginners resist at first because it contradicts what they've been taught in English. But in Spanish it isn't a grammatical error — it's the correct form. Embrace it, and your Spanish will sound much more natural.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to express yourself accurately in Spanish?</h3>
              <p>Negation is one of those fundamentals that comes up in every conversation. Let's make sure you've got it right.</p>
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
