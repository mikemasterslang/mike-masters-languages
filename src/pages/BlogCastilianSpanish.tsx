import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogCastilianSpanish() {
  useScrollAnimation();
  usePageMeta(
    'Castilian Spanish: What It Is, How It Sounds and What Makes It Different | Mike Masters Languages',
    'What is Castilian Spanish? How does it differ from Latin American Spanish? This guide covers the key pronunciation differences, vocabulary gaps and which to learn.'
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
            <span className="blog-hero-tag">Pronunciation</span>
            <span className="blog-hero-date">October 2026</span>
          </div>
          <h1>Castilian Spanish: What It Is, How It Sounds and What Makes It Different</h1>
          <p className="blog-hero-intro">
            Castilian Spanish is what most people mean when they say 'Spanish from Spain' — but the differences go deeper than the accent. Here's a clear breakdown of what sets it apart.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>"Castilian Spanish" (<em>español castellano</em>) refers to the variety of Spanish originating from the Castile region of central Spain. It's the official standard in Spain and forms the basis of most formal Spanish education in Europe. When people say Spanish speakers in Spain "have a lisp", they're usually referring to Castilian pronunciation — though "lisp" is a misconception. It's a feature of the language, not a speech impediment.</p>

            <h2>The Key Pronunciation Differences</h2>

            <h3>The C and Z — The Most Famous Feature</h3>
            <p>In Castilian Spanish, the letters C (before E or I) and Z are pronounced like the "th" in the English word "think". This is called the <em>distinción</em> — the distinction between those sounds and the S, which is always pronounced as a regular S.</p>

            <div className="blog-example">
              <p className="es">Barcelona — <span style={{fontWeight:400}}>bar-the-LO-na (Castilian) vs bar-se-LO-na (Latin American)</span></p>
              <p className="es">gracias — <span style={{fontWeight:400}}>GRA-thias (Castilian) vs GRA-sias (Latin American)</span></p>
              <p className="es">hacer — <span style={{fontWeight:400}}>a-THER (Castilian) vs a-SER (Latin American)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Tip:</strong> This is not a lisp — it's a consistent phonological rule. In Castilian Spanish, C before E/I and Z are always pronounced "th". The S is always pronounced "S". In Latin American Spanish, all three (C before E/I, Z and S) are pronounced "S" — this merger is called <em>seseo</em>.</p>
            </div>

            <h3>Vosotros — The Second-Person Plural</h3>
            <p>Castilian Spanish uses <em>vosotros</em> when addressing a group of people you'd each address individually as <em>tú</em>. It's the informal second-person plural, and it comes with its own verb endings. Latin American Spanish dropped <em>vosotros</em> entirely — they use <em>ustedes</em> for all plural "you", whether formal or informal.</p>

            <div className="blog-example">
              <p className="es">¿Queréis algo? — <span style={{fontWeight:400}}>Do you all want something? (Castilian — vosotros form)</span></p>
              <p className="es">¿Quieren algo? — <span style={{fontWeight:400}}>Do you all want something? (Latin American — ustedes form)</span></p>
            </div>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Verb type</th><th>Vosotros ending</th><th>Example</th></tr>
                </thead>
                <tbody>
                  <tr><td>-ar verbs</td><td>-áis</td><td>habláis</td></tr>
                  <tr><td>-er verbs</td><td>-éis</td><td>coméis</td></tr>
                  <tr><td>-ir verbs</td><td>-ís</td><td>vivís</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Accent and Rhythm</h3>
            <p>Castilian Spanish has a distinctive intonation — particularly in Madrid, where the accent is often described as sharper and more clipped compared to the musicality of many Latin American accents. It's worth knowing that Andalusian Spanish (southern Spain) sounds quite different to Castilian; it's softer, faster, and drops many word-final consonants. "Castilian" and "Spanish from Spain" are not quite synonymous — Spain has considerable regional variation of its own.</p>

            <h2>Vocabulary Differences</h2>
            <p>Several everyday words differ between Spain and Latin America. These rarely cause genuine misunderstanding — context makes most things clear — but they're worth knowing.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Meaning</th><th>Spain</th><th>Latin America</th></tr>
                </thead>
                <tbody>
                  <tr><td>Car</td><td>el coche</td><td>el carro / el auto</td></tr>
                  <tr><td>Computer</td><td>el ordenador</td><td>la computadora</td></tr>
                  <tr><td>Mobile phone</td><td>el móvil</td><td>el celular</td></tr>
                  <tr><td>Flat / apartment</td><td>el piso</td><td>el apartamento</td></tr>
                  <tr><td>Driving licence</td><td>el carné de conducir</td><td>la licencia de manejar</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>Vocabulary differences are real but rarely cause misunderstanding — context makes most things clear. The pronunciation differences are more immediately noticeable and worth paying attention to from early on.</p>
            </div>

            <h2>Which Should You Learn?</h2>
            <p>The honest answer is: it depends on your goals.</p>
            <ul>
              <li>If you're learning for travel to Spain, or your tutor is Spanish, learn Castilian.</li>
              <li>If you're learning for Latin America, or your tutor is from there, use that variety.</li>
              <li>Either is entirely valid and mutually intelligible — native speakers understand both immediately.</li>
              <li>The main practical difference for learners: if you learn Castilian and travel to Mexico, you'll understand everything. If you learn Latin American Spanish and go to Spain, you'll understand everything except <em>vosotros</em> — which you can pick up passively in a matter of days.</li>
            </ul>

            <div className="blog-tip">
              <p><strong>Tip:</strong> Don't stress about choosing the "right" variety. Pick one, be consistent, and you'll be understood everywhere. Your tutor's variety will naturally shape your accent — that's perfectly fine.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>If you're learning for travel to Spain specifically, or simply want to learn the variety taught in most UK schools and universities, Castilian Spanish is what we teach at Mike Masters Languages.</p>
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
