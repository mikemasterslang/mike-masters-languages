import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSubjunctiveTriggers() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Subjunctive Triggers: Expressions That Always Need the Subjunctive | Mike Masters Languages',
    'Which Spanish expressions trigger the subjunctive? Es importante que, quiero que, ojalá and more — the complete list of subjunctive triggers with examples.'
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
          <h1>Spanish Subjunctive Triggers: Expressions That Always Need It</h1>
          <p className="blog-hero-intro">The subjunctive isn't random — it's always triggered by something. Once you know the patterns, you'll know when to use it every time.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The subjunctive has a fearsome reputation, but the truth is simpler than most learners expect: the subjunctive in Spanish is almost always triggered by a specific expression in the main clause. Learn those triggers, and the subjunctive becomes predictable.</p>

            <div className="blog-highlight">
              <p><strong>The pattern:</strong> [trigger expression] + <strong>que</strong> + [subjunctive verb]. The trigger is in the main clause; the subjunctive appears in the subordinate clause after <em>que</em>.</p>
            </div>

            <h2>Wishes and Wanting — Querer Que and Similar</h2>

            <p>Whenever you express a wish or desire for someone else to do something, the following verb goes into the subjunctive:</p>

            <div className="blog-example">
              <p className="es">Quiero que vengas. — <span style={{fontWeight:400}}>I want you to come.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Espero que todo vaya bien. — <span style={{fontWeight:400}}>I hope everything goes well.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Deseo que sean felices. — <span style={{fontWeight:400}}>I wish them happiness.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Prefiero que lo hagas tú. — <span style={{fontWeight:400}}>I'd prefer you to do it.</span></p>
            </div>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Trigger</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>querer que</td><td>to want (someone) to</td></tr>
                  <tr><td>esperar que</td><td>to hope that</td></tr>
                  <tr><td>desear que</td><td>to wish that</td></tr>
                  <tr><td>preferir que</td><td>to prefer that</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Emotions — Es Una Lástima Que and Similar</h2>

            <p>Emotional reactions to someone else's actions trigger the subjunctive:</p>

            <div className="blog-example">
              <p className="es">Me alegra que estés aquí. — <span style={{fontWeight:400}}>I'm glad you're here.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Es una lástima que no puedas venir. — <span style={{fontWeight:400}}>It's a shame you can't come.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Me sorprende que no lo sepas. — <span style={{fontWeight:400}}>I'm surprised you don't know.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Tengo miedo de que llegue tarde. — <span style={{fontWeight:400}}>I'm afraid he'll arrive late.</span></p>
            </div>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Trigger</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>me alegra que</td><td>I'm glad that</td></tr>
                  <tr><td>es una lástima que</td><td>it's a shame that</td></tr>
                  <tr><td>me sorprende que</td><td>I'm surprised that</td></tr>
                  <tr><td>es increíble que</td><td>it's incredible that</td></tr>
                  <tr><td>me molesta que</td><td>it annoys me that</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Impersonal Expressions — Es Importante Que</h2>

            <p>Impersonal expressions (those starting with <em>es + adjective + que</em>) trigger the subjunctive:</p>

            <div className="blog-example">
              <p className="es">Es importante que practiques cada día. — <span style={{fontWeight:400}}>It's important that you practise every day.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Es necesario que llegues a tiempo. — <span style={{fontWeight:400}}>It's necessary that you arrive on time.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Es bueno que estudies. — <span style={{fontWeight:400}}>It's good that you study.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Es posible que llueva. — <span style={{fontWeight:400}}>It's possible that it will rain.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Es mejor que lo hagas ahora. — <span style={{fontWeight:400}}>It's better that you do it now.</span></p>
            </div>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Trigger</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>es importante que</td><td>it's important that</td></tr>
                  <tr><td>es necesario que</td><td>it's necessary that</td></tr>
                  <tr><td>es posible que</td><td>it's possible that</td></tr>
                  <tr><td>es probable que</td><td>it's likely that</td></tr>
                  <tr><td>es mejor que</td><td>it's better that</td></tr>
                  <tr><td>es bueno que</td><td>it's good that</td></tr>
                  <tr><td>es malo que</td><td>it's bad that</td></tr>
                  <tr><td>es raro que</td><td>it's strange that</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p><strong>Es importante que</strong> is one of the most frequently tested subjunctive triggers at GCSE and A-Level. If you learn nothing else, learn this one: <em>es importante que + subjunctive</em>.</p>
            </div>

            <h2>Doubt and Denial — No Creo Que</h2>

            <p>When you express doubt or deny something, the subjunctive follows:</p>

            <div className="blog-example">
              <p className="es">No creo que sea verdad. — <span style={{fontWeight:400}}>I don't think it's true.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Dudo que llegue a tiempo. — <span style={{fontWeight:400}}>I doubt he'll arrive on time.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">No es cierto que lo haya dicho. — <span style={{fontWeight:400}}>It's not true that he said it.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">No parece que vaya a llover. — <span style={{fontWeight:400}}>It doesn't look like it's going to rain.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Creo que</strong> (affirmative, no doubt) takes the indicative: <em>Creo que es verdad.</em> — I think it's true. <strong>No creo que</strong> (doubt) takes the subjunctive: <em>No creo que sea verdad.</em> — The negation creates the doubt that triggers the subjunctive.</p>
            </div>

            <h2>Ojalá — Always Subjunctive</h2>

            <p><em>Ojalá</em> (I wish / hopefully) always takes the subjunctive, with no <em>que</em> required:</p>

            <div className="blog-example">
              <p className="es">Ojalá tengas razón. — <span style={{fontWeight:400}}>I hope you're right.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Ojalá pudiera ir. — <span style={{fontWeight:400}}>I wish I could go.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Ojalá llueva mañana. — <span style={{fontWeight:400}}>Hopefully it'll rain tomorrow.</span></p>
            </div>

            <h2>Quick Reference — The Full Trigger List</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Category</th><th>Triggers</th></tr></thead>
                <tbody>
                  <tr><td>Wishes/desire</td><td>querer que, esperar que, desear que, preferir que</td></tr>
                  <tr><td>Emotion</td><td>me alegra que, es una lástima que, me molesta que, me sorprende que</td></tr>
                  <tr><td>Impersonal expressions</td><td>es importante/necesario/posible/mejor/bueno que</td></tr>
                  <tr><td>Doubt/denial</td><td>no creo que, dudo que, no es cierto que</td></tr>
                  <tr><td>Always subjunctive</td><td>ojalá, que (in isolation as a wish: ¡Que te vaya bien!)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>The subjunctive is one of the most rewarding grammar areas to master — and one where a tutor can accelerate your progress significantly.</p>
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
