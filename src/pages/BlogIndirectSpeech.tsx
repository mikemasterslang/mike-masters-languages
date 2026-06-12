import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogIndirectSpeech() {
  useScrollAnimation();
  usePageMeta(
    'Indirect Speech in Spanish: How to Report What Someone Said | Mike Masters Languages',
    'Learn how indirect speech works in Spanish — tense backshifting with decir que, reported questions with preguntó si, and the key reporting verbs you need to know.'
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
          <h1>Indirect Speech in Spanish: How to Report What Someone Said</h1>
          <p className="blog-hero-intro">Reporting conversations is something we do constantly in real life. Here's how indirect speech works in Spanish — and where the tenses shift.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Every day we repeat things people have said — "he told me he was coming," "she asked whether I was free." This is indirect speech (also called reported speech), and it's a central feature of real conversation. Spanish handles it in a structured way, with tense changes that follow logical rules once you understand the system. Let's break it down clearly.</p>

            <h2>Direct vs Indirect Speech</h2>
            <p>Direct speech reports the exact words someone used, inside quotation marks. Indirect speech reports what was said without quoting directly — it paraphrases and adjusts the tense.</p>

            <div className="blog-example">
              <p className="es">Direct: "Estoy cansado," dijo Juan. — <span style={{fontWeight: 400}}>Direct: "I'm tired," said Juan.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Indirect: Juan dijo que estaba cansado. — <span style={{fontWeight: 400}}>Indirect: Juan said he was tired.</span></p>
            </div>

            <p>Notice that estoy (present) becomes estaba (imperfect) in the reported version. This shift is called backshifting, and it follows a consistent pattern in Spanish.</p>

            <h2>Decir Que + Verb</h2>
            <p>The most common reporting verb is decir (to say / to tell). In indirect speech, it's followed by que and then the reported clause. The tense you use in the reported clause depends on when you're reporting.</p>

            <h3>Reporting in the Present (What Someone Just Said)</h3>
            <p>If you're reporting something said very recently, or if the situation is still current, you often keep the original tense or shift it only slightly.</p>

            <div className="blog-example">
              <p className="es">Dice que tiene hambre. — <span style={{fontWeight: 400}}>He says he's hungry. (reporting something said just now)</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Me dice que llega tarde. — <span style={{fontWeight: 400}}>She tells me she's running late.</span></p>
            </div>

            <h3>Reporting in the Past (What Someone Said Earlier)</h3>
            <p>When the reporting verb is in the past (dijo, contó, explicó, etc.), the tenses in the reported clause shift back according to these rules:</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Original tense (direct speech)</th>
                  <th>Backshifted tense (indirect speech)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Present (habla)</td><td>Imperfect (hablaba)</td></tr>
                <tr><td>Preterite (habló)</td><td>Pluperfect (había hablado)</td></tr>
                <tr><td>Imperfect (hablaba)</td><td>Imperfect (hablaba) — no change</td></tr>
                <tr><td>Future (hablará)</td><td>Conditional (hablaría)</td></tr>
                <tr><td>Present perfect (ha hablado)</td><td>Pluperfect (había hablado)</td></tr>
                <tr><td>Imperative (habla)</td><td>Imperfect subjunctive (hablara)</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">Original: "Vivo en Londres." → Dijo que vivía en Londres. — <span style={{fontWeight: 400}}>"I live in London." → He said he lived in London.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Original: "Llegué tarde." → Dijo que había llegado tarde. — <span style={{fontWeight: 400}}>"I arrived late." → She said she had arrived late.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Original: "Lo haré mañana." → Dijo que lo haría al día siguiente. — <span style={{fontWeight: 400}}>"I'll do it tomorrow." → He said he would do it the next day.</span></p>
            </div>

            <div className="blog-highlight">
              <p>Also notice that time words shift: mañana (tomorrow) becomes al día siguiente (the next day), ayer (yesterday) becomes el día anterior, and aquí (here) becomes allí (there).</p>
            </div>

            <h2>Reported Questions: Preguntó Si...</h2>
            <p>To report a yes/no question, use preguntó si (asked whether/if). To report a question with a question word, use the question word directly after the reporting verb. The tense rules are the same as above.</p>

            <div className="blog-example">
              <p className="es">Original: "¿Hablas inglés?" → Me preguntó si hablaba inglés. — <span style={{fontWeight: 400}}>"Do you speak English?" → She asked me whether I spoke English.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Original: "¿Dónde vives?" → Me preguntó dónde vivía. — <span style={{fontWeight: 400}}>"Where do you live?" → He asked me where I lived.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Original: "¿Cuándo llegas?" → Preguntó cuándo llegaba. — <span style={{fontWeight: 400}}>"When are you arriving?" → She asked when I was arriving.</span></p>
            </div>

            <div className="blog-highlight">
              <p>For reported yes/no questions: preguntó si + [backshifted verb].<br/>For reported wh-questions: preguntó + [question word] + [backshifted verb]. No que is used in either case.</p>
            </div>

            <h2>Common Reporting Verbs</h2>
            <p>While decir and preguntar are the most common, Spanish has a range of verbs for reporting speech with more precision. All of them work with the same backshifting rules.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Verb</th>
                  <th>Meaning</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>decir</td><td>to say / tell</td><td>Dijo que no podía venir.</td></tr>
                <tr><td>preguntar</td><td>to ask</td><td>Preguntó si tenía tiempo.</td></tr>
                <tr><td>explicar</td><td>to explain</td><td>Explicó que el tren llegaba tarde.</td></tr>
                <tr><td>contar</td><td>to tell (a story)</td><td>Contó que había viajado por Asia.</td></tr>
                <tr><td>añadir</td><td>to add</td><td>Añadió que no estaba seguro.</td></tr>
                <tr><td>comentar</td><td>to mention / remark</td><td>Comentó que el precio era muy alto.</td></tr>
                <tr><td>confesar</td><td>to confess</td><td>Confesó que no sabía la respuesta.</td></tr>
                <tr><td>insistir en</td><td>to insist</td><td>Insistió en que era verdad.</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">Explicó que el museo cerraba los lunes. — <span style={{fontWeight: 400}}>She explained that the museum was closed on Mondays.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Contó que había conocido a alguien especial. — <span style={{fontWeight: 400}}>He told us he had met someone special.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Añadió que no volvería hasta el viernes. — <span style={{fontWeight: 400}}>She added that she wouldn't be back until Friday.</span></p>
            </div>

            <h2>A Note on Everyday Spanish</h2>
            <p>In casual conversation, native speakers don't always apply strict backshifting — particularly if the reported information is still current or relevant. You might hear dijo que está cansado even though the "correct" backshifted form would be estaba. Understanding the rules gives you the formal, written foundation. As your listening improves, you'll hear how natural speech adapts these rules in context.</p>

          </div>

          <div className="blog-author-cta">
            <p>Want to work on your Spanish grammar with a professional tutor? <Link to="/get-started">Get started with Mike Masters Languages.</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
