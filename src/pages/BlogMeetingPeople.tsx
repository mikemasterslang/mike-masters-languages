import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogMeetingPeople() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Phrases for Meeting People and Making Small Talk | Mike Masters Languages',
    'Learn essential Spanish phrases for meeting people — introducing yourself, asking where someone is from, talking about work, small talk topics and natural reactions.'
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
          <h1>Spanish Phrases for Meeting People and Making Small Talk</h1>
          <p className="blog-hero-intro">
            First conversations in Spanish don't have to be daunting. With the right phrases for introductions and small talk, you'll be connecting with people in Spain from day one.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Meeting new people is one of the most rewarding parts of learning Spanish — and Spaniards are generally warm, sociable and happy to chat with anyone who makes an effort in their language. This guide gives you the phrases, the vocabulary and the cultural notes to hold your own in any introductory conversation.</p>

            <h2>Introducing Yourself</h2>
            <div className="blog-example">
              <p className="es">¡Hola! Me llamo Michael. — <span style={{fontWeight:400}}>Hello! My name is Michael.</span></p>
              <p className="es">Soy Michael. — <span style={{fontWeight:400}}>I'm Michael.</span></p>
              <p className="es">Mi nombre es Michael. — <span style={{fontWeight:400}}>My name is Michael. (more formal)</span></p>
              <p className="es">Mucho gusto. — <span style={{fontWeight:400}}>Pleased to meet you.</span></p>
              <p className="es">Encantado / Encantada. — <span style={{fontWeight:400}}>Delighted to meet you. (m/f)</span></p>
              <p className="es">Igualmente. — <span style={{fontWeight:400}}>Likewise. / Same here.</span></p>
            </div>

            <h2>Asking and Giving Names</h2>
            <div className="blog-example">
              <p className="es">¿Cómo te llamas? — <span style={{fontWeight:400}}>What's your name? (informal)</span></p>
              <p className="es">¿Cómo se llama usted? — <span style={{fontWeight:400}}>What's your name? (formal)</span></p>
              <p className="es">Me llamo... — <span style={{fontWeight:400}}>My name is... (literally: I call myself...)</span></p>
              <p className="es">¿Y tú? / ¿Y usted? — <span style={{fontWeight:400}}>And you?</span></p>
            </div>

            <h2>Where Are You From?</h2>
            <div className="blog-example">
              <p className="es">¿De dónde eres? — <span style={{fontWeight:400}}>Where are you from? (informal)</span></p>
              <p className="es">¿De dónde es usted? — <span style={{fontWeight:400}}>Where are you from? (formal)</span></p>
              <p className="es">Soy de Inglaterra / del Reino Unido. — <span style={{fontWeight:400}}>I'm from England / the United Kingdom.</span></p>
              <p className="es">Soy inglés / inglesa. — <span style={{fontWeight:400}}>I'm English. (m/f)</span></p>
              <p className="es">Soy de Londres, pero ahora vivo en Manchester. — <span style={{fontWeight:400}}>I'm from London, but I live in Manchester now.</span></p>
              <p className="es">¿Conoces Inglaterra? — <span style={{fontWeight:400}}>Do you know England? / Have you been to England?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Ser vs estar with location:</strong> To say where you are <em>from</em>, use <em>ser</em>: <em>Soy de Londres</em>. To say where you <em>are</em> right now, use <em>estar</em>: <em>Estoy en Madrid</em>. This is one of the most important ser/estar distinctions for beginners.</p>
            </div>

            <h2>Talking About What You Do</h2>
            <div className="blog-example">
              <p className="es">¿A qué te dedicas? — <span style={{fontWeight:400}}>What do you do (for work)?</span></p>
              <p className="es">¿En qué trabajas? — <span style={{fontWeight:400}}>What do you work as?</span></p>
              <p className="es">Soy profesor / profesora. — <span style={{fontWeight:400}}>I'm a teacher. (m/f)</span></p>
              <p className="es">Trabajo en una empresa de marketing. — <span style={{fontWeight:400}}>I work for a marketing company.</span></p>
              <p className="es">Estoy jubilado / jubilada. — <span style={{fontWeight:400}}>I'm retired. (m/f)</span></p>
              <p className="es">Soy estudiante. — <span style={{fontWeight:400}}>I'm a student.</span></p>
              <p className="es">Trabajo desde casa. — <span style={{fontWeight:400}}>I work from home.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>No article with professions:</strong> In Spanish, you don't use an article before a profession when saying what you do: <em>Soy médico</em> (I'm a doctor), not <em>Soy un médico</em>. The article only appears when you add a description: <em>Soy un médico muy ocupado</em>.</p>
            </div>

            <h2>Small Talk Topics</h2>
            <p>Spaniards love small talk — and these are the topics that come up most often with new acquaintances:</p>

            <h2>El Tiempo — The Weather</h2>
            <div className="blog-example">
              <p className="es">¡Qué calor hace hoy! — <span style={{fontWeight:400}}>It's so hot today!</span></p>
              <p className="es">¡Qué tiempo más bueno! — <span style={{fontWeight:400}}>What lovely weather!</span></p>
              <p className="es">En verano aquí hace un calor tremendo. — <span style={{fontWeight:400}}>In summer here it's incredibly hot.</span></p>
              <p className="es">En Inglaterra siempre llueve, ¿no? — <span style={{fontWeight:400}}>It always rains in England, doesn't it?</span></p>
              <p className="es">Pues sí, bastante. — <span style={{fontWeight:400}}>Well yes, quite a lot.</span></p>
            </div>

            <h2>El Trabajo y la Familia — Work and Family</h2>
            <div className="blog-example">
              <p className="es">¿Tienes familia aquí? — <span style={{fontWeight:400}}>Do you have family here?</span></p>
              <p className="es">Sí, estoy casado/a y tenemos dos hijos. — <span style={{fontWeight:400}}>Yes, I'm married and we have two children.</span></p>
              <p className="es">¿Y tú, tienes hijos? — <span style={{fontWeight:400}}>And you, do you have children?</span></p>
              <p className="es">¿Te gusta tu trabajo? — <span style={{fontWeight:400}}>Do you like your job?</span></p>
              <p className="es">Sí, me encanta. Es muy variado. — <span style={{fontWeight:400}}>Yes, I love it. It's very varied.</span></p>
            </div>

            <h2>El Viaje — Travel</h2>
            <div className="blog-example">
              <p className="es">¿Es la primera vez que vienes a España? — <span style={{fontWeight:400}}>Is this your first time in Spain?</span></p>
              <p className="es">No, ya he venido varias veces. — <span style={{fontWeight:400}}>No, I've been a few times already.</span></p>
              <p className="es">¿Qué te parece España? — <span style={{fontWeight:400}}>What do you think of Spain?</span></p>
              <p className="es">Me encanta. La comida es increíble. — <span style={{fontWeight:400}}>I love it. The food is incredible.</span></p>
            </div>

            <h2>Reacting Naturally</h2>
            <p>These expressions will make your Spanish sound far more natural and engaged:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>¡Qué bien!</td><td>How great! / That's great!</td></tr>
                  <tr><td>¡Qué interesante!</td><td>How interesting!</td></tr>
                  <tr><td>¡Qué bonito!</td><td>How lovely! / How beautiful!</td></tr>
                  <tr><td>¡Qué curioso!</td><td>How curious! / How interesting!</td></tr>
                  <tr><td>¡No me digas!</td><td>You don't say! / Really?!</td></tr>
                  <tr><td>¡Qué sorpresa!</td><td>What a surprise!</td></tr>
                  <tr><td>¡Claro!</td><td>Of course!</td></tr>
                  <tr><td>Entiendo.</td><td>I understand.</td></tr>
                  <tr><td>Ya veo.</td><td>I see. / Right.</td></tr>
                  <tr><td>¿En serio?</td><td>Seriously? / Really?</td></tr>
                  <tr><td>¡Qué pena!</td><td>What a shame!</td></tr>
                  <tr><td>¡Ánimo!</td><td>Cheer up! / Go for it!</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Ending a Conversation Politely</h2>
            <div className="blog-example">
              <p className="es">Ha sido un placer. — <span style={{fontWeight:400}}>It's been a pleasure.</span></p>
              <p className="es">Me alegro de haberte conocido. — <span style={{fontWeight:400}}>I'm glad to have met you.</span></p>
              <p className="es">Hasta luego. — <span style={{fontWeight:400}}>Goodbye. / See you later.</span></p>
              <p className="es">¡Que te vaya bien! — <span style={{fontWeight:400}}>Hope things go well for you!</span></p>
              <p className="es">¡Que disfrutéis del viaje! — <span style={{fontWeight:400}}>Enjoy your trip! (said to a group — vosotros form)</span></p>
            </div>

            <div className="blog-highlight">
              <p>The secret to natural small talk in Spanish is two things: being able to introduce yourself and ask the same questions back, and having a bank of reactions (<em>¡Qué bien!, ¡No me digas!, Ya veo</em>) that keep the conversation flowing. These little phrases make an enormous difference.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to hold a real conversation in Spanish?</h3>
              <p>Small talk is the gateway to everything else. Book a lesson and we'll practise introductions, getting to know people and keeping conversations going naturally.</p>
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
