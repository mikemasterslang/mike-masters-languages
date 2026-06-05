import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSpanishArticles() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Articles: El, La, Un, Una — and When to Drop Them | Mike Masters Languages',
    'Spanish has definite and indefinite articles that must agree with noun gender and number — and sometimes you use no article at all. Here\'s the complete guide.'
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
          <h1>Spanish Articles: El, La, Un, Una — and When to Drop Them</h1>
          <p className="blog-hero-intro">
            Articles in Spanish change depending on gender and number — and sometimes they disappear entirely. Here's how they work.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>In English there are only three articles: "the", "a" and "an." Spanish has more, because they must match the gender and number of the noun they accompany. On top of that, Spanish sometimes uses articles where English doesn't — and sometimes drops them where English would keep them.</p>

            <h2>Definite Articles (The)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th></th><th>Masculine</th><th>Feminine</th></tr></thead>
                <tbody>
                  <tr><td><strong>Singular</strong></td><td><strong>el</strong></td><td><strong>la</strong></td></tr>
                  <tr><td><strong>Plural</strong></td><td><strong>los</strong></td><td><strong>las</strong></td></tr>
                </tbody>
              </table>
            </div>
            <div className="blog-example">
              <p className="es">el libro — the book &nbsp;|&nbsp; la mesa — the table</p>
              <p className="es">los libros — the books &nbsp;|&nbsp; las mesas — the tables</p>
            </div>

            <h2>Indefinite Articles (A / An / Some)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th></th><th>Masculine</th><th>Feminine</th></tr></thead>
                <tbody>
                  <tr><td><strong>Singular</strong></td><td><strong>un</strong></td><td><strong>una</strong></td></tr>
                  <tr><td><strong>Plural</strong></td><td><strong>unos</strong></td><td><strong>unas</strong></td></tr>
                </tbody>
              </table>
            </div>
            <div className="blog-example">
              <p className="es">un perro — a dog &nbsp;|&nbsp; una casa — a house</p>
              <p className="es">unos perros — some dogs &nbsp;|&nbsp; unas casas — some houses</p>
            </div>

            <div className="blog-tip">
              <p><strong>El before feminine nouns:</strong> Feminine nouns beginning with a stressed <em>a-</em> or <em>ha-</em> use <em>el</em> (not <em>la</em>) in the singular to avoid the awkward sound — <em>el agua, el águila, el hacha</em>. They are still feminine: <em>el agua fría</em> (cold water).</p>
            </div>

            <h2>When Spanish Uses the Article but English Doesn't</h2>
            <p>Spanish uses the definite article in several places where English drops it:</p>
            <ul>
              <li><strong>Languages and subjects</strong> (after most verbs): <em>Me gusta el español.</em> — I like Spanish.</li>
              <li><strong>Body parts and clothing</strong> (instead of possessives): <em>Me duele la cabeza.</em> — My head hurts.</li>
              <li><strong>General or abstract concepts</strong>: <em>La vida es corta.</em> — Life is short.</li>
              <li><strong>Titles</strong> (when talking about someone): <em>El señor García llegó tarde.</em> — Mr García arrived late.</li>
              <li><strong>Days of the week</strong> (for recurring events): <em>Los lunes voy al gimnasio.</em> — I go to the gym on Mondays.</li>
            </ul>

            <h2>When Spanish Drops the Article</h2>
            <p>Spanish omits the indefinite article in situations where English keeps it:</p>
            <ul>
              <li><strong>After ser with professions</strong> (without an adjective): <em>Soy médico.</em> — I'm a doctor.</li>
              <li><strong>After tener, llevar, buscar</strong> with certain objects: <em>Tengo coche.</em> — I have a car.</li>
              <li><strong>With religions and nationalities after ser</strong>: <em>Es católica.</em> — She's Catholic.</li>
            </ul>
            <div className="blog-example">
              <p className="es wrong">✗ Soy un médico.</p>
              <p className="es right">✓ Soy médico. — I'm a doctor.</p>
              <p className="es right">✓ Soy un médico muy ocupado. — I'm a very busy doctor. (adjective present = article returns)</p>
            </div>

            <h2>A + El = Al / De + El = Del</h2>
            <p>Two contractions are mandatory in Spanish — you cannot write them as two separate words:</p>
            <div className="blog-example">
              <p className="es">a + el → <strong>al</strong> &nbsp;|&nbsp; Voy al mercado. — I'm going to the market.</p>
              <p className="es">de + el → <strong>del</strong> &nbsp;|&nbsp; El precio del coche. — The price of the car.</p>
            </div>

            <div className="blog-highlight">
              <p>Articles are one of those things that become automatic with exposure. Rather than trying to memorise every rule, focus on getting a feel for the language through reading and listening — you'll start to sense when something sounds wrong long before you can explain why.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to build confidence with Spanish grammar?</h3>
              <p>Get in touch to find out how structured lessons can speed up your progress significantly.</p>
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
