import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSyllableDivision() {
  useScrollAnimation();
  usePageMeta(
    'Syllable Division in Spanish: How to Break Words Apart | Mike Masters Languages',
    'Understanding how Spanish syllables work is the foundation of stress, rhythm and pronunciation. Learn the rules for consonants, clusters, diphthongs and hiatus with clear examples.'
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
          <h1>Syllable Division in Spanish: How to Break Words Apart</h1>
          <p className="blog-hero-intro">
            Understanding how Spanish divides into syllables is the foundation of getting stress, rhythm and pronunciation right.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Every Spanish word is made up of syllables — small units of sound built around a vowel. Knowing how to divide words into their syllables might seem like a technical exercise, but it has real practical value: it helps you apply the stress rules correctly, understand accent marks, read unfamiliar words aloud with confidence, and develop the even, measured rhythm that characterises Spanish. The rules are logical and, with a little practice, become second nature.</p>

            <h2>The Core Principle: Every Syllable Needs a Vowel</h2>
            <p>The fundamental rule of Spanish syllables is that <strong>every syllable must contain at least one vowel</strong>. The vowel is the nucleus — the sound around which everything else organises. Consonants attach themselves to vowels; they cannot stand alone as syllable cores. This means that counting the vowel sounds in a word immediately tells you the minimum number of syllables it has.</p>

            <div className="blog-example">
              <p className="es"><strong>ca·sa</strong> — house <span style={{fontWeight: 400}}>(2 vowels = 2 syllables: CA-sa)</span></p>
              <p className="es"><strong>li·bro</strong> — book <span style={{fontWeight: 400}}>(2 vowels = 2 syllables: LI-bro)</span></p>
              <p className="es"><strong>a·ma·ri·llo</strong> — yellow <span style={{fontWeight: 400}}>(4 vowels = 4 syllables: a-ma-RI-llo)</span></p>
              <p className="es"><strong>u·ni·ver·si·dad</strong> — university <span style={{fontWeight: 400}}>(5 vowels = 5 syllables)</span></p>
            </div>

            <h2>Single Consonants: Go With the Following Vowel</h2>
            <p>When a single consonant appears between two vowels, it belongs to the <strong>following vowel's syllable</strong> — not the preceding one. The consonant goes forward, not backward. This is different from English, where we often feel the consonant belongs more to the syllable before it.</p>

            <div className="blog-example">
              <p className="es"><strong>ca·ma</strong> — bed <span style={{fontWeight: 400}}>(the M goes with the following A: ca-MA)</span></p>
              <p className="es"><strong>pa·la·bra</strong> — word <span style={{fontWeight: 400}}>(each L and B go with the following vowel)</span></p>
              <p className="es"><strong>ca·mi·no</strong> — path / road <span style={{fontWeight: 400}}>(ca-MI-no)</span></p>
              <p className="es"><strong>mu·si·ca</strong> — music <span style={{fontWeight: 400}}>(MU-si-ca)</span></p>
            </div>

            <h2>Consonant Clusters: Most Go Together</h2>
            <p>When two consonants appear between vowels, the general rule is that they <strong>split</strong> — one stays with the preceding vowel and one goes with the following one. However, there is an important exception: <strong>certain two-consonant combinations always stay together and move forward as a unit</strong> to the following syllable.</p>
            <p>The combinations that always stay together are: <strong>PR, PL, BR, BL, TR, DR, CR, CL, GR, GL, FR, FL</strong>. These are all combinations of a stop or fricative consonant followed by R or L. They behave as a single unit because they naturally flow together in pronunciation.</p>

            <div className="blog-example">
              <p className="es"><strong>ha·blar</strong> — to speak <span style={{fontWeight: 400}}>(BL stays together: ha-BLAR)</span></p>
              <p className="es"><strong>o·tro</strong> — other <span style={{fontWeight: 400}}>(TR stays together: O-tro)</span></p>
              <p className="es"><strong>pro·ble·ma</strong> — problem <span style={{fontWeight: 400}}>(PR and BL each stay together: pro-BLE-ma)</span></p>
              <p className="es"><strong>in·glés</strong> — English <span style={{fontWeight: 400}}>(GL stays together: in-GLÉS)</span></p>
              <p className="es"><strong>a·grí·co·la</strong> — agricultural <span style={{fontWeight: 400}}>(GR stays together)</span></p>
            </div>

            <p>When two consonants appear between vowels and do NOT form one of these special pairs, they split — the first goes with the preceding vowel and the second with the following:</p>

            <div className="blog-example">
              <p className="es"><strong>car·ta</strong> — letter / card <span style={{fontWeight: 400}}>(R splits from T: CAR-ta)</span></p>
              <p className="es"><strong>per·so·na</strong> — person <span style={{fontWeight: 400}}>(R splits from S: per-SO-na)</span></p>
              <p className="es"><strong>trans·por·te</strong> — transport <span style={{fontWeight: 400}}>(NS split, RT splits)</span></p>
            </div>

            <h2>Special Digraphs: CH, LL, RR Always Stay Together</h2>
            <p>Three two-letter combinations in Spanish are treated as single letters — they represent one sound and can never be split across syllables:</p>
            <ul>
              <li><strong>CH</strong> — always stays together (like the "ch" in "church")</li>
              <li><strong>LL</strong> — always stays together (the "y" sound in yeísta dialects)</li>
              <li><strong>RR</strong> — always stays together (the trilled R)</li>
            </ul>

            <div className="blog-example">
              <p className="es"><strong>mu·cho</strong> — a lot / much <span style={{fontWeight: 400}}>(CH stays together: MU-cho)</span></p>
              <p className="es"><strong>ca·lle</strong> — street <span style={{fontWeight: 400}}>(LL stays together: CA-lle)</span></p>
              <p className="es"><strong>pe·rro</strong> — dog <span style={{fontWeight: 400}}>(RR stays together: PE-rro)</span></p>
            </div>

            <h2>Diphthongs and Hiatus: When Two Vowels Are One Syllable vs Two</h2>
            <p>This is where syllable division becomes more subtle — and more important for accent marks. When two vowels appear next to each other, they may form a <strong>diphthong</strong> (counted as one syllable) or a <strong>hiatus</strong> (counted as two separate syllables).</p>
            <p>Spanish vowels divide into two groups:</p>
            <ul>
              <li><strong>Strong vowels:</strong> A, E, O</li>
              <li><strong>Weak vowels:</strong> I, U</li>
            </ul>
            <p>A <strong>diphthong</strong> forms when a strong vowel combines with a weak one (or two weak vowels combine). They glide together into one syllable:</p>

            <div className="blog-example">
              <p className="es"><strong>fuer·te</strong> — strong / loud <span style={{fontWeight: 400}}>(UE is a diphthong — one syllable: FUER-te)</span></p>
              <p className="es"><strong>bue·no</strong> — good <span style={{fontWeight: 400}}>(UE is a diphthong: BUE-no)</span></p>
              <p className="es"><strong>rei·na</strong> — queen <span style={{fontWeight: 400}}>(EI is a diphthong: REI-na)</span></p>
              <p className="es"><strong>ciu·dad</strong> — city <span style={{fontWeight: 400}}>(IU is a diphthong: CIU-dad)</span></p>
            </div>

            <p>A <strong>hiatus</strong> occurs when two strong vowels appear together, or when a weak vowel carries a written accent mark (breaking the diphthong). Each vowel forms its own syllable:</p>

            <div className="blog-example">
              <p className="es"><strong>po·e·ta</strong> — poet <span style={{fontWeight: 400}}>(OE are two strong vowels — hiatus: po-E-ta, 3 syllables)</span></p>
              <p className="es"><strong>ca·os</strong> — chaos <span style={{fontWeight: 400}}>(AO hiatus: CA-os)</span></p>
              <p className="es"><strong>pa·ís</strong> — country <span style={{fontWeight: 400}}>(the accent on Í breaks what would be a diphthong: pa-ÍS, 2 syllables)</span></p>
              <p className="es"><strong>dí·a</strong> — day <span style={{fontWeight: 400}}>(accent on Í creates hiatus: DÍ-a, 2 syllables)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Why this matters for accent marks:</strong> Spanish accent marks often appear precisely to signal a hiatus — to tell you that what looks like a diphthong is actually two separate syllables. <em>Día</em> has an accent because without it, you might read it as a single syllable. The written accent is a syllable-division instruction.</p>
            </div>

            <h2>Putting It All Together: 10 Words Broken Down</h2>
            <p>Here is a set of common Spanish words with their syllable divisions shown, applying all the rules above:</p>

            <div className="blog-example">
              <p className="es"><strong>es·pa·ñol</strong> — Spanish <span style={{fontWeight: 400}}>(3 syllables: es-pa-ÑOL)</span></p>
              <p className="es"><strong>di·fí·cil</strong> — difficult <span style={{fontWeight: 400}}>(3 syllables: di-FÍ-cil)</span></p>
              <p className="es"><strong>tra·ba·ja·dor</strong> — hardworking / worker <span style={{fontWeight: 400}}>(4 syllables: tra-ba-ja-DOR)</span></p>
              <p className="es"><strong>in·for·ma·ción</strong> — information <span style={{fontWeight: 400}}>(4 syllables: in-for-ma-CIÓN)</span></p>
              <p className="es"><strong>flo·re·cer</strong> — to bloom / to flourish <span style={{fontWeight: 400}}>(3 syllables: flo-re-CER — FL stays together)</span></p>
              <p className="es"><strong>au·to·bús</strong> — bus <span style={{fontWeight: 400}}>(3 syllables: AU is a diphthong)</span></p>
              <p className="es"><strong>eu·ro·pe·o</strong> — European <span style={{fontWeight: 400}}>(4 syllables: EU diphthong, then OE hiatus)</span></p>
              <p className="es"><strong>pa·la·bra</strong> — word <span style={{fontWeight: 400}}>(3 syllables: pa-la-BRA — BR stays together)</span></p>
              <p className="es"><strong>o·rí·ge·nes</strong> — origins <span style={{fontWeight: 400}}>(4 syllables: o-RÍ-ge-nes)</span></p>
              <p className="es"><strong>des·cu·bri·mien·to</strong> — discovery <span style={{fontWeight: 400}}>(5 syllables: des-cu-bri-MIEN-to — BR together, IEN diphthong)</span></p>
            </div>

            <div className="blog-highlight">
              <p>Every Spanish syllable needs a vowel. Single consonants go with the following vowel. Consonant clusters split unless they form a PR/PL/BR/BL/TR/DR/CR/CL/GR/GL/FR/FL pair, which stays together. CH, LL and RR are always single units. Two vowels form one syllable (diphthong) unless they are both strong (A/E/O) or a weak vowel has an accent mark, in which case they form two separate syllables (hiatus). These rules underpin stress, accent marks and the rhythm of the language.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to build a solid pronunciation foundation from the start?</h3>
              <p>Understanding syllables, stress and rhythm is something a tutor can guide you through quickly with real examples and feedback. Let's get started.</p>
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
