import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogWouldCouldShould() {
  useScrollAnimation();
  usePageMeta(
    'Would, Could and Should in Spanish Explained | Mike Masters Languages',
    'How to say would, could and should in Spanish. Podría, debería, querría — here\'s how the conditional forms work and when to use each one.'
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
          <h1>Would, Could and Should in Spanish: Podría, Debería and More</h1>
          <p className="blog-hero-intro">English leans heavily on "would", "could" and "should" — but Spanish expresses these ideas differently. Here's the clear breakdown of how each one works.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>In English, "would", "could" and "should" are modal verbs — they don't change form and they work with another verb. Spanish doesn't have modals in quite the same way. Instead, it uses the conditional tense of specific verbs to express the same ideas.</p>

            <h2>Would — The Conditional Tense</h2>

            <p>"Would" in Spanish is expressed using the conditional tense. For most verbs, the conditional is formed by adding the endings <em>-ía, -ías, -ía, -íamos, -íais, -ían</em> to the infinitive:</p>

            <div className="blog-example">
              <p className="es">Iría a España si pudiera. — <span style={{fontWeight:400}}>I would go to Spain if I could.</span></p>
              <p className="es">¿Qué harías tú? — <span style={{fontWeight:400}}>What would you do?</span></p>
              <p className="es">Me gustaría hablar contigo. — <span style={{fontWeight:400}}>I would like to speak with you.</span></p>
              <p className="es">Sería fantástico. — <span style={{fontWeight:400}}>That would be fantastic.</span></p>
            </div>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Structure</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  <tr><td>me gustaría + infinitive</td><td>I would like to...</td></tr>
                  <tr><td>querría</td><td>I would want (conditional of querer)</td></tr>
                  <tr><td>iría</td><td>I would go</td></tr>
                  <tr><td>haría</td><td>I would do / make</td></tr>
                  <tr><td>sería</td><td>it would be</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Most useful starting point:</strong> Me gustaría + infinitive is the most useful "would" structure for beginners. It's polite, natural and works in almost any situation: <em>Me gustaría reservar una mesa.</em> — I would like to book a table.</p>
            </div>

            <h2>Could — Poder in the Conditional</h2>

            <p>"Could" is expressed using <em>podría</em> — the conditional of <em>poder</em>:</p>

            <div className="blog-example">
              <p className="es">¿Podrías hablar más despacio? — <span style={{fontWeight:400}}>Could you speak more slowly?</span></p>
              <p className="es">Podría intentarlo mañana. — <span style={{fontWeight:400}}>I could try it tomorrow.</span></p>
              <p className="es">No podría vivir sin música. — <span style={{fontWeight:400}}>I couldn't live without music.</span></p>
              <p className="es">¿Podría ayudarme? — <span style={{fontWeight:400}}>Could you help me? (formal — usted form)</span></p>
            </div>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Person</th><th>Poder (conditional)</th></tr>
                </thead>
                <tbody>
                  <tr><td>yo</td><td>podría</td></tr>
                  <tr><td>tú</td><td>podrías</td></tr>
                  <tr><td>él/ella/usted</td><td>podría</td></tr>
                  <tr><td>nosotros</td><td>podríamos</td></tr>
                  <tr><td>vosotros</td><td>podríais</td></tr>
                  <tr><td>ellos/ustedes</td><td>podrían</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p><strong>¿Podrías...?</strong> is one of the most useful polite request structures in Spanish. It's softer than the imperative and more natural than ¿Puedes...? in formal or semi-formal situations.</p>
            </div>

            <h2>Should — Deber in the Conditional</h2>

            <p>"Should" is expressed using <em>debería</em> — the conditional of <em>deber</em>:</p>

            <div className="blog-example">
              <p className="es">Deberías estudiar más. — <span style={{fontWeight:400}}>You should study more.</span></p>
              <p className="es">Debería llamar a mis padres. — <span style={{fontWeight:400}}>I should call my parents.</span></p>
              <p className="es">No deberías hacer eso. — <span style={{fontWeight:400}}>You shouldn't do that.</span></p>
              <p className="es">Deberíamos salir temprano. — <span style={{fontWeight:400}}>We should leave early.</span></p>
            </div>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Person</th><th>Deber (conditional)</th></tr>
                </thead>
                <tbody>
                  <tr><td>yo</td><td>debería</td></tr>
                  <tr><td>tú</td><td>deberías</td></tr>
                  <tr><td>él/ella/usted</td><td>debería</td></tr>
                  <tr><td>nosotros</td><td>deberíamos</td></tr>
                  <tr><td>vosotros</td><td>deberíais</td></tr>
                  <tr><td>ellos/ustedes</td><td>deberían</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Hay Que and Tener Que — Other Ways to Express Obligation</h2>

            <p><em>Deber</em> in the conditional is for "should". For stronger obligation ("must", "have to"), Spanish uses:</p>

            <div className="blog-example">
              <p className="es">Tengo que estudiar. — <span style={{fontWeight:400}}>I have to study. (tener que + infinitive)</span></p>
              <p className="es">Hay que respetar las normas. — <span style={{fontWeight:400}}>One must respect the rules. (hay que + infinitive)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>The difference:</strong> <em>debería</em> (should — advice, moral obligation) vs <em>tendría que</em> (would have to — stronger necessity) vs <em>tiene que</em> (has to — definite obligation).</p>
            </div>

            <h2>Quick Reference Table</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>English</th><th>Spanish</th><th>Example</th></tr>
                </thead>
                <tbody>
                  <tr><td>would</td><td>conditional tense</td><td>Iría / Haría / Sería</td></tr>
                  <tr><td>would like to</td><td>me gustaría + inf.</td><td>Me gustaría aprender más.</td></tr>
                  <tr><td>could</td><td>podría (cond. of poder)</td><td>¿Podrías repetir?</td></tr>
                  <tr><td>should</td><td>debería (cond. of deber)</td><td>Deberías descansar.</td></tr>
                  <tr><td>must / have to</td><td>tener que</td><td>Tengo que irme.</td></tr>
                  <tr><td>one must</td><td>hay que</td><td>Hay que practicar.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>The conditional is one of those tenses that makes an immediate difference to how natural your Spanish sounds. Get in touch if you'd like to work on it in real conversation.</p>
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
