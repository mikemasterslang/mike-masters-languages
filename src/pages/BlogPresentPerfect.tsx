import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPresentPerfect() {
  useScrollAnimation();
  usePageMeta(
    'The Spanish Present Perfect: He Hablado, Has Comido — How It Works | Mike Masters Languages',
    'The Spanish present perfect (he hablado, has comido) looks similar to English but is used differently. This guide explains how to form it and when to use it vs the preterite.'
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
          <h1>The Spanish Present Perfect: He Hablado, Has Comido</h1>
          <p className="blog-hero-intro">
            "I have spoken", "she has eaten" — the present perfect looks familiar from English but works differently in Spanish. Here's what you need to know.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The present perfect tense in Spanish is formed the same way as in English — auxiliary verb "have" + past participle. But the two languages use it differently, and in Spanish there is significant regional variation. This guide focuses on the standard usage across Spain and Latin America.</p>

            <h2>How to Form It</h2>
            <p>The present perfect uses the present tense of <strong>haber</strong> + the <strong>past participle</strong>:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Haber</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td><strong>he</strong></td><td>he hablado — I have spoken</td></tr>
                  <tr><td>tú</td><td><strong>has</strong></td><td>has comido — you have eaten</td></tr>
                  <tr><td>él/ella</td><td><strong>ha</strong></td><td>ha vivido — he/she has lived</td></tr>
                  <tr><td>nosotros</td><td><strong>hemos</strong></td><td>hemos llegado — we have arrived</td></tr>
                  <tr><td>vosotros</td><td><strong>habéis</strong></td><td>habéis visto — you have seen</td></tr>
                  <tr><td>ellos</td><td><strong>han</strong></td><td>han hecho — they have done</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Forming the Past Participle</h2>
            <p>For regular verbs, the past participle is formed by replacing the infinitive ending:</p>
            <ul>
              <li><strong>-AR verbs:</strong> drop -ar, add <strong>-ado</strong> → hablar → <em>hablado</em></li>
              <li><strong>-ER/-IR verbs:</strong> drop -er/-ir, add <strong>-ido</strong> → comer → <em>comido</em>, vivir → <em>vivido</em></li>
            </ul>

            <p>Common irregular past participles to memorise:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Infinitive</th><th>Past participle</th></tr></thead>
                <tbody>
                  <tr><td>hacer</td><td><strong>hecho</strong></td></tr>
                  <tr><td>decir</td><td><strong>dicho</strong></td></tr>
                  <tr><td>ver</td><td><strong>visto</strong></td></tr>
                  <tr><td>volver</td><td><strong>vuelto</strong></td></tr>
                  <tr><td>poner</td><td><strong>puesto</strong></td></tr>
                  <tr><td>escribir</td><td><strong>escrito</strong></td></tr>
                  <tr><td>abrir</td><td><strong>abierto</strong></td></tr>
                  <tr><td>romper</td><td><strong>roto</strong></td></tr>
                  <tr><td>morir</td><td><strong>muerto</strong></td></tr>
                </tbody>
              </table>
            </div>

            <h2>When to Use It</h2>
            <p>The present perfect is used for:</p>
            <ul>
              <li><strong>Actions completed recently or in an unfinished time period</strong> (today, this week, this year):</li>
            </ul>
            <div className="blog-example">
              <p className="es">Hoy he comido paella. — <span style={{fontWeight:400}}>Today I have eaten / I ate paella.</span></p>
              <p className="es">Esta semana he trabajado mucho. — <span style={{fontWeight:400}}>This week I have worked a lot.</span></p>
            </div>
            <ul>
              <li><strong>Life experiences (ever/never):</strong></li>
            </ul>
            <div className="blog-example">
              <p className="es">¿Has visitado España alguna vez? — <span style={{fontWeight:400}}>Have you ever visited Spain?</span></p>
              <p className="es">Nunca he probado el sushi. — <span style={{fontWeight:400}}>I've never tried sushi.</span></p>
            </div>
            <ul>
              <li><strong>Actions just completed (acabar de is also common):</strong></li>
            </ul>
            <div className="blog-example">
              <p className="es">Ha llegado hace un momento. — <span style={{fontWeight:400}}>He has just arrived.</span></p>
            </div>

            <h2>Present Perfect vs Preterite: Regional Variation</h2>
            <p>In Spain, the present perfect is used for actions that feel connected to the present (today, this year). The preterite is used for completed actions in a finished time period (yesterday, last year). In Latin America, the preterite is often used in both cases — even for today's actions. Both are correct; the usage depends on where you are.</p>

            <div className="blog-tip">
              <p><strong>Nothing goes between haber and the participle.</strong> Pronouns, negatives and adverbs all go before <em>haber</em>, not between it and the participle: <em>No lo he visto</em> (not <em>he no lo visto</em>). <em>Ya he comido</em> (not <em>he ya comido</em>).</p>
            </div>

            <div className="blog-highlight">
              <p>The present perfect is most useful for talking about experiences and very recent events. Once you have the formation pattern down, focus on the common irregular participles — they come up constantly and are worth learning by heart.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to talk about what you've done and experienced in Spanish?</h3>
              <p>The present perfect is essential for real conversations. Let's practise using it naturally.</p>
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
