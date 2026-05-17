import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSaberVsConocer() {
  useScrollAnimation();
  usePageMeta(
    'Saber vs Conocer: Two Verbs for "To Know" in Spanish | Mike Masters Languages',
    'Spanish has two verbs for "to know" — saber and conocer. This guide explains exactly when to use each one, with conjugation tables and clear examples.'
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
          <h1>Saber vs Conocer: Two Verbs for "To Know" in Spanish</h1>
          <p className="blog-hero-intro">
            English has one verb for "to know" — Spanish has two. The difference is logical once you understand it, and it's one of those distinctions that instantly improves the quality of your Spanish.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the most common areas of confusion for English speakers learning Spanish is the fact that there are two separate verbs meaning "to know": <em>saber</em> and <em>conocer</em>. They are not interchangeable. Each covers a distinct type of "knowing", and once you understand the difference, the choice between them becomes clear and consistent.</p>

            <h2>The Core Distinction</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Type of knowing</th><th>Used for…</th></tr></thead>
                <tbody>
                  <tr><td><strong>saber</strong></td><td>Knowledge of facts, information, skills</td><td>facts, data, how to do something, learned information</td></tr>
                  <tr><td><strong>conocer</strong></td><td>Acquaintance / familiarity</td><td>people, places, works of art, things you are personally familiar with</td></tr>
                </tbody>
              </table>
            </div>

            <p>Think of it this way: <em>saber</em> is knowing something <em>in your head</em> (information, facts, skills), while <em>conocer</em> is knowing something or someone <em>through experience or personal contact</em>.</p>

            <h2>Saber: Knowing Facts and How to Do Things</h2>
            <p>Use <em>saber</em> for:</p>
            <ul>
              <li>Facts and information you have learned</li>
              <li>How to do something (followed by an infinitive)</li>
              <li>The content of something (followed by <em>que</em> + clause)</li>
            </ul>

            <div className="blog-example">
              <p className="es">¿Sabes cuándo abre el museo? — <span style={{fontWeight:400}}>Do you know when the museum opens?</span></p>
              <p className="es">Sé hablar español. — <span style={{fontWeight:400}}>I know how to speak Spanish. / I can speak Spanish.</span></p>
              <p className="es">No sé dónde está la farmacia. — <span style={{fontWeight:400}}>I don't know where the pharmacy is.</span></p>
              <p className="es">Sé que el tren sale a las tres. — <span style={{fontWeight:400}}>I know (that) the train leaves at three.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Key pattern:</strong> <em>Saber</em> + infinitive = to know how to do something. <em>Sé cocinar.</em> (I know how to cook.) <em>¿Sabes nadar?</em> (Do you know how to swim?)</p>
            </div>

            <h2>Conocer: Being Acquainted With People and Places</h2>
            <p>Use <em>conocer</em> for:</p>
            <ul>
              <li>People you have met or are acquainted with</li>
              <li>Places you have been to or are familiar with</li>
              <li>Works of art, books, films you are familiar with</li>
              <li>Things you are personally acquainted with</li>
            </ul>

            <div className="blog-example">
              <p className="es">¿Conoces a María? — <span style={{fontWeight:400}}>Do you know María? (Have you met her?)</span></p>
              <p className="es">Conozco bien Madrid. — <span style={{fontWeight:400}}>I know Madrid well. (I'm familiar with it.)</span></p>
              <p className="es">¿Conoces esta canción? — <span style={{fontWeight:400}}>Do you know this song? (Are you familiar with it?)</span></p>
              <p className="es">Quiero conocer Granada. — <span style={{fontWeight:400}}>I want to visit / get to know Granada.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Personal a:</strong> When <em>conocer</em> is used with a specific person as the object, Spanish requires the personal <em>a</em> before that person: <em>Conozco <strong>a</strong> tu hermano.</em> (I know your brother.) This does not apply with places or things.</p>
            </div>

            <h2>Present Tense Conjugations</h2>
            <p>Both verbs are irregular in the <strong>yo (I) form</strong> of the present tense. This is very common in Spanish — many verbs are regular in all present tense forms except the first person singular.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Saber</th><th>Conocer</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td><strong>sé</strong></td><td><strong>conozco</strong></td></tr>
                  <tr><td>tú</td><td>sabes</td><td>conoces</td></tr>
                  <tr><td>él/ella/usted</td><td>sabe</td><td>conoce</td></tr>
                  <tr><td>nosotros</td><td>sabemos</td><td>conocemos</td></tr>
                  <tr><td>vosotros</td><td>sabéis</td><td>conocéis</td></tr>
                  <tr><td>ellos/ustedes</td><td>saben</td><td>conocen</td></tr>
                </tbody>
              </table>
            </div>

            <p><em>Sé</em> carries a written accent to distinguish it from the reflexive pronoun <em>se</em>. <em>Conozco</em> adds a <em>z</em> before the <em>co</em> ending — a spelling pattern shared by other -cer verbs like <em>aparecer</em> (aparezco) and <em>ofrecer</em> (ofrezco).</p>

            <h2>Side-by-Side Comparison</h2>
            <p>The contrast is clearest when you compare near-identical sentences:</p>

            <div className="blog-example">
              <p className="es">Sé todo sobre Barcelona. — <span style={{fontWeight:400}}>I know all about Barcelona. (I have information about it.)</span></p>
              <p className="es">Conozco Barcelona muy bien. — <span style={{fontWeight:400}}>I know Barcelona very well. (I've been there and am familiar with it.)</span></p>
            </div>

            <div className="blog-example">
              <p className="es">¿Sabes quién es ese hombre? — <span style={{fontWeight:400}}>Do you know who that man is? (Do you have that information?)</span></p>
              <p className="es">¿Conoces a ese hombre? — <span style={{fontWeight:400}}>Do you know that man? (Have you met him?)</span></p>
            </div>

            <h2>Common Mistakes</h2>

            <div className="blog-example">
              <p className="es wrong">Conozco hablar español. — <span style={{fontWeight:400}}>INCORRECT — skills use saber, not conocer</span></p>
              <p className="es right">Sé hablar español. — <span style={{fontWeight:400}}>I know how to speak Spanish. CORRECT</span></p>
            </div>

            <div className="blog-example">
              <p className="es wrong">Sé a tu amigo. — <span style={{fontWeight:400}}>INCORRECT — knowing a person uses conocer</span></p>
              <p className="es right">Conozco a tu amigo. — <span style={{fontWeight:400}}>I know your friend. CORRECT</span></p>
            </div>

            <div className="blog-example">
              <p className="es wrong">¿Sabes Sevilla? — <span style={{fontWeight:400}}>INCORRECT — familiarity with a place uses conocer</span></p>
              <p className="es right">¿Conoces Sevilla? — <span style={{fontWeight:400}}>Do you know Seville? (Have you been there?) CORRECT</span></p>
            </div>

            <h2>Saber and Conocer in Other Tenses</h2>
            <p>In the preterite (past simple), these verbs take on slightly different meanings from their usual present-tense sense:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Preterite form</th><th>Special meaning in preterite</th></tr></thead>
                <tbody>
                  <tr><td>saber</td><td>supe, supiste, supo…</td><td>"found out" — Lo supe ayer. (I found out yesterday.)</td></tr>
                  <tr><td>conocer</td><td>conocí, conociste, conoció…</td><td>"met (for the first time)" — La conocí en Málaga. (I met her in Málaga.)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>Use <em>saber</em> for facts, information and skills (knowing how to do something). Use <em>conocer</em> for people, places and things you are personally acquainted with. Both are irregular in the yo form: <em>sé</em> and <em>conozco</em>. And in the preterite, <em>supe</em> means "found out" while <em>conocí</em> means "met".</p>
            </div>

            <div className="blog-author-cta">
              <h3>Ready to stop guessing between saber and conocer?</h3>
              <p>This is the kind of distinction that clicks quickly with the right practice. Let's work through it together in a lesson.</p>
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
