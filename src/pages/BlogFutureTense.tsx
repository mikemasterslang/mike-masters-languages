import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogFutureTense() {
  useScrollAnimation();
  usePageMeta(
    'The Spanish Future Tense: Regular, Irregular, and the "Going To" Shortcut | Mike Masters Languages',
    'Spanish has a simple future tense — and an even simpler way to talk about near-future plans. This guide covers both, so you can start talking about the future right away.'
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
          <h1>The Spanish Future Tense: Regular, Irregular and the "Going To" Shortcut</h1>
          <p className="blog-hero-intro">
            Good news: the Spanish future tense is one of the easiest to form. And there's a shortcut for everyday plans that you can use from day one.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Spanish has two main ways to talk about the future. The first — <em>ir a</em> + infinitive — is conversational and widely used for near-future plans. The second is the simple future tense, which is used for more distant plans, predictions, and promises. Both are worth knowing from the start.</p>

            <h2>The Shortcut: Ir a + Infinitive</h2>
            <p>Just like "going to" in English, Spanish uses <em>ir a</em> + infinitive for plans and intentions. It's formed by conjugating <em>ir</em> (to go) and adding <em>a</em> + any infinitive:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Ir conjugation</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td><strong>voy a</strong></td><td>Voy a estudiar. — I'm going to study.</td></tr>
                  <tr><td>tú</td><td><strong>vas a</strong></td><td>Vas a llegar tarde. — You're going to be late.</td></tr>
                  <tr><td>él/ella</td><td><strong>va a</strong></td><td>Va a llover. — It's going to rain.</td></tr>
                  <tr><td>nosotros</td><td><strong>vamos a</strong></td><td>Vamos a comer. — We're going to eat.</td></tr>
                  <tr><td>vosotros</td><td><strong>vais a</strong></td><td>Vais a disfrutarlo. — You're going to enjoy it.</td></tr>
                  <tr><td>ellos</td><td><strong>van a</strong></td><td>Van a volver mañana. — They're going to come back tomorrow.</td></tr>
                </tbody>
              </table>
            </div>

            <p>This structure is extremely common in spoken Spanish and is the most natural way to express near-future plans in conversation.</p>

            <h2>The Simple Future Tense</h2>
            <p>The simple future tense is formed by adding endings directly to the <strong>infinitive</strong> — no stem changes needed for regular verbs. The endings are the same for -ar, -er and -ir verbs:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Ending</th><th>Hablar</th><th>Comer</th><th>Vivir</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>-é</td><td>hablaré</td><td>comeré</td><td>viviré</td></tr>
                  <tr><td>tú</td><td>-ás</td><td>hablarás</td><td>comerás</td><td>vivirás</td></tr>
                  <tr><td>él/ella</td><td>-á</td><td>hablará</td><td>comerá</td><td>vivirá</td></tr>
                  <tr><td>nosotros</td><td>-emos</td><td>hablaremos</td><td>comeremos</td><td>viviremos</td></tr>
                  <tr><td>vosotros</td><td>-éis</td><td>hablaréis</td><td>comeréis</td><td>viviréis</td></tr>
                  <tr><td>ellos</td><td>-án</td><td>hablarán</td><td>comerán</td><td>vivirán</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Mañana hablaré con el médico. — <span style={{fontWeight:400}}>Tomorrow I'll talk to the doctor.</span></p>
              <p className="es">Llegarán a las ocho. — <span style={{fontWeight:400}}>They'll arrive at eight.</span></p>
            </div>

            <h2>Irregular Future Stems</h2>
            <p>The same irregular verbs that are irregular in the conditional tense use different stems in the future — the endings stay the same:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Irregular stem</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>tener</td><td>tendr-</td><td>tendré — I will have</td></tr>
                  <tr><td>poder</td><td>podr-</td><td>podrás — you will be able to</td></tr>
                  <tr><td>hacer</td><td>har-</td><td>hará — he/she will do/make</td></tr>
                  <tr><td>decir</td><td>dir-</td><td>diremos — we will say</td></tr>
                  <tr><td>venir</td><td>vendr-</td><td>vendrán — they will come</td></tr>
                  <tr><td>salir</td><td>saldr-</td><td>saldré — I will go out</td></tr>
                  <tr><td>querer</td><td>querr-</td><td>querrás — you will want</td></tr>
                  <tr><td>saber</td><td>sabr-</td><td>sabrá — he/she will know</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Future for Probability and Speculation</h2>
            <p>One useful feature of the Spanish future tense is that it can express <strong>probability or conjecture in the present</strong> — roughly equivalent to "must be" or "I wonder if" in English:</p>
            <div className="blog-example">
              <p className="es">¿Dónde estará Juan? — <span style={{fontWeight:400}}>I wonder where Juan is. / Where can Juan be?</span></p>
              <p className="es">Tendrá unos cuarenta años. — <span style={{fontWeight:400}}>He must be about forty.</span></p>
            </div>

            <div className="blog-highlight">
              <p>Start with <em>ir a</em> + infinitive for everyday plans — it's simpler and more conversational. Add the simple future tense once you're comfortable, and use it for predictions, promises, and more distant plans. Between the two, you can express virtually anything about the future.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to talk about your plans and future goals in Spanish?</h3>
              <p>The future tense is a key milestone. Let's practise using it in real conversations.</p>
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
