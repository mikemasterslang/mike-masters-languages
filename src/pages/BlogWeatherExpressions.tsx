import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogWeatherExpressions() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Weather Expressions: Hace, Está, Hay and Weather Verbs | Mike Masters Languages',
    'Talking about the weather in Spanish uses three different structures. This guide explains hace frío, está nublado, hay niebla — and all the vocabulary you need.'
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
          <h1>Spanish Weather Expressions: Hace, Está, Hay and Weather Verbs</h1>
          <p className="blog-hero-intro">
            Weather is one of the most common conversation topics in any language — and Spanish uses three different structures for it. Here's how they work.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Talking about the weather in Spanish is a great early goal — it's practical, common in conversation, and it introduces you to three different structures that each follow their own logic. The key is knowing which structure each weather expression uses.</p>

            <h2>Hacer — The Most Common Weather Structure</h2>
            <p>Many weather expressions use <em>hacer</em> (to do/make) in the third person singular impersonal form — <em>hace</em>. It's always <em>hace</em>, regardless of whether what follows is singular or plural:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td><strong>Hace calor.</strong></td><td>It's hot.</td></tr>
                  <tr><td><strong>Hace frío.</strong></td><td>It's cold.</td></tr>
                  <tr><td><strong>Hace sol.</strong></td><td>It's sunny.</td></tr>
                  <tr><td><strong>Hace viento.</strong></td><td>It's windy.</td></tr>
                  <tr><td><strong>Hace buen tiempo.</strong></td><td>The weather is good.</td></tr>
                  <tr><td><strong>Hace mal tiempo.</strong></td><td>The weather is bad.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Hoy hace mucho calor. — <span style={{fontWeight:400}}>It's very hot today.</span></p>
              <p className="es">En invierno hace frío aquí. — <span style={{fontWeight:400}}>In winter it's cold here.</span></p>
            </div>

            <h2>Estar — For Conditions and States</h2>
            <p>Some weather conditions use <em>estar</em>, particularly sky conditions and temporary states:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td><strong>Está nublado.</strong></td><td>It's cloudy.</td></tr>
                  <tr><td><strong>Está despejado.</strong></td><td>It's clear.</td></tr>
                  <tr><td><strong>Está nevando.</strong></td><td>It's snowing. (present continuous)</td></tr>
                  <tr><td><strong>Está lloviendo.</strong></td><td>It's raining. (present continuous)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Hay — For Specific Phenomena</h2>
            <p><em>Hay</em> (there is/are) is used for weather phenomena that "exist" in the atmosphere:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td><strong>Hay niebla.</strong></td><td>It's foggy. (there is fog)</td></tr>
                  <tr><td><strong>Hay tormenta.</strong></td><td>There's a storm.</td></tr>
                  <tr><td><strong>Hay hielo.</strong></td><td>There's ice.</td></tr>
                  <tr><td><strong>Hay granizo.</strong></td><td>There's hail.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Weather Verbs (Impersonal)</h2>
            <p>Some weather phenomena have their own dedicated verbs, always used in the third person singular:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td><strong>llover / llueve</strong></td><td>to rain / it rains (o→ue stem change)</td></tr>
                  <tr><td><strong>nevar / nieva</strong></td><td>to snow / it snows (e→ie stem change)</td></tr>
                  <tr><td><strong>granizar / graniza</strong></td><td>to hail</td></tr>
                  <tr><td><strong>tronar / truena</strong></td><td>to thunder</td></tr>
                  <tr><td><strong>lloviznar / llovizna</strong></td><td>to drizzle</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Asking About the Weather</h2>
            <div className="blog-example">
              <p className="es">¿Qué tiempo hace? — <span style={{fontWeight:400}}>What's the weather like?</span></p>
              <p className="es">¿Cómo está el tiempo? — <span style={{fontWeight:400}}>What's the weather like?</span></p>
              <p className="es">¿Cuál es la temperatura? — <span style={{fontWeight:400}}>What's the temperature?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Mucho vs muy:</strong> Remember — weather expressions with <em>hacer</em> use nouns, so you need <em>mucho/a</em>, not <em>muy</em>: <em>hace mucho calor</em> (very hot), not <em>hace muy calor</em>. But with <em>estar</em> + adjective, use <em>muy</em>: <em>está muy nublado</em> (very cloudy).</p>
            </div>

            <div className="blog-highlight">
              <p>Weather vocabulary is immediately useful in conversation. The three structures — <em>hace, está, hay</em> — each serve a distinct purpose, and once you associate each expression with its structure, talking about the weather in Spanish becomes natural very quickly.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to make everyday small talk in Spanish?</h3>
              <p>Weather, greetings, and daily expressions are the building blocks of real conversation. Let's work on them together.</p>
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
