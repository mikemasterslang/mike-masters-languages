import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogAccentMarks() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Accent Marks: When to Use Them and Why They Matter | Mike Masters Languages',
    'Accent marks in Spanish aren\'t optional decoration — they change pronunciation, meaning, and grammar. This guide explains the rules every beginner needs to know.'
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
          <h1>Spanish Accent Marks: When to Use Them and Why They Matter</h1>
          <p className="blog-hero-intro">
            Many beginners treat accent marks as optional. They're not — and ignoring them can change what you're actually saying.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Spanish accent marks (called <em>tildes</em>) appear on vowels: á, é, í, ó, ú. Many English-speaking beginners skip them when typing or writing, either because they don't know the rules or because they assume it won't matter. It does matter — accent marks affect stress, distinguish between identical-looking words, and in some cases completely change the meaning of a sentence.</p>

            <h2>What the Accent Mark Does</h2>
            <p>The accent mark over a vowel does two things:</p>
            <ul>
              <li><strong>Marks stress:</strong> It shows which syllable to emphasise when the word breaks the default stress rules.</li>
              <li><strong>Distinguishes meaning:</strong> It separates words that are spelled the same but have different grammatical functions or meanings.</li>
            </ul>

            <h2>The Default Stress Rules (No Accent Needed)</h2>
            <p>Spanish has two default stress rules. When a word follows these rules, no accent mark is written:</p>
            <ul>
              <li>Words ending in a <strong>vowel, n, or s</strong>: stress falls on the <strong>second-to-last</strong> syllable. <em>ha-BLO, ca-SA, jo-VEN</em></li>
              <li>Words ending in any <strong>other consonant</strong>: stress falls on the <strong>last</strong> syllable. <em>ha-BLAR, es-PA-ñol, ciu-DAD</em></li>
            </ul>
            <p>When a word breaks these rules, an accent mark is written to show where the stress actually falls:</p>
            <div className="blog-example">
              <p className="es">café — stress on the last syllable, but ends in a vowel (breaks rule 1) → accent required</p>
              <p className="es">árbol — stress on the second-to-last syllable, but ends in "l" (breaks rule 2) → accent required</p>
              <p className="es">teléfono — stress on the third-to-last syllable → accent required</p>
            </div>

            <h2>Accent Marks That Change Meaning</h2>
            <p>Many Spanish word pairs are spelled identically except for the accent. These are among the most important to know:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Without accent</th><th>With accent</th></tr></thead>
                <tbody>
                  <tr><td><strong>el</strong> — the (article)</td><td><strong>él</strong> — he (pronoun)</td></tr>
                  <tr><td><strong>tu</strong> — your (possessive)</td><td><strong>tú</strong> — you (subject pronoun)</td></tr>
                  <tr><td><strong>mi</strong> — my (possessive)</td><td><strong>mí</strong> — me (after prepositions)</td></tr>
                  <tr><td><strong>si</strong> — if (conjunction)</td><td><strong>sí</strong> — yes / itself</td></tr>
                  <tr><td><strong>se</strong> — reflexive pronoun</td><td><strong>sé</strong> — I know / be! (imperative)</td></tr>
                  <tr><td><strong>te</strong> — you (object pronoun)</td><td><strong>té</strong> — tea</td></tr>
                  <tr><td><strong>mas</strong> — but (literary)</td><td><strong>más</strong> — more</td></tr>
                  <tr><td><strong>de</strong> — of / from (preposition)</td><td><strong>dé</strong> — give! (subjunctive/imperative)</td></tr>
                  <tr><td><strong>aun</strong> — even (adverb)</td><td><strong>aún</strong> — still / yet</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Tu libro está aquí. — <span style={{fontWeight:400}}>Your book is here.</span></p>
              <p className="es">Tú estás aquí. — <span style={{fontWeight:400}}>You are here.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Si quieres, ven. — <span style={{fontWeight:400}}>If you want, come.</span></p>
              <p className="es">Sí, quiero. — <span style={{fontWeight:400}}>Yes, I want to.</span></p>
            </div>

            <h2>Question Words Always Need an Accent</h2>
            <p>All Spanish question words carry an accent mark when used in a question or indirect question. The same words without an accent are relative pronouns or conjunctions:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>With accent (question)</th><th>Without accent (relative)</th></tr></thead>
                <tbody>
                  <tr><td><strong>¿qué?</strong> — what?</td><td><strong>que</strong> — that / which</td></tr>
                  <tr><td><strong>¿quién?</strong> — who?</td><td><strong>quien</strong> — who / whoever</td></tr>
                  <tr><td><strong>¿dónde?</strong> — where?</td><td><strong>donde</strong> — where (relative)</td></tr>
                  <tr><td><strong>¿cuándo?</strong> — when?</td><td><strong>cuando</strong> — when (relative)</td></tr>
                  <tr><td><strong>¿cómo?</strong> — how?</td><td><strong>como</strong> — as / like</td></tr>
                  <tr><td><strong>¿cuánto?</strong> — how much?</td><td><strong>cuanto</strong> — as much as</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">No sé dónde está. — <span style={{fontWeight:400}}>I don't know where he is. (indirect question — accent on dónde)</span></p>
              <p className="es">Vivo donde nací. — <span style={{fontWeight:400}}>I live where I was born. (relative clause — no accent)</span></p>
            </div>

            <h2>Accents on Capital Letters</h2>
            <p>Yes — accent marks are required on capital letters too: <em>Él, Ángel, ESPAÑA</em>. This is sometimes skipped in informal writing, but it's technically incorrect to omit them.</p>

            <div className="blog-tip">
              <p><strong>Practical tip:</strong> On a phone or tablet, holding down a vowel key brings up the accented options. On Windows, the easiest method is to change your keyboard to Spanish or use the shortcut Alt + vowel (depends on your setup). Getting into the habit early means you won't have to relearn it later.</p>
            </div>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ Tu eres muy simpático. (tu = your, not you)</p>
              <p className="es right">✓ Tú eres muy simpático. — You are very friendly.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ ¿Donde vives? (missing accent on question word)</p>
              <p className="es right">✓ ¿Dónde vives? — Where do you live?</p>
            </div>

            <div className="blog-highlight">
              <p>Accent marks are not decorative. In writing, skipping them is like randomly capitalising letters — it signals carelessness and, in some cases, creates genuine ambiguity. Building the habit of using them correctly from the start is much easier than correcting it later.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to write Spanish accurately from the start?</h3>
              <p>Getting the details right — including accents — is part of learning the language properly. Let's build those foundations together.</p>
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
