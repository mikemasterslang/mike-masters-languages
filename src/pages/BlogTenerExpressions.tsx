import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogTenerExpressions() {
  useScrollAnimation();
  usePageMeta(
    'Tener Expressions in Spanish: Hunger, Fear, Age and More | Mike Masters Languages',
    'Spanish uses "tener" (to have) where English uses "to be" — for hunger, thirst, age, heat, fear and more. Learn the most important tener expressions every beginner needs.'
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
            <span className="blog-hero-tag">Vocabulary</span>
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Tener Expressions in Spanish: Hunger, Fear, Age and More</h1>
          <p className="blog-hero-intro">
            Spanish says "I have hunger" where English says "I am hungry." Once you learn the pattern, a whole set of everyday expressions unlock at once.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the most common sources of confusion for beginners is that Spanish uses <em>tener</em> (to have) for states and feelings that English expresses with "to be." You don't <em>be</em> hungry in Spanish — you <em>have</em> hunger. You don't <em>be</em> 30 years old — you <em>have</em> 30 years. This is a fixed pattern, and learning the expressions as a group is the fastest way to get them right.</p>

            <h2>Core Tener Expressions</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>Literal meaning</th><th>English equivalent</th></tr></thead>
                <tbody>
                  <tr><td><strong>tener hambre</strong></td><td>to have hunger</td><td>to be hungry</td></tr>
                  <tr><td><strong>tener sed</strong></td><td>to have thirst</td><td>to be thirsty</td></tr>
                  <tr><td><strong>tener sueño</strong></td><td>to have sleep</td><td>to be sleepy</td></tr>
                  <tr><td><strong>tener frío</strong></td><td>to have cold</td><td>to be cold</td></tr>
                  <tr><td><strong>tener calor</strong></td><td>to have heat</td><td>to be hot</td></tr>
                  <tr><td><strong>tener miedo</strong></td><td>to have fear</td><td>to be afraid / scared</td></tr>
                  <tr><td><strong>tener prisa</strong></td><td>to have hurry</td><td>to be in a hurry</td></tr>
                  <tr><td><strong>tener razón</strong></td><td>to have reason</td><td>to be right</td></tr>
                  <tr><td><strong>tener suerte</strong></td><td>to have luck</td><td>to be lucky</td></tr>
                  <tr><td><strong>tener vergüenza</strong></td><td>to have shame</td><td>to be ashamed / embarrassed</td></tr>
                  <tr><td><strong>tener cuidado</strong></td><td>to have care</td><td>to be careful</td></tr>
                  <tr><td><strong>tener éxito</strong></td><td>to have success</td><td>to be successful</td></tr>
                  <tr><td><strong>tener ganas de</strong></td><td>to have desire of</td><td>to feel like / to want to</td></tr>
                  <tr><td><strong>tener ____ años</strong></td><td>to have ____ years</td><td>to be ____ years old</td></tr>
                </tbody>
              </table>
            </div>

            <h2>How to Use Them</h2>
            <p>Conjugate <em>tener</em> for the subject, then add the noun directly — no article:</p>
            <div className="blog-example">
              <p className="es">Tengo hambre. — <span style={{fontWeight:400}}>I'm hungry.</span></p>
              <p className="es">¿Tienes sed? — <span style={{fontWeight:400}}>Are you thirsty?</span></p>
              <p className="es">Ella tiene miedo. — <span style={{fontWeight:400}}>She's scared.</span></p>
              <p className="es">Tenemos prisa. — <span style={{fontWeight:400}}>We're in a hurry.</span></p>
              <p className="es">Tienes razón. — <span style={{fontWeight:400}}>You're right.</span></p>
            </div>

            <h2>Adding Mucho and Poco</h2>
            <p>To express degree — "very hungry", "a little scared" — use <em>mucho/a</em> or <em>poco/a</em>. These agree with the noun in the expression:</p>
            <div className="blog-example">
              <p className="es">Tengo mucha hambre. — <span style={{fontWeight:400}}>I'm very hungry. (hambre is feminine)</span></p>
              <p className="es">Tengo mucho frío. — <span style={{fontWeight:400}}>I'm very cold. (frío is masculine)</span></p>
              <p className="es">Tiene un poco de miedo. — <span style={{fontWeight:400}}>He's a little scared.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Don't use muy here.</strong> "Tengo muy hambre" is wrong — <em>muy</em> modifies adjectives, not nouns. Use <em>mucho/a</em> instead. Alternatively, you can use <em>estar</em> with an adjective: <em>estoy muy cansado</em> (I'm very tired), but that's a separate structure.</p>
            </div>

            <h2>Tener Ganas De</h2>
            <p><em>Tener ganas de</em> + infinitive is one of the most useful expressions for expressing what you feel like doing:</p>
            <div className="blog-example">
              <p className="es">Tengo ganas de salir esta noche. — <span style={{fontWeight:400}}>I feel like going out tonight.</span></p>
              <p className="es">No tengo ganas de estudiar. — <span style={{fontWeight:400}}>I don't feel like studying.</span></p>
              <p className="es">¿Tienes ganas de comer algo? — <span style={{fontWeight:400}}>Do you feel like eating something?</span></p>
            </div>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ Estoy hambre. (using estar instead of tener)</p>
              <p className="es right">✓ Tengo hambre. — I'm hungry.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ Tengo muy sed. (muy with a noun)</p>
              <p className="es right">✓ Tengo mucha sed. — I'm very thirsty.</p>
            </div>

            <div className="blog-highlight">
              <p>These expressions come up in almost every conversation. Learning them as fixed phrases — rather than trying to translate from English — is the key. Once you stop reaching for "I am hungry" and start automatically saying "tengo hambre", you'll know they've clicked.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to use Spanish naturally in conversation?</h3>
              <p>Fixed expressions like these are the building blocks of fluency. Let's build them together.</p>
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
