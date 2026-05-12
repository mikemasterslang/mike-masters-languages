import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogImperative() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Commands: How to Use the Imperative (Tú and Usted) | Mike Masters Languages',
    'Giving instructions, making requests, and telling people what to do in Spanish requires the imperative mood. This guide covers tú and usted commands, regular and irregular.'
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
          <h1>Spanish Commands: How to Use the Imperative</h1>
          <p className="blog-hero-intro">
            "Speak more slowly." "Turn left here." "Come in!" — giving commands is something you need from day one. Here's how to do it in Spanish.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The imperative mood is used to give instructions, make requests, offer invitations, and tell people what to do (or not to do). In Spanish, the form of the imperative changes depending on whether you're addressing someone as <em>tú</em> (informally) or <em>usted</em> (formally). This guide focuses on those two, which cover the vast majority of everyday use.</p>

            <h2>The Tú Imperative (Informal)</h2>
            <p>For regular verbs, the affirmative <em>tú</em> command is simply the <strong>third person singular (él/ella) of the present tense</strong>:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Infinitive</th><th>Present (él)</th><th>Tú command</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>hablar</td><td>habla</td><td><strong>habla</strong></td><td>speak!</td></tr>
                  <tr><td>comer</td><td>come</td><td><strong>come</strong></td><td>eat!</td></tr>
                  <tr><td>escribir</td><td>escribe</td><td><strong>escribe</strong></td><td>write!</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Habla más despacio, por favor. — <span style={{fontWeight:400}}>Speak more slowly, please.</span></p>
              <p className="es">Come tu desayuno. — <span style={{fontWeight:400}}>Eat your breakfast.</span></p>
            </div>

            <h2>Irregular Tú Commands</h2>
            <p>Eight common verbs have irregular affirmative <em>tú</em> commands that you simply need to memorise:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Command</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>ser</td><td><strong>sé</strong></td><td>be!</td></tr>
                  <tr><td>ir</td><td><strong>ve</strong></td><td>go!</td></tr>
                  <tr><td>tener</td><td><strong>ten</strong></td><td>have! / hold!</td></tr>
                  <tr><td>hacer</td><td><strong>haz</strong></td><td>do! / make!</td></tr>
                  <tr><td>poner</td><td><strong>pon</strong></td><td>put!</td></tr>
                  <tr><td>salir</td><td><strong>sal</strong></td><td>leave! / go out!</td></tr>
                  <tr><td>venir</td><td><strong>ven</strong></td><td>come!</td></tr>
                  <tr><td>decir</td><td><strong>di</strong></td><td>say! / tell!</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Usted Imperative (Formal)</h2>
            <p>The <em>usted</em> command uses the <strong>present subjunctive</strong> form (the "opposite vowel" ending). Take the <em>yo</em> present, drop the -o, add the opposite ending:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Usted command</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>hablar</td><td><strong>hable</strong></td><td>speak (formal)</td></tr>
                  <tr><td>comer</td><td><strong>coma</strong></td><td>eat (formal)</td></tr>
                  <tr><td>escribir</td><td><strong>escriba</strong></td><td>write (formal)</td></tr>
                  <tr><td>venir</td><td><strong>venga</strong></td><td>come (formal)</td></tr>
                  <tr><td>tener</td><td><strong>tenga</strong></td><td>have/hold (formal)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Pase, por favor. — <span style={{fontWeight:400}}>Come in, please. (formal)</span></p>
              <p className="es">Tome asiento. — <span style={{fontWeight:400}}>Take a seat. (formal)</span></p>
            </div>

            <h2>Negative Commands</h2>
            <p>For negative commands ("don't..."), <strong>both tú and usted use the present subjunctive</strong>:</p>
            <div className="blog-example">
              <p className="es">No hables tan rápido. — <span style={{fontWeight:400}}>Don't speak so fast. (tú)</span></p>
              <p className="es">No coma eso. — <span style={{fontWeight:400}}>Don't eat that. (usted)</span></p>
              <p className="es">No vayas allí. — <span style={{fontWeight:400}}>Don't go there. (tú)</span></p>
            </div>

            <h2>Object Pronouns with Commands</h2>
            <p>With affirmative commands, pronouns attach to the end of the verb. With negative commands, they go before it:</p>
            <div className="blog-example">
              <p className="es">Dímelo. — <span style={{fontWeight:400}}>Tell it to me. (affirmative — pronoun attaches)</span></p>
              <p className="es">No me lo digas. — <span style={{fontWeight:400}}>Don't tell it to me. (negative — pronoun before)</span></p>
              <p className="es">Llámame. — <span style={{fontWeight:400}}>Call me.</span></p>
            </div>

            <div className="blog-highlight">
              <p>The key shortcut: for affirmative <em>tú</em> commands, use the <em>él</em> present tense form (except for the 8 irregulars). For everything formal, or any negative command, use the present subjunctive. That covers almost every command you'll ever need to give.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to communicate clearly and naturally in Spanish?</h3>
              <p>Commands are everywhere in daily life. Let's make sure you've got them down.</p>
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
