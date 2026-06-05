import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPorVsPara() {
  useScrollAnimation();
  usePageMeta(
    'Por vs Para in Spanish: Master These Two Prepositions Once and For All | Mike Masters Languages',
    'Both por and para mean "for" in English — but they work completely differently in Spanish. This guide breaks down every use case with clear examples and memory tricks.'
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
          <h1>Por vs Para in Spanish: Master These Two Prepositions Once and For All</h1>
          <p className="blog-hero-intro">
            Both translate as "for" in English — but they mean completely different things in Spanish. Here's how to tell them apart every time.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>If ser vs estar is the number one grammar headache for beginner Spanish learners, <em>por</em> vs <em>para</em> is a very close second. Both words can translate as "for" in English, which makes it tempting to use them interchangeably. But they express fundamentally different ideas — and mixing them up can change the meaning of a sentence entirely.</p>

            <p>The good news is there is a clear logic to each one. Once you understand what each word is really doing, the choice becomes much more intuitive.</p>

            <h2>The Core Idea</h2>
            <p><strong>Para</strong> looks forward — it points toward a purpose, destination, deadline or recipient. Think of it as "heading somewhere" or "in order to achieve something".</p>
            <p><strong>Por</strong> looks backward or sideways — it explains a cause, reason, or the circumstances surrounding an action. Think of it as "because of" or "due to".</p>

            <div className="blog-tip">
              <p><strong>Quick test:</strong> Can you substitute "in order to" or "intended for"? Use <strong>para</strong>. Can you substitute "because of", "due to" or "on behalf of"? Use <strong>por</strong>.</p>
            </div>

            <h2>When to Use Para</h2>

            <h3>Purpose or goal (in order to)</h3>
            <div className="blog-example">
              <p className="es">Estudio para aprender. — <span style={{fontWeight:400}}>I study in order to learn.</span></p>
              <p className="es">Como para vivir. — <span style={{fontWeight:400}}>I eat in order to live.</span></p>
            </div>

            <h3>Destination</h3>
            <div className="blog-example">
              <p className="es">El tren sale para Madrid. — <span style={{fontWeight:400}}>The train leaves for Madrid.</span></p>
              <p className="es">Mañana salgo para España. — <span style={{fontWeight:400}}>Tomorrow I leave for Spain.</span></p>
            </div>

            <h3>Deadline</h3>
            <div className="blog-example">
              <p className="es">Necesito esto para el lunes. — <span style={{fontWeight:400}}>I need this by Monday.</span></p>
              <p className="es">Lo terminaré para las cinco. — <span style={{fontWeight:400}}>I'll finish it by five o'clock.</span></p>
            </div>

            <h3>Recipient (intended for someone)</h3>
            <div className="blog-example">
              <p className="es">Este regalo es para ti. — <span style={{fontWeight:400}}>This gift is for you.</span></p>
              <p className="es">Tengo un mensaje para Ana. — <span style={{fontWeight:400}}>I have a message for Ana.</span></p>
            </div>

            <h3>Opinion or perspective</h3>
            <div className="blog-example">
              <p className="es">Para mí, el español es fascinante. — <span style={{fontWeight:400}}>For me / In my opinion, Spanish is fascinating.</span></p>
            </div>

            <h3>Unexpected comparison</h3>
            <div className="blog-example">
              <p className="es">Para ser principiante, hablas muy bien. — <span style={{fontWeight:400}}>For a beginner, you speak very well.</span></p>
            </div>

            <h2>When to Use Por</h2>

            <h3>Cause or reason (because of / due to)</h3>
            <div className="blog-example">
              <p className="es">Lo hice por amor. — <span style={{fontWeight:400}}>I did it for love / because of love.</span></p>
              <p className="es">Cancelaron el vuelo por el mal tiempo. — <span style={{fontWeight:400}}>They cancelled the flight due to bad weather.</span></p>
            </div>

            <h3>Duration of time</h3>
            <div className="blog-example">
              <p className="es">Estudié por dos horas. — <span style={{fontWeight:400}}>I studied for two hours.</span></p>
              <p className="es">Vivió en Madrid por cinco años. — <span style={{fontWeight:400}}>He lived in Madrid for five years.</span></p>
            </div>

            <h3>Exchange</h3>
            <div className="blog-example">
              <p className="es">Te cambio esto por aquello. — <span style={{fontWeight:400}}>I'll swap this for that.</span></p>
              <p className="es">Lo compré por veinte euros. — <span style={{fontWeight:400}}>I bought it for twenty euros.</span></p>
            </div>

            <h3>On behalf of / in place of</h3>
            <div className="blog-example">
              <p className="es">Habló por mí. — <span style={{fontWeight:400}}>He spoke on my behalf.</span></p>
              <p className="es">Trabajo por mi jefe hoy. — <span style={{fontWeight:400}}>I'm working in place of my boss today.</span></p>
            </div>

            <h3>Movement through or along</h3>
            <div className="blog-example">
              <p className="es">Caminamos por el parque. — <span style={{fontWeight:400}}>We walked through the park.</span></p>
              <p className="es">El tren pasa por Sevilla. — <span style={{fontWeight:400}}>The train passes through Seville.</span></p>
            </div>

            <h3>Means of communication or transport</h3>
            <div className="blog-example">
              <p className="es">Te llamo por teléfono. — <span style={{fontWeight:400}}>I'll call you by phone.</span></p>
              <p className="es">Lo envié por correo. — <span style={{fontWeight:400}}>I sent it by post.</span></p>
            </div>

            <h2>The Travel Trap</h2>
            <p>One of the most common mistakes involves talking about travel destinations. Both prepositions can be used with travel — but they mean different things:</p>
            <div className="blog-example">
              <p className="es">Salgo para Barcelona. — <span style={{fontWeight:400}}>I'm leaving for Barcelona. (destination)</span></p>
              <p className="es">Pasamos por Barcelona. — <span style={{fontWeight:400}}>We passed through Barcelona. (via/through)</span></p>
            </div>

            <h2>Common Fixed Phrases Worth Learning</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Por phrases</th><th>Para phrases</th></tr></thead>
                <tbody>
                  <tr><td>por favor — please</td><td>para siempre — forever</td></tr>
                  <tr><td>por ejemplo — for example</td><td>para nada — not at all</td></tr>
                  <tr><td>por fin — finally</td><td>para entonces — by then</td></tr>
                  <tr><td>por supuesto — of course</td><td>para variar — for a change</td></tr>
                  <tr><td>por eso — that's why / therefore</td><td>para colmo — to top it all off</td></tr>
                  <tr><td>por lo menos — at least</td><td>estar para — to be about to</td></tr>
                  <tr><td>por cierto — by the way</td><td>no estar para — to not be in the mood for</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>Learning the fixed phrases by heart is genuinely useful — <strong>por favor, por ejemplo, por supuesto</strong> and <strong>por eso</strong> come up in almost every conversation. Once those feel automatic, the rule-based uses become much easier to internalise.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise por and para in real conversation?</h3>
              <p>Grammar rules stick much faster when you use them out loud. Get in touch and let's find the right programme for you.</p>
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
