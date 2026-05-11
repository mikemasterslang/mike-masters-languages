import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogQuestionFormation() {
  useScrollAnimation();
  usePageMeta(
    'How to Ask Questions in Spanish: Question Words, Word Order and Accent Rules | Mike Masters Languages',
    'Asking questions in Spanish is different to English in several important ways. Learn the question words, word order rules, and the qué vs cuál distinction that trips everyone up.'
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
          <h1>How to Ask Questions in Spanish: Question Words, Word Order and Accent Rules</h1>
          <p className="blog-hero-intro">
            Asking questions in Spanish is simpler than English in some ways — and trickier in others. Here's everything you need to know.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Questions are one of the most practical things you need in any language — they're how you navigate conversations, ask for help, and find out information. Spanish question formation has a few rules that differ from English, and getting them right makes a noticeable difference to how natural you sound.</p>

            <h2>No "Do" or "Does"</h2>
            <p>English uses "do" and "does" to form questions: "Do you speak Spanish?" "Does she live here?" Spanish doesn't need them — the verb conjugation and intonation do the work instead.</p>
            <div className="blog-example">
              <p className="es">¿Hablas español? — <span style={{fontWeight:400}}>Do you speak Spanish?</span></p>
              <p className="es">¿Vive aquí? — <span style={{fontWeight:400}}>Does she live here?</span></p>
            </div>
            <p>For yes/no questions, you can often just raise your intonation at the end of a statement — the same words, different tone.</p>

            <h2>Question Word Order</h2>
            <p>In English, question words come first and the subject follows the verb: "Where <em>do you</em> live?" In Spanish, the subject typically comes <strong>after</strong> the verb, or is dropped entirely:</p>
            <div className="blog-example">
              <p className="es wrong">✗ ¿Dónde tú vives?</p>
              <p className="es right">✓ ¿Dónde vives (tú)? — Where do you live?</p>
              <p className="es right">✓ ¿Dónde vive Juan? — Where does Juan live?</p>
            </div>
            <p>The pattern is: <strong>Question word → verb → subject (optional)</strong></p>

            <h2>The Spanish Question Words</h2>
            <p>All Spanish question words carry an <strong>accent mark</strong> — this is not optional. The same words without an accent have different meanings (relative pronouns or conjunctions).</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Question word</th><th>Meaning</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td><strong>¿qué?</strong></td><td>what?</td><td>¿Qué quieres? — What do you want?</td></tr>
                  <tr><td><strong>¿quién / quiénes?</strong></td><td>who?</td><td>¿Quién es? — Who is it?</td></tr>
                  <tr><td><strong>¿dónde?</strong></td><td>where?</td><td>¿Dónde estás? — Where are you?</td></tr>
                  <tr><td><strong>¿adónde?</strong></td><td>where to?</td><td>¿Adónde vas? — Where are you going?</td></tr>
                  <tr><td><strong>¿cuándo?</strong></td><td>when?</td><td>¿Cuándo llegan? — When do they arrive?</td></tr>
                  <tr><td><strong>¿cómo?</strong></td><td>how? / what? (clarifying)</td><td>¿Cómo estás? — How are you?</td></tr>
                  <tr><td><strong>¿por qué?</strong></td><td>why?</td><td>¿Por qué estudias español? — Why do you study Spanish?</td></tr>
                  <tr><td><strong>¿cuál / cuáles?</strong></td><td>which? / what? (from a set)</td><td>¿Cuál prefieres? — Which do you prefer?</td></tr>
                  <tr><td><strong>¿cuánto/a?</strong></td><td>how much?</td><td>¿Cuánto cuesta? — How much does it cost?</td></tr>
                  <tr><td><strong>¿cuántos/as?</strong></td><td>how many?</td><td>¿Cuántas personas hay? — How many people are there?</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Qué vs Cuál — The Distinction Everyone Gets Wrong</h2>
            <p>Both can mean "what" or "which" in English, which is why beginners mix them up. The rule:</p>
            <ul>
              <li><strong>Qué</strong> asks for a definition or general information.</li>
              <li><strong>Cuál</strong> asks someone to choose from a specific set of options.</li>
            </ul>
            <div className="blog-example">
              <p className="es">¿Qué es esto? — <span style={{fontWeight:400}}>What is this? (asking for a definition)</span></p>
              <p className="es">¿Cuál es tu número de teléfono? — <span style={{fontWeight:400}}>What is your phone number? (choosing from possibilities)</span></p>
              <p className="es">¿Cuál prefieres, el rojo o el azul? — <span style={{fontWeight:400}}>Which do you prefer, the red or the blue?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Common confusion:</strong> "What is your name?" feels like it should use <em>qué</em>, but in Spanish it's <em>¿Cómo te llamas?</em> (literally "How do you call yourself?") — not <em>qué</em> at all. And "What is the capital of Spain?" uses <em>¿Cuál es la capital de España?</em> because you're selecting from a set of cities.</p>
            </div>

            <h2>Por Qué, Porque, Porqué — Four Different Things</h2>
            <p>This set of words causes constant confusion for beginners:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Form</th><th>Meaning / use</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td><strong>¿por qué?</strong></td><td>why? (question — two words, accent)</td><td>¿Por qué llegas tarde?</td></tr>
                  <tr><td><strong>porque</strong></td><td>because (answer — one word, no accent)</td><td>Llego tarde porque perdí el autobús.</td></tr>
                  <tr><td><strong>el porqué</strong></td><td>the reason / the why (noun)</td><td>No entiendo el porqué.</td></tr>
                  <tr><td><strong>por que</strong></td><td>for which (relative — rare, advanced)</td><td>La razón por que lo hice.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Inverted Question and Exclamation Marks</h2>
            <p>Spanish opens questions and exclamations with an upside-down mark — ¿ and ¡ — as well as closing them with the standard ones. This tells the reader the sentence is a question before they reach the end. It's a writing convention, so you'll only need it in written Spanish, but it's worth knowing.</p>

            <div className="blog-highlight">
              <p>Getting your question words right — especially with their accent marks — is one of the clearest signals of careful, accurate Spanish. It's a small detail that makes a big difference to how polished your written Spanish looks.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to hold real conversations in Spanish?</h3>
              <p>Asking and answering questions is at the heart of every conversation. Let's get you there.</p>
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
