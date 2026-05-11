import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSiClauses() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Si Clauses and Conditionals Explained: Real, Unreal and Impossible | Mike Masters Languages',
    'Si clauses (if/then sentences) in Spanish follow clear patterns once you know the three types. This guide breaks down real, hypothetical, and impossible conditionals with examples.'
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
          <h1>Spanish Si Clauses and Conditionals: Real, Hypothetical and Impossible</h1>
          <p className="blog-hero-intro">
            "If I had more time, I would..." — conditional sentences are everywhere in everyday language. Here's how they work in Spanish.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Conditional sentences — "if... then..." structures — are something we use constantly without thinking about them. In English, they feel instinctive. In Spanish, they follow a clear grammatical logic with three distinct types depending on how likely or real the situation is. Once you understand the pattern for each type, they become predictable.</p>

            <h2>The Three Types of Si Clauses</h2>
            <p>Spanish conditionals are usually categorised by how real or probable the situation is:</p>
            <ul>
              <li><strong>Type 1 — Real / Open:</strong> The condition is possible or likely. ("If it rains, I'll stay home.")</li>
              <li><strong>Type 2 — Hypothetical / Unreal:</strong> The condition is unlikely or contrary to present reality. ("If I had a car, I would drive there.")</li>
              <li><strong>Type 3 — Impossible / Past Regret:</strong> The condition refers to something that didn't happen in the past. ("If I had studied more, I would have passed.")</li>
            </ul>

            <h2>Type 1: Real Conditionals</h2>
            <p>Used when the condition is genuinely possible — something that could realistically happen. The structure is straightforward:</p>
            <div className="blog-example">
              <p className="es"><strong>Si + present indicative → future (or present)</strong></p>
            </div>
            <div className="blog-example">
              <p className="es">Si llueve, me quedo en casa. — <span style={{fontWeight:400}}>If it rains, I'll stay home.</span></p>
              <p className="es">Si tienes hambre, hay comida en la nevera. — <span style={{fontWeight:400}}>If you're hungry, there's food in the fridge.</span></p>
              <p className="es">Si estudias, aprobarás. — <span style={{fontWeight:400}}>If you study, you'll pass.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Important:</strong> Never use the future tense directly after <em>si</em> in Spanish. "Si <em>tendrás</em>..." is wrong. Use the present indicative in the <em>si</em> clause, and the future in the result clause.</p>
            </div>

            <h2>Type 2: Hypothetical Conditionals</h2>
            <p>Used for situations that are unlikely, imaginary, or contrary to present reality. This type uses the imperfect subjunctive in the <em>si</em> clause and the conditional tense in the result:</p>
            <div className="blog-example">
              <p className="es"><strong>Si + imperfect subjunctive → conditional</strong></p>
            </div>
            <div className="blog-example">
              <p className="es">Si tuviera un coche, conduciría hasta allí. — <span style={{fontWeight:400}}>If I had a car, I would drive there. (I don't have one)</span></p>
              <p className="es">Si viviera en España, hablaría español todo el día. — <span style={{fontWeight:400}}>If I lived in Spain, I would speak Spanish all day.</span></p>
              <p className="es">Si fuera rico, viajaría por el mundo. — <span style={{fontWeight:400}}>If I were rich, I would travel the world.</span></p>
            </div>
            <p>The imperfect subjunctive has two forms that are both correct — the <em>-ra</em> form and the <em>-se</em> form. The <em>-ra</em> form is more common in everyday speech:</p>
            <div className="blog-example">
              <p className="es">Si tuviera / Si tuviese — both mean "if I had" (imperfect subjunctive)</p>
            </div>

            <h2>Type 3: Impossible (Past) Conditionals</h2>
            <p>Used for situations in the past that didn't happen — expressing regret, relief, or imagining what might have been. This type uses the past perfect subjunctive in the <em>si</em> clause and the conditional perfect in the result:</p>
            <div className="blog-example">
              <p className="es"><strong>Si + past perfect subjunctive → conditional perfect</strong></p>
            </div>
            <div className="blog-example">
              <p className="es">Si hubiera estudiado más, habría aprobado. — <span style={{fontWeight:400}}>If I had studied more, I would have passed.</span></p>
              <p className="es">Si hubieras llegado antes, habrías conocido a mis amigos. — <span style={{fontWeight:400}}>If you had arrived earlier, you would have met my friends.</span></p>
            </div>

            <h2>Summary Table</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Type</th><th>Si clause</th><th>Result clause</th><th>Reality</th></tr></thead>
                <tbody>
                  <tr><td><strong>1 — Real</strong></td><td>present indicative</td><td>future / present</td><td>Possible / likely</td></tr>
                  <tr><td><strong>2 — Hypothetical</strong></td><td>imperfect subjunctive</td><td>conditional</td><td>Unlikely / contrary to now</td></tr>
                  <tr><td><strong>3 — Impossible</strong></td><td>past perfect subjunctive</td><td>conditional perfect</td><td>Didn't happen in the past</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Conditional Tense (Quick Reference)</h2>
            <p>The conditional tense (used in Type 2 and 3 result clauses) is formed by adding these endings to the infinitive — the same endings for all verbs:</p>
            <div className="blog-example">
              <p className="es">hablar → hablaría, hablarías, hablaría, hablaríamos, hablaríais, hablarían</p>
              <p className="es">tener → tendría, tendrías, tendría, tendríamos, tendríais, tendrían</p>
            </div>
            <p>Irregular verbs in the future tense use the same irregular stem in the conditional: <em>tener → tendr-</em>, <em>poder → podr-</em>, <em>hacer → har-</em>, <em>decir → dir-</em>.</p>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ Si tendrás tiempo, llámame. (future after si)</p>
              <p className="es right">✓ Si tienes tiempo, llámame. — If you have time, call me.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ Si tendría un coche, conduciría allí. (conditional after si)</p>
              <p className="es right">✓ Si tuviera un coche, conduciría allí. — If I had a car, I'd drive there.</p>
            </div>

            <div className="blog-highlight">
              <p>The golden rule: <strong>never use the future or conditional tense directly after si</strong>. In Type 1, use the present. In Type 2, use the imperfect subjunctive. In Type 3, use the past perfect subjunctive. Everything else follows logically from there.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Ready to tackle the more advanced structures?</h3>
              <p>Conditionals are one of the big milestones in Spanish. Let's work through them in real conversation so they stick.</p>
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
