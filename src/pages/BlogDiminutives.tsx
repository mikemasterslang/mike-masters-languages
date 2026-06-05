import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogDiminutives() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Diminutives: How -ito and -ita Work | Mike Masters Languages',
    'Learn how Spanish diminutive suffixes like -ito, -ita, -illo and -illa work — covering meaning, spelling changes, regional variation and common fixed forms.'
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
          <h1>Spanish Diminutives: How -ito and -ita Work</h1>
          <p className="blog-hero-intro">
            Spanish speakers use diminutive suffixes constantly — to show something is small, to sound affectionate, or just to soften what they're saying. Once you understand them, you'll notice them everywhere.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Diminutives are one of the most distinctive and expressive features of Spanish. By adding a suffix to a noun, adjective or even an adverb, Spanish speakers can convey smallness, affection, softness, or sometimes irony — all without adding extra words. In Spain, -ito/-ita and -illo/-illa are by far the most common diminutive suffixes, and you'll hear them in everyday conversation all the time.</p>

            <h2>The Main Diminutive Suffixes</h2>
            <p>Spanish has several diminutive suffixes, but these four are the ones you need to know:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Suffix</th><th>Used with</th><th>Example</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>-ito</td><td>masculine nouns/adjectives</td><td>momento → momentito</td><td>just a moment</td></tr>
                  <tr><td>-ita</td><td>feminine nouns/adjectives</td><td>casa → casita</td><td>little house</td></tr>
                  <tr><td>-illo</td><td>masculine nouns/adjectives</td><td>vino → vinillo</td><td>a small/pleasant wine</td></tr>
                  <tr><td>-illa</td><td>feminine nouns/adjectives</td><td>ventana → ventanilla</td><td>small window / ticket window</td></tr>
                </tbody>
              </table>
            </div>

            <p>The suffix agrees in gender with the noun or adjective it modifies. Drop the final vowel of the word before adding the suffix: <em>gato</em> (cat) → <em>gatito</em>; <em>mesa</em> (table) → <em>mesita</em>.</p>

            <h2>What Diminutives Actually Mean</h2>
            <p>Diminutives don't always just mean "small" — context tells you which of these three main functions is in play:</p>

            <h3>1. Literal smallness</h3>
            <div className="blog-example">
              <p className="es">un perrito — <span style={{fontWeight:400}}>a little dog / a small dog</span></p>
              <p className="es">una casita en el campo — <span style={{fontWeight:400}}>a little house in the countryside</span></p>
              <p className="es">un jardincito pequeño — <span style={{fontWeight:400}}>a tiny little garden</span></p>
            </div>

            <h3>2. Affection and warmth</h3>
            <p>This is extremely common in Spain. Diminutives soften words and make them feel warm, friendly or intimate:</p>
            <div className="blog-example">
              <p className="es">¡Hola, cariñito! — <span style={{fontWeight:400}}>Hello, darling! (lit. little darling)</span></p>
              <p className="es">¿Quieres un cafecito? — <span style={{fontWeight:400}}>Would you like a (nice little) coffee?</span></p>
              <p className="es">Espera un momentito. — <span style={{fontWeight:400}}>Wait just a (tiny) moment.</span></p>
            </div>

            <h3>3. Softening requests or statements</h3>
            <p>In Spain, adding -ito/-ita can make a request feel less demanding or more polite:</p>
            <div className="blog-example">
              <p className="es">Dame un poquito más. — <span style={{fontWeight:400}}>Give me just a little bit more.</span></p>
              <p className="es">¿Puedes bajar el volumen un poquito? — <span style={{fontWeight:400}}>Could you turn the volume down just a little?</span></p>
            </div>

            <h2>Spelling Changes</h2>
            <p>Adding a diminutive suffix sometimes requires a spelling change to preserve the original pronunciation. Here are the main patterns:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Original ending</th><th>Change</th><th>Example</th><th>Result</th></tr></thead>
                <tbody>
                  <tr><td>-co / -ca</td><td>c → qu</td><td>poco</td><td>poquito</td></tr>
                  <tr><td>-go / -ga</td><td>g → gu</td><td>amigo</td><td>amiguito</td></tr>
                  <tr><td>-zo / -za</td><td>z → c</td><td>taza</td><td>tacita</td></tr>
                  <tr><td>-ge / -gi</td><td>g → j</td><td>virgen</td><td>virgencita</td></tr>
                  <tr><td>ends in consonant</td><td>add -cito/-cita</td><td>café</td><td>cafecito</td></tr>
                  <tr><td>ends in consonant</td><td>add -cito/-cita</td><td>camión</td><td>camioncito</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Note on café:</strong> <em>Cafecito</em> is formed by adding -cito after the final vowel is dropped, and the spelling keeps the hard /k/ sound. You'll also see <em>cafetito</em> in some regions. In everyday Spanish in Spain, <em>¿Te apetece un cafecito?</em> is a very natural, friendly offer.</p>
            </div>

            <h2>Diminutives Applied to Adjectives and Adverbs</h2>
            <p>Diminutives aren't limited to nouns. They can also be added to adjectives and even some adverbs, nearly always to soften or add affection:</p>

            <div className="blog-example">
              <p className="es">Está cerquita. — <span style={{fontWeight:400}}>It's quite close / just nearby. (cerca → cerquita)</span></p>
              <p className="es">Llegó tardecito. — <span style={{fontWeight:400}}>He arrived a little late. (tarde → tardecito)</span></p>
              <p className="es">Es jovencito todavía. — <span style={{fontWeight:400}}>He's still quite young. (joven → jovencito)</span></p>
            </div>

            <h2>The -illo / -illa Suffix in Spain</h2>
            <p>While -ito/-ita is used across the Spanish-speaking world, -illo/-illa has a particularly strong presence in Spain — especially in Andalusia and in Madrid. It often carries a casual, colloquial or slightly ironic tone rather than pure affection:</p>

            <div className="blog-example">
              <p className="es">Tengo un problemilla. — <span style={{fontWeight:400}}>I've got a bit of a problem. (downplaying it)</span></p>
              <p className="es">Pásalo bien, pillín. — <span style={{fontWeight:400}}>Have fun, you little rascal.</span></p>
              <p className="es">¿Echamos un partidillo? — <span style={{fontWeight:400}}>Shall we have a little game?</span></p>
            </div>

            <p>Some -illo words have become fully independent vocabulary items, losing their diminutive meaning entirely — see the section on fixed diminutives below.</p>

            <h2>Common Fixed Diminutives</h2>
            <p>Some words that originated as diminutives are now standard vocabulary in their own right, and their "small" meaning has been lost. You should simply learn these as separate words:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Diminutive form</th><th>Original word</th><th>Meaning today</th></tr></thead>
                <tbody>
                  <tr><td>ventanilla</td><td>ventana (window)</td><td>ticket window, car window, nostril</td></tr>
                  <tr><td>rodilla</td><td>rueda (wheel)</td><td>knee</td></tr>
                  <tr><td>cuchillo</td><td>cuchillo (knife) — already fixed</td><td>knife</td></tr>
                  <tr><td>bolsillo</td><td>bolsa (bag)</td><td>pocket</td></tr>
                  <tr><td>castillo</td><td>castro/castro (fort)</td><td>castle</td></tr>
                  <tr><td>mantequilla</td><td>manteca (fat/lard)</td><td>butter</td></tr>
                  <tr><td>pasillo</td><td>paso (step/passage)</td><td>corridor, hallway</td></tr>
                  <tr><td>tortilla</td><td>torta (flat cake)</td><td>Spanish omelette / tortilla</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Regional Variation</h2>
            <p>While -ito/-ita is understood everywhere, different regions have their own preferences. In Spain, -illo/-illa is common in Andalusia (southern Spain) and gives speech a warm, informal character. In Latin America, -ito/-ita dominates strongly, and you'll even hear it on adverbs like <em>ahorita</em> (right now — though the exact meaning varies enormously by country). For learners focusing on Spain, mastering -ito/-ita is the priority, with -illo/-illa as a welcome addition.</p>

            <div className="blog-tip">
              <p><strong>Practical tip for Spain:</strong> If you're not sure whether to use a diminutive, it's better to leave it out than to use one incorrectly. But don't be afraid to try — Spanish speakers find it endearing when learners make the effort to use them naturally.</p>
            </div>

            <div className="blog-highlight">
              <p>Diminutives are formed by adding -ito/-ita or -illo/-illa to a word (with spelling adjustments as needed). They can express smallness, affection or softness — and some have become fixed everyday words. In Spain, you'll hear them constantly in natural speech, so getting comfortable with them is well worth the effort.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to sound like a natural Spanish speaker?</h3>
              <p>Diminutives are one of those details that make a real difference. Let's practise them — and dozens of other everyday features — in our lessons.</p>
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
