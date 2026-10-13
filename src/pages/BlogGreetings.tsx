import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGreetings() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Greetings: How They Differ From the US, Formal vs Informal | Mike Masters Languages',
    'How are greetings in the Spanish-speaking world different from those in the United States? Physical contact, formality levels, time-of-day greetings and more — all explained clearly.'
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
          <h1>Spanish Greetings: How They Differ From the US, and How to Get Them Right</h1>
          <p className="blog-hero-intro">
            Greetings in the Spanish-speaking world work differently to the United States — in how people make physical contact, how formality is expressed, and how much more varied the options are. Here's exactly what changes and why.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Spanish greetings are warm, varied, and — importantly — context-dependent. The Spanish-speaking world is huge, and greetings differ significantly between Spain and Latin America, between formal and informal settings, and between different times of day. Getting the right greeting in the right context is one of the clearest signals of cultural awareness.</p>

            <h2>How Greetings in the Spanish-Speaking World Differ From the United States</h2>
            <p>If you're used to greetings in the US, several things about Spanish-speaking cultures will feel noticeably different:</p>

            <h3>Physical Contact Is Normal — Even Expected</h3>
            <p>In the United States, a handshake is the standard greeting between people who don't know each other well, and physical contact beyond that is uncommon in everyday interactions. In the Spanish-speaking world, this is quite different:</p>
            <ul>
              <li><strong>In Spain:</strong> two kisses on the cheek (one on each side, right cheek first) are the standard greeting between women, and between men and women who know each other. Men typically shake hands with other men they don't know well, but hug friends.</li>
              <li><strong>In Latin America:</strong> one kiss on the cheek is more common in many countries (Mexico, Argentina, Colombia, etc.), though this varies by region. As in Spain, this applies between women and between men and women.</li>
              <li><strong>In formal settings:</strong> a firm handshake is the norm regardless of country — the kisses are reserved for social, informal situations.</li>
            </ul>
            <p>This physical element of greeting can feel unfamiliar to Americans at first, but refusing or avoiding it can come across as cold or unfriendly. Understanding that it is cultural — not personal — makes it easy to embrace.</p>

            <h3>Verbal Greetings Are More Time-Specific</h3>
            <p>In the US, "hi" or "hello" works at any time of day. Spanish speakers are more likely to use time-specific greetings: <em>buenos días</em> in the morning, <em>buenas tardes</em> in the afternoon, <em>buenas noches</em> in the evening. Using the correct one is a small but appreciated sign of cultural awareness.</p>

            <h3>Formality Levels Are Built Into the Language</h3>
            <p>Spanish has two ways to say "you" — <em>tú</em> (informal) and <em>usted</em> (formal) — and the choice of greeting changes accordingly. Americans are used to addressing almost everyone the same way. In Spanish, using the wrong register (too casual with a stranger, too formal with a friend) is noticed immediately. This formality distinction is baked into every interaction.</p>

            <h3>Asking "How Are You?" Is More Genuine</h3>
            <p>In American English, "How are you?" is often a greeting in itself, not a real question. In Spanish-speaking cultures, <em>¿Cómo estás?</em> is generally a more genuine enquiry, and a proper response is expected — not just "fine" as a reflex. Conversations often start more warmly and personally.</p>

            <div className="blog-tip">
              <p><strong>Summary of key differences:</strong> Spanish-speaking greetings involve more physical contact, use time-of-day specific phrases, have built-in formality levels (tú/usted), and treat "how are you?" as a real question rather than a filler.</p>
            </div>

            <h2>How Physical Greetings Vary Between Formal and Informal Settings</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Setting</th><th>Between women</th><th>Between men</th><th>Between a man and a woman</th></tr></thead>
                <tbody>
                  <tr><td><strong>Informal (friends, family)</strong></td><td>One or two kisses on the cheek</td><td>Handshake or hug</td><td>One or two kisses on the cheek</td></tr>
                  <tr><td><strong>Formal (business, strangers)</strong></td><td>Handshake (or light kiss depending on country)</td><td>Firm handshake</td><td>Handshake</td></tr>
                </tbody>
              </table>
            </div>
            <p>In Spain specifically, women always kiss on both cheeks in informal settings — this is so standard that not doing it can feel rude. In Latin America there is more regional variation, but a single kiss or cheek-touch is common in most countries in informal contexts.</p>

            <h2>How Verbal Greetings Vary Between Formal and Informal Settings</h2>
            <p>The words you choose signal whether you're treating the situation as formal or informal:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Informal</th><th>Formal</th></tr></thead>
                <tbody>
                  <tr><td>Hola, ¿qué tal?</td><td>Buenos días, ¿cómo está usted?</td></tr>
                  <tr><td>¿Cómo estás?</td><td>¿Cómo está usted?</td></tr>
                  <tr><td>¿Qué hay? / ¿Qué pasa?</td><td>Mucho gusto (pleased to meet you)</td></tr>
                  <tr><td>Tío / Tía (Spain, very casual)</td><td>Encantado/a (delighted to meet you)</td></tr>
                </tbody>
              </table>
            </div>

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
                <Link to="/get-started" className="btn btn-secondary btn-lg">Ask a Question</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
