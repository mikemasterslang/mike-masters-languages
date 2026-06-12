import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGSound() {
  useScrollAnimation();
  usePageMeta(
    'The Spanish G Sound: Hard, Soft and the Silent U | Mike Masters Languages',
    'The letter G in Spanish behaves differently depending on what follows it. Learn the hard G, the soft guttural sound, the GU combination, and the diaeresis with clear examples.'
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
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>The Spanish G Sound: Hard, Soft and the Silent U</h1>
          <p className="blog-hero-intro">
            The letter G in Spanish behaves very differently depending on what follows it — here's how to get it right every time.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Spanish G is one of those letters that confuses beginners precisely because it looks familiar. English speakers see a G and expect it to always make the same sound — as in "garden" or "go". But in Spanish, G has two completely different pronunciations depending on the vowel that follows it, plus a special spelling trick involving a silent U. Once you know the system, it becomes entirely logical and predictable.</p>

            <h2>G Before A, O and U: The Hard G</h2>
            <p>When G appears before the vowels A, O or U, it makes a <strong>hard G sound</strong> — exactly like the English G in "garden", "go" or "gum". There is nothing surprising here. The sound is produced at the back of the mouth with the back of the tongue touching the soft palate.</p>

            <div className="blog-example">
              <p className="es"><strong>gato</strong> — cat <span style={{fontWeight: 400}}>(GAH-toh — hard G, just like English)</span></p>
              <p className="es"><strong>gordo</strong> — fat / thick <span style={{fontWeight: 400}}>(GOHR-doh — hard G)</span></p>
              <p className="es"><strong>gusto</strong> — taste / pleasure <span style={{fontWeight: 400}}>(GOOS-toh — hard G)</span></p>
              <p className="es"><strong>lago</strong> — lake <span style={{fontWeight: 400}}>(LAH-goh — hard G)</span></p>
              <p className="es"><strong>agosto</strong> — August <span style={{fontWeight: 400}}>(ah-GOHS-toh — hard G)</span></p>
              <p className="es"><strong>ganar</strong> — to win / to earn <span style={{fontWeight: 400}}>(gah-NAHR — hard G)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Note for between-vowel positions:</strong> Just as with the B/V sound, the G between vowels in casual speech often softens slightly — the back of the tongue approaches but does not fully close against the palate. So <em>lago</em> (lake) might sound a little like "LAH-γoh" in natural speech. This is a subtle detail; for beginners, a hard G between vowels is perfectly acceptable and understood.</p>
            </div>

            <h2>G Before E and I: The Guttural Sound</h2>
            <p>When G appears before the vowels E or I, it changes completely. It no longer sounds like the English G — instead, it makes the same <strong>guttural, rasping sound as the letter J</strong>. This is the sound produced at the back of the throat, like the "ch" in the Scottish word "loch" or the German "Bach". It is forceful and distinctive.</p>
            <p>This is one of the most important rules in Spanish pronunciation, and it catches English speakers out constantly. The word <em>general</em>, for example, does not start with a soft English G — it starts with the same guttural sound as <em>jardín</em>.</p>

            <div className="blog-example">
              <p className="es"><strong>gente</strong> — people <span style={{fontWeight: 400}}>(HEN-teh — guttural G, sounds like J)</span></p>
              <p className="es"><strong>general</strong> — general <span style={{fontWeight: 400}}>(heh-neh-RAHL — both G's are guttural)</span></p>
              <p className="es"><strong>gitano</strong> — Romani / gypsy <span style={{fontWeight: 400}}>(hee-TAH-noh — guttural G before I)</span></p>
              <p className="es"><strong>urgente</strong> — urgent <span style={{fontWeight: 400}}>(oor-HEN-teh — guttural G)</span></p>
              <p className="es"><strong>girar</strong> — to turn / to spin <span style={{fontWeight: 400}}>(hee-RAHR — guttural G)</span></p>
              <p className="es"><strong>ágil</strong> — agile <span style={{fontWeight: 400}}>(AH-heel — guttural G before I)</span></p>
              <p className="es"><strong>mágico</strong> — magical <span style={{fontWeight: 400}}>(MAH-hee-koh — guttural G before I)</span></p>
            </div>

            <div className="blog-highlight">
              <p>The rule is simple: G before A, O, U = hard G (like English). G before E, I = guttural sound (same as J). Memorise this rule and you will never mispronounce a G again.</p>
            </div>

            <h2>The GU Combination: Keeping G Hard Before E and I</h2>
            <p>Here is where Spanish gets clever. If a word genuinely needs a hard G sound before E or I — because that is how it is pronounced — the language inserts a silent U between the G and the vowel: <strong>GUE</strong> and <strong>GUI</strong>. The U is completely silent; its only job is to signal that the G should be pronounced hard, not guttural.</p>
            <p>Without the U, writing GE or GI would produce a guttural sound. The silent U acts as a pronunciation instruction embedded in the spelling.</p>

            <div className="blog-example">
              <p className="es"><strong>guerra</strong> — war <span style={{fontWeight: 400}}>(GEH-rrah — hard G, U is silent)</span></p>
              <p className="es"><strong>guitarra</strong> — guitar <span style={{fontWeight: 400}}>(gee-TAH-rrah — hard G, U is silent)</span></p>
              <p className="es"><strong>guía</strong> — guide / guidebook <span style={{fontWeight: 400}}>(GEE-ah — hard G, U is silent)</span></p>
              <p className="es"><strong>llegué</strong> — I arrived <span style={{fontWeight: 400}}>(yeh-GEH — hard G, U is silent)</span></p>
              <p className="es"><strong>alguien</strong> — someone <span style={{fontWeight: 400}}>(AHL-gyen — hard G, U is silent)</span></p>
              <p className="es"><strong>siguiente</strong> — following / next <span style={{fontWeight: 400}}>(see-GYEN-teh — hard G, U is silent)</span></p>
            </div>

            <p>This is also why the verb <em>llegar</em> (to arrive) has an irregular spelling in the first person preterite: <em>llegué</em> rather than <em>llegé</em>. The U is added to preserve the hard G sound before the E ending — a purely spelling-based adjustment.</p>

            <h2>The Diaeresis: GÜ When U Must Be Heard</h2>
            <p>But what if you need the U to actually be pronounced in a GUE or GUI sequence? Spanish solves this with the <strong>diaeresis</strong> — two dots above the U, written as Ü. When you see GÜE or GÜI, the U is fully pronounced. This is less common but important to recognise.</p>

            <div className="blog-example">
              <p className="es"><strong>pingüino</strong> — penguin <span style={{fontWeight: 400}}>(pin-GWEE-noh — the U is pronounced: "gwin")</span></p>
              <p className="es"><strong>bilingüe</strong> — bilingual <span style={{fontWeight: 400}}>(bee-LIN-gweh — the U is pronounced)</span></p>
              <p className="es"><strong>vergüenza</strong> — shame / embarrassment <span style={{fontWeight: 400}}>(behr-GWEN-thah — the U is pronounced)</span></p>
              <p className="es"><strong>agüero</strong> — omen <span style={{fontWeight: 400}}>(ah-GWEH-roh — the U is pronounced)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Memory trick for the diaeresis:</strong> Two dots on the U = "look at me, I'm pronounced!" No dots = silent U, just there to harden the G. It is a visual flag that appears whenever the U needs to be heard in a GÜE or GÜI combination.</p>
            </div>

            <h2>Summary: The Four G Scenarios</h2>
            <p>Here is a quick reference covering every situation you will encounter with Spanish G:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Spelling</th><th>Sound</th><th>Example</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>G + A/O/U</strong></td><td>Hard G (like English)</td><td>gato, gordo, gusto</td><td>cat, fat, taste</td></tr>
                  <tr><td><strong>G + E/I</strong></td><td>Guttural (like J)</td><td>gente, gitano</td><td>people, Romani</td></tr>
                  <tr><td><strong>GU + E/I</strong></td><td>Hard G, U silent</td><td>guerra, guitarra</td><td>war, guitar</td></tr>
                  <tr><td><strong>GÜ + E/I</strong></td><td>Hard G, U pronounced</td><td>pingüino, vergüenza</td><td>penguin, shame</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Common Mistakes to Avoid</h2>
            <p>The errors English speakers most commonly make with Spanish G:</p>
            <ul>
              <li><strong>Pronouncing GE/GI as a soft English G</strong> — words like <em>general</em> and <em>gitano</em> need the guttural J-sound, not the English "dj" sound.</li>
              <li><strong>Pronouncing the silent U in GUE/GUI</strong> — words like <em>guitarra</em> and <em>guerra</em> have a silent U; saying "gwee-TAH-rra" is a clear learner error.</li>
              <li><strong>Forgetting the diaeresis matters</strong> — <em>pingüino</em> needs its U pronounced; without it you would be saying something that sounds wrong.</li>
            </ul>

            <div className="blog-highlight">
              <p>Spanish G follows a clear system: hard before A/O/U, guttural (like J) before E/I. To write a hard G before E or I, insert a silent U (GUE, GUI). To write a GUE or GUI where the U must be heard, add a diaeresis (GÜE, GÜI). Learn these four patterns and G will never trouble you again.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Getting tangled up in Spanish spelling and pronunciation rules?</h3>
              <p>A tutor helps you see the patterns clearly and practise them until they become automatic. Let's cut through the confusion together.</p>
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
