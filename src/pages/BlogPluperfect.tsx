import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPluperfect() {
  useScrollAnimation();
  usePageMeta(
    'The Spanish Pluperfect: How to Say "Had Done" Something | Mike Masters Languages',
    'Learn the Spanish pluperfect tense (había + past participle) — when to use it, how to form it, irregular participles and how it differs from the preterite and present perfect.'
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
          <h1>The Spanish Pluperfect: How to Say "Had Done" Something</h1>
          <p className="blog-hero-intro">
            The pluperfect tense lets you talk about an action that happened before another past event — the Spanish equivalent of "had done", "had eaten" or "had already left". It's simpler to form than it sounds.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Once you're comfortable with the present perfect (<em>he comido</em> — I have eaten) and the preterite (<em>comí</em> — I ate), the pluperfect is a natural next step. It expresses an action that was completed <em>before</em> another point or event in the past — the Spanish equivalent of the English "had + past participle" structure.</p>

            <h2>Forming the Pluperfect</h2>
            <p>The pluperfect is formed with the <strong>imperfect tense of <em>haber</em></strong> plus the <strong>past participle</strong> of the main verb. This is the same structure as the present perfect, but using the imperfect of <em>haber</em> instead of the present:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Imperfect of haber</th><th>+ past participle</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td><strong>había</strong></td><td>había hablado</td><td>I had spoken</td></tr>
                  <tr><td>tú</td><td><strong>habías</strong></td><td>habías comido</td><td>you had eaten</td></tr>
                  <tr><td>él/ella/usted</td><td><strong>había</strong></td><td>había vivido</td><td>he/she had lived</td></tr>
                  <tr><td>nosotros</td><td><strong>habíamos</strong></td><td>habíamos llegado</td><td>we had arrived</td></tr>
                  <tr><td>vosotros</td><td><strong>habíais</strong></td><td>habíais salido</td><td>you (all) had gone out</td></tr>
                  <tr><td>ellos/ustedes</td><td><strong>habían</strong></td><td>habían terminado</td><td>they had finished</td></tr>
                </tbody>
              </table>
            </div>

            <p>Regular past participles are formed as follows: -ar verbs → -ado (hablar → hablado); -er and -ir verbs → -ido (comer → comido, vivir → vivido). These are the same participles you use in the present perfect.</p>

            <h2>When to Use the Pluperfect</h2>
            <p>The pluperfect describes an action that was completed <strong>before another past event</strong>. There is usually (explicitly or implicitly) a second point in the past as reference:</p>

            <div className="blog-example">
              <p className="es">Cuando llegué, ya habían cerrado el museo. — <span style={{fontWeight:400}}>When I arrived, the museum had already closed.</span></p>
              <p className="es">No había comido nada antes de la excursión. — <span style={{fontWeight:400}}>I hadn't eaten anything before the trip.</span></p>
              <p className="es">Me di cuenta de que había olvidado el pasaporte. — <span style={{fontWeight:400}}>I realised I had forgotten my passport.</span></p>
            </div>

            <p>Notice the word <em>ya</em> (already) often appears with the pluperfect to emphasise that the earlier action was completed before the reference point.</p>

            <h2>Irregular Past Participles</h2>
            <p>Several very common verbs have irregular past participles. These are the same irregulars used in the present perfect — learning them once gives you both tenses:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Infinitive</th><th>Past participle</th><th>Pluperfect example (yo)</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>hacer</td><td>hecho</td><td>había hecho</td><td>I had done/made</td></tr>
                  <tr><td>decir</td><td>dicho</td><td>había dicho</td><td>I had said/told</td></tr>
                  <tr><td>ver</td><td>visto</td><td>había visto</td><td>I had seen</td></tr>
                  <tr><td>escribir</td><td>escrito</td><td>había escrito</td><td>I had written</td></tr>
                  <tr><td>abrir</td><td>abierto</td><td>había abierto</td><td>I had opened</td></tr>
                  <tr><td>volver</td><td>vuelto</td><td>había vuelto</td><td>I had returned</td></tr>
                  <tr><td>poner</td><td>puesto</td><td>había puesto</td><td>I had put/placed</td></tr>
                  <tr><td>romper</td><td>roto</td><td>había roto</td><td>I had broken</td></tr>
                  <tr><td>morir</td><td>muerto</td><td>había muerto</td><td>he/she had died</td></tr>
                  <tr><td>cubrir</td><td>cubierto</td><td>había cubierto</td><td>I had covered</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Ya había visto esa película dos veces. — <span style={{fontWeight:400}}>I had already seen that film twice.</span></p>
              <p className="es">Nunca había hecho senderismo antes de venir a España. — <span style={{fontWeight:400}}>I had never been hiking before coming to Spain.</span></p>
            </div>

            <h2>Pluperfect vs Preterite vs Present Perfect</h2>
            <p>These three past tenses each serve a different purpose. Understanding how they relate to each other is key to using them correctly:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Tense</th><th>Spanish example</th><th>English</th><th>When to use</th></tr></thead>
                <tbody>
                  <tr><td>Present perfect</td><td>He comido.</td><td>I have eaten.</td><td>Past action with relevance to the present</td></tr>
                  <tr><td>Preterite</td><td>Comí.</td><td>I ate.</td><td>Completed action at a specific past time</td></tr>
                  <tr><td>Pluperfect</td><td>Había comido.</td><td>I had eaten.</td><td>Action completed before another past event</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">He visitado el Alhambra. — <span style={{fontWeight:400}}>I have visited the Alhambra. (relevant to now — I've had the experience)</span></p>
              <p className="es">Visité el Alhambra en 2019. — <span style={{fontWeight:400}}>I visited the Alhambra in 2019. (specific past moment, completed)</span></p>
              <p className="es">Ya había visitado el Alhambra cuando llegué a Granada. — <span style={{fontWeight:400}}>I had already visited the Alhambra when I arrived in Granada.</span></p>
            </div>

            <h2>Common Time Expressions with the Pluperfect</h2>
            <p>Certain words and phrases frequently appear alongside the pluperfect because they signal a sequence of past events:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Expression</th><th>Meaning</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>ya</td><td>already</td><td>Ya había llegado. — He had already arrived.</td></tr>
                  <tr><td>todavía no / aún no</td><td>not yet</td><td>Aún no habían comido. — They hadn't eaten yet.</td></tr>
                  <tr><td>nunca</td><td>never</td><td>Nunca había estado en España. — I had never been to Spain.</td></tr>
                  <tr><td>cuando</td><td>when</td><td>Cuando llegamos, ya había terminado.</td></tr>
                  <tr><td>antes de que</td><td>before</td><td>Antes de que llegaras, habíamos comido.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Remember:</strong> Nothing goes between <em>había</em> and the past participle. Unlike English ("I had never eaten"), where adverbs can split "had" and the participle, in Spanish the auxiliary and participle stay together: <em>Nunca había comido</em> (never had + eaten together).</p>
            </div>

            <h2>Pluperfect in Context: A Travel Story</h2>
            <p>Here's how the pluperfect fits naturally into a sequence of past events — the kind of story you might tell about a trip to Spain:</p>

            <div className="blog-example">
              <p className="es">Cuando llegué al aeropuerto, me di cuenta de que había dejado el pasaporte en el hotel. Afortunadamente, mi amigo lo había encontrado y me lo trajo. Para cuando embarqué, ya había perdido dos horas.</p>
              <p className="es"><span style={{fontWeight:400}}>When I arrived at the airport, I realised I had left my passport at the hotel. Fortunately, my friend had found it and brought it to me. By the time I boarded, I had already lost two hours.</span></p>
            </div>

            <div className="blog-highlight">
              <p>The pluperfect is formed with <em>había / habías / había / habíamos / habíais / habían</em> + past participle. Use it for actions completed before another past event — the "had done" of Spanish. The same irregular participles from the present perfect apply here, so learning them once covers both tenses.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to tell richer, more detailed stories in Spanish?</h3>
              <p>Mastering the pluperfect opens up a whole new level of storytelling. Let's practise it in real conversations in our lessons.</p>
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
