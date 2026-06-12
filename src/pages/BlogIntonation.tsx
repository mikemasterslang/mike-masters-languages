import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogIntonation() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Intonation: How Questions and Statements Sound Different | Mike Masters Languages',
    'Learn how Spanish intonation works for statements, yes/no questions, wh-questions and exclamations — and why the written ¿? and ¡! markers are your phonetic guide.'
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
            <span className="blog-hero-tag">Pronunciation</span>
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>Spanish Intonation: How Questions and Statements Sound Different</h1>
          <p className="blog-hero-intro">
            The melody of a language is what makes it sound natural. Here's how Spanish intonation works — and why it's simpler than most learners expect.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Intonation — the rise and fall of pitch across a sentence — is what gives a language its distinctive music. Even if every individual word is pronounced correctly, wrong intonation can make you sound robotic, confuse the meaning of what you are saying, or simply mark you immediately as a non-native speaker. The good news about Spanish intonation is that the basic patterns are quite regular and follow clear rules. Master them and your Spanish will start to flow with genuine rhythm.</p>

            <h2>Statements: A Falling Melody</h2>
            <p>Spanish declarative sentences — statements of fact — follow a <strong>falling intonation pattern</strong>. The pitch generally starts mid-level, may rise slightly over the stressed syllables, and then falls on the last few syllables of the sentence. This downward movement at the end signals that the sentence is complete and that you are making a statement, not asking a question.</p>
            <p>This falling pattern is similar to English statement intonation, so it should feel fairly natural. The difference is that Spanish tends to be more consistent about falling at the end, whereas English speakers sometimes let their voice stay level or even rise slightly at the end of a statement (a habit known as "upspeak" or "high rising terminal", which exists in some English accents).</p>

            <div className="blog-example">
              <p className="es"><strong>Vivo en Madrid.</strong> — <span style={{fontWeight: 400}}>I live in Madrid. (Voice falls on "Ma-DRID" — the end drops)</span></p>
              <p className="es"><strong>Hoy hace calor.</strong> — <span style={{fontWeight: 400}}>It's hot today. (Voice falls on "ca-LOR")</span></p>
              <p className="es"><strong>Tengo hambre.</strong> — <span style={{fontWeight: 400}}>I'm hungry. (Voice falls on "HAM-bre")</span></p>
            </div>

            <h2>Yes/No Questions: A Rising Melody</h2>
            <p>When you ask a question that can be answered with yes or no — and there is no question word like <em>qué, dónde, cómo</em> — Spanish uses a <strong>rising intonation</strong>. The pitch climbs toward the end of the sentence, particularly on the final stressed syllable. This rising melody is the signal to the listener that you are asking, not telling.</p>
            <p>This is very similar to English yes/no question intonation. The difference is that in Spanish, the word order often does not change between a statement and a question — the intonation alone carries all the meaning. Context and melody are doing all the work.</p>

            <div className="blog-example">
              <p className="es"><strong>¿Vives en Madrid?</strong> — <span style={{fontWeight: 400}}>Do you live in Madrid? (Voice rises on "Ma-DRID" — goes up at the end)</span></p>
              <p className="es"><strong>¿Tienes hambre?</strong> — <span style={{fontWeight: 400}}>Are you hungry? (Voice rises toward the end)</span></p>
              <p className="es"><strong>¿Hablas español?</strong> — <span style={{fontWeight: 400}}>Do you speak Spanish? (Rises on "es-pa-ÑOL")</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Notice:</strong> <em>Hablas español</em> (statement: you speak Spanish) and <em>¿Hablas español?</em> (question: do you speak Spanish?) use exactly the same words. The only difference is intonation — and in writing, the inverted question mark at the start tells you which is which.</p>
            </div>

            <h2>Wh-Questions: Falling Intonation</h2>
            <p>Questions that use a question word — <em>qué</em> (what), <em>dónde</em> (where), <em>cómo</em> (how), <em>cuándo</em> (when), <em>quién</em> (who), <em>por qué</em> (why), <em>cuánto</em> (how much/many) — follow a <strong>falling intonation</strong>, just like statements. This surprises many English learners, because English "wh-questions" often have a falling pattern too, so this rule is actually closer to home than expected.</p>
            <p>The question word at the start tells the listener immediately that this is a question — so the voice does not need to rise at the end to signal it. Instead, the sentence falls naturally, giving Spanish wh-questions a decisive, fluid quality.</p>

            <div className="blog-example">
              <p className="es"><strong>¿Dónde vives?</strong> — <span style={{fontWeight: 400}}>Where do you live? (Voice falls at the end — "VI-ves" drops)</span></p>
              <p className="es"><strong>¿Cómo te llamas?</strong> — <span style={{fontWeight: 400}}>What is your name? (Falls on "LLA-mas")</span></p>
              <p className="es"><strong>¿Qué quieres comer?</strong> — <span style={{fontWeight: 400}}>What do you want to eat? (Falls at the end)</span></p>
              <p className="es"><strong>¿Por qué estás triste?</strong> — <span style={{fontWeight: 400}}>Why are you sad? (Falls on "TRIS-te")</span></p>
            </div>

            <h2>Exclamations: High Pitch, Then a Sharp Fall</h2>
            <p>Exclamatory sentences in Spanish — marked in writing with ¡...! — are characterised by a high onset pitch that falls sharply. The voice jumps up quickly on the stressed syllable and then drops. The more emphatic the exclamation, the higher the starting pitch and the steeper the fall.</p>

            <div className="blog-example">
              <p className="es"><strong>¡Qué calor!</strong> — <span style={{fontWeight: 400}}>How hot it is! (High pitch on "ca-LOR", then drops sharply)</span></p>
              <p className="es"><strong>¡No me digas!</strong> — <span style={{fontWeight: 400}}>You're kidding! / No way! (Energetic high start, falling strongly)</span></p>
              <p className="es"><strong>¡Increíble!</strong> — <span style={{fontWeight: 400}}>Incredible! (High start, falls on "-BLE")</span></p>
            </div>

            <h2>The Written ¿? and ¡! Markers: Your Phonetic Guide</h2>
            <p>One of the most practical aspects of Spanish punctuation is that the inverted opening markers — ¿ and ¡ — tell you in advance what intonation pattern to use. In English, you only know a sentence is a question when you reach the "?" at the end. In Spanish, the ¿ at the start of the sentence is an early warning signal: prepare to use rising intonation (for yes/no questions) or to emphasise the question word (for wh-questions).</p>
            <p>When reading aloud, these markers are genuinely useful: they let you set up the right melody from the first word, which is what native speakers do naturally. Treat them as pronunciation instructions, not just punctuation.</p>

            <h2>Regional Variation: Castilian vs Latin American</h2>
            <p>While the basic patterns above apply across all Spanish dialects, intonation varies noticeably by region. Latin American Spanish — particularly in countries like Mexico, Colombia and parts of the Caribbean — tends to have a more varied, sing-song quality with wider pitch range. Castilian Spanish (central and northern Spain) has a flatter, more monotone baseline with punchy rises and falls at key moments.</p>
            <p>Andean Spanish (Ecuador, Peru, Bolivia) has a very distinctive rhythmic quality influenced by indigenous languages. Caribbean Spanish (Cuban, Puerto Rican, Dominican) has fast, musical intonation with frequent pitch jumps. None of these is more "correct" — they are regional varieties of a rich and diverse language.</p>

            <div className="blog-tip">
              <p><strong>Practical exercise:</strong> Take any short Spanish text and read it aloud three times: once as a series of neutral statements (all falling), once as a series of yes/no questions (all rising at the end), and once as a series of exclamations (high start, sharp fall). This extreme practice trains your intonation range and makes the natural patterns click into place.</p>
            </div>

            <h2>When Wrong Intonation Changes Meaning</h2>
            <p>Intonation errors are rarely catastrophic in Spanish — context usually rescues the meaning. But there are situations where getting it wrong genuinely changes what you communicate. Using falling intonation on a yes/no question can make it sound like a sarcastic or rhetorical statement rather than a genuine enquiry. Using rising intonation on a statement can make you sound uncertain or as if you are asking for confirmation rather than asserting a fact.</p>
            <p>The most common learner error is applying English-style "polite rising" intonation to Spanish statements — a habit from some English accents where everything sounds like a gentle question. In Spanish, this can sound hesitant or oddly tentative. Statements should fall clearly and confidently.</p>

            <div className="blog-highlight">
              <p>Spanish intonation in a nutshell: statements fall, yes/no questions rise, wh-questions fall (the question word signals the query), exclamations spike high and fall sharply. The inverted markers ¿ and ¡ are your written cues for which pattern to use. These rules are consistent and, once practised, feel natural quickly.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want your Spanish to have the right rhythm and flow?</h3>
              <p>Intonation is one of the things that really comes alive in spoken practice with feedback. Let's work on making your Spanish sound genuinely natural.</p>
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
