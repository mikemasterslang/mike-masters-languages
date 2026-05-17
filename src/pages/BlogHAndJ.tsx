import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogHAndJ() {
  useScrollAnimation();
  usePageMeta(
    'Silent H and the Spanish J: Two Sounds That Confuse Beginners | Mike Masters Languages',
    'The Spanish H is always silent, while the J is a strong guttural sound unlike anything in English. Learn how both work, plus how G before E or I makes the same sound as J.'
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
          <h1>Silent H and the Spanish J: Two Sounds That Confuse Beginners</h1>
          <p className="blog-hero-intro">
            Spanish H makes no sound at all, while Spanish J makes a bold, guttural sound you will not find in standard English. These two letters trip up almost every English-speaking beginner — here is how to handle both.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>H and J sit at opposite ends of a spectrum when it comes to Spanish pronunciation. The H is completely silent — it contributes nothing to the sound of a word. The J, on the other hand, is one of the strongest sounds in the language — a forceful rasp produced deep in the throat. Knowing both is essential for sounding natural in Spanish, and for understanding native speakers who use them constantly.</p>

            <h2>The Spanish H: Always Silent</h2>
            <p>In Spanish, <strong>H is never pronounced</strong>. It is a purely written letter with no phonetic value whatsoever. This applies in every position — at the start of a word, in the middle, at the end — and with no exceptions in standard Spanish. When you see H, you simply skip it.</p>
            <p>This trips English speakers up because English H does have a sound ("hat", "home", "help"). The instinct to breathe out slightly when you see an H takes conscious effort to suppress. But in Spanish, the letters on either side of H behave exactly as if the H were not there.</p>

            <div className="blog-example">
              <p className="es"><strong>hola</strong> — hello (say "O-la", not "HO-la")</p>
              <p className="es"><strong>hablar</strong> — to speak (say "a-BLAR", not "ha-BLAR")</p>
              <p className="es"><strong>hotel</strong> — hotel (say "o-TEL", not "ho-TEL")</p>
              <p className="es"><strong>hacer</strong> — to do/make (say "a-THER" / "a-SER", not "ha-THER")</p>
              <p className="es"><strong>hijo</strong> — son (say "EE-ho" — H silent, J makes the guttural sound)</p>
              <p className="es"><strong>ahora</strong> — now (say "a-O-ra" — the H in the middle is silent)</p>
              <p className="es"><strong>prohibir</strong> — to prohibit (the H between vowels is silent; O and I are two separate syllables)</p>
            </div>

            <div className="blog-tip">
              <p><strong>Remember:</strong> H in Spanish is like the K in English "knife" or the W in "write" — present in the spelling, absent in the sound. It is a historical relic. Some of these words had an actual H sound in Latin, but it disappeared from spoken Spanish centuries ago.</p>
            </div>

            <h2>The Exception: CH</h2>
            <p>The letter combination <em>ch</em> is a digraph — two letters treated as one sound. It makes the "ch" sound as in English "church" or "cheese". The H here is part of a pair and does not follow the silent-H rule.</p>

            <div className="blog-example">
              <p className="es"><strong>chico</strong> — boy ("CHI-co")</p>
              <p className="es"><strong>mucho</strong> — a lot / very ("MOO-cho")</p>
              <p className="es"><strong>noche</strong> — night ("NO-che")</p>
              <p className="es"><strong>leche</strong> — milk ("LE-che")</p>
            </div>

            <h2>The Spanish J: A Guttural Rasp</h2>
            <p>The Spanish J is produced at the back of the throat — technically a <strong>voiceless velar fricative</strong> (in Castilian, actually further back as a uvular fricative in some regions). The sound is similar to the "ch" in the Scottish word "loch" or the German "Bach" — a rough, rasping sound made by narrowing the airway at the back of the mouth and forcing air through.</p>
            <p>It is not the same as the English J sound (as in "jump" or "jar"). The English J is a soft palatal sound made near the front of the mouth. The Spanish J is a hard guttural sound made at the back. They are completely different articulations.</p>

            <div className="blog-example">
              <p className="es"><strong>jardín</strong> — garden (guttural J at the start)</p>
              <p className="es"><strong>juego</strong> — game / play (guttural J)</p>
              <p className="es"><strong>mejor</strong> — better (guttural J in the middle)</p>
              <p className="es"><strong>rojo</strong> — red (two guttural J sounds)</p>
              <p className="es"><strong>trabajo</strong> — work / job (guttural J)</p>
              <p className="es"><strong>junio</strong> — June (guttural J)</p>
              <p className="es"><strong>caja</strong> — box (guttural J)</p>
            </div>

            <div className="blog-tip">
              <p><strong>Practise the J sound:</strong> Make the "k" sound at the back of your throat, then instead of stopping the airflow, keep it going and add friction — like a "k" being held open. Alternatively, say "loch" (the Scottish lake) and hold the final sound. That rasp is exactly the Spanish J. In informal or fast speech it can be softer, but the Castilian standard is quite forceful.</p>
            </div>

            <h2>G Before E or I: The Same Sound as J</h2>
            <p>Here is a rule that catches many beginners off guard: <strong>the letter G before E or I makes the same guttural sound as J</strong>. This makes the Spanish G behave very differently from English G, which is always soft (as in "garden") regardless of what follows it.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Letter + Vowel</th><th>Sound</th><th>Example</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>G + A</strong></td><td>like English G</td><td>gato</td><td>cat</td></tr>
                  <tr><td><strong>G + O</strong></td><td>like English G</td><td>gordo</td><td>fat</td></tr>
                  <tr><td><strong>G + U</strong></td><td>like English G</td><td>gusto</td><td>taste / pleasure</td></tr>
                  <tr><td><strong>G + E</strong></td><td>guttural (same as J)</td><td>general</td><td>general</td></tr>
                  <tr><td><strong>G + I</strong></td><td>guttural (same as J)</td><td>girar</td><td>to turn / to spin</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es"><strong>gente</strong> — people (G before E — guttural: "HEN-te")</p>
              <p className="es"><strong>general</strong> — general (G before E — guttural: "he-ne-RAL")</p>
              <p className="es"><strong>gitano</strong> — gypsy (G before I — guttural: "hi-TA-no")</p>
              <p className="es"><strong>geología</strong> — geology (G before E — guttural: "he-o-lo-HEE-a")</p>
              <p className="es"><strong>urgente</strong> — urgent (G before E — guttural)</p>
            </div>

            <h2>The GUE and GUI Sequences</h2>
            <p>To write a hard G (as in English "get" or "give") before E or I in Spanish, the language inserts a silent U between the G and the vowel: <em>gue</em> and <em>gui</em>. The U is silent — its only job is to tell you that the G is hard, not guttural.</p>

            <div className="blog-example">
              <p className="es"><strong>guerra</strong> — war ("GE-rra" — hard G, silent U)</p>
              <p className="es"><strong>guía</strong> — guide ("GEE-a" — hard G, silent U)</p>
              <p className="es"><strong>guitarra</strong> — guitar ("gi-TA-rra" — hard G, silent U)</p>
              <p className="es"><strong>llegué</strong> — I arrived ("yeh-GEH" — hard G, silent U)</p>
            </div>

            <p>When the U in <em>gue/gui</em> needs to be pronounced (which is rare), it is written with a diaeresis: <em>güe</em> or <em>güi</em>.</p>

            <div className="blog-example">
              <p className="es"><strong>pingüino</strong> — penguin ("pin-GWEE-no" — the U is pronounced)</p>
              <p className="es"><strong>vergüenza</strong> — shame ("ber-GWEN-tha" — the U is pronounced)</p>
            </div>

            <div className="blog-highlight">
              <p>The Spanish H is always completely silent — treat it as if it were not there. The Spanish J is a strong guttural sound, like the Scottish "ch" in "loch" — not the English J. The letter G makes the same guttural sound when it appears before E or I. These rules are consistent and, once learned, apply everywhere.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to get these sounds right from the start?</h3>
              <p>Building correct pronunciation habits early saves a lot of unlearning later. Let's work on the sounds that matter most.</p>
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
