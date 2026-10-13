import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogEresVsEstas() {
  useScrollAnimation();
  usePageMeta(
    'Eres vs Estás: How to Say "You Are" in Spanish | Mike Masters Languages',
    'Eres vs estás — both mean "you are" but they come from different verbs. Here\'s when to use each, why the accent mark matters, and the most common mistakes.'
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
          <h1>Eres vs Estás: How to Say "You Are" in Spanish</h1>
          <p className="blog-hero-intro">Both mean "you are" — but they come from completely different verbs with completely different jobs. Here's the clear breakdown.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>When you want to say "you are" in Spanish, you have two options: <em>eres</em> and <em>estás</em>. They're not interchangeable. Choosing between them follows the same logic as choosing between <em>ser</em> and <em>estar</em> — the two verbs that both mean "to be" in Spanish.</p>

            <div className="blog-highlight">
              <p><strong>Eres</strong> comes from <em>ser</em>. <strong>Estás</strong> comes from <em>estar</em>. Use <em>eres</em> for identity and permanent characteristics. Use <em>estás</em> for current states, feelings and location.</p>
            </div>

            <h2>Eres — The Ser Form</h2>

            <p><em>Eres</em> is the tú (you, informal) form of <em>ser</em>. Use it when you're describing someone's identity, nationality, personality, profession, or any characteristic that defines who they are:</p>

            <div className="blog-example">
              <p className="es">Eres inglés. — <span style={{fontWeight:400}}>You're English.</span></p>
              <p className="es">Eres muy inteligente. — <span style={{fontWeight:400}}>You're very intelligent.</span></p>
              <p className="es">Eres estudiante, ¿verdad? — <span style={{fontWeight:400}}>You're a student, aren't you?</span></p>
              <p className="es">Eres de Londres, ¿no? — <span style={{fontWeight:400}}>You're from London, aren't you?</span></p>
              <p className="es">Eres muy simpático. — <span style={{fontWeight:400}}>You're very friendly.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>DOCTOR rule for ser:</strong> Descriptions, Occupations, Characteristics, Time, Origin, Relationships. If what you're saying fits one of these, use <em>eres</em>.</p>
            </div>

            <h2>Estás — The Estar Form</h2>

            <p><em>Estás</em> is the tú (you, informal) form of <em>estar</em>. Use it for current states, emotions, location, and anything that could change:</p>

            <div className="blog-example">
              <p className="es">Estás muy cansado. — <span style={{fontWeight:400}}>You're very tired.</span></p>
              <p className="es">¿Estás bien? — <span style={{fontWeight:400}}>Are you okay?</span></p>
              <p className="es">Estás en casa. — <span style={{fontWeight:400}}>You're at home.</span></p>
              <p className="es">Estás nervioso hoy. — <span style={{fontWeight:400}}>You're nervous today.</span></p>
              <p className="es">¿Dónde estás? — <span style={{fontWeight:400}}>Where are you?</span></p>
            </div>

            <h2>The Accent Mark on Estás</h2>

            <p><em>Estás</em> always has an accent mark on the A. This is not optional — it's part of the word. Without it (<em>estas</em>) you have the demonstrative adjective meaning "these": <em>estas flores</em> = "these flowers". With it (<em>estás</em>) = "you are". The accent mark changes the meaning entirely.</p>

            <div className="blog-highlight">
              <p><strong>¿Estás bien?</strong> = Are you okay? | <strong>Estas bien</strong> = These well (nonsense). The accent mark on <em>estás</em> is not decoration — it's a different word without it.</p>
            </div>

            <div className="blog-example">
              <p className="es wrong">✗ Estas cansado. — <span style={{fontWeight:400}}>Missing accent — means nothing coherent.</span></p>
              <p className="es right">✓ Estás cansado. — <span style={{fontWeight:400}}>You're tired.</span></p>
            </div>

            <h2>Eres vs Estás — The Classic Confusion</h2>

            <p>Some adjectives mean different things depending on which verb you use:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Adjective</th><th>With ERES (ser)</th><th>With ESTÁS (estar)</th></tr>
                </thead>
                <tbody>
                  <tr><td>aburrido</td><td>You're a boring person</td><td>You're bored right now</td></tr>
                  <tr><td>malo</td><td>You're a bad person</td><td>You're ill / unwell</td></tr>
                  <tr><td>bueno</td><td>You're a good person</td><td>You're attractive / tasty</td></tr>
                  <tr><td>listo</td><td>You're clever</td><td>You're ready</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Eres muy aburrido. — <span style={{fontWeight:400}}>You're such a boring person. (personality)</span></p>
              <p className="es">Estás muy aburrido. — <span style={{fontWeight:400}}>You're really bored. (right now)</span></p>
            </div>

            <h2>Eres vs Es — What's the Difference?</h2>

            <p><em>Eres</em> = you are (tú). <em>Es</em> = he/she/it is (él/ella/usted). Same verb (<em>ser</em>), different person:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Person</th><th>Ser form</th><th>Estar form</th></tr>
                </thead>
                <tbody>
                  <tr><td>yo (I)</td><td>soy</td><td>estoy</td></tr>
                  <tr><td>tú (you, informal)</td><td>eres</td><td>estás</td></tr>
                  <tr><td>él/ella/usted (he/she/you formal)</td><td>es</td><td>está</td></tr>
                  <tr><td>nosotros (we)</td><td>somos</td><td>estamos</td></tr>
                  <tr><td>ellos/ustedes (they/you all)</td><td>son</td><td>están</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Quick guide:</strong> If you're talking about yourself, use <em>soy</em> or <em>estoy</em>. If you're talking to someone informally (tú), use <em>eres</em> or <em>estás</em>. If you're talking about someone else, use <em>es</em> or <em>está</em>.</p>
            </div>

            <h2>¿Cómo eres? vs ¿Cómo estás?</h2>

            <p>These two common questions are a perfect example of the difference in action:</p>

            <div className="blog-example">
              <p className="es">¿Cómo eres? — <span style={{fontWeight:400}}>What are you like? (personality, appearance — who you are)</span></p>
              <p className="es">¿Cómo estás? — <span style={{fontWeight:400}}>How are you? (current state — how you're feeling right now)</span></p>
            </div>

            <div className="blog-example">
              <p className="es">¿Cómo eres? — Soy tranquilo y trabajador. — <span style={{fontWeight:400}}>What are you like? — I'm calm and hardworking.</span></p>
              <p className="es">¿Cómo estás? — Estoy muy bien, gracias. — <span style={{fontWeight:400}}>How are you? — I'm very well, thank you.</span></p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>Ser and estar take time to fully internalise — but real conversation practice is the fastest way to make the right choice automatic.</p>
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
