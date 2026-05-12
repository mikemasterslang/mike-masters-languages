import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGreetings() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Greetings and Register: Formal vs Informal, Regional Differences | Mike Masters Languages',
    'Spanish greetings go far beyond "hola". This guide covers formal and informal greetings, regional variations, farewells, and how to get the register right in different situations.'
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
          <h1>Spanish Greetings and Register: Formal vs Informal</h1>
          <p className="blog-hero-intro">
            How you greet someone in Spanish says a lot about your awareness of the language. Here's how to get the register right — and sound natural doing it.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Spanish greetings are warm, varied, and — importantly — context-dependent. The Spanish-speaking world is huge, and greetings differ significantly between Spain and Latin America, between formal and informal settings, and between different times of day. Getting the right greeting in the right context is one of the clearest signals of cultural awareness.</p>

            <h2>Basic Greetings</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th><th>Use</th></tr></thead>
                <tbody>
                  <tr><td><strong>Hola</strong></td><td>Hello / Hi</td><td>Universal — always appropriate</td></tr>
                  <tr><td><strong>Buenos días</strong></td><td>Good morning</td><td>Until roughly midday</td></tr>
                  <tr><td><strong>Buenas tardes</strong></td><td>Good afternoon</td><td>Roughly midday to dusk</td></tr>
                  <tr><td><strong>Buenas noches</strong></td><td>Good evening / Good night</td><td>Evening — also used as goodbye at night</td></tr>
                  <tr><td><strong>Buenas</strong></td><td>Hi / Hello</td><td>Casual shortening of all three — very common</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Asking How Someone Is</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th><th>Register</th></tr></thead>
                <tbody>
                  <tr><td><strong>¿Cómo estás?</strong></td><td>How are you?</td><td>Informal (tú)</td></tr>
                  <tr><td><strong>¿Cómo está usted?</strong></td><td>How are you?</td><td>Formal (usted)</td></tr>
                  <tr><td><strong>¿Qué tal?</strong></td><td>How's it going?</td><td>Informal — very common</td></tr>
                  <tr><td><strong>¿Qué hay?</strong></td><td>What's up?</td><td>Very informal</td></tr>
                  <tr><td><strong>¿Cómo te va?</strong></td><td>How's it going?</td><td>Informal</td></tr>
                  <tr><td><strong>¿Cómo andas?</strong></td><td>How are you doing?</td><td>Informal (Latin America)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Typical Responses</h2>
            <div className="blog-example">
              <p className="es">Bien, gracias. ¿Y tú? — <span style={{fontWeight:400}}>Fine, thanks. And you?</span></p>
              <p className="es">Muy bien, ¿y usted? — <span style={{fontWeight:400}}>Very well, and you? (formal)</span></p>
              <p className="es">Regular. — <span style={{fontWeight:400}}>So-so. / Not bad.</span></p>
              <p className="es">Tirando. — <span style={{fontWeight:400}}>Getting by. / Muddling through. (Spain, informal)</span></p>
              <p className="es">Todo bien. — <span style={{fontWeight:400}}>All good.</span></p>
            </div>

            <h2>Farewells</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td><strong>Adiós</strong></td><td>Goodbye</td><td>Standard farewell</td></tr>
                  <tr><td><strong>Hasta luego</strong></td><td>See you later</td><td>Very common — doesn't mean "later today"</td></tr>
                  <tr><td><strong>Hasta pronto</strong></td><td>See you soon</td><td>When you expect to meet again shortly</td></tr>
                  <tr><td><strong>Hasta mañana</strong></td><td>See you tomorrow</td><td>Specific time reference</td></tr>
                  <tr><td><strong>Nos vemos</strong></td><td>See you</td><td>Informal</td></tr>
                  <tr><td><strong>Cuídate</strong></td><td>Take care</td><td>Warm, casual farewell</td></tr>
                  <tr><td><strong>Que te vaya bien</strong></td><td>Hope things go well</td><td>Warm farewell</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Tú vs Usted — Getting the Register Right</h2>
            <p>One of the most important decisions in Spanish is whether to address someone as <em>tú</em> (informal) or <em>usted</em> (formal). General guidelines:</p>
            <ul>
              <li><strong>Tú:</strong> friends, family, children, people your own age in casual settings, most colleagues in modern workplaces</li>
              <li><strong>Usted:</strong> strangers (especially older people), professional/business contexts, customer service, any situation where formality is appropriate</li>
            </ul>
            <p>In Latin America, <em>usted</em> is used more widely than in Spain — even between friends in some countries (Colombia, for example). When in doubt, start with <em>usted</em> and let the other person invite you to use <em>tú</em>.</p>

            <h2>Physical Greetings</h2>
            <p>In Spain and much of Latin America, a greeting between friends often involves physical contact — a kiss on each cheek (Spain), a single kiss (some Latin American countries), or a hug. Between men, a handshake is standard in formal settings, a hug in informal ones. Knowing this prevents awkward moments.</p>

            <div className="blog-highlight">
              <p>Greetings are the very first impression you make on a Spanish speaker. Getting them right — the right formality level, the right time-of-day greeting, the right farewell — signals cultural awareness and makes people immediately more comfortable with you.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to make a great first impression in Spanish?</h3>
              <p>Natural greetings and the right register are where confidence begins. Let's work on them in real conversation practice.</p>
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
