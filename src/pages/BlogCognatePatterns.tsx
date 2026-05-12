import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogCognatePatterns() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Cognate Patterns: -tion, -ly, -ous and More — Unlock Thousands of Words | Mike Masters Languages',
    'English and Spanish share systematic word patterns that let you convert thousands of English words into Spanish instantly. Here are the most useful patterns every beginner should know.'
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
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Spanish Cognate Patterns: How to Unlock Thousands of Words at Once</h1>
          <p className="blog-hero-intro">
            English and Spanish share systematic word-ending patterns. Learn the patterns, and you gain thousands of Spanish words without memorising them one by one.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the best-kept secrets of learning Spanish is how many words you already know. Because English and Spanish both draw heavily from Latin and French, they share thousands of words with predictable patterns. Once you learn the conversions, you can generate correct Spanish vocabulary from English words you already have — and it works remarkably well.</p>

            <h2>The Best Patterns to Know</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>English ending</th><th>Spanish ending</th><th>Examples</th></tr></thead>
                <tbody>
                  <tr><td><strong>-tion</strong></td><td><strong>-ción</strong></td><td>nation→nación, information→información, station→estación</td></tr>
                  <tr><td><strong>-sion</strong></td><td><strong>-sión</strong></td><td>vision→visión, passion→pasión, mission→misión</td></tr>
                  <tr><td><strong>-ty</strong></td><td><strong>-dad / -tad</strong></td><td>city→ciudad, university→universidad, liberty→libertad</td></tr>
                  <tr><td><strong>-ly</strong></td><td><strong>-mente</strong></td><td>normally→normalmente, exactly→exactamente, finally→finalmente</td></tr>
                  <tr><td><strong>-ous</strong></td><td><strong>-oso/a</strong></td><td>famous→famoso, delicious→delicioso, dangerous→peligroso</td></tr>
                  <tr><td><strong>-ary / -ery / -ory</strong></td><td><strong>-ario / -orio</strong></td><td>dictionary→diccionario, laboratory→laboratorio, category→categoría</td></tr>
                  <tr><td><strong>-ism</strong></td><td><strong>-ismo</strong></td><td>tourism→turismo, capitalism→capitalismo, optimism→optimismo</td></tr>
                  <tr><td><strong>-ist</strong></td><td><strong>-ista</strong></td><td>artist→artista, dentist→dentista, specialist→especialista</td></tr>
                  <tr><td><strong>-ic</strong></td><td><strong>-ico/a</strong></td><td>fantastic→fantástico, electric→eléctrico, magic→mágico</td></tr>
                  <tr><td><strong>-al</strong></td><td><strong>-al</strong></td><td>natural→natural, national→nacional, mental→mental</td></tr>
                  <tr><td><strong>-ent / -ant</strong></td><td><strong>-ente / -ante</strong></td><td>important→importante, different→diferente, elegant→elegante</td></tr>
                  <tr><td><strong>-ible / -able</strong></td><td><strong>-ible / -able</strong></td><td>possible→posible, comfortable→cómodo (note: not all convert directly)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The -mente Adverb Pattern</h2>
            <p>The <em>-mente</em> pattern deserves special attention. Almost any Spanish adjective can become an adverb by adding <em>-mente</em> to the feminine form. This is like adding "-ly" in English:</p>
            <div className="blog-example">
              <p className="es">rápido → rápida → <strong>rápidamente</strong> — quickly</p>
              <p className="es">fácil → fácil → <strong>fácilmente</strong> — easily</p>
              <p className="es">general → general → <strong>generalmente</strong> — generally</p>
              <p className="es">perfecto → perfecta → <strong>perfectamente</strong> — perfectly</p>
            </div>

            <h2>Words That Look the Same</h2>
            <p>Many words are identical or nearly identical in both languages — these are your instant free vocabulary:</p>
            <div className="blog-example">
              <p className="es">hotel, animal, hospital, capital, final, local, total, original, general, normal, natural, cultural, personal, central, principal, formal, brutal, fatal, mental, moral, vital</p>
            </div>

            <h2>The Important Caveat: False Cognates</h2>
            <p>The patterns work impressively well — but they're not perfect. Some words look like they should follow a pattern but mean something different. The most common false friends are covered in our <Link to="/blogs/false-cognates">Spanish False Cognates</Link> post. The strategy: use the patterns boldly, but when something feels high-stakes, double-check.</p>

            <div className="blog-tip">
              <p><strong>Try it now:</strong> Take any English word ending in -tion and say it with -ción. <em>Conversation? Conversación. Pronunciation? Pronunciación. Situation? Situación.</em> The accent position shifts, but the word works. This pattern almost never fails.</p>
            </div>

            <div className="blog-highlight">
              <p>Most estimates put the number of Spanish-English cognates at over 10,000 words. You already know thousands of Spanish words — you just haven't been using them yet. The cognate patterns are a fast-track to vocabulary that no flashcard deck can match.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to build your Spanish vocabulary fast?</h3>
              <p>Cognate patterns are one of the biggest advantages English speakers have. Let's put them to work in real conversations.</p>
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
