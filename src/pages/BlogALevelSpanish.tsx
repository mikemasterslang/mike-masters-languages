import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogALevelSpanish() {
  useScrollAnimation();
  usePageMeta(
    'A-Level Spanish: What Changes From GCSE and How to Succeed | Mike Masters Languages',
    'Moving from GCSE to A-Level Spanish is a significant step up. Here\'s what changes, what surprises most students, and how to approach the transition effectively.'
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
          <h1>A-Level Spanish: What Changes From GCSE and How to Succeed</h1>
          <p className="blog-hero-intro">A-Level Spanish is a different challenge to GCSE — bigger vocabulary demands, complex grammar, and the ability to discuss abstract ideas. Here's what to expect and how to handle it.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Students who get a Grade 7, 8 or 9 at GCSE and choose A-Level Spanish are often surprised by how much bigger the step up feels compared to other subjects. The jump from GCSE to A-Level Spanish is widely considered one of the steeper transitions at sixth form. That doesn't mean it's unmanageable — but it does mean the approach that worked at GCSE won't be enough.</p>

            <h2>How A-Level Spanish Differs From GCSE</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Area</th><th>GCSE</th><th>A-Level</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vocabulary load</td>
                    <td>~1,500 words</td>
                    <td>3,000+ words</td>
                  </tr>
                  <tr>
                    <td>Grammar range</td>
                    <td>5 core tenses</td>
                    <td>Full grammar system including all subjunctive forms</td>
                  </tr>
                  <tr>
                    <td>Text type</td>
                    <td>Structured topics</td>
                    <td>Authentic texts — novels, films, articles</td>
                  </tr>
                  <tr>
                    <td>Discussion</td>
                    <td>Prepared opinions</td>
                    <td>Spontaneous debate and argument</td>
                  </tr>
                  <tr>
                    <td>Writing</td>
                    <td>150-word responses</td>
                    <td>300-word essays with argument structure</td>
                  </tr>
                  <tr>
                    <td>Listening</td>
                    <td>Simplified, slower speech</td>
                    <td>Authentic native-speed audio</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>The Grammar That Matters Most at A-Level</h2>
            <p>A-Level examiners expect fluent use of structures that are only introduced at GCSE. The transition isn't just about learning new grammar — it's about using what you already know at a much higher level of accuracy and spontaneity.</p>

            <h3>The Subjunctive — in Full</h3>
            <p>At GCSE, one or two subjunctive phrases earn bonus marks. At A-Level, the subjunctive is expected throughout. The key uses to master are: expressing doubt or denial (<em>no creo que, dudo que, no es cierto que</em>); expressing wishes and emotions (<em>ojalá, espero que, me alegra que, es una lástima que</em>); temporal clauses with future reference (<em>cuando llegue, en cuanto pueda, hasta que termine</em>); and hypothetical conditions (<em>si tuviera..., si hubiera...</em>).</p>

            <div className="blog-example">
              <p className="es">Ojalá pudiéramos solucionar el problema del cambio climático. — <span style={{fontWeight:400}}>I wish we could solve the problem of climate change.</span></p>
            </div>

            <h3>The Perfect Subjunctive and Pluperfect Subjunctive</h3>
            <p>These appear in A-Level essays and reading texts. Don't try to tackle them until the present subjunctive is secure — building in the right order matters. Once you're confident with the present subjunctive, these forms follow logically from it.</p>

            <h3>Passive Constructions</h3>
            <p>Both the formal passive (<em>ser</em> + past participle) and the impersonal or passive <em>se</em> construction are expected at A-Level, particularly in written work on social, political and environmental topics.</p>

            <div className="blog-example">
              <p className="es">La ley fue aprobada el año pasado. — <span style={{fontWeight:400}}>The law was passed last year.</span></p>
            </div>

            <h2>The Set Texts and Films</h2>
            <p>A-Level Spanish includes set texts — typically a novel or play and a film — which are studied in depth. Common texts include works by García Lorca, Borges, Isabel Allende; films by Almodóvar and Buñuel. You'll need to discuss themes, characters, and narrative structure in Spanish, and prepare a bank of quotations you can use in essays.</p>

            <div className="blog-tip">
              <p><strong>How to read your set text:</strong> Read it twice — once for enjoyment and story, once analytically for themes and techniques. Spanish literature rewards re-reading. What feels opaque on first reading often becomes much clearer on the second pass, once you know where the story goes.</p>
            </div>

            <h2>Essay Writing at A-Level</h2>
            <p>A-Level Spanish essays are marked on argument quality, not just language. You need: a clear thesis in the introduction; three developed arguments with evidence; a counter-argument that you then rebut; and a conclusion that answers the essay question directly. Throughout, use sophisticated connectives, hedging language (<em>cabe señalar que, es preciso reconocer que</em>), and impersonal structures.</p>

            <div className="blog-highlight">
              <p>At A-Level, the essay question is a real question expecting a real answer. Don't list points — argue. The examiner wants to see you take a position and defend it. An essay that presents both sides equally without committing to a view will score lower than one that makes a clear, well-supported argument.</p>
            </div>

            <h2>How to Build Vocabulary at A-Level Speed</h2>
            <p>Read Spanish news sources regularly: <em>El País, El Mundo, BBC Mundo.</em> Keep a vocabulary book organised by topic, not alphabetically — you'll never look up a word alphabetically under exam pressure, but you will want to find all the words you know about immigration or technology in one place. Learn words in chunks — a phrase with the word in context, not just an isolated translation.</p>

            <div className="blog-tip">
              <p><strong>Active vs passive vocabulary:</strong> At A-Level, passive vocabulary — words you recognise — is not enough. You need active vocabulary: words you can produce under pressure. Test yourself by writing, not just reading. Cover the Spanish, write it out, check. That's the test that matters.</p>
            </div>

            <h2>Speaking at A-Level</h2>
            <p>The A-Level oral exam includes a research-based individual investigation — the IRP. You choose a topic related to a Spanish-speaking country, research it, and discuss it in a 25-minute conversation with the examiner. Choose a topic you're genuinely interested in, because you'll be discussing it for months. Prepare both sides of every argument — the examiner will challenge your views, and being able to engage with a challenge is exactly what the top marks reward.</p>

            <div className="blog-example">
              <p className="es">Aunque algunos argumentan que X, yo creo que Y porque... — <span style={{fontWeight:400}}>Although some argue that X, I believe that Y because...</span></p>
            </div>

            <div className="blog-author-cta">
              <h3>Need help with A-Level Spanish?</h3>
              <p>Making the jump from GCSE to A-Level is much smoother with regular speaking practice and structured grammar work — if you're starting A-Level Spanish or finding the step up challenging, get in touch.</p>
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
