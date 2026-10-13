import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogIrregularVerbsList() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Irregular Verbs: The Complete Reference List | Mike Masters Languages',
    'The complete list of Spanish irregular verbs — present tense, preterite, future and more. Grouped by pattern so you can learn them systematically, not by rote.'
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
          <h1>Spanish Irregular Verbs: The Complete Reference List</h1>
          <p className="blog-hero-intro">
            Irregular verbs are irregular — but they're not random. Most follow recognisable patterns. This is the complete reference list, organised so the patterns become clear.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The most important thing to know about Spanish irregular verbs is that the same irregularities tend to cluster together. Learn the pattern once and it applies to a whole group. That shifts the task from memorising dozens of individual exceptions to recognising a handful of patterns — a much more manageable job.</p>

            <h2>The Most Important Irregular Verbs in the Present Tense</h2>
            <p>These are the verbs that come up in almost every conversation. Get these right and you've covered the vast majority of irregular present tense usage.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Verb</th><th>Meaning</th><th>Yo</th><th>Tú</th><th>Él/Ella</th><th>Nosotros</th><th>Ellos</th></tr>
                </thead>
                <tbody>
                  <tr><td>ser</td><td>to be (permanent)</td><td>soy</td><td>eres</td><td>es</td><td>somos</td><td>son</td></tr>
                  <tr><td>estar</td><td>to be (temporary)</td><td>estoy</td><td>estás</td><td>está</td><td>estamos</td><td>están</td></tr>
                  <tr><td>ir</td><td>to go</td><td>voy</td><td>vas</td><td>va</td><td>vamos</td><td>van</td></tr>
                  <tr><td>tener</td><td>to have</td><td>tengo</td><td>tienes</td><td>tiene</td><td>tenemos</td><td>tienen</td></tr>
                  <tr><td>hacer</td><td>to do / make</td><td>hago</td><td>haces</td><td>hace</td><td>hacemos</td><td>hacen</td></tr>
                  <tr><td>poder</td><td>to be able to</td><td>puedo</td><td>puedes</td><td>puede</td><td>podemos</td><td>pueden</td></tr>
                  <tr><td>querer</td><td>to want</td><td>quiero</td><td>quieres</td><td>quiere</td><td>queremos</td><td>quieren</td></tr>
                  <tr><td>saber</td><td>to know</td><td>sé</td><td>sabes</td><td>sabe</td><td>sabemos</td><td>saben</td></tr>
                  <tr><td>decir</td><td>to say / tell</td><td>digo</td><td>dices</td><td>dice</td><td>decimos</td><td>dicen</td></tr>
                  <tr><td>venir</td><td>to come</td><td>vengo</td><td>vienes</td><td>viene</td><td>venimos</td><td>vienen</td></tr>
                  <tr><td>dar</td><td>to give</td><td>doy</td><td>das</td><td>da</td><td>damos</td><td>dan</td></tr>
                  <tr><td>ver</td><td>to see</td><td>veo</td><td>ves</td><td>ve</td><td>vemos</td><td>ven</td></tr>
                  <tr><td>poner</td><td>to put</td><td>pongo</td><td>pones</td><td>pone</td><td>ponemos</td><td>ponen</td></tr>
                  <tr><td>salir</td><td>to leave / go out</td><td>salgo</td><td>sales</td><td>sale</td><td>salimos</td><td>salen</td></tr>
                  <tr><td>traer</td><td>to bring</td><td>traigo</td><td>traes</td><td>trae</td><td>traemos</td><td>traen</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Tip:</strong> Notice that many verbs (hacer, poner, salir, traer, venir, decir) are only irregular in the yo form in the present tense — the rest follow regular -er/-ir patterns. Learn the yo form and the rest falls into place.</p>
            </div>

            <h2>Irregular Verbs in the Preterite (Simple Past)</h2>
            <p>The preterite is where irregularity is most concentrated. Rather than learning each verb individually, focus on the two main categories below.</p>

            <h3>Completely Irregular Preterites</h3>
            <p>A small number of verbs have preterite forms that bear no relation to their infinitive. These simply have to be learnt as they are.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Verb</th><th>Yo</th><th>Tú</th><th>Él</th><th>Nosotros</th><th>Ellos</th></tr>
                </thead>
                <tbody>
                  <tr><td>ser / ir (identical forms)</td><td>fui</td><td>fuiste</td><td>fue</td><td>fuimos</td><td>fueron</td></tr>
                  <tr><td>dar</td><td>di</td><td>diste</td><td>dio</td><td>dimos</td><td>dieron</td></tr>
                  <tr><td>ver</td><td>vi</td><td>viste</td><td>vio</td><td>vimos</td><td>vieron</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Strong Preterites — Irregular Stems</h3>
            <p>These verbs have an irregular stem combined with a special set of endings: -e, -iste, -o, -imos, -ieron (or -eron after a j-stem). The endings are the same across all of them — learn the stem, not each verb separately.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Verb</th><th>Irregular stem</th><th>Example yo form</th></tr>
                </thead>
                <tbody>
                  <tr><td>estar</td><td>estuv-</td><td>estuve</td></tr>
                  <tr><td>tener</td><td>tuv-</td><td>tuve</td></tr>
                  <tr><td>poder</td><td>pud-</td><td>pude</td></tr>
                  <tr><td>poner</td><td>pus-</td><td>puse</td></tr>
                  <tr><td>saber</td><td>sup-</td><td>supe</td></tr>
                  <tr><td>querer</td><td>quis-</td><td>quise</td></tr>
                  <tr><td>venir</td><td>vin-</td><td>vine</td></tr>
                  <tr><td>hacer</td><td>hic- (hiz- before -o)</td><td>hice</td></tr>
                  <tr><td>decir</td><td>dij-</td><td>dije</td></tr>
                  <tr><td>traer</td><td>traj-</td><td>traje</td></tr>
                  <tr><td>conducir</td><td>conduj-</td><td>conduje</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>The strong preterite stems are one of the highest-value things to memorise in Spanish. These 10–12 verbs appear constantly in everyday speech — knowing their preterite forms instantly gives you a much more natural-sounding past tense.</p>
            </div>

            <h2>Irregular Verbs in the Future and Conditional</h2>
            <p>The future and conditional tenses share the same irregular stems. Learn them once and they work for both tenses — the only difference is the ending you attach.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Verb</th><th>Irregular stem</th><th>Future yo</th><th>Conditional yo</th></tr>
                </thead>
                <tbody>
                  <tr><td>tener</td><td>tendr-</td><td>tendré</td><td>tendría</td></tr>
                  <tr><td>venir</td><td>vendr-</td><td>vendré</td><td>vendría</td></tr>
                  <tr><td>poder</td><td>podr-</td><td>podré</td><td>podría</td></tr>
                  <tr><td>poner</td><td>pondr-</td><td>pondré</td><td>pondría</td></tr>
                  <tr><td>salir</td><td>saldr-</td><td>saldré</td><td>saldría</td></tr>
                  <tr><td>hacer</td><td>har-</td><td>haré</td><td>haría</td></tr>
                  <tr><td>decir</td><td>dir-</td><td>diré</td><td>diría</td></tr>
                  <tr><td>querer</td><td>querr-</td><td>querré</td><td>querría</td></tr>
                  <tr><td>saber</td><td>sabr-</td><td>sabré</td><td>sabría</td></tr>
                  <tr><td>haber</td><td>habr-</td><td>habrá</td><td>habría</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Stem-Changing Verbs — A Separate Category</h2>
            <p>Stem-changing verbs are sometimes grouped with irregulars but they follow their own consistent patterns: e→ie, o→ue, e→i, and so on. Because they operate by a different logic, they deserve separate treatment. This list covers fully irregular verbs only — stem-changing verbs are covered in a dedicated post.</p>

            <div className="blog-tip">
              <p><strong>Tip:</strong> The best way to learn these isn't to stare at a table — it's to practise using them in sentences. Pick five from each section and write two sentences each. The pattern embeds faster through use than through memorisation.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>Irregular verbs are one of the areas where a tutor makes the most difference — you can practise them in conversation and get corrected instantly when the wrong form slips out.</p>
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
