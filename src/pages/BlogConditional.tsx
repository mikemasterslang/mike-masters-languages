import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogConditional() {
  useScrollAnimation();
  usePageMeta(
    'The Spanish Conditional Tense: How to Say "Would" | Mike Masters Languages',
    'Learn how to form and use the Spanish conditional tense — the equivalent of "would" in English. Covers regular forms, irregular stems, polite requests, hypotheticals and si clauses.'
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
          <h1>The Spanish Conditional Tense: How to Say "Would"</h1>
          <p className="blog-hero-intro">
            The conditional tense is your key to polite requests, hypothetical situations and reported speech. Best of all, if you already know the future tense, you've already done half the work.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The Spanish conditional corresponds closely to the English word <em>would</em>. You use it to say things like "I would like a coffee", "she said she would call", or "if I had more time, I would travel more". It's a very useful tense and — good news — it's formed in an almost identical way to the future tense.</p>

            <h2>Forming the Conditional: Regular Verbs</h2>
            <p>Like the future tense, the conditional is formed by adding endings directly to the <strong>infinitive</strong> — no stem changes for regular verbs. The endings are the same for -ar, -er and -ir verbs:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Ending</th><th>Hablar</th><th>Comer</th><th>Vivir</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>-ía</td><td>hablaría</td><td>comería</td><td>viviría</td></tr>
                  <tr><td>tú</td><td>-ías</td><td>hablarías</td><td>comerías</td><td>vivirías</td></tr>
                  <tr><td>él/ella/usted</td><td>-ía</td><td>hablaría</td><td>comería</td><td>viviría</td></tr>
                  <tr><td>nosotros</td><td>-íamos</td><td>hablaríamos</td><td>comeríamos</td><td>viviríamos</td></tr>
                  <tr><td>vosotros</td><td>-íais</td><td>hablaríais</td><td>comeríais</td><td>viviríais</td></tr>
                  <tr><td>ellos/ustedes</td><td>-ían</td><td>hablarían</td><td>comerían</td><td>vivirían</td></tr>
                </tbody>
              </table>
            </div>

            <p>Notice that all these endings carry a written accent on the <strong>í</strong>. This is consistent across every form, so once you know the pattern it's easy to recognise and spell.</p>

            <div className="blog-example">
              <p className="es">¿Podrías ayudarme? — <span style={{fontWeight:400}}>Could you help me? (lit. Would you be able to help me?)</span></p>
              <p className="es">Comeríamos en la terraza si hiciera buen tiempo. — <span style={{fontWeight:400}}>We would eat on the terrace if the weather were good.</span></p>
            </div>

            <h2>Irregular Conditional Stems</h2>
            <p>The same verbs that are irregular in the future tense use modified stems in the conditional. The endings remain exactly the same — it's only the base that changes. These stems are identical to the future tense irregulars, so learning them once covers both tenses:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Infinitive</th><th>Irregular stem</th><th>Yo form</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>tener</td><td>tendr-</td><td>tendría</td><td>I would have</td></tr>
                  <tr><td>poder</td><td>podr-</td><td>podría</td><td>I would be able to / could</td></tr>
                  <tr><td>hacer</td><td>har-</td><td>haría</td><td>I would do / make</td></tr>
                  <tr><td>decir</td><td>dir-</td><td>diría</td><td>I would say / tell</td></tr>
                  <tr><td>venir</td><td>vendr-</td><td>vendría</td><td>I would come</td></tr>
                  <tr><td>salir</td><td>saldr-</td><td>saldría</td><td>I would go out / leave</td></tr>
                  <tr><td>querer</td><td>querr-</td><td>querría</td><td>I would want / like</td></tr>
                  <tr><td>saber</td><td>sabr-</td><td>sabría</td><td>I would know</td></tr>
                  <tr><td>poner</td><td>pondr-</td><td>pondría</td><td>I would put / place</td></tr>
                  <tr><td>haber</td><td>habr-</td><td>habría</td><td>there would be / I would have</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿Qué harías con un millón de euros? — <span style={{fontWeight:400}}>What would you do with a million euros?</span></p>
              <p className="es">Dijo que vendría a las ocho. — <span style={{fontWeight:400}}>He said he would come at eight.</span></p>
            </div>

            <h2>Use 1: Polite Requests</h2>
            <p>One of the most practical everyday uses of the conditional is to make requests sound softer and more polite. In a café, a shop or when speaking to someone you don't know well, the conditional is far more natural than the present tense:</p>

            <div className="blog-example">
              <p className="es right">¿Me podría traer la carta, por favor? — <span style={{fontWeight:400}}>Could you bring me the menu, please?</span></p>
              <p className="es right">Querría un café con leche. — <span style={{fontWeight:400}}>I would like a white coffee.</span></p>
              <p className="es right">¿Tendría una habitación libre para esta noche? — <span style={{fontWeight:400}}>Would you have a free room for tonight?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Tip:</strong> <em>Querría</em> and <em>me gustaría</em> (I would like) are both excellent alternatives to <em>quiero</em> (I want) when ordering or making requests. Using them instantly sounds more natural and polite in Spain.</p>
            </div>

            <h2>Use 2: Hypothetical Situations</h2>
            <p>The conditional expresses what <em>would</em> happen in an imaginary or unlikely scenario. This is the "if ... would" structure in English:</p>

            <div className="blog-example">
              <p className="es">Si viviera en España, aprendería el español mucho más rápido. — <span style={{fontWeight:400}}>If I lived in Spain, I would learn Spanish much faster.</span></p>
              <p className="es">Con más dinero, compraría un piso en Madrid. — <span style={{fontWeight:400}}>With more money, I would buy a flat in Madrid.</span></p>
            </div>

            <p>Note that in the "if ... would" construction, the <em>si</em> (if) clause uses the <strong>imperfect subjunctive</strong>, not the conditional. The conditional appears in the main clause (the result). This is covered in more detail in the section on si clauses below.</p>

            <h2>Use 3: Reported Speech</h2>
            <p>When you report what someone said they would do, Spanish uses the conditional where English does too. This is called "reported" or "indirect" speech:</p>

            <div className="blog-example">
              <p className="es">Me dijo que llegaría tarde. — <span style={{fontWeight:400}}>She told me she would be late.</span></p>
              <p className="es">Prometieron que lo harían. — <span style={{fontWeight:400}}>They promised that they would do it.</span></p>
              <p className="es">Creí que hablarías con él. — <span style={{fontWeight:400}}>I thought you would speak to him.</span></p>
            </div>

            <p>Think of it this way: if the original statement used a future tense ("I will arrive late"), reporting it shifts the verb into the conditional ("she said she would arrive late").</p>

            <h2>Si Clauses: Conditional Sentences</h2>
            <p>One of the most important uses of the conditional is in <em>si</em> (if) clauses. Spanish has a very clear and consistent rule about which tenses go together:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Type</th><th>Si clause</th><th>Main clause</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>Real / likely</td><td>Present indicative</td><td>Future / present / imperative</td><td>Si tengo tiempo, voy al mercado.</td></tr>
                  <tr><td>Hypothetical / unlikely</td><td>Imperfect subjunctive</td><td>Conditional</td><td>Si tuviera tiempo, iría al mercado.</td></tr>
                  <tr><td>Impossible / past</td><td>Past perfect subjunctive</td><td>Conditional perfect</td><td>Si hubiera tenido tiempo, habría ido.</td></tr>
                </tbody>
              </table>
            </div>

            <p>For beginners, the most useful pattern to learn first is the hypothetical type: <strong>si + imperfect subjunctive + conditional</strong>.</p>

            <div className="blog-example">
              <p className="es">Si pudiera, viviría en Sevilla. — <span style={{fontWeight:400}}>If I could, I would live in Seville.</span></p>
              <p className="es">Si hablara mejor el español, buscaría trabajo en España. — <span style={{fontWeight:400}}>If I spoke better Spanish, I would look for work in Spain.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Important:</strong> Never use the conditional directly after <em>si</em> in Spanish. This is a common mistake for English speakers. The si clause always takes the subjunctive (for hypotheticals) or the indicative (for real conditions), never the conditional itself.</p>
            </div>

            <div className="blog-example">
              <p className="es wrong">Si tendría más dinero, viajaría. — <span style={{fontWeight:400}}>INCORRECT</span></p>
              <p className="es right">Si tuviera más dinero, viajaría. — <span style={{fontWeight:400}}>If I had more money, I would travel. CORRECT</span></p>
            </div>

            <h2>Conditional vs Future: At a Glance</h2>
            <p>It's easy to confuse the future and conditional since they share the same irregular stems. The key difference is in the endings and meaning:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Tense</th><th>Yo ending</th><th>Meaning</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>Future</td><td>-é</td><td>will</td><td>Hablaré con él. — I will speak to him.</td></tr>
                  <tr><td>Conditional</td><td>-ía</td><td>would</td><td>Hablaría con él. — I would speak to him.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>The conditional is formed by adding -ía endings to the infinitive (or the same irregular stems as the future). Use it for polite requests, hypothetical situations and reported speech. Remember: never use the conditional directly after <em>si</em> — that's the most common mistake to avoid.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to sound more natural and polite in Spanish?</h3>
              <p>The conditional tense is a key step. Let's practise using it in real conversations together.</p>
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
