import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPTK() {
  useScrollAnimation();
  usePageMeta(
    'Spanish P, T and K: The Sounds English Speakers Over-Aspirate | Mike Masters Languages',
    'English P, T and K are aspirated — Spanish ones are not. Learn what aspiration means, how to eliminate the air puff, and why this single change transforms your Spanish accent.'
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
          <h1>Spanish P, T and K: The Sounds English Speakers Over-Aspirate</h1>
          <p className="blog-hero-intro">
            In English, P, T and K are aspirated — you release a puff of air. In Spanish they aren't. This one change makes a big difference to your accent.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Most pronunciation advice for Spanish learners focuses on the sounds that exist in Spanish but not in English — the rolled R, the guttural J, the ñ. These are genuinely challenging. But there is a subtler category of error that is just as noticeable to native speakers: <strong>doing too much with sounds that both languages share</strong>. The letters P, T and K are a perfect example. They exist in both English and Spanish — but the way English speakers produce them is slightly different from the Spanish way, and that difference marks you as a non-native speaker more than you might expect.</p>

            <h2>What Is Aspiration?</h2>
            <p>Aspiration is the small burst of air that follows certain consonants. In English, the consonants P, T and K at the start of a stressed syllable are <strong>aspirated</strong> — meaning a brief puff of air (a mini "h" sound) follows the consonant before the vowel begins. You can feel and hear this clearly if you hold your hand in front of your mouth.</p>
            <p>Try the <strong>paper test</strong>: hold a thin piece of paper (or a tissue, or the back of your hand) about five centimetres in front of your lips. Say the English word "pin" — the paper should flutter when you say the P. Now say "spin" — the paper should barely move, because the P in "spin" is not aspirated.</p>
            <p>This is the key insight: the English P in "pin" and the P in "spin" are actually different sounds, even though English speakers treat them as the same letter. The first is aspirated; the second is not. Spanish P always sounds like the P in "spin" — never the P in "pin".</p>

            <div className="blog-example">
              <p className="es"><strong>English "pin"</strong> — <span style={{fontWeight: 400}}>(aspirated P: a puff of air follows — "P-hin")</span></p>
              <p className="es"><strong>English "spin"</strong> — <span style={{fontWeight: 400}}>(unaspirated P: no puff — this is the Spanish P sound)</span></p>
              <p className="es"><strong>Spanish "pino"</strong> — pine tree <span style={{fontWeight: 400}}>(unaspirated P, like "spin", not "pin")</span></p>
            </div>

            <h2>The Same Applies to T</h2>
            <p>The T in English "top" is aspirated — there is a small puff of air after it. The T in "stop" is not. Spanish T is always unaspirated, like the T in "stop". Furthermore, Spanish T is produced slightly further forward than English T — the tongue tip touches the back of the upper teeth themselves (a <strong>dental</strong> position), rather than the ridge behind the teeth (an <strong>alveolar</strong> position). This gives Spanish T a slightly crisper, more "continental" quality.</p>

            <div className="blog-example">
              <p className="es"><strong>English "top"</strong> — <span style={{fontWeight: 400}}>(aspirated T: "T-hop")</span></p>
              <p className="es"><strong>English "stop"</strong> — <span style={{fontWeight: 400}}>(unaspirated T — this is closer to the Spanish T)</span></p>
              <p className="es"><strong>tener</strong> — to have <span style={{fontWeight: 400}}>(unaspirated T, tongue on the teeth: teh-NEHR)</span></p>
              <p className="es"><strong>tiempo</strong> — weather / time <span style={{fontWeight: 400}}>(unaspirated T: TYEM-poh)</span></p>
              <p className="es"><strong>también</strong> — also <span style={{fontWeight: 400}}>(unaspirated T: tam-BYEN)</span></p>
            </div>

            <h2>The K Sound in Spanish</h2>
            <p>Spanish K — which appears as the letter K in borrowed words, as C before A/O/U, and as QU before E/I — is also unaspirated. Again, think of the difference between English "car" (aspirated K, a puff of air) and "scar" (unaspirated K, no puff).</p>
            <p>The Spanish K equivalent always sounds like the one in "scar", not "car".</p>

            <div className="blog-example">
              <p className="es"><strong>casa</strong> — house <span style={{fontWeight: 400}}>(C before A = unaspirated K sound: KAH-sah)</span></p>
              <p className="es"><strong>comer</strong> — to eat <span style={{fontWeight: 400}}>(C before O = unaspirated K: koh-MEHR)</span></p>
              <p className="es"><strong>cuando</strong> — when <span style={{fontWeight: 400}}>(C before U = unaspirated K: KWAN-doh)</span></p>
              <p className="es"><strong>quiero</strong> — I want <span style={{fontWeight: 400}}>(QU before E = unaspirated K: KYEH-roh)</span></p>
              <p className="es"><strong>pequeño</strong> — small <span style={{fontWeight: 400}}>(QU before E = unaspirated K: peh-KEH-nyoh)</span></p>
              <p className="es"><strong>kilómetro</strong> — kilometre <span style={{fontWeight: 400}}>(K = unaspirated K: kee-LOH-meh-troh)</span></p>
            </div>

            <div className="blog-highlight">
              <p>In Spanish, C before A/O/U and QU before E/I both produce the same unaspirated K sound. There is no puff of air — just a clean, clipped consonant followed immediately by the vowel.</p>
            </div>

            <h2>Practice: The Paper Test</h2>
            <p>The paper test (or hand test) is the most direct way to train unaspirated stops. Here is a structured way to use it:</p>
            <ol>
              <li>Hold a thin piece of paper at lips distance. Say "pin" in English — feel the paper flutter with the P.</li>
              <li>Now say "spin" — the P should produce no flutter.</li>
              <li>Now say the Spanish word <em>para</em> (for), aiming for zero flutter. The P should be exactly like the P in "spin".</li>
              <li>Do the same for T: "top" (flutter) vs "stop" (no flutter) vs Spanish <em>todo</em> (all) — no flutter.</li>
              <li>Do the same for K: "car" (flutter) vs "scar" (no flutter) vs Spanish <em>casa</em> — no flutter.</li>
            </ol>

            <p>Once you have got the feel of it without the paper, move on to saying short Spanish sentences while monitoring with your hand. You are aiming for P, T and K that feel almost "quiet" compared to English ones — clean and immediate, with no trailing breath.</p>

            <h2>Spanish Words to Practise</h2>
            <p>These words are excellent for practising unaspirated P, T and K because the consonants appear in prominent, stressed positions:</p>

            <div className="blog-example">
              <p className="es"><strong>padre</strong> — father <span style={{fontWeight: 400}}>(PAH-dreh — clean P, no puff)</span></p>
              <p className="es"><strong>tiempo</strong> — time / weather <span style={{fontWeight: 400}}>(TYEM-poh — clean T)</span></p>
              <p className="es"><strong>poco</strong> — a little <span style={{fontWeight: 400}}>(POH-koh — clean P and K)</span></p>
              <p className="es"><strong>pato</strong> — duck <span style={{fontWeight: 400}}>(PAH-toh — both P and T unaspirated)</span></p>
              <p className="es"><strong>tapas</strong> — tapas <span style={{fontWeight: 400}}>(TAH-pahs — both T and P unaspirated)</span></p>
              <p className="es"><strong>capital</strong> — capital city <span style={{fontWeight: 400}}>(kah-pee-TAHL — K, P and T all unaspirated)</span></p>
              <p className="es"><strong>típico</strong> — typical <span style={{fontWeight: 400}}>(TEE-pee-koh — T, P and K all unaspirated)</span></p>
            </div>

            <h2>How Aspiration Sounds to Native Ears</h2>
            <p>When an English speaker over-aspirates P, T and K in Spanish, native speakers do not fail to understand — the words are still recognisable. But the extra air creates a slightly "breathy" or "foreign" quality that is immediately detectable. It is a bit like how an American accent sounds in British English, or vice versa — perfectly intelligible, but distinctly marked as coming from elsewhere.</p>
            <p>Removing aspiration is one of the highest-return adjustments you can make to your accent, because it affects such common, high-frequency consonants. Every time you say a word beginning with P, T or K — which is constantly in any conversation — you have the opportunity to sound slightly more native or slightly more English. With practice, the unaspirated version becomes your default, and the adjustment becomes automatic.</p>

            <div className="blog-tip">
              <p><strong>A mental trick:</strong> Think of Spanish P, T and K as having a lid on them — the consonant closes and opens cleanly, like a tap being turned on and off. English P, T and K in stressed positions have a little exhaust pipe attached — a puff of air that lingers after the release. Remove the exhaust pipe, and you have the Spanish version.</p>
            </div>

            <div className="blog-highlight">
              <p>English P, T and K in stressed positions are aspirated — a small puff of air follows the consonant. Spanish P, T and K are never aspirated. The target sound for each is the version you already use in English after S: the P in "spin", the T in "stop", the K in "scar". The paper test (hold paper near your mouth — it should not flutter for Spanish consonants) is the clearest way to monitor and correct this habit.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to sound noticeably more natural in Spanish?</h3>
              <p>These small phonetic adjustments have a big impact on how you come across to native speakers. A tutor can hear exactly what you are doing and help you retrain quickly. Let's work on it.</p>
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
