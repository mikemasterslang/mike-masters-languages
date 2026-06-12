import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogNTilde() {
  useScrollAnimation();
  usePageMeta(
    'The Spanish Ñ: How to Produce This Iconic Sound | Mike Masters Languages',
    'The ñ sounds like "ny" in canyon and is easier than most beginners expect. Learn how to produce it, its history, common words, and why año vs ano is a crucial distinction.'
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
          <h1>The Spanish Ñ: How to Produce This Iconic Sound</h1>
          <p className="blog-hero-intro">
            The ñ is one of Spain's most recognisable letters — and it's easier to pronounce than most beginners expect.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The ñ is perhaps the most iconic symbol of the Spanish language — it even appears in Spain's national branding and is officially protected under EU law. Yet for all its fame, many English-speaking beginners are intimidated by it. The good news is that English already contains exactly this sound, and once you know where to find it, producing ñ becomes completely straightforward.</p>

            <h2>What Does Ñ Sound Like?</h2>
            <p>The ñ is pronounced like the "ny" in the English word <strong>canyon</strong>, or the "ni" in <strong>onion</strong>. It is a single palatal nasal sound — not a separate "n" followed by a "y", but one smooth, combined sound where both the nasal quality and the palatal ("y") quality happen simultaneously.</p>
            <p>Other English examples of the same sound:</p>
            <ul>
              <li>"ny" in <strong>canyon</strong> — this is the clearest match</li>
              <li>"ni" in <strong>onion</strong></li>
              <li>"ny" in <strong>anya</strong> (the name)</li>
              <li>"gn" in the Italian word <strong>lasagne</strong></li>
            </ul>
            <p>If you can say "canyon" naturally, you can say ñ. The middle of that word — the "ny" — is all you need.</p>

            <div className="blog-example">
              <p className="es"><strong>año</strong> — year <span style={{fontWeight: 400}}>(AH-nyoh — like "ah" + the "ny" from canyon + "oh")</span></p>
              <p className="es"><strong>mañana</strong> — tomorrow / morning <span style={{fontWeight: 400}}>(mah-NYAH-nah)</span></p>
              <p className="es"><strong>niño</strong> — boy / child <span style={{fontWeight: 400}}>(NEE-nyoh)</span></p>
              <p className="es"><strong>España</strong> — Spain <span style={{fontWeight: 400}}>(es-PAH-nyah)</span></p>
              <p className="es"><strong>señor</strong> — Mr / sir <span style={{fontWeight: 400}}>(seh-NYOHR)</span></p>
              <p className="es"><strong>otoño</strong> — autumn <span style={{fontWeight: 400}}>(oh-TOH-nyoh)</span></p>
              <p className="es"><strong>baño</strong> — bathroom <span style={{fontWeight: 400}}>(BAH-nyoh)</span></p>
              <p className="es"><strong>pequeño</strong> — small <span style={{fontWeight: 400}}>(peh-KEH-nyoh)</span></p>
              <p className="es"><strong>cañón</strong> — canyon / cannon <span style={{fontWeight: 400}}>(kah-NYOHN)</span></p>
              <p className="es"><strong>uña</strong> — fingernail <span style={{fontWeight: 400}}>(OO-nyah)</span></p>
            </div>

            <h2>How to Physically Produce the Ñ Sound</h2>
            <p>The ñ is a <strong>palatal nasal consonant</strong>. Here is exactly what your mouth does to produce it:</p>
            <ol>
              <li>The tip of your tongue rests behind your lower front teeth (or just behind the upper ones — it should not be pressing upward).</li>
              <li>The <strong>blade of your tongue</strong> — the broad middle section — presses up against the hard palate (the bony roof of your mouth, behind the ridge where you make "n" and "t").</li>
              <li>Air flows through your nose, giving the nasal quality.</li>
              <li>As the tongue releases, it naturally produces the "y" glide.</li>
            </ol>
            <p>In contrast, for a regular N, only the tongue tip touches the ridge. For ñ, it is the middle of the tongue pressing against a much larger area of the palate — that is the key physical difference. If you say "n" and then slide your tongue back along the roof of your mouth while keeping it pressed there, you will find the ñ position.</p>

            <div className="blog-tip">
              <p><strong>Quick exercise:</strong> Say "can-yon" slowly. Notice how your tongue goes up in the middle for the "ny" part? Hold that position and hum through your nose. That is the ñ sound. Now practice it between vowels: "ah-ñ-ah", "eh-ñ-oh", "ee-ñ-oh" — and you are ready to say <em>año</em>, <em>señor</em>, <em>niño</em>.</p>
            </div>

            <h2>A Brief History: From NN to Ñ</h2>
            <p>The ñ was not always a distinct letter. It developed in medieval Spanish as a scribal shorthand. In Old Spanish and Latin, many words that now have ñ were spelled with a double N — <em>annus</em> (Latin for year) became <em>anno</em> in Old Spanish. Monks copying manuscripts in the 12th and 13th centuries began writing a small "n" above the first "n" as a space-saving measure. Over time, that superscript n became simplified into the wavy line we now call a tilde, giving us ñ.</p>
            <p>So the tilde on the ñ is literally a compressed second N — a visual reminder of the letter's history. The same Latin root explains why the English "annual" and the Spanish <em>año</em> are related words, even though they look quite different.</p>

            <h2>N vs Ñ: A Critical Distinction</h2>
            <p>The difference between N and Ñ changes word meanings completely. Some pairs are merely different words; others are embarrassing to confuse. The most important example:</p>

            <div className="blog-example">
              <p className="es"><strong>año</strong> — year <span style={{fontWeight: 400}}>(with tilde — "AH-nyoh")</span></p>
              <p className="es"><strong>ano</strong> — anus <span style={{fontWeight: 400}}>(without tilde — "AH-noh")</span></p>
            </div>

            <p>This is not a subtle distinction — telling someone you are "50 anos old" instead of "50 años old" will get a reaction. Always use the tilde. Other N / Ñ pairs worth knowing:</p>

            <div className="blog-example">
              <p className="es"><strong>una</strong> — a / one (feminine) <span style={{fontWeight: 400}}>(OO-nah)</span></p>
              <p className="es"><strong>uña</strong> — fingernail / toenail <span style={{fontWeight: 400}}>(OO-nyah)</span></p>
              <p className="es"><strong>pena</strong> — sorrow / shame <span style={{fontWeight: 400}}>(PEH-nah)</span></p>
              <p className="es"><strong>peña</strong> — rocky crag / group of friends <span style={{fontWeight: 400}}>(PEH-nyah)</span></p>
              <p className="es"><strong>mono</strong> — monkey / cute <span style={{fontWeight: 400}}>(MOH-noh)</span></p>
              <p className="es"><strong>moño</strong> — hair bun / bow <span style={{fontWeight: 400}}>(MOH-nyoh)</span></p>
            </div>

            <h2>Practice Phrases</h2>
            <p>The best way to cement the ñ sound is to practise it in real sentences. These short phrases contain ñ in different positions and vowel environments:</p>

            <div className="blog-example">
              <p className="es"><strong>Mañana es mi cumpleaños.</strong> — <span style={{fontWeight: 400}}>Tomorrow is my birthday.</span></p>
              <p className="es"><strong>El niño es pequeño.</strong> — <span style={{fontWeight: 400}}>The boy is small.</span></p>
              <p className="es"><strong>España tiene muchos otoños bonitos.</strong> — <span style={{fontWeight: 400}}>Spain has many beautiful autumns.</span></p>
              <p className="es"><strong>El señor vive en el baño de la cabaña.</strong> — <span style={{fontWeight: 400}}>The man lives in the bathroom of the cabin. (A silly but ñ-heavy sentence!)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Typing ñ:</strong> On a Mac, hold Option + N, then press N again. On Windows, hold Alt and type 0241 on the numeric keypad. On a phone, hold down the N key and the ñ will appear as an option. Getting into the habit of using the correct letter matters — it affects both spelling and meaning.</p>
            </div>

            <div className="blog-highlight">
              <p>The ñ sounds like the "ny" in "canyon" — a single palatal nasal sound made with the blade of the tongue against the roof of the mouth. It developed from the medieval Latin double-N. The most important thing to remember: <em>año</em> (year) and <em>ano</em> (anus) are different words — always use the tilde.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to nail the sounds that make Spanish sound like Spanish?</h3>
              <p>From ñ to rr, getting the individual sounds right early makes everything else easier. Book a lesson and let's build those habits together.</p>
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
