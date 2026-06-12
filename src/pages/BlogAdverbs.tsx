import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogAdverbs() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Adverbs: How to Form and Use Them | Mike Masters Languages',
    'Learn how to form Spanish adverbs with -mente, use common standalone adverbs like bien, muy, and ya, and understand the difference between muy and mucho.'
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
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>Spanish Adverbs: How to Form and Use Them</h1>
          <p className="blog-hero-intro">Adverbs are one of the easiest things to add to your Spanish — and they make your sentences immediately more expressive.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Adverbs modify verbs, adjectives, or other adverbs. They answer questions like how, when, where, and how much. The good news is that Spanish adverbs are invariable — they never change form to match gender or number. Once you learn an adverb, you can use it anywhere. And there's a simple rule that lets you convert almost any adjective into an adverb instantly.</p>

            <h2>Forming Adverbs with -Mente</h2>
            <p>The Spanish equivalent of the English -ly ending is -mente. The rule is straightforward: take the feminine singular form of the adjective and add -mente to the end. If the adjective doesn't have a separate feminine form (because it ends in -e or a consonant), just add -mente directly.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Adjective</th>
                  <th>Feminine form</th>
                  <th>Adverb</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>rápido</td><td>rápida</td><td>rápidamente</td><td>quickly</td></tr>
                <tr><td>lento</td><td>lenta</td><td>lentamente</td><td>slowly</td></tr>
                <tr><td>tranquilo</td><td>tranquila</td><td>tranquilamente</td><td>calmly</td></tr>
                <tr><td>fácil</td><td>fácil</td><td>fácilmente</td><td>easily</td></tr>
                <tr><td>frecuente</td><td>frecuente</td><td>frecuentemente</td><td>frequently</td></tr>
                <tr><td>probable</td><td>probable</td><td>probablemente</td><td>probably</td></tr>
              </tbody>
            </table>

            <div className="blog-highlight">
              <p>If an adjective has an accent mark, it keeps it in the adverb form: rápido → rápidamente, fácil → fácilmente. The stress stays on the same syllable.</p>
            </div>

            <div className="blog-example">
              <p className="es">Habla claramente y con confianza. — <span style={{fontWeight: 400}}>She speaks clearly and confidently.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Terminó el examen rápidamente. — <span style={{fontWeight: 400}}>He finished the exam quickly.</span></p>
            </div>

            <p>When you use two -mente adverbs together in a list, you only add -mente to the last one. The first adverb stays in its feminine adjective form.</p>

            <div className="blog-example">
              <p className="es">Habló clara y directamente. — <span style={{fontWeight: 400}}>She spoke clearly and directly.</span></p>
            </div>

            <h2>Common Standalone Adverbs</h2>
            <p>Many of the most useful Spanish adverbs don't follow the -mente pattern at all — they're independent words you simply need to learn. Here are the most important ones grouped by category.</p>

            <h3>Degree</h3>
            <table className="blog-table">
              <thead>
                <tr><th>Adverb</th><th>Meaning</th><th>Example</th></tr>
              </thead>
              <tbody>
                <tr><td>muy</td><td>very</td><td>muy cansado (very tired)</td></tr>
                <tr><td>mucho</td><td>a lot / much</td><td>trabajo mucho (I work a lot)</td></tr>
                <tr><td>poco</td><td>a little / not much</td><td>come poco (she eats little)</td></tr>
                <tr><td>bastante</td><td>quite / enough</td><td>bastante difícil (quite difficult)</td></tr>
                <tr><td>demasiado</td><td>too / too much</td><td>demasiado ruido (too much noise)</td></tr>
                <tr><td>bien</td><td>well</td><td>habla bien (she speaks well)</td></tr>
                <tr><td>mal</td><td>badly / poorly</td><td>me siento mal (I feel bad)</td></tr>
              </tbody>
            </table>

            <h3>Time</h3>
            <table className="blog-table">
              <thead>
                <tr><th>Adverb</th><th>Meaning</th></tr>
              </thead>
              <tbody>
                <tr><td>ya</td><td>already / now / anymore (context-dependent)</td></tr>
                <tr><td>todavía / aún</td><td>still / yet</td></tr>
                <tr><td>siempre</td><td>always</td></tr>
                <tr><td>nunca / jamás</td><td>never</td></tr>
                <tr><td>también</td><td>also / too</td></tr>
                <tr><td>tampoco</td><td>neither / not either</td></tr>
                <tr><td>antes</td><td>before / earlier</td></tr>
                <tr><td>después</td><td>after / later</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">Ya he comido. — <span style={{fontWeight: 400}}>I have already eaten.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Todavía no ha llegado. — <span style={{fontWeight: 400}}>She still hasn't arrived.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Siempre llega tarde. — <span style={{fontWeight: 400}}>He always arrives late.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">No me gusta el café. — Tampoco a mí. — <span style={{fontWeight: 400}}>I don't like coffee. — Me neither.</span></p>
            </div>

            <h2>Muy vs Mucho — A Classic Mistake</h2>
            <p>This is one of the most common errors beginners make. Muy means "very" and modifies adjectives or other adverbs. Mucho means "a lot" and modifies verbs (or is used as an adjective before a noun). They are not interchangeable.</p>

            <div className="blog-highlight">
              <p>Muy + adjective/adverb: muy cansado (very tired), muy bien (very well).<br/>Mucho + verb: trabajo mucho (I work a lot), me gusta mucho (I like it a lot).<br/>You cannot say muy bien with mucho, or trabaja mucho with muy.</p>
            </div>

            <div className="blog-example">
              <p className="es">Estoy muy cansado. — <span style={{fontWeight: 400}}>I am very tired. (muy before adjective)</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Trabajo mucho. — <span style={{fontWeight: 400}}>I work a lot. (mucho after verb)</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Me gusta mucho esta ciudad. — <span style={{fontWeight: 400}}>I like this city a lot.</span></p>
            </div>

            <h2>Position of Adverbs</h2>
            <p>Spanish adverbs are fairly flexible in position, but the most common placement is immediately after the verb they modify, or before an adjective or another adverb. Unlike adjectives, adverbs never agree with nouns — they stay the same regardless of what they're modifying.</p>

            <div className="blog-example">
              <p className="es">Habla español bastante bien. — <span style={{fontWeight: 400}}>She speaks Spanish quite well.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Normalmente desayuno a las ocho. — <span style={{fontWeight: 400}}>I normally have breakfast at eight.</span></p>
            </div>

          </div>

          <div className="blog-author-cta">
            <p>Want to work on your Spanish grammar with a professional tutor? <Link to="/get-started">Get started with Mike Masters Languages.</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
