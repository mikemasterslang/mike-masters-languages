import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPronunciation() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Pronunciation Guide for English Speakers: Sounds, Letters and Tips | Mike Masters Languages',
    'Spanish pronunciation is more consistent than English — once you know the rules, you can pronounce almost any word correctly. This guide covers the key sounds English speakers need to learn.'
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
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Spanish Pronunciation Guide for English Speakers</h1>
          <p className="blog-hero-intro">
            Spanish is one of the most phonetically consistent languages in the world. Once you know the rules, you can read virtually anything aloud correctly.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the biggest advantages Spanish has over other languages for English speakers is that <strong>Spanish spelling is almost perfectly phonetic</strong>. Unlike English, where "though", "through", "thought" and "thorough" all look similar but sound completely different, Spanish letters almost always make the same sound. Learn the sounds once, and you can read anything.</p>

            <h2>The Spanish Vowels</h2>
            <p>Spanish has five pure vowel sounds, and they are always consistent — they don't change based on the letters around them:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Vowel</th><th>Sound</th><th>English approximation</th></tr></thead>
                <tbody>
                  <tr><td><strong>a</strong></td><td>short, open</td><td>like the "a" in "father"</td></tr>
                  <tr><td><strong>e</strong></td><td>short, mid</td><td>like the "e" in "bed"</td></tr>
                  <tr><td><strong>i</strong></td><td>short, high</td><td>like the "ee" in "feet" (shorter)</td></tr>
                  <tr><td><strong>o</strong></td><td>short, round</td><td>like the "o" in "more" (purer, no glide)</td></tr>
                  <tr><td><strong>u</strong></td><td>short, round</td><td>like the "oo" in "food" (shorter)</td></tr>
                </tbody>
              </table>
            </div>

            <p>The key difference from English: Spanish vowels are <strong>short and pure</strong>. English vowels tend to glide (the "o" in "no" becomes "ou"). Spanish vowels stay in one position. Keep them crisp.</p>

            <h2>Letters That Differ from English</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Letter</th><th>Spanish sound</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td><strong>j</strong></td><td>strong h sound (back of throat)</td><td>jardín, jugo — like a breathy "h"</td></tr>
                  <tr><td><strong>g</strong> (before e/i)</td><td>same strong h sound</td><td>general, girar</td></tr>
                  <tr><td><strong>g</strong> (before a/o/u)</td><td>like English "g" in "go"</td><td>gato, gorra</td></tr>
                  <tr><td><strong>h</strong></td><td>always silent</td><td>hola, hacer, hijo</td></tr>
                  <tr><td><strong>ñ</strong></td><td>"ny" sound</td><td>España, mañana — like "canyon"</td></tr>
                  <tr><td><strong>ll</strong></td><td>"y" sound (most of Spain/Latin America)</td><td>llamar, llover</td></tr>
                  <tr><td><strong>v</strong></td><td>same as "b" in Spanish</td><td>vino, vivir — no distinction from b</td></tr>
                  <tr><td><strong>z</strong></td><td>"s" in Latin America / "th" in Spain</td><td>zapato, plaza</td></tr>
                  <tr><td><strong>c</strong> (before e/i)</td><td>same as z above</td><td>cena, ciudad</td></tr>
                  <tr><td><strong>qu</strong></td><td>"k" sound (the u is silent)</td><td>quiero, queso</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Spanish R</h2>
            <p>The Spanish <em>r</em> is one of the sounds that takes most practice for English speakers:</p>
            <ul>
              <li>A single <strong>r</strong> in the middle of a word is a quick tap — the tip of the tongue briefly touches the roof of the mouth: <em>para, pero, caro</em>.</li>
              <li>A double <strong>rr</strong> (or <em>r</em> at the start of a word) is a trill — the tongue vibrates rapidly: <em>perro, carro, rico</em>.</li>
            </ul>
            <p>The difference matters: <em>pero</em> (but) vs <em>perro</em> (dog). Practise the trill by saying "d" repeatedly very fast — it produces a similar tongue movement.</p>

            <h2>Stress in Spanish</h2>
            <p>Spanish stress follows predictable rules (see our guide on accent marks for the full breakdown). The key points:</p>
            <ul>
              <li>Words ending in a vowel, n or s: stress the second-to-last syllable — <em>ha-BLA, co-MEN</em></li>
              <li>Words ending in other consonants: stress the last syllable — <em>ha-BLAR, es-pa-ÑOL</em></li>
              <li>An accent mark overrides both rules — <em>ca-FÉ, te-LÉ-fo-no</em></li>
            </ul>

            <div className="blog-tip">
              <p><strong>The biggest win:</strong> focus on the vowels first. English speakers have a habit of reducing unstressed vowels to a "schwa" (uh). In Spanish, every vowel is clear and full, even unstressed ones. This single change will make your Spanish sound significantly more natural.</p>
            </div>

            <div className="blog-highlight">
              <p>Spanish pronunciation is genuinely learnable. Unlike languages with tones or highly irregular spelling, Spanish rewards the effort you put in very quickly. Consistent practice reading aloud — even five minutes a day — makes a noticeable difference within weeks.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to sound more natural in Spanish?</h3>
              <p>Pronunciation is best learned with feedback from a real teacher. Let's work on it together.</p>
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
