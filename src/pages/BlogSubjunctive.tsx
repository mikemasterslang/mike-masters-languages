import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSubjunctive() {
  useScrollAnimation();
  usePageMeta(
    'The Spanish Subjunctive for Beginners: What It Is and When to Use It | Mike Masters Languages',
    'The subjunctive mood is one of the most feared parts of Spanish grammar — but it\'s more logical than it seems. This beginner-friendly guide explains when and why to use it.'
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
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>The Spanish Subjunctive for Beginners: What It Is and When to Use It</h1>
          <p className="blog-hero-intro">
            The subjunctive has a fearsome reputation — but once you understand what it's actually doing, it starts to make a lot more sense.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Ask any Spanish learner what they find hardest, and the subjunctive will come up every time. It feels abstract, the rules seem complicated, and because English barely uses it, there's no obvious frame of reference. But the subjunctive isn't random — it has a clear logic, and once you understand what it's expressing, it becomes much more manageable.</p>
            <p>This post is an introduction. The subjunctive is a broad topic, but you don't need to master all of it at once — you just need to understand what it is and recognise the most common situations where it appears.</p>

            <h2>What Is the Subjunctive?</h2>
            <p>The subjunctive is not a tense — it's a <strong>mood</strong>. While the indicative mood (the "normal" verb forms you've been learning) states facts and certainties, the subjunctive expresses <strong>subjectivity</strong>: wishes, doubts, emotions, possibilities and things that aren't certain or real.</p>
            <p>English still has traces of the subjunctive: "I wish I <em>were</em> taller" (not "was"), "if I <em>be</em> wrong" — but we use it so rarely that most English speakers don't notice it. In Spanish, it's used constantly.</p>

            <h2>Indicative vs Subjunctive</h2>
            <div className="blog-example">
              <p className="es">Sé que <strong>viene</strong>. — <span style={{fontWeight:400}}>I know that he's coming. (indicative — certain fact)</span></p>
              <p className="es">Espero que <strong>venga</strong>. — <span style={{fontWeight:400}}>I hope that he comes. (subjunctive — wish, not certain)</span></p>
            </div>
            <p>The difference is in the speaker's certainty. "I know" = fact, so indicative. "I hope" = desire, not certain, so subjunctive.</p>

            <h2>When Is the Subjunctive Used? The WEIRDO Categories</h2>
            <p>A useful memory framework for the main triggers of the subjunctive is <strong>WEIRDO</strong>:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Letter</th><th>Category</th><th>Examples</th></tr></thead>
                <tbody>
                  <tr><td><strong>W</strong></td><td>Wishes</td><td>querer que, desear que, esperar que</td></tr>
                  <tr><td><strong>E</strong></td><td>Emotions</td><td>estar contento de que, tener miedo de que, sorprender que</td></tr>
                  <tr><td><strong>I</strong></td><td>Impersonal expressions</td><td>es importante que, es necesario que, es posible que</td></tr>
                  <tr><td><strong>R</strong></td><td>Recommendations / requests</td><td>recomendar que, pedir que, sugerir que</td></tr>
                  <tr><td><strong>D</strong></td><td>Doubt / denial</td><td>dudar que, no creer que, no estar seguro de que</td></tr>
                  <tr><td><strong>O</strong></td><td>Ojalá</td><td>ojalá (hopefully / I wish that)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Key Structure</h2>
            <p>The subjunctive is almost always triggered by a two-clause sentence with <strong>two different subjects</strong> separated by <em>que</em>:</p>
            <div className="blog-example">
              <p className="es">[Trigger verb — subject 1] + <strong>que</strong> + [subjunctive — subject 2]</p>
            </div>
            <div className="blog-example">
              <p className="es">Quiero que <strong>vengas</strong>. — <span style={{fontWeight:400}}>I want you to come. (I want / you come — two subjects)</span></p>
              <p className="es">Espero que <strong>llueva</strong>. — <span style={{fontWeight:400}}>I hope it rains. (I hope / it rains — two subjects)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Same subject = infinitive, not subjunctive.</strong> "I want to come" = Quiero <strong>venir</strong> (not "que venga" — same person). "I want you to come" = Quiero que <strong>vengas</strong> (different people, so subjunctive).</p>
            </div>

            <h2>Forming the Present Subjunctive</h2>
            <p>Good news: the present subjunctive is built on a pattern you can learn quickly. Take the <strong>yo form of the present indicative</strong>, drop the -o, and add the "opposite" endings:</p>
            <ul>
              <li><strong>-AR verbs</strong> take -e endings: hablo → hable, hables, hable, hablemos, habléis, hablen</li>
              <li><strong>-ER / -IR verbs</strong> take -a endings: como → coma, comas, coma, comamos, comáis, coman</li>
            </ul>
            <p>Because the subjunctive uses the yo form as its base, irregular verbs in the yo form carry that irregularity into all subjunctive forms. <em>Tener → tengo → tenga, tengas, tenga...</em></p>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ Espero que vienes. (indicative used after emotion/wish)</p>
              <p className="es right">✓ Espero que vengas. — I hope you come.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ Creo que venga. (doubt not expressed — creer + affirmative = indicative)</p>
              <p className="es right">✓ Creo que viene. — I think he's coming.</p>
              <p className="es right">✓ No creo que venga. — I don't think he's coming. (doubt = subjunctive)</p>
            </div>

            <div className="blog-highlight">
              <p>You don't need to master the subjunctive to have good conversations in Spanish. Focus first on recognising it when you hear it, then learn the most common trigger phrases one by one: <em>espero que, quiero que, es importante que, ojalá</em>. Those four will take you a long way.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Finding Spanish grammar overwhelming?</h3>
              <p>You don't have to tackle it all at once. A structured approach makes it far less daunting — get in touch and let's find the right plan for you.</p>
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
