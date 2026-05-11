import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogReflexiveVerbs() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Reflexive Verbs Explained: Me, Te, Se and When to Use Them | Mike Masters Languages',
    'Reflexive verbs confuse almost every English-speaking Spanish learner. This guide explains what they are, how they work, and the most important ones to know.'
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
          <h1>Spanish Reflexive Verbs Explained: Me, Te, Se and When to Use Them</h1>
          <p className="blog-hero-intro">
            Why do Spanish speakers say "me llamo" instead of "llamo"? What does the "se" on the end of a verb mean? This guide explains reflexive verbs from the ground up.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>If you've ever looked up a Spanish verb and seen it listed as <em>levantarse</em> or <em>llamarse</em> — with that mysterious <em>-se</em> at the end — you've encountered a reflexive verb. They appear constantly in everyday Spanish, and understanding how they work will unlock a huge amount of vocabulary around daily routines, emotions and physical states.</p>

            <h2>What Is a Reflexive Verb?</h2>
            <p>A reflexive verb is one where the subject and the object are the same — the person doing the action is also the one receiving it. In English we sometimes say "I wash <em>myself</em>" or "she hurt <em>herself</em>", though we often drop the "myself/herself" because English assumes it. Spanish makes this reflexivity explicit every time.</p>

            <div className="blog-example">
              <p className="es">Lavo el coche. — <span style={{fontWeight:400}}>I wash the car. (the car is being washed)</span></p>
              <p className="es">Me lavo. — <span style={{fontWeight:400}}>I wash myself. (I am being washed — by me)</span></p>
            </div>

            <h2>The Reflexive Pronouns</h2>
            <p>In the dictionary, reflexive verbs appear with <em>-se</em> attached to the infinitive: <em>llamarse, levantarse, ducharse</em>. When you conjugate them, replace the <em>-se</em> with the correct reflexive pronoun for your subject:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Subject</th><th>Reflexive pronoun</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td><strong>me</strong></td><td>me llamo (my name is / I call myself)</td></tr>
                  <tr><td>tú</td><td><strong>te</strong></td><td>te llamas</td></tr>
                  <tr><td>él / ella / usted</td><td><strong>se</strong></td><td>se llama</td></tr>
                  <tr><td>nosotros</td><td><strong>nos</strong></td><td>nos llamamos</td></tr>
                  <tr><td>vosotros</td><td><strong>os</strong></td><td>os llamáis</td></tr>
                  <tr><td>ellos / ellas / ustedes</td><td><strong>se</strong></td><td>se llaman</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Where Does the Pronoun Go?</h2>
            <p>The reflexive pronoun goes <strong>before a conjugated verb</strong>:</p>
            <div className="blog-example">
              <p className="es">Me levanto a las siete. — <span style={{fontWeight:400}}>I get up at seven.</span></p>
              <p className="es">Se ducha cada mañana. — <span style={{fontWeight:400}}>He showers every morning.</span></p>
            </div>

            <p>With an infinitive or gerund, it can attach to the end <strong>or</strong> go before the conjugated verb — both are correct:</p>
            <div className="blog-example">
              <p className="es">Quiero ducharme. / Me quiero duchar. — <span style={{fontWeight:400}}>I want to shower.</span></p>
              <p className="es">Estoy duchándome. / Me estoy duchando. — <span style={{fontWeight:400}}>I'm showering.</span></p>
            </div>

            <h2>Daily Routine Reflexive Verbs</h2>
            <p>Reflexive verbs are everywhere in daily routine vocabulary. These are some of the most useful ones to learn:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td><strong>despertarse</strong></td><td>to wake up</td></tr>
                  <tr><td><strong>levantarse</strong></td><td>to get up</td></tr>
                  <tr><td><strong>ducharse</strong></td><td>to shower</td></tr>
                  <tr><td><strong>lavarse</strong></td><td>to wash (oneself)</td></tr>
                  <tr><td><strong>afeitarse</strong></td><td>to shave</td></tr>
                  <tr><td><strong>vestirse</strong></td><td>to get dressed</td></tr>
                  <tr><td><strong>peinarse</strong></td><td>to comb one's hair</td></tr>
                  <tr><td><strong>maquillarse</strong></td><td>to put on make-up</td></tr>
                  <tr><td><strong>acostarse</strong></td><td>to go to bed</td></tr>
                  <tr><td><strong>dormirse</strong></td><td>to fall asleep</td></tr>
                  <tr><td><strong>llamarse</strong></td><td>to be called / one's name is</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Verbs That Change Meaning When Reflexive</h2>
            <p>Some verbs have a completely different meaning with and without the reflexive pronoun. This is one of the most interesting features of Spanish reflexive verbs:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Without reflexive</th><th>With reflexive</th></tr></thead>
                <tbody>
                  <tr><td><strong>ir</strong> — to go</td><td><strong>irse</strong> — to leave / go away</td></tr>
                  <tr><td><strong>dormir</strong> — to sleep</td><td><strong>dormirse</strong> — to fall asleep</td></tr>
                  <tr><td><strong>llevar</strong> — to carry / take</td><td><strong>llevarse</strong> — to take away / get along</td></tr>
                  <tr><td><strong>poner</strong> — to put</td><td><strong>ponerse</strong> — to put on (clothing) / to become</td></tr>
                  <tr><td><strong>quedar</strong> — to remain / to be left</td><td><strong>quedarse</strong> — to stay</td></tr>
                  <tr><td><strong>hacer</strong> — to do / make</td><td><strong>hacerse</strong> — to become</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Emotional and Physical State Reflexives</h2>
            <p>Spanish uses reflexive verbs for many emotional states and physical changes that English expresses differently:</p>
            <div className="blog-example">
              <p className="es">Me aburro. — <span style={{fontWeight:400}}>I'm bored. (literally: I bore myself)</span></p>
              <p className="es">Se cansa rápido. — <span style={{fontWeight:400}}>He gets tired quickly.</span></p>
              <p className="es">Nos enamoramos. — <span style={{fontWeight:400}}>We fell in love.</span></p>
              <p className="es">Me alegro mucho. — <span style={{fontWeight:400}}>I'm really glad.</span></p>
            </div>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ Llamo Ana. (missing reflexive pronoun)</p>
              <p className="es right">✓ Me llamo Ana. — My name is Ana.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ Quiero me duchar. (pronoun in wrong position with infinitive)</p>
              <p className="es right">✓ Quiero ducharme. / Me quiero duchar.</p>
            </div>

            <div className="blog-highlight">
              <p>The easiest way to get comfortable with reflexive verbs is to <strong>describe your daily routine in Spanish</strong>. Me despierto, me levanto, me ducho, me visto... Working through your morning in Spanish gives you constant repetition of the most common reflexive verbs in a meaningful context.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to make reflexive verbs feel natural?</h3>
              <p>Real conversation practice is the fastest way to internalise patterns like these. Let's find the right programme for you.</p>
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
