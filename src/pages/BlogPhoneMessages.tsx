import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPhoneMessages() {
  useScrollAnimation();
  usePageMeta(
    'Useful Spanish Phrases for Phone Calls and Messages | Mike Masters Languages',
    'Master Spanish phone call vocabulary — answering, leaving messages, asking to repeat, ending calls, plus common text and WhatsApp abbreviations used in Spain.'
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
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>Useful Spanish Phrases for Phone Calls and Messages</h1>
          <p className="blog-hero-intro">
            Phone calls in another language feel more daunting than face-to-face — but with the right phrases, they become much more manageable.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Without visual cues, body language or the option to point at things, phone calls require a slightly different set of language skills. The good news is that phone calls follow predictable patterns — opening, identifying yourself, stating your reason for calling, and closing. Once you know these scripts, most calls become far less intimidating. This guide gives you everything you need, from the first word to the farewell.</p>

            <h2>Answering the Phone</h2>
            <p>How you answer a phone call in Spanish depends on whether it's personal or professional. In Spain, the most common informal answer is simply <em>¿diga?</em> or <em>¿dígame?</em> — literally "speak to me?" — which might seem blunt but is completely standard.</p>

            <div className="blog-example">
              <p className="es">¿Diga? / ¿Dígame? — <span style={{fontWeight: 400}}>Hello? (answering the phone — Spain)</span></p>
              <p className="es">¿Sí? — <span style={{fontWeight: 400}}>Yes? (very informal)</span></p>
              <p className="es">Buenos días, [empresa]. — <span style={{fontWeight: 400}}>Good morning, [company name]. (professional)</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Regional note:</strong> In Mexico and much of Latin America, people typically answer with <em>¿Bueno?</em> rather than <em>¿Diga?</em>. In Argentina you may hear <em>¡Hola!</em> just as you would in English. For Spain, stick with <em>¿Diga?</em> or <em>¿Dígame?</em></p>
            </div>

            <h2>Making a Call and Identifying Yourself</h2>
            <div className="blog-example">
              <p className="es">Hola, soy María. — <span style={{fontWeight: 400}}>Hello, it's María.</span></p>
              <p className="es">Le llamo de parte de... — <span style={{fontWeight: 400}}>I'm calling on behalf of...</span></p>
              <p className="es">Llamo para... — <span style={{fontWeight: 400}}>I'm calling to...</span></p>
              <p className="es">¿Con quién hablo? — <span style={{fontWeight: 400}}>Who am I speaking to?</span></p>
              <p className="es">¿Puedo hablar con el señor García, por favor? — <span style={{fontWeight: 400}}>May I speak to Mr García, please?</span></p>
              <p className="es">¿Está Pedro? — <span style={{fontWeight: 400}}>Is Pedro there? (informal)</span></p>
            </div>

            <h2>When Someone Is Unavailable</h2>
            <div className="blog-example">
              <p className="es">Un momento, por favor. — <span style={{fontWeight: 400}}>One moment, please.</span></p>
              <p className="es">Ahora mismo no está disponible. — <span style={{fontWeight: 400}}>He/she isn't available right now.</span></p>
              <p className="es">Está en una reunión. — <span style={{fontWeight: 400}}>He/she is in a meeting.</span></p>
              <p className="es">Ha salido. — <span style={{fontWeight: 400}}>He/she has stepped out.</span></p>
              <p className="es">¿Quiere dejar un mensaje? — <span style={{fontWeight: 400}}>Would you like to leave a message?</span></p>
              <p className="es">¿Puede decirle que le he llamado? — <span style={{fontWeight: 400}}>Can you tell him/her I called?</span></p>
              <p className="es">Volveré a llamar más tarde. — <span style={{fontWeight: 400}}>I'll call back later.</span></p>
            </div>

            <h2>Leaving a Message</h2>
            <div className="blog-example">
              <p className="es">Me gustaría dejar un mensaje. — <span style={{fontWeight: 400}}>I'd like to leave a message.</span></p>
              <p className="es">¿Puede decirle que me llame? — <span style={{fontWeight: 400}}>Can you ask him/her to call me?</span></p>
              <p className="es">Mi número es el... — <span style={{fontWeight: 400}}>My number is...</span></p>
              <p className="es">Es urgente. — <span style={{fontWeight: 400}}>It's urgent.</span></p>
            </div>

            <h2>Asking Someone to Repeat or Slow Down</h2>
            <p>This is where many learners freeze on the phone. The trick is to have these phrases so well-rehearsed that they come out automatically the moment you need them:</p>

            <div className="blog-example">
              <p className="es">¿Puede repetir eso, por favor? — <span style={{fontWeight: 400}}>Can you repeat that, please?</span></p>
              <p className="es">Más despacio, por favor. — <span style={{fontWeight: 400}}>More slowly, please.</span></p>
              <p className="es">No lo he entendido bien. — <span style={{fontWeight: 400}}>I didn't quite understand.</span></p>
              <p className="es">¿Puede hablar más alto? — <span style={{fontWeight: 400}}>Can you speak up?</span></p>
              <p className="es">¿Puede deletrearlo? — <span style={{fontWeight: 400}}>Can you spell that?</span></p>
              <p className="es">Perdona, ¿cómo? — <span style={{fontWeight: 400}}>Sorry, what? (informal)</span></p>
            </div>

            <div className="blog-highlight">
              <p>Don't be embarrassed to ask for clarification on the phone. Even native speakers do it. Saying <em>perdona, no te he oído bien</em> ("sorry, I didn't hear you well") is natural and polite — much better than guessing and getting things wrong.</p>
            </div>

            <h2>Ending a Call</h2>
            <div className="blog-example">
              <p className="es">Bueno, te dejo. — <span style={{fontWeight: 400}}>Right, I'll let you go. (very common closing)</span></p>
              <p className="es">Hasta luego. — <span style={{fontWeight: 400}}>Goodbye / speak later.</span></p>
              <p className="es">Hablamos pronto. — <span style={{fontWeight: 400}}>We'll speak soon.</span></p>
              <p className="es">Un abrazo. — <span style={{fontWeight: 400}}>Take care. (lit. a hug — warm informal farewell)</span></p>
              <p className="es">Que vaya bien. — <span style={{fontWeight: 400}}>Hope it goes well.</span></p>
            </div>

            <h2>Text Abbreviations Used in Spain</h2>
            <p>Spanish text messages have their own shorthand, much of it based on how words sound when you pronounce letter names. These are widely used on WhatsApp between friends:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Abbreviation</th><th>Full form</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>q</td><td>que</td><td>that / what</td></tr>
                  <tr><td>xq / pq</td><td>porque / por qué</td><td>because / why</td></tr>
                  <tr><td>tb / tmb</td><td>también</td><td>also / too</td></tr>
                  <tr><td>x</td><td>por</td><td>for / by</td></tr>
                  <tr><td>d</td><td>de</td><td>of / from</td></tr>
                  <tr><td>bn</td><td>bien</td><td>well / fine</td></tr>
                  <tr><td>msj</td><td>mensaje</td><td>message</td></tr>
                  <tr><td>xfa / pf</td><td>por favor</td><td>please</td></tr>
                  <tr><td>ntp</td><td>no te preocupes</td><td>don't worry</td></tr>
                  <tr><td>jaja / jeje</td><td>—</td><td>haha / hehe (laughter)</td></tr>
                  <tr><td>mñn</td><td>mañana</td><td>tomorrow / morning</td></tr>
                  <tr><td>k tal</td><td>¿qué tal?</td><td>how's it going?</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Useful WhatsApp and Messaging Phrases</h2>
            <div className="blog-example">
              <p className="es">¿Puedes hablar ahora? — <span style={{fontWeight: 400}}>Can you talk now?</span></p>
              <p className="es">Te llamo en un rato. — <span style={{fontWeight: 400}}>I'll call you in a bit.</span></p>
              <p className="es">Estoy en clase / en el trabajo. — <span style={{fontWeight: 400}}>I'm in class / at work.</span></p>
              <p className="es">Te mando un audio. — <span style={{fontWeight: 400}}>I'll send you a voice note.</span></p>
              <p className="es">Vi tu mensaje pero no pude contestar. — <span style={{fontWeight: 400}}>I saw your message but couldn't reply.</span></p>
              <p className="es">¿Quedamos a las ocho? — <span style={{fontWeight: 400}}>Shall we meet at eight?</span></p>
            </div>

            <div className="blog-author-cta">
              <h3>Conquer the phone in Spanish</h3>
              <p>Phone calls and messaging are areas where targeted practice makes a huge difference. Book a lesson and we'll role-play real phone scenarios together.</p>
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
