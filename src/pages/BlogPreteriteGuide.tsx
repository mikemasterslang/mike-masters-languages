import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPreteriteGuide() {
  useScrollAnimation();
  usePageMeta(
    'The Spanish Preterite Tense: A Complete Guide | Mike Masters Languages',
    'The Spanish preterite tense — how to form it, when to use it, all the irregular verbs, and how to choose between preterite and imperfect. A complete reference guide.'
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
          <h1>The Spanish Preterite Tense: A Complete Guide</h1>
          <p className="blog-hero-intro">The preterite is Spanish's main past tense for completed actions. Here's how to form it, all the irregular verbs you need, and how to avoid the most common mistakes.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Spanish has two main past tenses — the preterite and the imperfect — where English has one. The preterite (<em>pretérito indefinido</em> or <em>pretérito perfecto simple</em>) is used for completed, specific, one-off past actions. Mastering it is one of the most important steps in moving from beginner to intermediate Spanish.</p>

            <div className="blog-highlight">
              <p><strong>When to use the preterite:</strong> for completed actions at a specific moment or time period in the past. It answers "what happened?" not "what was happening?" or "what used to happen?"</p>
            </div>

            <h2>How to Form the Preterite — Regular Verbs</h2>

            <h3>-AR verbs (e.g. hablar)</h3>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Ending</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>-é</td><td>hablé</td></tr>
                  <tr><td>tú</td><td>-aste</td><td>hablaste</td></tr>
                  <tr><td>él/ella</td><td>-ó</td><td>habló</td></tr>
                  <tr><td>nosotros</td><td>-amos</td><td>hablamos</td></tr>
                  <tr><td>vosotros</td><td>-asteis</td><td>hablasteis</td></tr>
                  <tr><td>ellos</td><td>-aron</td><td>hablaron</td></tr>
                </tbody>
              </table>
            </div>

            <h3>-ER and -IR verbs (e.g. comer, vivir)</h3>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>-ER ending</th><th>-IR ending</th><th>Examples</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>-í</td><td>-í</td><td>comí / viví</td></tr>
                  <tr><td>tú</td><td>-iste</td><td>-iste</td><td>comiste / viviste</td></tr>
                  <tr><td>él/ella</td><td>-ió</td><td>-ió</td><td>comió / vivió</td></tr>
                  <tr><td>nosotros</td><td>-imos</td><td>-imos</td><td>comimos / vivimos</td></tr>
                  <tr><td>vosotros</td><td>-isteis</td><td>-isteis</td><td>comisteis / vivisteis</td></tr>
                  <tr><td>ellos</td><td>-ieron</td><td>-ieron</td><td>comieron / vivieron</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Watch out:</strong> The nosotros form of -AR verbs is the same in the preterite and present: <em>hablamos</em> = we speak / we spoke. Context makes the meaning clear.</p>
            </div>

            <h2>Irregular Preterites — The Most Important Ones</h2>

            <h3>Ser and Ir — identical forms</h3>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>fui</th><th>fuiste</th><th>fue</th><th>fuimos</th><th>fuisteis</th><th>fueron</th></tr></thead>
                <tbody>
                  <tr><td>I went/was</td><td>you went/were</td><td>he/she went/was</td><td>we went/were</td><td>you all went/were</td><td>they went/were</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Fui al médico ayer. — <span style={{fontWeight:400}}>I went to the doctor yesterday.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Fue muy interesante. — <span style={{fontWeight:400}}>It was very interesting.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Ser and ir</strong> share the same preterite forms — context always makes it clear which is meant.</p>
            </div>

            <h3>Strong preterites — irregular stem + fixed endings (-e, -iste, -o, -imos, -isteis, -ieron/-eron)</h3>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Irregular stem</th><th>Yo form</th></tr></thead>
                <tbody>
                  <tr><td>tener</td><td>tuv-</td><td>tuve</td></tr>
                  <tr><td>estar</td><td>estuv-</td><td>estuve</td></tr>
                  <tr><td>poder</td><td>pud-</td><td>pude</td></tr>
                  <tr><td>poner</td><td>pus-</td><td>puse</td></tr>
                  <tr><td>saber</td><td>sup-</td><td>supe</td></tr>
                  <tr><td>querer</td><td>quis-</td><td>quise</td></tr>
                  <tr><td>venir</td><td>vin-</td><td>vine</td></tr>
                  <tr><td>hacer</td><td>hic- (hizo before -o)</td><td>hice</td></tr>
                  <tr><td>decir</td><td>dij-</td><td>dije</td></tr>
                  <tr><td>traer</td><td>traj-</td><td>traje</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>The strong preterite endings are the same for all these verbs: -e, -iste, -o, -imos, -isteis, -ieron (or -eron for dij-, traj-). Learn the stems and the endings take care of themselves.</p>
            </div>

            <h2>When to Use the Preterite</h2>

            <p>Use the preterite for:</p>

            <div className="blog-example">
              <p className="es">Ayer fui al supermercado. — <span style={{fontWeight:400}}>Yesterday I went to the supermarket.</span> (completed action at a specific time)</p>
            </div>

            <div className="blog-example">
              <p className="es">Viví en Madrid tres años. — <span style={{fontWeight:400}}>I lived in Madrid for three years.</span> (action completed over a specific period)</p>
            </div>

            <div className="blog-example">
              <p className="es">Llegué, comí y salí. — <span style={{fontWeight:400}}>I arrived, ate and left.</span> (a sequence of events)</p>
            </div>

            <div className="blog-example">
              <p className="es">Estaba leyendo cuando sonó el teléfono. — <span style={{fontWeight:400}}>I was reading when the phone rang.</span> (sudden or interrupting action)</p>
            </div>

            <h2>Preterite vs Imperfect — The Core Distinction</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Preterite</th><th>Imperfect</th></tr></thead>
                <tbody>
                  <tr><td>Completed action</td><td>Ongoing / repeated action</td></tr>
                  <tr><td>Specific moment</td><td>Background / description</td></tr>
                  <tr><td>What happened</td><td>What was happening / used to happen</td></tr>
                  <tr><td>Arrived, ate, left</td><td>Was walking, used to live, it was raining</td></tr>
                  <tr><td>Ayer fui al cine.</td><td>Cuando era joven, iba al cine cada semana.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Ayer comí pizza. — <span style={{fontWeight:400}}>Yesterday I ate pizza.</span> (preterite — completed, specific)</p>
            </div>

            <div className="blog-example">
              <p className="es">Cuando era niño, comía pizza todos los viernes. — <span style={{fontWeight:400}}>When I was a child, I used to eat pizza every Friday.</span> (imperfect — habitual)</p>
            </div>

            <div className="blog-example">
              <p className="es">Estaba comiendo cuando llegó. — <span style={{fontWeight:400}}>I was eating when he arrived.</span> (imperfect background + preterite interruption)</p>
            </div>

            <div className="blog-tip">
              <p><strong>Time markers are a useful guide:</strong> <em>ayer, la semana pasada, el año pasado, de repente, entonces</em> → usually preterite. <em>Siempre, normalmente, cada día, de niño, cuando era joven</em> → usually imperfect.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>The preterite vs imperfect distinction is one of the areas where tutored practice makes the biggest difference — you need real feedback on real sentences to internalise it.</p>
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
