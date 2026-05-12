import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogModalVerbs() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Modal Verbs: Poder, Querer, Deber, Tener Que Explained | Mike Masters Languages',
    'Modal verbs like poder, querer and deber let you express ability, desire and obligation in Spanish. This guide explains how they work and when to use each one.'
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
          <h1>Spanish Modal Verbs: Poder, Querer, Deber and Tener Que</h1>
          <p className="blog-hero-intro">
            Can, want, must, should — modal verbs are essential for everyday conversation. Here's how Spanish expresses each one.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Modal verbs are the verbs that express how we relate to an action — whether we can do it, want to do it, must do it, or should do it. In Spanish, these are full verbs (not auxiliaries like in English), and they follow a simple structure: <strong>modal verb (conjugated) + infinitive</strong>.</p>

            <h2>The Structure</h2>
            <div className="blog-example">
              <p className="es">Puedo <strong>hablar</strong> español. — I can speak Spanish.</p>
              <p className="es">Quiero <strong>comer</strong> algo. — I want to eat something.</p>
              <p className="es">Debo <strong>estudiar</strong> más. — I should study more.</p>
            </div>
            <p>The modal verb is conjugated to agree with the subject. The second verb stays as an infinitive — it never changes.</p>

            <h2>Poder — Can / To Be Able To</h2>
            <p><em>Poder</em> expresses ability or possibility. It's a stem-changing verb (o→ue):</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Form</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td><strong>puedo</strong></td></tr>
                  <tr><td>tú</td><td><strong>puedes</strong></td></tr>
                  <tr><td>él/ella</td><td><strong>puede</strong></td></tr>
                  <tr><td>nosotros</td><td><strong>podemos</strong></td></tr>
                  <tr><td>vosotros</td><td><strong>podéis</strong></td></tr>
                  <tr><td>ellos</td><td><strong>pueden</strong></td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿Puedes ayudarme? — <span style={{fontWeight:400}}>Can you help me?</span></p>
              <p className="es">No puedo venir esta noche. — <span style={{fontWeight:400}}>I can't come tonight.</span></p>
              <p className="es">¿Se puede aparcar aquí? — <span style={{fontWeight:400}}>Can you park here? (is it allowed?)</span></p>
            </div>

            <h2>Querer — To Want</h2>
            <p><em>Querer</em> expresses desire. Also stem-changing (e→ie):</p>
            <div className="blog-example">
              <p className="es">quiero, quieres, quiere, queremos, queréis, quieren</p>
            </div>
            <div className="blog-example">
              <p className="es">Quiero aprender español. — <span style={{fontWeight:400}}>I want to learn Spanish.</span></p>
              <p className="es">¿Quieres tomar algo? — <span style={{fontWeight:400}}>Do you want to have something (to drink)?</span></p>
            </div>

            <h2>Deber — Should / Ought To</h2>
            <p><em>Deber</em> expresses moral obligation or advice. It is a regular -er verb:</p>
            <div className="blog-example">
              <p className="es">debo, debes, debe, debemos, debéis, deben</p>
            </div>
            <div className="blog-example">
              <p className="es">Debes descansar más. — <span style={{fontWeight:400}}>You should rest more.</span></p>
              <p className="es">No deberíamos llegar tarde. — <span style={{fontWeight:400}}>We shouldn't arrive late. (conditional for softer advice)</span></p>
            </div>

            <h2>Tener Que — To Have To / Must</h2>
            <p><em>Tener que</em> + infinitive expresses personal obligation — something you have to do:</p>
            <div className="blog-example">
              <p className="es">Tengo que trabajar mañana. — <span style={{fontWeight:400}}>I have to work tomorrow.</span></p>
              <p className="es">Tienes que llamar al médico. — <span style={{fontWeight:400}}>You have to call the doctor.</span></p>
            </div>

            <h2>Hay Que — One Must / You Have To (Impersonal)</h2>
            <p><em>Hay que</em> + infinitive expresses general obligation with no specific subject — like "one must" or "you have to" in an impersonal sense. It never changes form:</p>
            <div className="blog-example">
              <p className="es">Hay que estudiar todos los días. — <span style={{fontWeight:400}}>You have to / one must study every day.</span></p>
              <p className="es">No hay que gritar. — <span style={{fontWeight:400}}>You mustn't shout.</span></p>
            </div>

            <h2>Deber vs Tener Que</h2>
            <p>Both express obligation but with different weight:</p>
            <ul>
              <li><strong>Deber</strong> — moral or personal obligation, often softer: "you should"</li>
              <li><strong>Tener que</strong> — practical necessity, often stronger: "you have to / need to"</li>
            </ul>

            <div className="blog-highlight">
              <p>These five expressions — <em>poder, querer, deber, tener que, hay que</em> — will cover the vast majority of situations where you need to express ability, desire or obligation. Learn them well and you'll unlock an enormous amount of everyday conversation.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Ready to use Spanish in real conversations?</h3>
              <p>Modal verbs come up constantly — let's practise using them naturally together.</p>
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
