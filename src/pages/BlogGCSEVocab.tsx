import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGCSEVocab() {
  useScrollAnimation();
  usePageMeta(
    'GCSE Spanish Vocabulary: The Core Words You Need for the Exam | Mike Masters Languages',
    'The most important vocabulary for GCSE Spanish — organised by theme. Covers all the key areas examiners test, with tips on learning and retaining it efficiently.'
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
            <span className="blog-hero-tag">Tips</span>
            <span className="blog-hero-date">October 2026</span>
          </div>
          <h1>GCSE Spanish Vocabulary: The Core Words You Need for the Exam</h1>
          <p className="blog-hero-intro">GCSE Spanish tests vocabulary across predictable themes. This is your practical guide to the words that appear most — organised so you can learn them systematically.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>You don't need to know every Spanish word for GCSE — you need to know the right ones. The exam themes are defined in the specification, and the vocabulary that appears is highly predictable. Building solid coverage of each theme is the most efficient way to prepare, far more efficient than trying to learn vocabulary in alphabetical order or at random.</p>

            <div className="blog-highlight">
              <p>The 1,000 most common Spanish words cover around 85% of everyday spoken language. For GCSE, you can target this list even more tightly by focusing on the six exam themes — the vocabulary that appears is drawn almost entirely from a well-defined pool.</p>
            </div>

            <h2>The Six GCSE Spanish Themes</h2>
            <p>All exam boards organise GCSE Spanish around six themes. Everything you read, hear, write and speak in the exam will come from these areas:</p>
            <ol>
              <li><strong>Identity and culture</strong> — family, relationships, free time, social media</li>
              <li><strong>Local area, holidays and travel</strong> — directions, transport, hotels, weather</li>
              <li><strong>School</strong> — subjects, timetable, school life, opinions</li>
              <li><strong>Future aspirations, study and work</strong> — jobs, ambitions, plans</li>
              <li><strong>International and global dimension</strong> — environment, poverty, global issues</li>
              <li><strong>Current and future study and employment</strong> — gap year, university, careers</li>
            </ol>

            <h2>High-Frequency Vocabulary by Theme</h2>

            <h3>Identity and Family</h3>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Spanish</th><th>English</th></tr>
                </thead>
                <tbody>
                  <tr><td>la familia</td><td>family</td></tr>
                  <tr><td>los padres</td><td>parents</td></tr>
                  <tr><td>el/la hermano/a</td><td>brother/sister</td></tr>
                  <tr><td>el/la novio/a</td><td>boyfriend/girlfriend</td></tr>
                  <tr><td>llevarse bien con</td><td>to get on well with</td></tr>
                  <tr><td>llevarse mal con</td><td>to get on badly with</td></tr>
                  <tr><td>parecerse a</td><td>to look like</td></tr>
                  <tr><td>discutir</td><td>to argue</td></tr>
                  <tr><td>apoyarse</td><td>to support each other</td></tr>
                  <tr><td>la amistad</td><td>friendship</td></tr>
                  <tr><td>la confianza</td><td>trust</td></tr>
                  <tr><td>el/la mejor amigo/a</td><td>best friend</td></tr>
                  <tr><td>los valores</td><td>values</td></tr>
                  <tr><td>comprometido/a</td><td>committed/engaged</td></tr>
                  <tr><td>divorciado/a</td><td>divorced</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Travel and Holidays</h3>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Spanish</th><th>English</th></tr>
                </thead>
                <tbody>
                  <tr><td>el vuelo</td><td>flight</td></tr>
                  <tr><td>el alojamiento</td><td>accommodation</td></tr>
                  <tr><td>el albergue juvenil</td><td>youth hostel</td></tr>
                  <tr><td>la pensión</td><td>guesthouse</td></tr>
                  <tr><td>el crucero</td><td>cruise</td></tr>
                  <tr><td>facturar el equipaje</td><td>to check in luggage</td></tr>
                  <tr><td>el retraso</td><td>delay</td></tr>
                  <tr><td>perderse</td><td>to get lost</td></tr>
                  <tr><td>el guía turístico</td><td>tour guide</td></tr>
                  <tr><td>hacer senderismo</td><td>to go hiking</td></tr>
                  <tr><td>broncearse</td><td>to get a tan</td></tr>
                  <tr><td>el bronceador</td><td>suncream</td></tr>
                  <tr><td>el tipo de cambio</td><td>exchange rate</td></tr>
                  <tr><td>sacar dinero</td><td>to withdraw money</td></tr>
                  <tr><td>las vistas</td><td>views/sights</td></tr>
                </tbody>
              </table>
            </div>

            <h3>School</h3>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Spanish</th><th>English</th></tr>
                </thead>
                <tbody>
                  <tr><td>las asignaturas</td><td>subjects</td></tr>
                  <tr><td>el horario</td><td>timetable</td></tr>
                  <tr><td>la nota</td><td>mark/grade</td></tr>
                  <tr><td>aprobar</td><td>to pass</td></tr>
                  <tr><td>suspender</td><td>to fail</td></tr>
                  <tr><td>hacer los deberes</td><td>to do homework</td></tr>
                  <tr><td>el/la profe</td><td>teacher (informal)</td></tr>
                  <tr><td>el recreo</td><td>break time</td></tr>
                  <tr><td>el uniforme</td><td>uniform</td></tr>
                  <tr><td>las normas</td><td>rules</td></tr>
                  <tr><td>la biblioteca</td><td>library</td></tr>
                  <tr><td>el laboratorio</td><td>lab</td></tr>
                  <tr><td>destacar</td><td>to stand out/excel</td></tr>
                  <tr><td>el intercambio</td><td>exchange</td></tr>
                  <tr><td>la beca</td><td>scholarship</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Future Plans and Work</h3>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Spanish</th><th>English</th></tr>
                </thead>
                <tbody>
                  <tr><td>el trabajo</td><td>job/work</td></tr>
                  <tr><td>el/la jefe/a</td><td>boss</td></tr>
                  <tr><td>el sueldo</td><td>salary</td></tr>
                  <tr><td>trabajar a tiempo completo/parcial</td><td>to work full-time/part-time</td></tr>
                  <tr><td>el contrato</td><td>contract</td></tr>
                  <tr><td>estar en paro</td><td>to be unemployed</td></tr>
                  <tr><td>hacer prácticas</td><td>to do work experience</td></tr>
                  <tr><td>el voluntariado</td><td>volunteering</td></tr>
                  <tr><td>la empresa</td><td>company/business</td></tr>
                  <tr><td>el negocio</td><td>business</td></tr>
                  <tr><td>los idiomas</td><td>languages</td></tr>
                  <tr><td>ser emprendedor/a</td><td>to be entrepreneurial</td></tr>
                  <tr><td>la carrera</td><td>career/degree</td></tr>
                  <tr><td>solicitar</td><td>to apply for</td></tr>
                  <tr><td>el curriculum</td><td>CV</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Environment</h3>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Spanish</th><th>English</th></tr>
                </thead>
                <tbody>
                  <tr><td>el medio ambiente</td><td>environment</td></tr>
                  <tr><td>el cambio climático</td><td>climate change</td></tr>
                  <tr><td>la contaminación</td><td>pollution</td></tr>
                  <tr><td>los recursos naturales</td><td>natural resources</td></tr>
                  <tr><td>reciclar</td><td>to recycle</td></tr>
                  <tr><td>el reciclaje</td><td>recycling</td></tr>
                  <tr><td>las energías renovables</td><td>renewable energies</td></tr>
                  <tr><td>la energía solar/eólica</td><td>solar/wind energy</td></tr>
                  <tr><td>desperdiciar</td><td>to waste</td></tr>
                  <tr><td>el calentamiento global</td><td>global warming</td></tr>
                  <tr><td>la deforestación</td><td>deforestation</td></tr>
                  <tr><td>las inundaciones</td><td>floods</td></tr>
                  <tr><td>la sequía</td><td>drought</td></tr>
                  <tr><td>proteger</td><td>to protect</td></tr>
                  <tr><td>sostenible</td><td>sustainable</td></tr>
                </tbody>
              </table>
            </div>

            <h2>How to Learn Vocabulary Efficiently</h2>
            <p>Spaced repetition is the most effective method — use Anki or paper flashcards with a structured revision schedule. Learn words in context rather than in isolation: a short sentence with the word in it sticks far better than a bare translation. Group by theme, aiming for around 20 words per session, and review after one day, three days, then one week. When testing yourself, cover the English column — not the Spanish — so you're producing the Spanish rather than just recognising it.</p>

            <div className="blog-tip">
              <p><strong>Priority order:</strong> Learn verbs first, then nouns, then adjectives. A good verb with a basic noun gets you further in the exam than a sophisticated noun with no verb to put it in a sentence.</p>
            </div>

            <h2>Connectives and Opinion Phrases — Don't Neglect These</h2>
            <p>These structures are explicitly rewarded in the mark scheme under "range and quality of language." Ten well-used connectives will do more for your grade than fifty extra nouns.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Spanish</th><th>English</th></tr>
                </thead>
                <tbody>
                  <tr><td>sin embargo</td><td>however</td></tr>
                  <tr><td>aunque</td><td>although/even though</td></tr>
                  <tr><td>a pesar de</td><td>despite</td></tr>
                  <tr><td>por otro lado</td><td>on the other hand</td></tr>
                  <tr><td>en mi opinión</td><td>in my opinion</td></tr>
                  <tr><td>creo que</td><td>I think that</td></tr>
                  <tr><td>me parece que</td><td>it seems to me that</td></tr>
                  <tr><td>hay que reconocer que</td><td>you have to admit that</td></tr>
                  <tr><td>lo que más me gusta es</td><td>what I like most is</td></tr>
                  <tr><td>lo que menos me gusta es</td><td>what I like least is</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>Examiners at all GCSE boards reward "quality of language" — and using connectives and opinion phrases is the quickest way to demonstrate it. Know ten of these thoroughly and use them consistently across your writing and speaking.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Need help with your GCSE Spanish?</h3>
              <p>Vocabulary preparation for GCSE can be focused and efficient with the right guidance — if you'd like help structuring your revision around the exam themes, get in touch.</p>
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
