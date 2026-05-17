import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogCAndZ() {
  useScrollAnimation();
  usePageMeta(
    'The Spanish C and Z: Castilian vs Latin American Pronunciation | Mike Masters Languages',
    'Why does "Barcelona" sound different in Spain and Latin America? Learn how the Spanish C and Z work, what the Castilian "th" sound is, and when C sounds like K.'
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
          <h1>The Spanish C and Z: Castilian vs Latin American Pronunciation</h1>
          <p className="blog-hero-intro">
            One of the most noticeable differences between Spanish from Spain and Spanish from Latin America is the pronunciation of the letters C and Z. Here is what you need to know — and which to use.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>If you have heard someone from Madrid say <em>Barcelona</em> or <em>gracias</em>, you may have noticed that the C sounds more like the English "th" in "think". This is not a lisp — it is a deliberate, standard feature of Castilian Spanish (the variety spoken in most of Spain). Understanding why this happens, and how it differs from Latin American Spanish, will help you decide which pronunciation to use and understand speakers from any region.</p>

            <h2>The Rule: When Does C Sound Like "TH"?</h2>
            <p>In Castilian Spanish, the letter C has <strong>two distinct pronunciations</strong> depending on which vowel follows it:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Context</th><th>Castilian Sound</th><th>Latin American Sound</th><th>Example</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>C before E or I</strong></td>
                    <td>"th" (as in <em>think</em>)</td>
                    <td>"s"</td>
                    <td>cena, ciudad, precio</td>
                  </tr>
                  <tr>
                    <td><strong>C before A, O, or U</strong></td>
                    <td>"k"</td>
                    <td>"k"</td>
                    <td>casa, coche, Cuba</td>
                  </tr>
                  <tr>
                    <td><strong>C at end of syllable (before consonant)</strong></td>
                    <td>"k"</td>
                    <td>"k"</td>
                    <td>acción, sector</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>The Letter Z: Always "TH" in Castilian</h2>
            <p>In Castilian Spanish, the letter Z is always pronounced as the "th" sound in "think" (a voiceless dental fricative), regardless of which vowel follows it. In Latin American Spanish and also in southern Spain (Andalusia) and the Canary Islands, Z is pronounced as "s".</p>

            <div className="blog-example">
              <p className="es"><strong>zapato</strong> — shoe (Castilian: "tha-PA-to" / Latin American: "sa-PA-to")</p>
              <p className="es"><strong>zumo</strong> — juice (Castilian: "THOO-mo" / Latin American: "SOO-mo")</p>
              <p className="es"><strong>plaza</strong> — square (Castilian: "PLA-tha" / Latin American: "PLA-sa")</p>
              <p className="es"><strong>zona</strong> — area / zone (Castilian: "THO-na" / Latin American: "SO-na")</p>
              <p className="es"><strong>azúcar</strong> — sugar (Castilian: "a-THOO-car" / Latin American: "a-SOO-car")</p>
            </div>

            <h2>Putting It Together: C Before E and I</h2>
            <p>The C-before-E-or-I rule is where most learners first notice the Castilian distinction. These are extremely common letter combinations in Spanish, so you will hear this constantly.</p>

            <div className="blog-example">
              <p className="es"><strong>cena</strong> — dinner (Castilian: "THE-na" / Latin American: "SE-na")</p>
              <p className="es"><strong>ciudad</strong> — city (Castilian: "thyoo-DAD" / Latin American: "syoo-DAD")</p>
              <p className="es"><strong>gracias</strong> — thank you (Castilian: "GRA-thyas" / Latin American: "GRA-syas")</p>
              <p className="es"><strong>precio</strong> — price (Castilian: "PRE-thyo" / Latin American: "PRE-syo")</p>
              <p className="es"><strong>Barcelona</strong> — (Castilian: "Bar-the-LO-na" / Latin American: "Bar-se-LO-na")</p>
              <p className="es"><strong>hacer</strong> — to do / to make (Castilian: "a-THER" / Latin American: "a-SER")</p>
            </div>

            <div className="blog-tip">
              <p><strong>Making the "TH" sound:</strong> Place the tip of your tongue lightly between your upper and lower front teeth and blow air through. This produces the "th" in English "think" or "thing". That is exactly the Castilian Spanish sound for C (before E/I) and Z. It is not a lisp — it is a full, standard consonant.</p>
            </div>

            <h2>Is It Really Called a "Lisp"?</h2>
            <p>The popular myth is that Castilian Spanish developed its "th" sound because a Spanish king had a lisp and the court imitated him. This is entirely false — there is no historical basis for it whatsoever. The "th" sound developed naturally through regular sound changes in medieval Castilian. It is a prestige feature in standard Spanish from Spain, not a speech impediment.</p>
            <p>The correct technical term for the Castilian distinction is <em>distinción</em> (distinguishing between the C/Z sound and the S sound). The phenomenon in Latin America and Andalusia where C/Z and S all merge to "s" is called <em>seseo</em>.</p>

            <h2>When C Always Sounds Like K</h2>
            <p>Before A, O, U, and in all other positions, C is simply a K sound — this is consistent across all Spanish dialects:</p>

            <div className="blog-example">
              <p className="es"><strong>casa</strong> — house ("KA-sa")</p>
              <p className="es"><strong>coche</strong> — car ("KO-che")</p>
              <p className="es"><strong>cultura</strong> — culture ("kool-TOO-ra")</p>
              <p className="es"><strong>acción</strong> — action ("ak-THYON" / "ak-SYON")</p>
              <p className="es"><strong>claro</strong> — of course / clear ("KLA-ro")</p>
            </div>

            <p>The spelling <em>qu</em> is used to write a K sound before E or I (because CE/CI would produce the "th"/"s" sound). The U in <em>qu</em> is always silent:</p>

            <div className="blog-example">
              <p className="es"><strong>quiero</strong> — I want ("KYEH-ro" — the U is silent)</p>
              <p className="es"><strong>queso</strong> — cheese ("KEH-so" — the U is silent)</p>
              <p className="es"><strong>porque</strong> — because ("por-KE")</p>
            </div>

            <h2>Which Pronunciation Should You Learn?</h2>
            <p>If you are based in the UK and learning with a tutor who teaches Castilian Spanish, use the Castilian "th" for C (before E/I) and Z. It is the variety taught in most UK schools and language courses. Both varieties are completely correct — it is a regional difference, not a question of right or wrong.</p>
            <p>The important thing is <strong>consistency</strong>. Do not mix Castilian "th" sounds with Latin American S sounds in the same utterance. Pick one model and stick to it. Your Spanish will be clearly understood across the Spanish-speaking world either way.</p>

            <div className="blog-tip">
              <p><strong>Common words to practise:</strong> <em>gracias, cena, ciudad, hacer, precio, zumo, zapato, plaza, Barcelona</em>. Say each one in both Castilian and Latin American style until you can switch fluently between them — then commit to your preferred variant.</p>
            </div>

            <div className="blog-highlight">
              <p>In Castilian Spanish, the letter Z and the letter C before E or I are both pronounced like the "th" in "think". Before A, O, and U, C is always "k". In Latin American Spanish (and parts of southern Spain), Z and C before E/I are both pronounced "s". Neither is wrong — they are simply different regional standards.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to nail the Castilian TH sound?</h3>
              <p>It is one of the most distinctive features of Spanish from Spain, and it is easier to learn than it looks. Let's practise together.</p>
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
