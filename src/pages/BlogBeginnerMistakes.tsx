import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogBeginnerMistakes() {
  useScrollAnimation();
  usePageMeta(
    '8 Common Spanish Mistakes Beginners Make (And How to Fix Them) | Mike Masters Languages',
    'These are the most common Spanish mistakes beginners make — and the ones native speakers notice immediately. Learn what they are and how to avoid them from day one.'
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
            <span className="blog-hero-tag">Tips</span>
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>8 Common Spanish Mistakes Beginners Make (And How to Fix Them)</h1>
          <p className="blog-hero-intro">
            These are the errors native speakers notice immediately — and the ones that are easiest to fix once you know about them.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              Every language learner makes mistakes — that's part of the process, and native speakers are generally patient and appreciative when someone tries to speak their language. But some mistakes are more noticeable than others, and a few of them are so common that they become a kind of beginner fingerprint.
            </p>
            <p>
              The good news: most of these are easy to fix once you know what to look out for. Here are the eight mistakes I see most often when working with beginner Spanish learners.
            </p>

            <h2>1. Gender Agreement Errors</h2>
            <p>
              Every Spanish noun is either masculine or feminine, and the words around it — articles, adjectives, demonstratives — all need to match. This is called gender agreement, and getting it wrong is one of the most immediately noticeable errors to a native speaker.
            </p>
            <div className="blog-example">
              <p className="es wrong">✗ el mesa, un problema grande (if you've misidentified el problema as feminine)</p>
              <p className="es right">✓ la mesa, un problema grande</p>
            </div>
            <p>
              <strong>The fix:</strong> Always learn nouns with their article from the very beginning. Say "la mesa" not just "mesa". This builds the correct gender into your memory automatically. See our full guide on <Link to="/blogs/spanish-noun-gender" style={{ color: 'var(--primary)' }}>Spanish noun gender</Link> for the patterns worth knowing.
            </p>

            <h2>2. Confusing Ser and Estar</h2>
            <p>
              Spanish has two verbs that both mean "to be": <em>ser</em> and <em>estar</em>. Mixing them up is the single most common grammar mistake beginners make, and it can change the meaning of a sentence entirely.
            </p>
            <div className="blog-example">
              <p className="es wrong">✗ Soy cansado. (suggests being tired is a permanent trait)</p>
              <p className="es right">✓ Estoy cansado. — I'm tired.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ El restaurante es en la calle mayor.</p>
              <p className="es right">✓ El restaurante está en la calle mayor. — The restaurant is on the high street.</p>
            </div>
            <p>
              <strong>The fix:</strong> Read our full guide on <Link to="/blogs/ser-vs-estar" style={{ color: 'var(--primary)' }}>ser vs estar</Link> — it explains the logic clearly and includes a quick reference table.
            </p>

            <h2>3. Muy vs Mucho</h2>
            <p>
              Both roughly translate to "very" or "a lot" in English, but they work very differently in Spanish and are not interchangeable.
            </p>
            <ul>
              <li><strong>Muy</strong> goes before adjectives and adverbs: <em>muy cansado</em> (very tired), <em>muy bien</em> (very well)</li>
              <li><strong>Mucho</strong> goes before nouns or after verbs: <em>mucho trabajo</em> (a lot of work), <em>te quiero mucho</em> (I love you a lot)</li>
            </ul>
            <div className="blog-example">
              <p className="es wrong">✗ Estoy mucho cansado. &nbsp;·&nbsp; Tengo muy trabajo.</p>
              <p className="es right">✓ Estoy muy cansado. — I'm very tired.</p>
              <p className="es right">✓ Tengo mucho trabajo. — I have a lot of work.</p>
            </div>
            <p>
              <strong>The fix:</strong> Remember — <em>muy</em> modifies adjectives and adverbs, <em>mucho</em> modifies nouns or follows verbs.
            </p>

            <h2>4. The Gustar Structure</h2>
            <p>
              <em>Gustar</em> is one of the most confusing verbs for English speakers because it doesn't work like "to like" in English. Literally, it means "to be pleasing to" — so the thing you like is actually the subject of the sentence, and you are the indirect object.
            </p>
            <div className="blog-example">
              <p className="es wrong">✗ Yo gusto el café.</p>
              <p className="es right">✓ Me gusta el café. — I like coffee. (Coffee is pleasing to me.)</p>
              <p className="es right">✓ Me gustan los libros. — I like books. (Books are pleasing to me — plural, so gustan.)</p>
            </div>
            <p>
              <strong>The fix:</strong> Always think of <em>gustar</em> as "to be pleasing to". The verb agrees with the thing being liked, not the person who likes it. <em>Me gusta</em> (one thing), <em>me gustan</em> (multiple things).
            </p>

            <h2>5. False Cognates (False Friends)</h2>
            <p>
              Spanish and English share thousands of words that look similar and mean the same thing — <em>hotel, animal, hospital, natural</em>. These are genuine cognates and they're one of the great advantages English speakers have. But there are also <strong>false cognates</strong> — words that look alike but mean something completely different. These can cause some spectacular misunderstandings.
            </p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Spanish word</th><th>What it means</th><th>What English speakers assume</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>embarazada</strong></td><td>pregnant</td><td>embarrassed</td></tr>
                  <tr><td><strong>sensible</strong></td><td>sensitive</td><td>sensible / reasonable</td></tr>
                  <tr><td><strong>actualmente</strong></td><td>currently / at present</td><td>actually</td></tr>
                  <tr><td><strong>constipado</strong></td><td>having a cold</td><td>constipated</td></tr>
                  <tr><td><strong>largo</strong></td><td>long</td><td>large</td></tr>
                  <tr><td><strong>simpático</strong></td><td>friendly / nice</td><td>sympathetic</td></tr>
                  <tr><td><strong>éxito</strong></td><td>success</td><td>exit</td></tr>
                  <tr><td><strong>librería</strong></td><td>bookshop</td><td>library (biblioteca)</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>The fix:</strong> Learn these as a group. They're memorable precisely because of the confusion they cause — once you've been caught out by <em>embarazada</em>, you tend not to forget it.
            </p>

            <h2>6. Word Order with Adjectives</h2>
            <p>
              In English, adjectives come before the noun: "a big house", "a red car". In Spanish, most descriptive adjectives come <strong>after</strong> the noun.
            </p>
            <div className="blog-example">
              <p className="es wrong">✗ una grande casa, un rojo coche</p>
              <p className="es right">✓ una casa grande — a big house</p>
              <p className="es right">✓ un coche rojo — a red car</p>
            </div>
            <p>
              Some adjectives do go before the noun — particularly quantity words like <em>mucho, poco, varios</em>, and a handful of common adjectives like <em>bueno, malo, grande, pequeño</em> (though even these can go after for different emphasis). As a beginner, the safest rule is: <strong>adjective after noun</strong>.
            </p>

            <h2>7. Translating Age Directly from English</h2>
            <p>
              In English we say "I am 25 years old." In Spanish, you don't use "to be" for age — you use <em>tener</em> (to have).
            </p>
            <div className="blog-example">
              <p className="es wrong">✗ Soy 25 años. / Estoy 25 años.</p>
              <p className="es right">✓ Tengo 25 años. — I am 25 years old. (Literally: I have 25 years.)</p>
            </div>
            <p>
              <em>Tener</em> is also used for hunger, thirst, fear, heat and cold in Spanish — all things that English expresses with "to be":
            </p>
            <div className="blog-example">
              <p className="es">Tengo hambre. — I'm hungry. (I have hunger.)</p>
              <p className="es">Tengo frío. — I'm cold. (I have cold.)</p>
              <p className="es">Tengo miedo. — I'm scared. (I have fear.)</p>
            </div>

            <h2>8. Overusing Subject Pronouns</h2>
            <p>
              Saying "yo" at the start of every sentence is one of the most reliable signals that someone has learned Spanish from a textbook. Spanish verb endings already tell you who's doing the action, so the pronoun is usually unnecessary.
            </p>
            <div className="blog-example">
              <p className="es wrong">✗ Yo hablo español y yo vivo en Londres y yo trabajo en un colegio.</p>
              <p className="es right">✓ Hablo español, vivo en Londres y trabajo en un colegio.</p>
            </div>
            <p>
              <strong>The fix:</strong> Read our guide on <Link to="/blogs/drop-subject-pronouns" style={{ color: 'var(--primary)' }}>when to drop subject pronouns in Spanish</Link> for the full explanation — including when you should keep them.
            </p>

            <div className="blog-highlight">
              <p>Making mistakes is how you learn — the key is to <strong>keep speaking</strong> and gradually replace incorrect patterns with correct ones. Native speakers care far more that you're trying than that you're perfect.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to build good habits from the start?</h3>
              <p>It's much easier to learn things correctly the first time than to unlearn bad habits later. Get in touch and let's get you started properly.</p>
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
