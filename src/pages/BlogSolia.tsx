import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSolia() {
  useScrollAnimation();
  usePageMeta(
    'Solía: How to Say "Used To" in Spanish | Mike Masters Languages',
    'Solía + infinitive is how Spanish says "used to". Here\'s how it works, when to use it vs the imperfect tense, and the most common mistakes to avoid.'
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
            <span className="blog-hero-date">October 2026</span>
          </div>
          <h1>Solía: How to Say "Used To" in Spanish</h1>
          <p className="blog-hero-intro">"I used to go to the gym." "She used to live in Madrid." Spanish has a specific verb for this — and it only works for habitual actions in the past. Here's how it works.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>English uses "used to" for past habits and routines. Spanish does the same with <em>soler</em> — specifically the imperfect tense: <em>solía</em>. It's one of those structures that instantly makes Spanish sound more natural, because it precisely captures the idea of "this was a regular thing I did".</p>

            <div className="blog-highlight">
              <p><strong>Solía + infinitive</strong> = "I used to [do something]" — for habits and routines in the past. It only works for things that happened repeatedly or regularly, not for single past events.</p>
            </div>

            <h2>How Solía Works</h2>

            <p>The structure is simple: <em>solía</em> (or the relevant person's form) + infinitive:</p>

            <div className="blog-example">
              <p className="es">Solía levantarme a las siete. — <span style={{fontWeight:400}}>I used to get up at seven. (daily habit)</span></p>
              <p className="es">Solía leer antes de dormir. — <span style={{fontWeight:400}}>I used to read before bed. (regular routine)</span></p>
              <p className="es">Solíamos cenar juntos los domingos. — <span style={{fontWeight:400}}>We used to have dinner together on Sundays. (weekly habit)</span></p>
              <p className="es">De pequeño, solía ir al parque con mi padre. — <span style={{fontWeight:400}}>As a child, I used to go to the park with my father. (childhood habit)</span></p>
              <p className="es">Antes solía fumar, pero lo dejé. — <span style={{fontWeight:400}}>I used to smoke, but I stopped. (past habit now ended)</span></p>
            </div>

            <h2>Conjugation of Soler in the Imperfect</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Person</th><th>Form</th><th>Example</th></tr>
                </thead>
                <tbody>
                  <tr><td>yo</td><td>solía</td><td>Solía estudiar por las noches.</td></tr>
                  <tr><td>tú</td><td>solías</td><td>¿Solías vivir aquí?</td></tr>
                  <tr><td>él/ella</td><td>solía</td><td>Ella solía trabajar aquí.</td></tr>
                  <tr><td>nosotros</td><td>solíamos</td><td>Solíamos salir los viernes.</td></tr>
                  <tr><td>vosotros</td><td>solíais</td><td>¿Solíais ir juntos?</td></tr>
                  <tr><td>ellos/ellas</td><td>solían</td><td>Solían reunirse cada semana.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Accent marks:</strong> Notice the accent mark on every form: solía, solías, solía, solíamos, solíais, solían. The accent is part of the word — don't leave it out.</p>
            </div>

            <h2>Soler in the Present Tense</h2>

            <p><em>Soler</em> also exists in the present tense — <em>suelo</em> — and means "I usually do" rather than "I used to do":</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Person</th><th>Present form</th><th>Example</th></tr>
                </thead>
                <tbody>
                  <tr><td>yo</td><td>suelo</td><td>Suelo desayunar a las ocho. — I usually have breakfast at eight.</td></tr>
                  <tr><td>tú</td><td>sueles</td><td>¿Sueles ir al gimnasio? — Do you usually go to the gym?</td></tr>
                  <tr><td>él/ella</td><td>suele</td><td>Suele llegar tarde. — He usually arrives late.</td></tr>
                  <tr><td>nosotros</td><td>solemos</td><td>Solemos quedar los jueves. — We usually meet on Thursdays.</td></tr>
                  <tr><td>vosotros</td><td>soléis</td><td>¿Soléis ver mucha tele? — Do you usually watch much TV?</td></tr>
                  <tr><td>ellos</td><td>suelen</td><td>Suelen estudiar juntos. — They usually study together.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Suelo levantarme a las siete. — <span style={{fontWeight:400}}>I usually get up at seven. (present habit)</span></p>
              <p className="es">Solía levantarme a las siete. — <span style={{fontWeight:400}}>I used to get up at seven. (past habit, no longer the case)</span></p>
            </div>

            <h2>Solía vs the Imperfect — What's the Difference?</h2>

            <p>You can often also use the imperfect tense to express "used to": <em>iba</em> instead of <em>solía ir</em>, <em>comía</em> instead of <em>solía comer</em>. The difference is subtle:</p>

            <div className="blog-example">
              <p className="es">Iba al gimnasio. — <span style={{fontWeight:400}}>I used to go to the gym. / I was going to the gym.</span></p>
              <p className="es">Solía ir al gimnasio. — <span style={{fontWeight:400}}>I used to go to the gym. (emphasises: this was my regular habit)</span></p>
            </div>

            <div className="blog-highlight">
              <p>In most everyday contexts, <em>solía + infinitive</em> and the plain imperfect are interchangeable for past habits. The difference is one of emphasis, not grammar. Both are correct.</p>
            </div>

            <h2>Common Mistakes</h2>

            <div className="blog-example">
              <p className="es wrong">✗ Solía ir al cine el sábado pasado. — <span style={{fontWeight:400}}>Single specific event — use preterite: fui al cine el sábado pasado.</span></p>
              <p className="es right">✓ Solía ir al cine los sábados. — <span style={{fontWeight:400}}>I used to go to the cinema on Saturdays. (habitual)</span></p>
              <p className="es wrong">✗ Solía romper un vaso ayer. — <span style={{fontWeight:400}}>One-off accident — use: rompí un vaso ayer.</span></p>
              <p className="es right">✓ De niño, solía romper cosas. — <span style={{fontWeight:400}}>As a child, I used to break things. (habitual pattern)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>The test:</strong> Could you say "every [day/week/summer]" or "whenever..." or "as a child..."? If yes, <em>solía</em> works. If it's a single one-off event, use the preterite instead.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>Past tense usage is one of the areas that separates intermediate learners from advanced ones. If you'd like to work on it in real conversation, get in touch.</p>
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
